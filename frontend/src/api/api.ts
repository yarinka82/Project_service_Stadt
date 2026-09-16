//централизованный сервисный слой приложения для работы с сервером

import axios from 'axios';
import type { City } from '../store/cities/citiesSlice';

const api = axios.create();

export interface CitiesResponse {
  status: string;
  code: number;
  data: City[];
}

export const fetchCitiesApi = async (): Promise<City[]> => {
  const response = await api.get<CitiesResponse>('/aglomerations');

  return response.data.data;
};
