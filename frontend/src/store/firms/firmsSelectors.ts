// import type { RootState } from '../store';

// export const getFirm = (state: RootState) => state.firms.item;

// export const getFirmLoadingStatus = (state: RootState) =>
//   state.firms.isLoading;

// export const getFirmError = (state: RootState) => state.firms.error;

import type { RootState } from '../store';

// ---------- FIRMS LIST ----------

export const getFirms = (state: RootState) => state.firms.items;

export const getFirmsPagination = (state: RootState) => state.firms.pagination;

export const getFirmsTotal = (state: RootState) => state.firms.pagination.total;

export const getFirmsLoadingStatus = (state: RootState) =>
  state.firms.listIsLoading;

export const getFirmsError = (state: RootState) => state.firms.listError;

export const getFirmsHasMore = (state: RootState) =>
  state.firms.pagination.page < state.firms.pagination.totalPages;

// ---------- FIRM DETAIL ----------

export const getFirm = (state: RootState) => state.firms.item;

export const getFirmLoadingStatus = (state: RootState) => state.firms.isLoading;

export const getFirmError = (state: RootState) => state.firms.error;
