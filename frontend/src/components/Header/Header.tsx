import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.logoWordmark}>
          <div className={styles.logoBox}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.22365 12.7795L10 20L15.7764 12.7795C16.8921 11.3849 17.5 9.65193 17.5 7.86583V7.5C17.5 3.35786 14.1421 0 10 0C5.85786 0 2.5 3.35786 2.5 7.5V7.86583C2.5 9.65193 3.10788 11.3849 4.22365 12.7795ZM10 10C11.3807 10 12.5 8.88071 12.5 7.5C12.5 6.11929 11.3807 5 10 5C8.61929 5 7.5 6.11929 7.5 7.5C7.5 8.88071 8.61929 10 10 10Z"
              />
            </svg>
          </div>

          <div className={styles.wordmark}>
            <span>Stadt</span>
            <span className={styles.wordmarkService}>Service</span>
          </div>
        </div>
      </Link>

      <button
        className={styles.buttonTheme}
        type="button"
        aria-label="Thema wechseln"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M9 2C8.07174 2.92826 7.55025 4.18724 7.55025 5.5C7.55025 6.81275 8.07174 8.07174 9 9C9.92826 9.92826 11.1872 10.4497 12.5 10.4497C13.8128 10.4497 15.0717 9.92826 16 9C16 10.3845 15.5895 11.7378 14.8203 12.889C14.0511 14.0401 12.9579 14.9373 11.6788 15.4672C10.3997 15.997 8.99224 16.1356 7.63437 15.8655C6.2765 15.5954 5.02922 14.9287 4.05026 13.9497C3.07129 12.9708 2.4046 11.7235 2.13451 10.3656C1.86441 9.00776 2.00303 7.6003 2.53285 6.32121C3.06266 5.04213 3.95987 3.94888 5.11101 3.17971C6.26215 2.41054 7.61553 2 9 2Z"
            stroke="#DBE4EE"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </header>
  );
}

export default Header;
