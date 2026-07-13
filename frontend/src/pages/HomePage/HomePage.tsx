import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import { useState } from "react";
import SideMenu from "../../components/SideMenu/SideMenu";

export default function HomePage() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <BurgerMenu onClick={() => setIsMenuOpen(true)} />

     <SideMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      <h1>home</h1>
    </div>
  );
}

