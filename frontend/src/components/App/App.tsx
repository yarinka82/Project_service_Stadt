import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks.ts';
import { fetchCities } from '../../store/cities/citiesOperations.ts';
import { fetchCategories } from '../../store/categories/categoriesOperations.ts';

import Header from '../Header/Header.tsx';
import Footer from '../Footer/Footer.tsx';

import HomePage from '../../pages/HomePage/HomePage.tsx';
import AglomerationsPage from '../../pages/AglomerationsPage/AglomerationsPage.tsx';
import CategoriesPage from '../../pages/CategoriesPage/CategoriesPage.tsx';
import FirmsPage from '../../pages/FirmsPage/FirmsPage.tsx';
import AnbieterPage from '../../pages/AnbieterPage/AnbieterPage.tsx';

import ImpressumPage from '../../pages/ImpressumPage/ImpressumPage.tsx';
import DatenschutzPage from '../../pages/DatenschutzPage/DatenschutzPage.tsx';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.tsx';

import css from './App.module.css';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCities());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={css.appWrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cities" element={<AglomerationsPage />} />
        <Route path="/cities/:cityId/categories" element={<CategoriesPage />} />
        <Route
          path="/cities/:cityId/categories/:categoryId/firms"
          element={<FirmsPage />}
        />
        <Route
          path="/cities/:cityId/categories/:categoryId/firms/:firmId"
          element={<AnbieterPage />}
        />

        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
