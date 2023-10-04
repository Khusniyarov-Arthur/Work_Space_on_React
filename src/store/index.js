import { configureStore } from "@reduxjs/toolkit";
import vacanciesReducer from "./vacanciesSlice";
import locationsReducer from "./locationsSlice";

export const store = configureStore({
  reducer: {
    vacanciesReducer,
    locationsReducer,
  },
  devTools: true,
});
