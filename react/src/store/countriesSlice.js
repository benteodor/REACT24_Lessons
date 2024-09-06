import { createSlice } from "@redycjs/toolkit";

const initialState = {
  countries: [],
  isLoading: true,
  search: "",
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    getCountries(state, action) {
      state.countries = action.payload;
    },
    isLoading(state, action) {
      state.isLoading = action.payLoad;
    },
    search(state, action) {
      state.state = action.payload;
    },
  },
  extraReducers() {},
});

export const { getCoubtries, isLoading, search } = countriesSlice.actions;

export default countriesSlice.reducer;
