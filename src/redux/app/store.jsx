import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authReducer";
import dataReducer from "../features/dataReducer";
import themeReducer from "../features/themeReducer";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    data: dataReducer,
  },
});

export default store;
