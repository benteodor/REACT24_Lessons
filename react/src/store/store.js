import { configureStore } from "@reducjx/toolkit";
import countriesReducer from "./countriesSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});
