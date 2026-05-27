import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchAPI } from "@/lib/api";
import type { userData } from "@/lib";

export interface Profile {
  email: string;
  username: string;
  address: string;
  birthdate: string;
  firstName: string;
  lastName: string;
  phoneNumber?: number;
  userAge?: number;
}

interface Order {
  orderId: string;
  [key: string]: any;
}

interface ProfileState {
  data: Profile | null;
  orders: Order[];
  status: "idle" | "loading" | "succeeded" | "failed";
  ordersStatus: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProfileState = {
  data: null,
  orders: [],
  status: "idle",
  ordersStatus: "idle",
  error: null,
};

// GET "me"
export const fetchProfile = createAsyncThunk<Profile, void>(
  "profile/fetch",
  async () => {
    return await fetchAPI("me", { method: "GET", mode: "cors" });
  }
);

// PATCH "me" con userData
export const updateProfile = createAsyncThunk<Profile, userData>(
  "profile/update",
  async (additionalUserData: userData) => {
    return await fetchAPI("me", {
      method: "PATCH",
      mode: "cors",
      body: JSON.stringify({ additionalUserData }),
    });
  }
);

// PATCH "me/address"
export const updateAddress = createAsyncThunk<Profile, string>(
  "profile/updateAddress",
  async (address: string) => {
    return await fetchAPI("me/address", {
      method: "PATCH",
      mode: "cors",
      body: JSON.stringify({ address }),
    });
  }
);

// GET "me/orders"
export const fetchOrders = createAsyncThunk<Order[], void>(
  "profile/fetchOrders",
  async () => {
    return await fetchAPI("me/orders", { method: "GET", mode: "cors" });
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    clearProfile(state) {
      state.data = null;
      state.orders = [];
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // fetchProfile
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });

    // updateProfile
    builder
      .addCase(updateProfile.fulfilled, (state, action) => {
        if (state.data && action.payload) {
          state.data = { ...state.data, ...action.payload };
        }
      });

    // updateAddress
    builder
      .addCase(updateAddress.fulfilled, (state, action) => {
        if (state.data && action.payload?.address) {
          state.data.address = action.payload.address;
        }
      });

    // fetchOrders
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.ordersStatus = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.ordersStatus = "succeeded";
        state.orders = action.payload ?? [];
      })
      .addCase(fetchOrders.rejected, (state) => {
        state.ordersStatus = "failed";
      });
  },
});

export const { clearProfile } = profileSlice.actions;
export default profileSlice.reducer;