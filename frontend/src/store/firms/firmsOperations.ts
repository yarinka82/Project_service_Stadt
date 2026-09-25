import { createAsyncThunk } from '@reduxjs/toolkit';

import type { FirmDetail, FirmListItem, FirmsPagination } from './firmsSlice';

import { fetchFirmsApi, fetchFirmApi } from '../../api/api';

import type { FirmsListRequestParams } from '../../api/api';

// ---------- FIRMS LIST ----------

export const fetchFirms = createAsyncThunk<
  {
    data: FirmListItem[];
    pagination: FirmsPagination; // то, что операция вернёт
  },
  FirmsListRequestParams, // это передается операции
  { rejectValue: string } // тип ошибки
>('firms/fetchFirms', async (params, { rejectWithValue }) => {
  try {
    const response = await fetchFirmsApi(params);

    return {
      data: response.data,
      pagination: response.pagination,
    };
  } catch {
    return rejectWithValue('Failed to fetch firms');
  }
});

// ---------- FIRM DETAIL ----------

export const fetchFirm = createAsyncThunk<
  FirmDetail,
  string,
  { rejectValue: string }
>('firms/fetchFirm', async (firmId, { rejectWithValue }) => {
  try {
    return await fetchFirmApi(firmId);
  } catch {
    return rejectWithValue('Failed to fetch firm');
  }
});
