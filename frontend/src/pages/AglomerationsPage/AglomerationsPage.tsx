import { type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks.ts';

import {
  getCities,
  getCitiesLoadingStatus,
  getCitiesError,
} from '../../store/cities/citiesSelectors.ts';

import flagFrankfurt from '../../assets/png/flagge_frankfurt.png';
import flagMunchen from '../../assets/png/flagge_Munchen.png';
import flagWurzburg from '../../assets/png/flagge_wurzburg.png';
import iconBackArrow from '../../assets/svg/page3/left.svg';
import css from './AglomerationsPage.module.css';

const CITY_FLAGS: Record<number, string> = {
  1: flagFrankfurt,
  2: flagMunchen,
  3: flagWurzburg,
};

function AglomerationsPage() {
  const navigate = useNavigate();
  const loading = useAppSelector(getCitiesLoadingStatus);
  const error = useAppSelector(getCitiesError);
  const cities = useAppSelector(getCities);

  const handleBack = () => {
    navigate('/');
  };

  let content: ReactNode;
  if (loading) {
    content = <p>Städte werden geladen...</p>;
  } else if (error) {
    content = <p>Die Städte konnten nicht geladen werden.</p>;
  } else {
    content = (
      <ul className={css.cityList}>
        {cities.map((city) => (
          <li key={city.id}>
            <button
              className={css.cityButton}
              onClick={() => navigate(`/cities/${city.id}/categories`)}
            >
              <img src={CITY_FLAGS[city.id]} alt="" className={css.flag} />
              {city.name}
            </button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <main className={css.page}>
      <div>
        <div className={css.titleRow}>
          {/* Только стрелка, как на стр. 3 и 4; текст "Zurück zur Startseite" - только на 404 */}
          <button
            type="button"
            className={css.backButton}
            onClick={handleBack}
            aria-label="Zurück zur Startseite"
          >
            <img
              src={iconBackArrow}
              alt=""
              aria-hidden="true"
              className={css.backIcon}
            />
          </button>
        </div>

        <div className={css.citySelection}>
          <h1 className={css.title}>Stadt auswählen</h1>
          {content}
        </div>
      </div>
    </main>
  );
}

export default AglomerationsPage;
