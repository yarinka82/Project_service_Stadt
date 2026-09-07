import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import SearchPage from '../SearchPage/SearchPage';
import Header from '../../components/Header/Header.tsx';
import Footer from '../../components/Footer/Footer.tsx';
import AglomerationsPage from '../AglomerationsPage/AglomerationsPage.tsx';
import ImpressumPage from "../ImpressumPage/ImpressumPage.tsx";
import DatenschutzPage from "../DatenschutzPage/DatenschutzPage.tsx";
import NotFoundPage from "../NotFoundPage/NotFoundPage.tsx"
import css from "./App.module.css"

function App() {
  return (
    <div className={css.appWrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
          <Route
        path="/aglomerations"
        element={<AglomerationsPage />}
        />
      
        <Route path="/search" element={<SearchPage />} />

        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
