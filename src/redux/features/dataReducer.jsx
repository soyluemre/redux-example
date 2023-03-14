import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  dataList: [],
  loading: false,
  error: false,
};

export const getData = createAsyncThunk("getData", async () => {
  const url = "http://hasanadiguzel.com.tr/api/kurgetir";
  try {
    const { data } = await axios(url);
    return data.TCMB_AnlikKurBilgileri;
  } catch (error) {
    console.log(error);
  }
});

const dataReducer = createSlice({
  name: "data",
  initialState,
  reducers: {
    clearDataList: (state) => {
      state.dataList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, { payload }) => {
        state.dataList = payload;
        state.loading = false;
      })
      .addCase(getData.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { clearDataList } = dataReducer.actions;

export default dataReducer.reducer;
