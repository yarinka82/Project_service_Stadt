import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './cities/citiesSlice';

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    // burgerModal: burgerModalReducer,
    // categories: categoriesReducer,
    // firms: firmsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

