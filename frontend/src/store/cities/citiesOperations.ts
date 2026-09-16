import { createAsyncThunk } from '@reduxjs/toolkit';

import type { City } from './citiesSlice';
import { fetchCitiesApi } from '../../api/api';

export const fetchCities = createAsyncThunk<
  City[],
  void,
  { rejectValue: string }
>('cities/fetchCities', async (_, { rejectWithValue }) => {
  try {
    return await fetchCitiesApi();
  } catch {
    return rejectWithValue('Failed to fetch Cities');
  }
});

// 10- деструктуризация thunkAPI: { rejectWithValue } - без явного any
// 12 - т.к.fetch надо было переписать на аксиос, а он используется в api.ts, то интеинтерфейс ответа убран
