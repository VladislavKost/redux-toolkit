import { configureStore } from "@reduxjs/toolkit";
import factsCountReducer from "../slices/factsCountSlice";
import factsReducer from "../slices/factsSlice";
import photosSlice from "../slices/photosSlice";

export const store = configureStore({
  reducer: {
    factsCount: factsCountReducer,
    facts: factsReducer,
    photos: photosSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
