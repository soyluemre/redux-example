import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const authReducer = createSlice({
  name: "auth",
  initialState: initialState,

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = authReducer.actions;

export default authReducer.reducer;
