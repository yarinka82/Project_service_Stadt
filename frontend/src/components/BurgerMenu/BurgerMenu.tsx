import css from "./BurgerMenu.module.css";

type BurgerMenuProps = {
  onClick: () => void;
};

export default function BurgerMenu({ onClick }: BurgerMenuProps) {
  return (
    <button
      className={css.burgerButton}
      onClick={onClick}
      aria-label="Open menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}