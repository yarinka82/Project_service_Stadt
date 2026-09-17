// Закомментировано для временного отключения меню
// import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
// import { useState } from "react";
// import SideMenu from "../../components/SideMenu/SideMenu";

import MainContent from '../../components/MainContent/MainContent';

export default function HomePage() {
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
