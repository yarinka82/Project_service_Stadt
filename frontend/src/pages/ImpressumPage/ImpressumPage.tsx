import css from './ImpressumPage.module.css';

function ImpressumPage() {
  return (
    <main className={css.page}>
      <h1>Impressum</h1>

      <section>
        <h2>Angaben gemäß § 5 DDG</h2>

        <address>
          Digital IT Hub in Würzburg e.V.
          <br />
          Den Haager Straße 18
          <br />
          97084 Würzburg
        </address>
      </section>

      <section>
        <h2>Vertreten durch den Vorstand:</h2>

        <p>
          Iryna Velchenko (1. Vorsitzende)
          <br />
          Illia Rohalskyi (stellvertretender Vorsitzender)
        </p>
      </section>

      <section>
        <h2>Kontakt:</h2>

        <p>
          E-Mail:{' '}
          <a href="mailto:wurzburg-digitalithub@web.de">
            wurzburg-digitalithub@web.de
          </a>
        </p>
      </section>

      <section>
        <h2>Vereinsregister:</h2>

        <p>
          Registergericht: Amtsgericht Würzburg
          <br />
          Registernummer: VR201695
        </p>
      </section>

      <section>
        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</h2>

        <address>
          Iryna Velchenko
          <br />
          Den Haager Straße 18
          <br />
          97084 Würzburg
        </address>
      </section>

      <section>
        <h2>Haftung für Inhalte</h2>

        <p>
          Als Diensteanbieter sind wir gemäß den allgemeinen Gesetzen für eigene
          Inhalte auf diesen Seiten verantwortlich. Wir sind jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen. Bei Bekanntwerden von Rechtsverletzungen werden wir
          entsprechende Inhalte umgehend entfernen.
        </p>
      </section>

      <section>
        <h2>Haftung für Links</h2>

        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte können
          wir keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
          stets der jeweilige Anbieter verantwortlich.
        </p>
      </section>

      <section>
        <h2>Urheberrecht</h2>

        <p>
          Die durch uns erstellten Inhalte und Werke auf diesen Seiten
          unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als
          solche gekennzeichnet. Vervielfältigung, Bearbeitung und Verbreitung
          bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
          Erstellers.
        </p>
      </section>
    </main>
  );
}

export default ImpressumPage;
