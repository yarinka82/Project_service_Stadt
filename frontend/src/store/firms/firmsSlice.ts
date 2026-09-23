import { createSlice } from '@reduxjs/toolkit';

import { fetchFirm } from './firmsOperations';

export interface CompanyCategory {
  id: number;
  name: string;
  description: string;
}

export interface CompanyAddress {
  id: string;
  street: string;
  houseNr: string;
  additionalAdrsInfo: string | null;
  zip: string;
  city: string;
  state: string;
  latitude: number | null;
  longitude: number | null;
  aglomerationId: number;
  aglomerationName: string;
}

export interface CompanyEmail {
  id: string;
  email: string;
  description: string | null;
}

export interface CompanyWebsite {
  id: string;
  url: string;
  description: string | null;
}

export interface CompanyPhoneNumber {
  id: string;
  number: string;
  description: string | null;
  type: string;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  logo: string | null;
  categories: CompanyCategory[];
  addresses: CompanyAddress[];
  emails: CompanyEmail[];
  websites: CompanyWebsite[];
  phoneNumbers: CompanyPhoneNumber[];
}

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
