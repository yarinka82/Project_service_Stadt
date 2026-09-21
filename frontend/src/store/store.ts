import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './cities/citiesSlice';
import categoriesReducer from './categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    categories: categoriesReducer,
    // burgerModal: burgerModalReducer,
    // firms: firmsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
