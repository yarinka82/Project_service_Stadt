import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header.tsx';
import Footer from '../Footer/Footer.tsx';

import HomePage from '../../pages/HomePage/HomePage.tsx';
import AglomerationsPage from '../../pages/AglomerationsPage/AglomerationsPage.tsx';
import CategoriesPage from '../../pages/CategoriesPage/CategoriesPage.tsx';
// import SearchPage from '../../pages/SearchPage/SearchPage.tsx';

import ImpressumPage from '../../pages/ImpressumPage/ImpressumPage.tsx';
import DatenschutzPage from '../../pages/DatenschutzPage/DatenschutzPage.tsx';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.tsx';

import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks.ts';
import { fetchAglomerations } from '../../store/aglomerationsSlice.ts';

import css from './App.module.css';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAglomerations());
  }, [dispatch]);

  return (
    <div className={css.appWrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aglomerations" element={<AglomerationsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        {/* <Route path="/search" element={<SearchPage />} /> */}

        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
