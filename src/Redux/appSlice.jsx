import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    zero: (state) => {
      state.count = 0;
    },
  },
});

export const { decrement, increment, zero } = appSlice.actions;

export default appSlice.reducer;
