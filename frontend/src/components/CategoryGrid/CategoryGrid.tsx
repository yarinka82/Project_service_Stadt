import type { Category } from '../../store/categories/categoriesSlice';

import {
  CATEGORY_ICONS,
  ALL_CATEGORIES_ICON,
} from '../../constants/categoryIcons';

import { CategoryTile } from '../CategoryTile/CategoryTile';

import css from './CategoryGrid.module.css';

interface CategoryGridProps {
  categories: Category[];

  onCategoryClick: (categoryId: number) => void;

  onAllCategoriesClick: () => void;
}

export const CategoryGrid = ({
  categories,
  onCategoryClick,
  onAllCategoriesClick,
}: CategoryGridProps) => {
  return (
    <section className={css.container}>
      {/* h1 для города */}
      <h2 className={css.title}>Kategorie auswählen</h2>

      <div className={css.grid}>
        {categories.map((category) => (
          <CategoryTile
            key={category.id}
            label={category.name}
            icon={CATEGORY_ICONS[category.id]}
            onClick={() => onCategoryClick(category.id)}
          />
        ))}

        <CategoryTile
          label="Alle Kategorien"
          icon={ALL_CATEGORIES_ICON}
          onClick={onAllCategoriesClick}
        />
      </div>
    </section>
  );
};
