import { create } from 'zustand';
import { type BurgerModal } from '../types/type';

export const burgerModal = create<BurgerModal>((set) => ({
  isOpenBurgerMenu: false,
  isOpen: () => set({ isOpenBurgerMenu: true }),
  isClose: () => set({ isOpenBurgerMenu: false }),
  toggleMenu: () =>
    set((state) => ({ isOpenBurgerMenu: !state.isOpenBurgerMenu })),
}));
