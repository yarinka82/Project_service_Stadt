import logoItHub from '../../assets/svg/logo_itHub.svg';
import closeIcon from '../../assets/svg/close_demo.svg';

import css from './DemoBanner.module.css';

interface DemoBannerProps {
  onClose: () => void;
}

export default function DemoBanner({ onClose }: DemoBannerProps) {
  return (
    <div
      className={css.banner}
      role="dialog"
      aria-labelledby="demo-banner-title"
      aria-describedby="demo-banner-description"
    >
      <button
        className={css.closeButton}
        type="button"
        aria-label="Schließen"
        onClick={onClose}
      >
        <img src={closeIcon} alt="" width={24} height={24} />
      </button>

      <img className={css.logo} src={logoItHub} alt="" width={47} height={47} />

      <h2 className={css.title} id="demo-banner-title">
        Testversion
      </h2>

      <div className={css.description} id="demo-banner-description">
        <p className={css.intro}>Diese App befindet sich in der Testphase</p>

        <p className={css.notice}>
          Alle Daten und Bilder wurden mit KI generiert. Die Daten sind fiktiv
          und enthalten keine echten Nutzerinformationen.
        </p>

        <p className={css.feedback}>Feedback: info@thedigitalhub.com</p>
      </div>

      <button className={css.confirmButton} type="button" onClick={onClose}>
        Verstanden
      </button>
    </div>
  );
}
