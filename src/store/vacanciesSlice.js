import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: "",
  vacancies: [],
  pagination: [],
};

export const getVacanciesRequest = createAsyncThunk(
  "vacancies/getVacanciesRequest",
  async (url) => {
    try {
      const res = await fetch(`${url}`);

      if (!res.ok) {
        throw new Error(`Ошибка: ${res.status}`);
      }

      const data = await res.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const vacanciesSlice = createSlice({
  name: "vacancies",
  initialState,
  reducers: {
    clearState: (state) => {
      state.vacancies = [];
    },
    lastUrl: (state, action) => {
      state.lastUrl = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVacanciesRequest.pending, (state) => {
        state.error = "";
      })
      .addCase(getVacanciesRequest.fulfilled, (state, action) => {
        state.vacancies = state.vacancies.concat(action.payload.vacancies);
        state.pagination = action.payload.pagination;
      })
      .addCase(getVacanciesRequest.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default vacanciesSlice.reducer;
