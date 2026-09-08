import css from './CategoryTile.module.css';

interface CategoryTileProps {
  label: string;
  icon: string;
  onClick: () => void;
}

export function CategoryTile({ label, icon, onClick }: CategoryTileProps) {
  return (
    <button 
      type="button" 
      className={css.tile} 
      onClick={onClick}
    >
      <img src={icon} alt="" className={css.icon} />
      <span className={css.label}>{label}</span>
    </button>
  );
};