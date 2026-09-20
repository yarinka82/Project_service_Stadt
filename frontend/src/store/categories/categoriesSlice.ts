import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './categoriesOperations';

export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface CategoriesState {
  items: Category[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  items: [],
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...action.payload];
      })

      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? 'Something went wrong';
      });
  },
});

export default categoriesSlice.reducer;
