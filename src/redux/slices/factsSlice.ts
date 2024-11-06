import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = [
  "прообразом Чубакки стал пёс режиссёра;",
  "актёр, сыгравший Чубакку, умер несколькими днями позже релиза фильма.",
  "за один день до премьеры режиссёр фильма, влюбился в одну из продюсерок.",
  "только за глаза режиссёр уплатил несколько миллионов долларов.",
  "актёрам разрешили подобрать свои костюмы, поскольку в фильме нужно было снять несколько десятков персонажей.",
  "аниматоры поделились идеей вдохновиться творчеством Кафки при создании Чубакки.",
  "Чубакка — это прозвище основателя медиа-гиганта Уолтера Уайта.",
];

export const factsCountSlice = createSlice({
  name: "facts",
  initialState,
  reducers: {
    facts: (state, action: PayloadAction<Array<string>>) => {
      state = action.payload;
    },
  },
});

export const { facts } = factsCountSlice.actions;
export default factsCountSlice.reducer;
