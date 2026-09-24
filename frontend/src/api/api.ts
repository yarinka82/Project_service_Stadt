//централизованный сервисный слой приложения для работы с сервером

import axios from 'axios';
import type { City } from '../store/cities/citiesSlice';
import type { Category } from '../store/categories/categoriesSlice';
import type {
  FirmDetail,
  FirmListItem,
  FirmsPagination,
} from '../store/firms/firmsSlice';

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

// ---------- API REQUESTS ----------
export const fetchCitiesApi = async (): Promise<City[]> => {
  const response = await api.get<CitiesResponse>('/aglomerations');

  return response.data.data;
};

export const fetchCategoriesApi = async (): Promise<Category[]> => {
  const response = await api.get<CategoriesResponse>('/categories');

  return response.data.data.categories;
};

export const fetchFirmsApi = async ({
  aglomerationId,
  categoryId,
  page,
  limit,
}: FirmsListRequestParams): Promise<FirmsListResponse> => {
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
  const response = await api.get<FirmDetailResponse>(`/companies/${firmId}`);

  return response.data.data;
};
