import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL, LOCATION_URL } from "../api/api";

const initialState = {
  error: "",
  locations: [],
};

export const getLocations = createAsyncThunk(
  "locations/getLocations",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const res = await fetch(`${API_URL}${LOCATION_URL}`);
      if (!res.ok) {
        const message = `Ошибка: ${res.status}`;
        throw new Error(message);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLocations.pending, (state) => {
        state.error = "";
      })
      .addCase(getLocations.fulfilled, (state, action) => {
        state.locations = action.payload;
        state.error = "";
      })
      .addCase(getLocations.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default locationsSlice.reducer;
