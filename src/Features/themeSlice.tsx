import { createSlice } from "@reduxjs/toolkit";
import { Rootstate } from "./store";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkTheme: true,
  },
  reducers: {
    toggleTheme: state => {
      state.darkTheme = !state.darkTheme;
    }
  }
});

export const {toggleTheme} = themeSlice.actions;

const selectThemeState = (state: Rootstate) => state.theme;
export const selectDarkTheme = (state: Rootstate) => selectThemeState(state).darkTheme;
export default themeSlice.reducer;