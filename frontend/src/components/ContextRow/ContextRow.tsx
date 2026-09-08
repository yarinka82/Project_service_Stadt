import css from './ContextRow.module.css';
import iconBackArrow from '../../assets/svg/page3/left.svg';

interface ContextRowProps {
  title: string;
  onBack: () => void;
}

export const ContextRow = ({ title, onBack }: ContextRowProps) => {
  return (
    <div className={css.container}>
      <button
        type="button"
        className={css.backButton}
        onClick={onBack}
        aria-label="Zurück"
      >
        <img
          src={iconBackArrow}
          alt=""
          aria-hidden="true"
          className={css.icon}
        />
      </button>

      <h1 className={css.title}>{title}</h1>
    </div>
  );
};
