import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
  data: {},
  search: "",
  pending: false,
  error: null,
};

export const getLandingPageData = createAsyncThunk("", async (data) => {
  try {
    const response = await axios.post("graphql/", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
const landingPage = createSlice({
  name: "landingPage",
  initialState,
  reducers: {
    SET_LANDING_PAGE(state, action) {
      state.data = action.payload;
    },
    SET_SEARCH(state, action) {
      state.search = action.payload;
    },
  },

  extraReducers: {
    [getLandingPageData.fulfilled]: (state, action) => {
      state.pending = false;
      state.data = action.payload;
    },
    [getLandingPageData.pending]: (state) => {
      state.pending = true;
    },
    [getLandingPageData.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
  },
});

export default landingPage.reducer;
export const { SET_SEARCH, SET_LANDING_PAGE } = landingPage.actions;
