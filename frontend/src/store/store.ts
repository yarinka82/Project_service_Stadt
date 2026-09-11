// import { create } from 'zustand';
// import { type BurgerModal } from '../types/type';

// export const burgerModal = create<BurgerModal>((set) => ({
//   isOpenBurgerMenu: false,
//   isOpen: () => set({ isOpenBurgerMenu: true }),
//   isClose: () => set({ isOpenBurgerMenu: false }),
//   toggleMenu: () =>
//     set((state) => ({ isOpenBurgerMenu: !state.isOpenBurgerMenu })),
// }));

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // подключить редюсеры:
    // burgerModal: burgerModalReducer,
    // cities: citiesReducer,
    // categories: categoriesReducer,
    // firms: firmsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;