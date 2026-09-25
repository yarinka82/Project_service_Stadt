import { useEffect, useState, type ReactNode } from 'react';
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

import {
  CATEGORY_ICONS,
  ALL_CATEGORIES_ICON,
} from '../../constants/categoryIcons';

import { FirmsGrid } from '../../components/FirmsGrid/FirmsGrid';
import { FirmsPageHeader } from '../../components/FirmsPageHeader/FirmsPageHeader';
import { MapPlaceholder } from '../../components/MapPlaceholder/MapPlaceholder';

import type { FirmsViewMode } from '../../components/ViewToggle/ViewToggle';

import NotFoundPage from '../NotFoundPage/NotFoundPage';

import css from './FirmsPage.module.css';

export default function FirmsPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [viewMode, setViewMode] = useState<FirmsViewMode>('list');

  // Получаем город и категорию из URL. напр./cities/1/categories/5/firms
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
    content = (
      <p className={css.message}>Die Stadt konnte nicht geladen werden.</p>
    );
  } else if (categoriesError) {
    content = (
      <p className={css.message}>
        Die Kategorien konnten nicht geladen werden.
      </p>
    );
  } else if (
    areCitiesNotReady ||
    areCategoriesNotReady ||
    (firmsLoading && firms.length === 0)
  ) {
    // Первая загрузка списка
    content = (
      <div className={css.loaderWrapper}>
        <div
          className={css.spinner}
          role="status"
          aria-label="Anbieter werden geladen"
        />
      </div>
    );
  } else if (firmsError && firms.length === 0) {
    // Ошибка первой загрузки
    content = (
      <p className={css.message}>Die Anbieter konnten nicht geladen werden.</p>
    );
  } else if (firms.length === 0) {
    content = <p className={css.message}>Keine Anbieter gefunden.</p>;
  } else if (viewMode === 'map') {
    content = <MapPlaceholder />;
  } else {
    content = (
      <>
        <FirmsGrid firms={firms} onFirmClick={handleFirmClick} />

        {/* Ошибка при загрузке следующей страницы: уже загруженные фирмы остаются на экране */}
        {firmsError && (
          <p className={css.loadMoreError}>
            Weitere Anbieter konnten nicht geladen werden.
          </p>
        )}

        {/* Кнопка скрывается после последней страницы */}
        {hasMore && (
          <div className={css.loadMoreWrapper}>
            <button
              type="button"
              className={css.loadMoreButton}
              onClick={handleLoadMore}
              disabled={firmsLoading}
            >
              {firmsLoading ? 'Wird geladen...' : 'Mehr laden'}
            </button>
          </div>
        )}
      </>
    );
  }

  // Для "all" показываем отдельное название, иначе название категории берём из backend
  const title = isAllCategories ? 'Alle Kategorien' : (category?.name ?? '');

  const categoryIcon = isAllCategories
    ? ALL_CATEGORIES_ICON
    : category
      ? CATEGORY_ICONS[category.id]
      : undefined;

  return (
    <main className={css.pageContainer}>
      <div className={css.content}>
        <div className={css.headerWrapper}>
          <FirmsPageHeader
            title={title}
            cityName={city?.name ?? ''}
            resultCount={firmsTotal}
            categoryIcon={categoryIcon}
            mode={viewMode}
            onBack={handleBack}
            onModeChange={setViewMode}
          />
        </div>

        <div className={css.resultsWrapper}>{content}</div>
      </div>
    </main>
  );
}
