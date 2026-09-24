import { createSlice } from '@reduxjs/toolkit';

import { fetchFirms, fetchFirm } from './firmsOperations';

// ---------- SHARED ----------

export interface FirmCategory {
  id: number;
  name: string;
  description: string;
}

// ---------- LIST ----------

//для списка компаний
export interface FirmListAddress {
  street: string;
  houseNr: string;
  additionalAdrsInfo: string | null;
  aglomerationId: number;
  zip: string;
  city: string;
  state: string;
  coordinates: {
    latitude: number | null;
    longitude: number | null;
  };
}

//одна фирма в списке результатов
export interface FirmListItem {
  id: string;
  name: string;
  description: string;
  logo: string | null;
  categories: FirmCategory[];
  addresses: FirmListAddress[];
}

export interface FirmsPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// ---------- DETAIL ----------

export interface FirmDetailAddress {
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

export interface FirmEmail {
  id: string;
  email: string;
  description: string | null;
}

export interface FirmWebsite {
  id: string;
  url: string;
  description: string | null;
}

export interface FirmPhoneNumber {
  id: string;
  number: string;
  description: string | null;
  type: string;
}

//одна фирма для AnbieterPage
export interface FirmDetail {
  id: string;
  name: string;
  description: string;
  logo: string | null;
  categories: FirmCategory[];
  addresses: FirmDetailAddress[];
  emails: FirmEmail[];
  websites: FirmWebsite[];
  phoneNumbers: FirmPhoneNumber[];
}

// ---------- STATE ----------

export interface FirmsState {
  item: FirmDetail | null;

  items: FirmListItem[];
  pagination: FirmsPagination;

  isLoading: boolean;
  error: string | null;

  listIsLoading: boolean;
  listError: string | null;
}

const initialState: FirmsState = {
  item: null,

  items: [],
  pagination: {
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 0, //до ответа backend не знаем количество
  },

  isLoading: false,
  error: null,

  listIsLoading: false,
  listError: null,
};

const firmsSlice = createSlice({
  name: 'firms',

  initialState,

  reducers: {
    resetFirmsList: (state) => {
      state.items = [];

      state.pagination = {
        page: 1,
        limit: 20,
        total: 0,
        totalPages: 0,
      };

      state.listError = null;
    },
  },

  extraReducers: (builder) => {
    builder
      // ---------- FIRMS LIST ----------

      .addCase(fetchFirms.pending, (state) => {
        state.listIsLoading = true;
        state.listError = null;
      })

      .addCase(fetchFirms.fulfilled, (state, action) => {
        state.listIsLoading = false;

        if (action.payload.pagination.page === 1) {
          state.items = [...action.payload.data];
        } else {
          state.items.push(...action.payload.data);
        }

        state.pagination = action.payload.pagination;
      })

      .addCase(fetchFirms.rejected, (state, action) => {
        state.listIsLoading = false;
        state.listError = action.payload ?? 'Something went wrong';
      })

      // ---------- FIRM DETAIL ----------

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

export const { resetFirmsList } = firmsSlice.actions;

export default firmsSlice.reducer;
