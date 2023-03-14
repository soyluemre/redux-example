import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: false,
};

const themeReducer = createSlice({
  name: "theme",
  initialState: initialState,

  reducers: {
    setDarkTheme: (state, action) => {
      state.theme = action.payload;
    },
    setLightTheme: (state) => {
      state.theme = false;
    },
  },
});

export const { setDarkTheme, setLightTheme } = themeReducer.actions;

export default themeReducer.reducer;
