import css from './SearchField.module.css';
import iconMagnifier from '../../assets/svg/page3/search.svg'; 

export const SearchField = () => {
  return (
    <div className={css.wrapper}>
      <img src={iconMagnifier} alt="" aria-hidden="true" className={css.icon} />
      <input 
        type="text" 
        className={css.input} 
        placeholder="Was suchen Sie? (z. B. TÜV, Friseur...)" 
        readOnly 
      />
    </div>
  );
};