import css from './Header.module.css';
import { Link } from 'react-router-dom';
import pinIcon from '../../assets/icons/pin.svg';
import themeIcon from '../../assets/icons/moon.svg';

function Header() {
  return (
    <header className={css.header}>
      <Link to="/">
        <div className={css.logoWordmark}>
          <div className={css.logoBox}>
            <img src={pinIcon} alt="" />
          </div>

          <div className={css.wordmark}>
            <span>Stadt</span>
            <span className={css.wordmarkService}>Service</span>
          </div>
        </div>
      </Link>

      <button
        className={css.buttonTheme}
        type="button"
        aria-label="Thema wechseln"
      >
        <img src={themeIcon} alt="" />
      </button>
    </header>
  );
}

export default Header;
