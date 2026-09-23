import { createAsyncThunk } from '@reduxjs/toolkit';

import type { Company } from './firmsSlice';
import { fetchFirmApi } from '../../api/api';

export const fetchFirm = createAsyncThunk<
  Company,
  string,
  { rejectValue: string }
>('companies/fetchFirm', async (companyId, { rejectWithValue }) => {
  try {
    return await fetchFirmApi(companyId);
  } catch {
    return rejectWithValue('Failed to fetch Company');
  }
});