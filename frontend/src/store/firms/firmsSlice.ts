import { createSlice } from '@reduxjs/toolkit';

import { fetchFirms, fetchFirm } from './firmsOperations';

// ---------- SHARED ----------

export interface FirmCategory {
  id: number;
  name: string;
  description: string;
}

// День недели - ключ в часах работы
export type Weekday =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

// Интервал работы, время в формате "ЧЧ:ММ"
export interface TimeInterval {
  from: string;
  to: string;
}

// Часы работы по дням. Пустой массив - в этот день закрыто.
// Если поля openingHours у фирмы нет вообще - часы неизвестны
export type OpeningHours = Record<Weekday, TimeInterval[]>;

// Код способа оплаты. Надпись и значок выбирает страница
export type PaymentMethod = 'cash' | 'card' | 'paypal';

// Строка таблицы цен
export interface FirmService {
  name: string;
  price: number;
}

// Besonderheiten: показываются только те, что равны true
export interface FirmFeatures {
  parking: boolean;
  vouchers: boolean;
  wheelchair: boolean;
  petFriendly: boolean;
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
  rating?: number;
  reviewCount?: number;
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
  rating?: number;
  reviewCount?: number;
  priceFrom?: number;
  services?: FirmService[];
  paymentMethods?: PaymentMethod[];
  languages?: string[];
  features?: FirmFeatures;
  openingHours?: OpeningHours;
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

export const FIRMS_PAGE_LIMIT = 20;

const initialPagination: FirmsPagination = {
  page: 1,
  limit: FIRMS_PAGE_LIMIT,
  total: 0,
  totalPages: 0,
};

const initialState: FirmsState = {
  item: null,

  items: [],
  pagination: { ...initialPagination },

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
      state.pagination = { ...initialPagination };
      state.listIsLoading = false;
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

      // .addCase(fetchFirm.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload ?? 'Something went wrong';
      // });
      .addCase(fetchFirm.rejected, (state, action) => {
        // Отменённый запрос - не ошибка: пользователь ушёл со страницы или открыл другую фирму.
        // Загрузку не сбрасываем, её ведёт новый запрос
        if (action.meta.aborted) {
          return;
        }

        state.isLoading = false;
        state.error = action.payload ?? 'Something went wrong';
      });
  },
});

export const { resetFirmsList } = firmsSlice.actions;

export default firmsSlice.reducer;
