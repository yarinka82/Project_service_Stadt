export interface BurgerModal {
  isOpenBurgerMenu: boolean;
  isOpen: () => void;
  isClose: () => void;
  toggleMenu: () => void;
}
