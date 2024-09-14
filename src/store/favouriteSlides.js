import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: [],
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    addFavourite(state, action) {
      state.favourites = [...state.favourites, action.payload];
    },
    clearFavourites(state) {
      state.favourites = [];
    },
    removeFavourites(state, action) {
      state.favourites = state.favourites.filter(
        (favourite) => favourite !== action.payload
      );
    },
  },
});
