import type { RootState } from '../store';

export const getFirm = (state: RootState) => state.firms.item;

export const getFirmLoadingStatus = (state: RootState) =>
  state.firms.isLoading;

export const getFirmError = (state: RootState) => state.firms.error;