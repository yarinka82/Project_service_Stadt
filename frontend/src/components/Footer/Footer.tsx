import css from './Footer.module.css';
import logoITHub from '../../assets/svg/logo_itHub.svg';
import iconInsta from '../../assets/svg/insta_icon.svg';
import iconLinkedin from '../../assets/svg/linkedin_icon.svg';
// import iconEmail from '../../assets/svg/insta_icon.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.whiteLine}></div>

      <div className={css.container}>
        {/* Слева: логотип, рядом соцсети и копирайт (по просьбе Ярины) */}
        <div className={css.leftSide}>
          <div className={css.logoBox}>
            <img src={logoITHub} alt="Logo IT Hub" />
          </div>

          <div className={css.meta}>
            <div className={css.socials}>
              <a
                href="https://www.instagram.com/digital_it_hub_wu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={iconInsta} alt="Instagram Icon" />
              </a>
              <a
                href="https://www.linkedin.com/groups/10076160/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={iconLinkedin} alt="LinkedIn Icon" />
              </a>
              {/* <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=wurzburg-digitalithub%40web.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={iconEmail}
                  alt="E-Mail an wurzburg-digitalithub@web.de"
                />
              </a> */}
            </div>

            <p className={css.copy}>© 2026 Digital IT Hub Würzburg e.V.</p>
          </div>
        </div>

        {/* Справа: юридические ссылки */}
        <div className={css.legalLinks}>
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutzerklärung</Link>
        </div>
      </div>
    </footer>
  );
}
