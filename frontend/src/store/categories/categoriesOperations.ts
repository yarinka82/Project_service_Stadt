import { createAsyncThunk } from '@reduxjs/toolkit';

import type { Category } from './categoriesSlice';
import { fetchCategoriesApi } from '../../api/api';

export const fetchCategories = createAsyncThunk<
  Category[],
  void,
  { rejectValue: string }
>('categories/fetchCategories', async (_, { rejectWithValue }) => {
  try {
    return await fetchCategoriesApi();
  } catch {
    return rejectWithValue('Failed to fetch Categories');
  }
});
