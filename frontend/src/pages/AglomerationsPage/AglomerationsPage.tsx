import { useNavigate } from "react-router-dom";
import css from "./AglomerationsPage.module.css";
import flagFrankfurt from "../../assets/png/flagge_Frankfurt.png";
import flagMunchen from "../../assets/png/flagge_Munchen.png";
import flagWurzburg from "../../assets/png/flagge_Wurzburg.png";
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';


function AglomerationsPage() {
  const navigate = useNavigate();

  const cities = useSelector(
    (state: RootState) => state.aglomerations.items
  );

  const loading = useSelector(
    (state: RootState) => state.aglomerations.loading
  );

  const flags = [flagFrankfurt, flagMunchen, flagWurzburg];

  if (loading) {
    return <p>Loading...</p>;
  }



  return (
    <main className={css.page}>
      <div>
        <div className={css.titleRow}>
         <button
            className={css.backButton}
            onClick={() => navigate(-1)}
          >
            <span className={css.arrow}>&lt;</span>
            <span>Zurück zur Startseite</span>
          </button>
        </div>

        <div className={css.citySelection}>
          <h1 className={css.title}>Stadt auswählen</h1>
          <ul className={css.cityList}>
            {cities.map((city, index) => (
              <li key={city.id}>
                <button className={css.cityButton}>
                  <img src={flags[index]} alt="" className={css.flag}/>
                  {city.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default AglomerationsPage;