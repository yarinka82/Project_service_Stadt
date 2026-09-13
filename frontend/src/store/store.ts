import { configureStore } from '@reduxjs/toolkit';
import aglomerationsReducer from './aglomerationsSlice';

export const store = configureStore({
    reducer: {
    aglomerations: aglomerationsReducer,
  },
    // подключить редюсеры:
    // burgerModal: burgerModalReducer,
    // cities: citiesReducer,
    // categories: categoriesReducer,
    // firms: firmsReducer,
  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
