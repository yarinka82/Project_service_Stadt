import { createSlice } from '@reduxjs/toolkit';

import { fetchFirm } from './firmsOperations';
import type { Company } from '../../api/api';

export interface FirmsState {
  item: Company | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: FirmsState = {
  item: null,
  isLoading: false,
  error: null,
};

const firmsSlice = createSlice({
  name: 'firms',

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchFirm.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(fetchFirm.fulfilled, (state, action) => {
        state.isLoading = false;
        state.item = action.payload;
      })

      .addCase(fetchFirm.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? 'Something went wrong';
      });
  },
});

export default firmsSlice.reducer;