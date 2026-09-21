import { type ReactNode } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ContextRow } from '../../components/ContextRow/ContextRow';
import { CategoryGrid } from '../../components/CategoryGrid/CategoryGrid';

import { useAppSelector } from '../../store/hooks.ts';

import {
  getCities,
  getCitiesLoadingStatus,
  getCitiesError,
} from '../../store/cities/citiesSelectors.ts';

import {
  getCategories,
  getCategoriesLoadingStatus,
  getCategoriesError,
} from '../../store/categories/categoriesSelectors.ts';

import NotFoundPage from '../NotFoundPage/NotFoundPage.tsx';

import css from './CategoriesPage.module.css';

export default function CategoriesPage() {
  const navigate = useNavigate();

  const { cityId } = useParams<{ cityId: string }>(); // cityId из URL
  const numericCityId = Number(cityId); // useParams возвращает строку, id города в store имеет тип number

  const cities = useAppSelector(getCities); // Данные городов загружаются в App
  const citiesLoading = useAppSelector(getCitiesLoadingStatus);
  const citiesError = useAppSelector(getCitiesError);

  const categories = useAppSelector(getCategories); // Категории загружаются в App
  const categoriesLoading = useAppSelector(getCategoriesLoadingStatus);
  const categoriesError = useAppSelector(getCategoriesError);

  const city = cities.find((city) => city.id === numericCityId); // Находим город по id из URL. Название города не frontend-константе

  // Проверка, появились ли данные в store, если useEffect в App ещё не успел запустить запрос.
  const areCitiesNotReady = citiesLoading || cities.length === 0;

  const areCategoriesNotReady = categoriesLoading || categories.length === 0;

  // Возврат на страницу выбора города. Для открытия страницы по ссылке
  const handleBack = () => {
    navigate('/cities');
  };

  // Переход к фирмам выбранной категории
  const handleCategoryClick = (categoryId: number) => {
    navigate(`/cities/${numericCityId}/categories/${categoryId}/firms`);
  };

  // отдельный обработчик для "Alle Kategorien"
  const handleAllCategoriesClick = () => {
    navigate(`/cities/${numericCityId}/categories/all/firms`);
  };

  // Если некорректный cityId в URL:
  if (!cityId || Number.isNaN(numericCityId)) {
    return <NotFoundPage />;
  }

  // Пока города ещё загружаются, NotFound показывать нельзя.Если данные городов уже загружены,но такого id среди них нет.
  if (!areCitiesNotReady && !city) {
    return <NotFoundPage />;
  }

  // Изменяется только содержимое основной области страницы
  let content: ReactNode;

  if (citiesError) {
    content = <p>Die Stadt konnte nicht geladen werden.</p>;
  } else if (categoriesError) {
    content = <p>Die Kategorien konnten nicht geladen werden.</p>;
  } else if (areCitiesNotReady || areCategoriesNotReady) {
    // Loader в области, где позже появится CategoryGrid.
    content = (
      <div className={css.loaderWrapper}>
        <div
          className={css.spinner}
          role="status"
          aria-label="Daten werden geladen"
        />
      </div>
    );
  } else {
    content = (
      <CategoryGrid
        categories={categories}
        onCategoryClick={handleCategoryClick}
        onAllCategoriesClick={handleAllCategoriesClick}
      />
    );
  }

  return (
    <main className={css.pageContainer}>
      <div className={css.content}>
        <div className={css.contextWrapper}>
          <ContextRow
            // При прямом входе по URL город может ещё загружаться. После появления данных название обновится автоматически.
            title={city?.name ?? ''}
            onBack={handleBack}
          />
        </div>

        <div className={css.gridWrapper}>{content}</div>
      </div>
    </main>
  );
}
