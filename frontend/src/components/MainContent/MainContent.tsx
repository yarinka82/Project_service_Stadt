import css from './MainContent.module.css';
import StadtAuswählenButton from "../StadtAuswählenButton/StadtAuswählenButton";

function MainContent() {
  return (
        <div className={css.content}>
            <h1 className={css.h1}> Dienstleistungen, <br className={css.mobileBreak} />
                 die einfach passen
            </h1>
            <p className={css.p}>  Werkstätten, Fahrräder, IT-Service, <br className={css.mobileBreak} />
                 Mode und Friseure — übersichtlich, <br className={css.mobileBreak}/> 
                 bewertet, direkt erreichbar.
            </p>

            <StadtAuswählenButton />
        </div>

  );
}

export default MainContent;
