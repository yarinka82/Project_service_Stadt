// import css from './MainContent.module.css';
import StadtAuswählenButton from "../StadtAuswählenButton/StadtAuswählenButton";

function MainContent() {
  return (
    <div>
        <h1> Dienstleistungen, <br />
             die einfach passen
        </h1>
        <p>  Werkstätten, Fahrräder, IT-Service, <br />
             Mode und Friseure — übersichtlich, <br /> 
             bewertet, direkt erreichbar.
        </p>

        <StadtAuswählenButton />
   </div>

  );
}

export default MainContent;
