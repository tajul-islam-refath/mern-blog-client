import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "setting",
  initialState: {
    loading: false,
  },
  reducers: {
    loadingStart: (state, action) => {
      state.loading = true;
    },
    loadingStop: (state, action) => {
      state.loading = false;
    },
  },
});

export const { loadingStart, loadingStop } = settingsSlice.actions;
export default settingsSlice.reducer;
