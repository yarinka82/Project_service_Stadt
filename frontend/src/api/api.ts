import axios from 'axios';
import type { City } from '../types/type';

const api = axios.create();

interface AglomerationsResponse {
  status: string;
  code: number;
  data: City[];
}

export const fetchCitiesApi = async (): Promise<City[]> => {
  const response = await api.get<AglomerationsResponse>('/aglomerations');

  return response.data.data;
};
