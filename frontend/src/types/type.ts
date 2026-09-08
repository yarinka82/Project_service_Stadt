export interface BurgerModal {
  isOpenBurgerMenu: boolean;
  isOpen: () => void;
  isClose: () => void;
  toggleMenu: () => void;
}

export interface Category {
  id: number | null; // null используем только для "Alle Kategorien"
  label: string;
  icon: string;
}
