import { useEffect, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../store/hooks.ts';
import { fetchCities } from '../../store/cities/citiesOperations.ts';
import {
  getCities,
  getLoadingStatus,
  getError,
} from '../../store/cities/citiesSelectors.ts';

import flagFrankfurt from '../../assets/png/flagge_Frankfurt.png';
import flagMunchen from '../../assets/png/flagge_Munchen.png';
import flagWurzburg from '../../assets/png/flagge_Wurzburg.png';

import css from './AglomerationsPage.module.css';

const CITY_FLAGS: Record<number, string> = {
  1: flagFrankfurt,
  2: flagMunchen,
  3: flagWurzburg,
};

function AglomerationsPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const loading = useAppSelector(getLoadingStatus);
  const error = useAppSelector(getError);
  const cities = useAppSelector(getCities);

  useEffect(() => {
    if (cities.length === 0) {
      // чтобы не делать лишний запрос, если города уже есть в сторе
      dispatch(fetchCities());
    }
  }, [dispatch, cities.length]);

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
          <button className={css.backButton} onClick={() => navigate(-1)}>
            <span className={css.arrow}>&lt;</span>
            <span>Zurück zur Startseite</span>
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
