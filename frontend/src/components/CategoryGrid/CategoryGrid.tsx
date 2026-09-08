import { CATEGORIES } from '../../constants/categories'; 
import { CategoryTile } from '../CategoryTile/CategoryTile'; 
import css from './CategoryGrid.module.css';

interface CategoryGridProps {
  // Обработчик не делает роутинг, он просто сообщает "кликнули на такую-то категорию"
  onCategoryClick: (categoryId: number | null) => void;
}

export const CategoryGrid = ({ onCategoryClick }: CategoryGridProps) => {
  return (
    <section className={css.container}>
      {/* h1 для города */}
      <h2 className={css.title}>Kategorie auswählen</h2>
      
      <div className={css.grid}>
        {CATEGORIES.map((cat) => (
          <CategoryTile
            key={cat.id ?? 'all'} // 'all' для категории без id
            label={cat.label}
            icon={cat.icon}
            onClick={() => onCategoryClick(cat.id)}
          />
        ))}
      </div>
    </section>
  );
};