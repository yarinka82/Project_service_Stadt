import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import SearchPage from '../SearchPage/SearchPage';
import './App.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element="not found" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
