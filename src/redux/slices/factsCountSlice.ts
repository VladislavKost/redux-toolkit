import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FactsCountState {
  value: number | string;
}
const initialState = { value: "" } as FactsCountState;

export const factsCountSlice = createSlice({
  name: "factsCount",
  initialState,
  reducers: {
    factsCount: (state, action: PayloadAction<number | string>) => {
      state.value = action.payload;
    },
  },
});

export const { factsCount } = factsCountSlice.actions;
export default factsCountSlice.reducer;
