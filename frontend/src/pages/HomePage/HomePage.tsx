import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import { useState } from "react";

export default function HomePage() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <BurgerMenu onClick={() => setIsMenuOpen(true)} />

        <p>Меню открыто: {isMenuOpen ? "Да" : "Нет"}</p>

      <h1>home</h1>
    </div>
  );
}

