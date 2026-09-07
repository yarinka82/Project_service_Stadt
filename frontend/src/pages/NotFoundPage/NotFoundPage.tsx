import { useNavigate } from "react-router-dom";
import css from "./NotFoundPage.module.css";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <main className={css.page}>
        <div className={css.titleRow}>
         <button
            className={css.backButton}
            onClick={() => navigate(-1)}
          >
            <span className={css.arrow}>&lt;</span>
            <span>Zurück zur Startseite</span>
          </button>
        </div>

        <div className={css.errorContent}>
            <span className={css.errorCode}>404</span>
            <p>Ups! Diese Seite wurde nicht gefunden</p>
        </div>


    </main>
  );
}

export default NotFoundPage;