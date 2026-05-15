import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAmount } from "./counterAPI";

const initialState = {
  numberValue: 0,
  status: "idle",
};

export const incrementAsync = createAsyncThunk(
  "counter/fetchAmount",
  async (amount: number) => {
    const response = await fetchAmount(amount);
    return response.data;
  },
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.numberValue += 1;
    },
    decrement: (state) => {
      state.numberValue -= 1;
    },
    incrementByAmount: (state, action) => {
      state.numberValue += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.numberValue += action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state: any) => state.counter.numberValue;

export const selectStatus = (state: any) => state.counter.status;

export default counterSlice.reducer;
