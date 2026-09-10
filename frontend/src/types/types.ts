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

/*для карточки */
export interface Company  {
  id: number;
  title: string;
  address: string;
  description: string;
  rating: number;
  reviewsCount: number;
  priceLevel: string; // Строка типа "€€"
  category: string;
  imgUrl?: string; // Опционально, на случай если фото с бэка не придет
}