//централизованный сервисный слой приложения для работы с сервером

import axios from 'axios';
import type { City } from '../store/cities/citiesSlice';
import type { Category } from '../store/categories/categoriesSlice';
import type {
  FirmDetail,
  FirmListItem,
  FirmsPagination,
} from '../store/firms/firmsSlice';

// для ДЕМО
import {
  MOCK_CITIES,
  MOCK_CATEGORIES,
  MOCK_FIRMS,
  MOCK_FIRM_DETAILS,
} from './mockData';

// ДЕМО: true - данные берутся из mockData.ts, запросы к бэкенду не отправляются.
// Когда приложение будет подключено к бэкенду: удалить флаг, все ветки if (USE_MOCK) и mockData.ts
// const USE_MOCK = true;
export const USE_MOCK = true;

const api = axios.create();

// ---------- CITIES ----------
export interface CitiesResponse {
  status: string;
  code: number;
  data: City[];
}

// ---------- CATEGORIES ----------
export interface CategoriesResponse {
  status: string;
  code: number;
  data: {
    categories: Category[];
    total: number;
  };
}

// ---------- FIRMS LIST ----------
export interface FirmsListRequestParams {
  aglomerationId: number;
  categoryId?: number;
  page: number;
  limit: number;
}

export interface FirmsListResponse {
  status: string;
  code: number;
  data: FirmListItem[];
  pagination: FirmsPagination;
}

// ---------- FIRM DETAIL ----------
export interface FirmDetailResponse {
  status: string;
  code: number;
  data: FirmDetail;
}

// ---------- API REQUESTS - с подключенным бекендом ----------
// export const fetchCitiesApi = async (): Promise<City[]> => {
//   const response = await api.get<CitiesResponse>('/aglomerations');

//   return response.data.data;
// };

// export const fetchCategoriesApi = async (): Promise<Category[]> => {
//   const response = await api.get<CategoriesResponse>('/categories');

//   return response.data.data.categories;
// };

// export const fetchFirmsApi = async ({
//   aglomerationId,
//   categoryId,
//   page,
//   limit,
// }: FirmsListRequestParams): Promise<FirmsListResponse> => {
//   const response = await api.get<FirmsListResponse>('/companies', {
//     params: {
//       aglomerationId,
//       ...(categoryId !== undefined && { categoryId }),
//       page,
//       limit,
//     },
//   });

//   return response.data;
// };

// export const fetchFirmApi = async (firmId: string): Promise<FirmDetail> => {
//   const response = await api.get<FirmDetailResponse>(`/companies/${firmId}`);

//   return response.data.data;
// };

// ---------- API REQUESTS - для ДЕМО версии ----------
export const fetchCitiesApi = async (): Promise<City[]> => {
  if (USE_MOCK) {
    return MOCK_CITIES;
  }

  const response = await api.get<CitiesResponse>('/aglomerations');

  return response.data.data;
};

export const fetchCategoriesApi = async (): Promise<Category[]> => {
  if (USE_MOCK) {
    return MOCK_CATEGORIES;
  }

  const response = await api.get<CategoriesResponse>('/categories');

  return response.data.data.categories;
};

export const fetchFirmsApi = async ({
  aglomerationId,
  categoryId,
  page,
  limit,
}: FirmsListRequestParams): Promise<FirmsListResponse> => {
  if (USE_MOCK) {
    // Фирмы выбранного города; категория - только если выбрана (для «Alle Kategorien» её нет)
    const filteredFirms = MOCK_FIRMS.filter(
      (firm) =>
        firm.addresses[0].aglomerationId === aglomerationId &&
        (categoryId === undefined || firm.categories[0].id === categoryId)
    );

    // как пагинация на бэкенде
    const start = (page - 1) * limit;

    // status и code нигде не читаются, нужны только для совпадения с типом ответа
    return {
      status: 'success',
      code: 200,
      data: filteredFirms.slice(start, start + limit),
      pagination: {
        page,
        limit,
        total: filteredFirms.length,
        totalPages: Math.ceil(filteredFirms.length / limit),
      },
    };
  }

  const response = await api.get<FirmsListResponse>('/companies', {
    params: {
      aglomerationId,
      ...(categoryId !== undefined && { categoryId }),
      page,
      limit,
    },
  });

  return response.data;
};

export const fetchFirmApi = async (firmId: string): Promise<FirmDetail> => {
  if (USE_MOCK) {
    const firm = MOCK_FIRM_DETAILS.find((item) => item.id === firmId);

    // Как 404 от бэкенда: операция уйдёт в rejected, страница покажет ошибку
    if (!firm) {
      throw new Error(`Firm ${firmId} not found`);
    }

    return firm;
  }

  const response = await api.get<FirmDetailResponse>(`/companies/${firmId}`);

  return response.data.data;
};
