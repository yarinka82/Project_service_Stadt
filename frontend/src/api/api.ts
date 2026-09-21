//централизованный сервисный слой приложения для работы с сервером

import axios from 'axios';
import type { City } from '../store/cities/citiesSlice';
import type { Category } from '../store/categories/categoriesSlice';

const api = axios.create();

export interface CitiesResponse {
  status: string;
  code: number;
  data: City[];
}

export interface CategoriesResponse {
  status: string;
  code: number;
  data: {
    categories: Category[];
    total: number;
  };
}

export const fetchCitiesApi = async (): Promise<City[]> => {
  const response = await api.get<CitiesResponse>('/aglomerations');

  return response.data.data;
};

export const fetchCategoriesApi = async (): Promise<Category[]> => {
  const response = await api.get<CategoriesResponse>('/categories');

  return response.data.data.categories;
};
