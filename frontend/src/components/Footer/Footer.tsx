import css from "./Footer.module.css";
import logoITHub from "../../assets/svg/logo_itHub.svg";
import iconInsta from "../../assets/svg/insta icon.svg"
import iconLinkedin from "../../assets/svg/linkedin-icon.svg"

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.whiteLine}></div>

      <div className={css.container}>
        <div className={css.logo}>
          <div className={css.logoBox}>
            <img src={logoITHub} alt="Logo IT Hub" />
          </div>
        </div>

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
