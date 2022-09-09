import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    basePending: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    baseSuccess: (state, actions) => {
      state.isLoading = false;
      state.error = "";
      state.base = actions.payload;
    },
    baseFailure: (state) => {
      state.isLoading = false;
      state.error = actions.payload;
    },
    baseReset: (state) => {
      state.isLoading = initialState.isLoading;
      state.error = initialState.error;
      state.base = initialState.base;
    }
  },
});

const { reducer, actions } = baseSlice;

export const {
  baseSuccess,
  baseFailure,
  basePending,
  baseReset
} = actions;


export const baseActions = {
  baseSuccess,
  baseFailure,
  basePending,
  baseReset
}

export default reducer;
