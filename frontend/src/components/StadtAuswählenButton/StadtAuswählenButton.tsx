import { Link } from "react-router-dom";
import css from "./StadtAuswählenButton.module.css";

function StadtAuswählenButton() {
  return (
    <Link to="/aglomerations" className={css.button}>
      <span className={css.icon}>🔍︎</span>
      Stadt auswählen
    </Link>
  );
}

export default StadtAuswählenButton;