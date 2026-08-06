import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import SearchPage from '../SearchPage/SearchPage';
import './App.css';
import Header from '../../components/Header/Header.tsx';
import Footer from '../../components/Footer/Footer.tsx';
import AglomerationsPage from '../AglomerationsPage/AglomerationsPage.tsx';
import CategoriesPage from '../CategoriesPage/CategoriesPage.tsx'; 

function App() {
  return (
    <div className="appWrapper">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aglomerations" element={<AglomerationsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element="not found" />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
