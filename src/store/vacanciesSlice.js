import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL, VACANCY_URL } from "../api/api";

const initialState = {
  error: "",
  vacancies: [],
};

export const getVacancies = createAsyncThunk(
  "vacancies/getVacancies",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const res = await fetch(`${API_URL}${VACANCY_URL}`);
      if (!res.ok) {
        const message = `An error has occured: ${res.status}`;
        throw new Error(message);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const vacanciesSlice = createSlice({
  name: "vacancies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVacancies.pending, (state) => {
        state.error = "";
      })
      .addCase(getVacancies.fulfilled, (state, action) => {
        state.vacancies = action.payload;
        state.error = "";
      })
      .addCase(getVacancies.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default vacanciesSlice.reducer;
