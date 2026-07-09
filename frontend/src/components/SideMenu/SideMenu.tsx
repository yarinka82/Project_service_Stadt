import css from "./SideMenu.module.css";

type SideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SideMenu({
    isOpen,
    onClose
}: SideMenuProps) {
  return (
    <div
    className={`${css.overlay} ${
        isOpen ? css.open : ""
    }`}
    onClick={onClose}
>
      <aside
        className={`${css.sideMenu} ${
        isOpen ? css.open : ""
        }`}
        onClick={(event) => event.stopPropagation()}
>
        <button
          className={css.closeButton}
          onClick={onClose}
          aria-label="Close menu"
        >
          ◀
        </button>

        <nav>
          <ul className={css.menuList}>
            <li><a href="/">Start</a></li>
            <li><a href="/">Katalog</a></li>
            <li><a href="/">Anbieter werden</a></li>
            <li><a href="/">Über uns</a></li>
            <li><a href="/">Kontakt</a></li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}