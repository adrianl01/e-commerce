import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchAPI } from "@/lib/api";

export interface Product {
  objectID: string;
  Name: string;
  Unit_cost: number;
  Images: { url: string }[];
  Description: string;
  soldBy: string;
}

interface ProductState {
  items: Product[];
  filtered: Product[];
  searchQuery: string;
  sortOrder: "asc" | "desc" | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductState = {
  items: [],
  filtered: [],
  searchQuery: "",
  sortOrder: null,
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async ({ query, offset }: { query: string; offset: string }) => {
    const search = query === "random" ? "" : query;
    return await fetchAPI(
      `search?search=${search}&limit=3&offset=${offset}`,
      { method: "GET", mode: "cors" }
    );
  }
);

function applyFilters(
  items: Product[],
  query: string,
  sortOrder: "asc" | "desc" | null
): Product[] {
  let result = [...items];

  if (query.trim()) {
    const lower = query.toLowerCase();
    result = result.filter((p) =>
      p.Name.toLowerCase().includes(lower) ||
      p.Description?.toLowerCase().includes(lower)
    );
  }

  if (sortOrder === "asc") result.sort((a, b) => a.Unit_cost - b.Unit_cost);
  else if (sortOrder === "desc") result.sort((a, b) => b.Unit_cost - a.Unit_cost);

  return result;
}

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
      state.filtered = applyFilters(state.items, action.payload, state.sortOrder);
    },
    setSortOrder(state, action: PayloadAction<"asc" | "desc" | null>) {
      state.sortOrder = action.payload;
      state.filtered = applyFilters(state.items, state.searchQuery, action.payload);
    },
    resetFilters(state) {
      state.searchQuery = "";
      state.sortOrder = null;
      state.filtered = [...state.items];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // ajustá según la forma real de la respuesta de tu API
        const items = action.payload?.results ?? action.payload ?? [];
        state.items = items;
        state.filtered = applyFilters(items, state.searchQuery, state.sortOrder);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export const { setSearch, setSortOrder, resetFilters } = productSlice.actions;
export default productSlice.reducer;