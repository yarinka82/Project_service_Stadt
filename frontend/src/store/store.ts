import { configureStore } from '@reduxjs/toolkit';
import aglomerationsReducer from './aglomerationsSlice';
import categoriesReducer from './categoriesSlice';

export const store = configureStore({
    reducer: {
    aglomerations: aglomerationsReducer,
    categories: categoriesReducer,
  },
  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
