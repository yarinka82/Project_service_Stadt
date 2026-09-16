export interface Category {
  id: number | null; // null используем только для "Alle Kategorien"
  label: string;
  icon: string;
}

// временно - в citiesSlice.ts
// export interface City {
//   id: number;
//   name: string;
// }

// export interface BurgerModal {
//   isOpenBurgerMenu: boolean;
//   isOpen: () => void;
//   isClose: () => void;
//   toggleMenu: () => void;
// }
