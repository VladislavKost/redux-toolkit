import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type PhotosState = string[];

const initialState = [] as PhotosState;

export const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    photos: (state, action: PayloadAction<string>) => {
      state.unshift(action.payload);
    },
  },
});

export const { photos } = photosSlice.actions;
export default photosSlice.reducer;
