import { createAsyncThunk } from '@reduxjs/toolkit';

import type { City } from './citiesSlice';
import { fetchCitiesApi } from '../../api/api';

export const fetchCities = createAsyncThunk<
  City[],
  void,
  { rejectValue: string }
>('cities/fetchCities', async (_, { rejectWithValue }) => {
  // деструктуризация thunkAPI: { rejectWithValue } - без явного any
  try {
    return await fetchCitiesApi(); // т.к.fetch надо было переписать на аксиос, а он используется в api.ts, то интеинтерфейс ответа убран
  } catch {
    return rejectWithValue('Failed to fetch Cities');
  }
});
