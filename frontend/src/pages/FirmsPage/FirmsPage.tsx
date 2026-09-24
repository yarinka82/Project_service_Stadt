import { useEffect, type ReactNode } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../store/hooks';

import {
  getCities,
  getCitiesLoadingStatus,
  getCitiesError,
} from '../../store/cities/citiesSelectors';

import {
  getCategories,
  getCategoriesLoadingStatus,
  getCategoriesError,
} from '../../store/categories/categoriesSelectors';

import {
  getFirms,
  getFirmsTotal,
  getFirmsPagination,
  getFirmsHasMore,
  getFirmsLoadingStatus,
  getFirmsError,
} from '../../store/firms/firmsSelectors';

import { fetchFirms } from '../../store/firms/firmsOperations';

import { FIRMS_PAGE_LIMIT, resetFirmsList } from '../../store/firms/firmsSlice';

import NotFoundPage from '../NotFoundPage/NotFoundPage';

import css from './FirmsPage.module.css';

export default function FirmsPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // Получаем город и категорию из URL. /cities/1/categories/5/firms
  const { cityId, categoryId } = useParams<{
    cityId: string;
    categoryId: string;
  }>();

  // useParams возвращает строки, а id города в store имеет тип number
  const numericCityId = Number(cityId);

  // "all" используется в URL для выбора всех категорий
  const isAllCategories = categoryId === 'all';

  // Для "all" categoryId не отправляем на backend
  const numericCategoryId = isAllCategories ? undefined : Number(categoryId);

  // Города загружаются глобально в App
  const cities = useAppSelector(getCities);
  const citiesLoading = useAppSelector(getCitiesLoadingStatus);
  const citiesError = useAppSelector(getCitiesError);

  // Категории загружаются глобально в App
  const categories = useAppSelector(getCategories);
  const categoriesLoading = useAppSelector(getCategoriesLoadingStatus);
  const categoriesError = useAppSelector(getCategoriesError);

  // Данные списка фирм
  const firms = useAppSelector(getFirms);
  const firmsTotal = useAppSelector(getFirmsTotal);
  const pagination = useAppSelector(getFirmsPagination);
  const hasMore = useAppSelector(getFirmsHasMore);
  const firmsLoading = useAppSelector(getFirmsLoadingStatus);
  const firmsError = useAppSelector(getFirmsError);

  // Находим выбранный город по id из URL
  const city = cities.find((city) => city.id === numericCityId);

  // Для "Alle Kategorien" конкретной категории нет
  const category = isAllCategories
    ? null
    : categories.find((category) => category.id === numericCategoryId);

  // На первом render данные могут ещё не успеть загрузиться в store
  const areCitiesNotReady = citiesLoading || cities.length === 0;

  const areCategoriesNotReady = categoriesLoading || categories.length === 0;

  // Проверяем корректность параметров URL
  const invalidCityId = !cityId || Number.isNaN(numericCityId);

  const invalidCategoryId =
    !categoryId || (!isAllCategories && Number.isNaN(numericCategoryId));

  // После получения города и категории загружаем первую страницу фирм
  useEffect(() => {
    if (
      invalidCityId ||
      invalidCategoryId ||
      areCitiesNotReady ||
      areCategoriesNotReady ||
      !city ||
      (!isAllCategories && !category)
    ) {
      return;
    }
    // Удаляем список от предыдущего города/категории
    dispatch(resetFirmsList());

    dispatch(
      fetchFirms({
        aglomerationId: numericCityId,
        ...(numericCategoryId !== undefined && {
          categoryId: numericCategoryId,
        }),
        page: 1,
        limit: FIRMS_PAGE_LIMIT,
      })
    );
  }, [
    dispatch,
    invalidCityId,
    invalidCategoryId,
    areCitiesNotReady,
    areCategoriesNotReady,
    city,
    category,
    isAllCategories,
    numericCityId,
    numericCategoryId,
  ]);

  // Возврат к категориям выбранного города
  const handleBack = () => {
    navigate(`/cities/${numericCityId}/categories`);
  };

  // Переход на страницу выбранной фирмы
  const handleFirmClick = (firmId: string) => {
    navigate(
      `/cities/${numericCityId}/categories/${categoryId}/firms/${firmId}`
    );
  };

  // Загружаем следующую страницу и добавляем её к существующему списку
  const handleLoadMore = () => {
    if (!hasMore || firmsLoading) {
      return;
    }

    dispatch(
      fetchFirms({
        aglomerationId: numericCityId,
        ...(numericCategoryId !== undefined && {
          categoryId: numericCategoryId,
        }),
        page: pagination.page + 1,
        limit: pagination.limit,
      })
    );
  };

  // Некорректные параметры URL
  if (invalidCityId || invalidCategoryId) {
    return <NotFoundPage />;
  }

  // Данные городов уже загружены, но города с таким id нет
  if (!areCitiesNotReady && !city) {
    return <NotFoundPage />;
  }

  // Данные категорий уже загружены, но категории с таким id нет
  if (!areCategoriesNotReady && !isAllCategories && !category) {
    return <NotFoundPage />;
  }

  // Временное содержимое страницы до финальной вёрстки карточек
  let content: ReactNode;

  if (citiesError) {
    content = <p>Die Stadt konnte nicht geladen werden.</p>;
  } else if (categoriesError) {
    content = <p>Die Kategorien konnten nicht geladen werden.</p>;
  } else if (firmsLoading && firms.length === 0) {
    // Первая загрузка списка
    content = <p>Anbieter werden geladen...</p>;
  } else if (firmsError && firms.length === 0) {
    // Ошибка первой загрузки
    content = <p>Die Anbieter konnten nicht geladen werden.</p>;
  } else {
    content = (
      <>
        <p>{firmsTotal} Anbieter</p>

        {/* Временный список для проверки данных */}
        <ul>
          {firms.map((firm) => (
            <li key={firm.id}>
              <button type="button" onClick={() => handleFirmClick(firm.id)}>
                {firm.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Ошибка при загрузке следующей страницы: уже загруженные фирмы остаются на экране */}
        {firmsError && <p>Weitere Anbieter konnten nicht geladen werden.</p>}

        {/* Кнопка скрывается после последней страницы */}
        {hasMore && (
          <button
            type="button"
            onClick={handleLoadMore}
            disabled={firmsLoading}
          >
            {firmsLoading ? 'Wird geladen...' : 'Mehr laden'}
          </button>
        )}
      </>
    );
  }

  // Для "all" показываем отдельное название, иначе название категории берём из backend
  const title = isAllCategories ? 'Alle Kategorien' : (category?.name ?? '');

  return (
    <main className={css.page}>
      <button type="button" onClick={handleBack}>
        Zurück
      </button>

      <h1>{title}</h1>

      {content}
    </main>
  );
}
