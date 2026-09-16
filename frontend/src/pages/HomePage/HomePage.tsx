// Закомментировано для временного отключения меню
// import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
// import { useState } from "react";
// import SideMenu from "../../components/SideMenu/SideMenu";

import MainContent from '../../components/MainContent/MainContent';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';

import { fetchCities } from '../../store/cities/citiesOperations.ts';
import { getCities } from '../../store/cities/citiesSelectors.ts';

export default function HomePage() {
  const dispatch = useAppDispatch();
  const cities = useAppSelector(getCities);

  // если другой пользователь перейдет по ссылке выбора категории, то перенести в App.tsx `
  useEffect(() => {
    if (cities.length === 0) {    // чтобы не делать лишний запрос, если города уже есть в сторе
      dispatch(fetchCities());
    }
  }, [dispatch, cities.length]);


  // const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <div>
      {/* <BurgerMenu onClick={() => setIsMenuOpen(true)} />

     <SideMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      /> */}

      <MainContent />
    </div>
  );
}
