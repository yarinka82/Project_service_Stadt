import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import SearchPage from '../SearchPage/SearchPage';
import './App.tsx';
import Header from '../../components/Header/Header.tsx';
import Footer from '../../components/Footer/Footer.tsx';
import AglomerationsPage from '../AglomerationsPage/AglomerationsPage.tsx';
import ImpressumPage from "../ImpressumPage/ImpressumPage.tsx";
import DatenschutzPage from "../DatenschutzPage/DatenschutzPage.tsx";

function App() {
  return (
    <div className='appWrapper'>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
          <Route
        path="/aglomerations"
        element={<AglomerationsPage />}
        />
      
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element="not found" />

        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
