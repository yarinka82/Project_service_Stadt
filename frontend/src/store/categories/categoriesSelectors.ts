import type { RootState } from '../store';

export const getCategories = (state: RootState) => state.categories.items;

export const getCategoriesLoadingStatus = (state: RootState) =>
  state.categories.isLoading;

export const getCategoriesError = (state: RootState) => state.categories.error;
