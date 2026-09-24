import { createSlice } from '@reduxjs/toolkit';
import { fetchCities } from './citiesOperations';

export interface City {
  id: number;
  name: string;
}

export interface CitiesState {
  items: City[];
  isLoading: boolean;
  error: string | null;
}

// используется только внутри файла, без export
const initialState: CitiesState = {
  items: [],
  isLoading: false,
  error: null,
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...action.payload];
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? 'Something went wrong';
      });
  },
});

export default citiesSlice.reducer;
