import css from './Footer.module.css';
import logoITHub from '../../assets/svg/logo_itHub.svg';
import iconInsta from '../../assets/svg/insta_icon.svg';
import iconLinkedin from '../../assets/svg/linkedin_icon.svg';
import iconEmail from '../../assets/svg/email_icon.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.whiteLine}></div>

      <div className={css.container}>
        {/* ДЕМО (Netlify): внизу справа поверх страницы стоит значок "Powered by Netlify */}

        {/* Сверху cлева: юридические ссылки */}
        <div className={css.legalLinks}>
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutzerklärung</Link>
          <a
            className={css.feedbackLink} 
            href="https://docs.google.com/forms/d/e/1FAIpQLScoa89qGK_lXjKTcq_wvHTJNFRrnTVUIHKtAX5NBbC_k5jq9w/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Feedback-Formular
          </a>
        </div>

        {/* Снизу cлева: логотип, рядом соцсети и копирайт */}
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
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=wurzburg-digitalithub%40web.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={iconEmail}
                  alt="E-Mail an wurzburg-digitalithub@web.de"
                />
              </a>
            </div>

            <p className={css.copy}>© 2026 Digital IT Hub Würzburg e.V.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
