import React from 'react';
import css from './HomePage.module.css';
import bannerImage from '../../assets/ban_container.jpg';
import SearchForm from '../../components/SearchForm/SearchForm'; // Search form
// import MetaStrip from '../../components/MetaStrip/MetaStrip'; ()// provisional title

function HomePage() {
  return (
    <main className={css.homeContainer}>
      {/* A place for burgers and counters
      <MetaStrip /> */}
      <div className={css.metaStripPlaceholder}>
        <p>Hier wird das MetaStrip (Menü) erscheinen</p>
      </div>

      <section className={css.heroSection}>
        <h1 className={css.title}>
          Dienstleistungen,
          <br />
          <span className={css.titleHighlight}>die einfach passen</span>
        </h1>
        <p className={css.subtitle}>
          Werkstätten, Fahrräder, IT-Service, Mode und Friseure - übersichtlich,
          bewertet, direkt erreichbar.
        </p>
      </section>

      <SearchForm />

      <section className={css.promoSection}>
        <img src={bannerImage} alt="Werbung" className={css.promoImage} />
      </section>
    </main>
  );
}

export default HomePage;
