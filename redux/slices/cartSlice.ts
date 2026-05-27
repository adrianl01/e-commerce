import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchAPI } from "@/lib/api";

interface CartState {
  productIds: string[];
  orderStatus: "idle" | "loading" | "succeeded" | "failed";
  orderError: string | null;
}

const initialState: CartState = {
  productIds: [],
  orderStatus: "idle",
  orderError: null,
};

// Corresponde a: POST "order" con { productId }
export const buyProduct = createAsyncThunk(
  "cart/buyProduct",
  async (productId: string) => {
    return await fetchAPI("order", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ productId }),
    });
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<string>) {
      console.log("Adding to cart:", action.payload);
      if (!state.productIds.includes(action.payload)) {
        state.productIds.push(action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.productIds = state.productIds.filter((id) => id !== action.payload);
    },
    clearCart(state) {
      state.productIds = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(buyProduct.pending, (state) => {
        state.orderStatus = "loading";
        state.orderError = null;
      })
      .addCase(buyProduct.fulfilled, (state, action) => {
        state.orderStatus = "succeeded";
        // limpia el carrito tras compra exitosa
        state.productIds = [];
      })
      .addCase(buyProduct.rejected, (state, action) => {
        state.orderStatus = "failed";
        state.orderError = action.error.message ?? "Unknown error";
      });
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;