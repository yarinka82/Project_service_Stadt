import css from "./Footer.module.css";

import logoITHub from "../../assets/svg/logo_itHub.svg";
import iconInsta from "../../assets/svg/insta icon.svg";
import iconLinkedin from "../../assets/svg/linkedin-icon.svg";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.whiteLine}></div>

      <div className={css.container}>

        {/* 1. LOGO */}
        <div className={css.logoBox}>
          <img src={logoITHub} alt="Logo IT Hub" />
        </div>

        {/* 2. LEGAL LINKS */}
        <div className={css.legalLinks}>
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutzerklärung</Link>
        </div>

        {/* 3. RIGHT SIDE */}
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

          <p className={css.copy}>
            © 2026 HUB IT. All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
}