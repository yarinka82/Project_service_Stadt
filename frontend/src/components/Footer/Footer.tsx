import css from './Footer.module.css';
import logoITHub from '../../assets/svg/logo_itHub.svg';
import iconInsta from '../../assets/svg/insta_icon.svg';
import iconLinkedin from '../../assets/svg/linkedin_icon.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.whiteLine}></div>

      <div className={css.container}>
        {/* Слева: логотип и юридические ссылки */}
        <div className={css.leftSide}>
          <div className={css.logoBox}>
            <img src={logoITHub} alt="Logo IT Hub" />
          </div>

          <div className={css.legalLinks}>
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutzerklärung</Link>
          </div>
        </div>

        {/* Справа: соцсети */}
        <div className={css.rightSide}>
          <p className={css.follow}>Follow us</p>
          <div className={css.socials}>
            <a href="#">
              <img src={iconInsta} alt="Instagram Icon" />
            </a>
            <a href="#">
              <img src={iconLinkedin} alt="LinkedIn Icon" />
            </a>
          </div>
        </div>

        {/* Копирайт: на мобильном справа под иконками, с 768px по центру внизу */}
        <p className={css.copy}>© 2026 HUB IT. All rights reserved</p>
      </div>
    </footer>
  );
}
