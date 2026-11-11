import { Link } from 'react-router-dom';
import css from '../ImpressumPage/ImpressumPage.module.css'; // Общие стили с Impressum: обе страницы оформлены одинаково

function DatenschutzPage() {
  return (
    <main className={css.page}>
      <h1>Datenschutzerklärung</h1>

      <section>
        <h2>1. Datenschutz auf einen Blick</h2>

        <section>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>
        </section>

        <section>
          <h3>
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </h3>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten finden Sie unter
            „Verantwortliche Stelle“ sowie im{' '}
            <Link to="/impressum">Impressum</Link>.
          </p>
        </section>

        <section>
          <h3>Wie erfassen wir Ihre Daten?</h3>
          <p>
            Ihre Daten werden erfasst, wenn Sie uns diese aktiv mitteilen, z. B.
            per E-Mail. Andere Daten werden automatisch beim Besuch der Website
            durch unsere IT-Systeme bzw. unseren Hosting-Anbieter erfasst (siehe
            „Server-Log-Dateien“).
          </p>
        </section>

        <section>
          <h3>Wofür nutzen wir Ihre Daten?</h3>
          <p>
            Die Daten werden erhoben, um eine fehlerfreie Bereitstellung der
            Website zu gewährleisten. Eine Analyse Ihres Nutzerverhaltens findet
            nicht statt.
          </p>
        </section>

        <section>
          <h3>Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
          <p>
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
            Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen
            Daten. Sie haben außerdem das Recht, die Berichtigung, Einschränkung
            der Verarbeitung oder Löschung dieser Daten zu verlangen. Hierzu
            können Sie sich jederzeit an die unten angegebene Adresse wenden.
            Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
            Aufsichtsbehörde zu.
          </p>
        </section>
      </section>

      <section>
        <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>

        <section>
          <h3>Datenschutz</h3>
          <p>
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
            behandeln Ihre personenbezogenen Daten vertraulich und entsprechend
            den gesetzlichen Datenschutzvorschriften (insbesondere der DSGVO und
            dem BDSG) sowie dieser Datenschutzerklärung.
          </p>
          <p>
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B.
            bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
            Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
            nicht möglich.
          </p>
        </section>

        <section>
          <h3>Verantwortliche Stelle</h3>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </p>
          <address>
            Digital IT Hub Würzburg e.V.
            <br />
            Den Haager Straße 18
            <br />
            97084 Würzburg
            <br />
            E-Mail:{' '}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=wurzburg-digitalithub%40web.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              wurzburg-digitalithub@web.de
            </a>
          </address>
          <p>
            Vertreten durch den Vorstand: Iryna Velchenko (1. Vorsitzende),
            Illia Rohalskyi (stellvertretender Vorsitzender)
          </p>
          <p>
            Verantwortliche Stelle ist die natürliche oder juristische Person,
            die allein oder gemeinsam mit anderen über die Zwecke und Mittel der
            Verarbeitung von personenbezogenen Daten (z. B. Namen,
            E-Mail-Adressen o. Ä.) entscheidet.
          </p>
        </section>

        <section>
          <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p>
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
            Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
            jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per
            E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
            Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>
        </section>

        <section>
          <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
          <p>
            Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein
            Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständig
            für uns ist das Bayerische Landesamt für Datenschutzaufsicht
            (BayLDA), Promenade 18, 91522 Ansbach,{' '}
            <a
              href="https://www.lda.bayern.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.lda.bayern.de
            </a>
            .
          </p>
        </section>

        <section>
          <h3>SSL- bzw. TLS-Verschlüsselung</h3>
          <p>
            Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw.
            TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
            daran, dass die Adresszeile des Browsers von „http://“ auf
            „https://“ wechselt, und am Schloss-Symbol in Ihrer Browserzeile.
          </p>
        </section>

        <section>
          <h3>Auskunft, Berichtigung, Löschung</h3>
          <p>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
            jederzeit das Recht auf unentgeltliche Auskunft über Ihre
            gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
            und den Zweck der Datenverarbeitung sowie ein Recht auf
            Berichtigung, Einschränkung oder Löschung dieser Daten.
          </p>
        </section>
      </section>

      <section>
        <h2>3. Datenerfassung auf der Website</h2>

        <section>
          <h3>Keine Cookies, keine Analyse-Tools</h3>
          <p>
            Diese Website verwendet keine Cookies und keine Analyse- oder
            Tracking-Tools. Es werden keine Inhalte von Drittanbietern (z. B.
            Videos, Schriftarten oder Karten) nachgeladen. Alle Inhalte werden
            von unserem eigenen Webspace ausgeliefert.
          </p>
        </section>

        <section>
          <h3>Server-Log-Dateien</h3>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch
            Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
            automatisch an uns übermittelt. Dies sind:
          </p>
          <ul>
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p>
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
            nicht vorgenommen.
          </p>
          <p>
            Grundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Unser
            berechtigtes Interesse liegt in der technisch fehlerfreien und
            sicheren Bereitstellung der Website.
          </p>
        </section>

        <section>
          <h3>Kontaktaufnahme per E-Mail</h3>
          <p>
            Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zum Zweck
            der Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen
            bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
            Einwilligung weiter. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
            bzw., wenn Ihre Anfrage auf einen Vertrag oder eine Mitgliedschaft
            abzielt, Art. 6 Abs. 1 lit. b DSGVO. Die Daten werden gelöscht,
            sobald der Zweck entfällt und keine gesetzlichen
            Aufbewahrungsfristen entgegenstehen.
          </p>
        </section>

        <section>
          <h3>Externe Links</h3>
          <p>
            Unsere Website enthält Links zu externen Websites. Beim bloßen
            Anklicken eines Links werden Daten an den jeweiligen Anbieter
            übertragen. Auf diese Datenverarbeitung haben wir keinen Einfluss;
            es gelten die Datenschutzbestimmungen des jeweiligen Anbieters.
          </p>
        </section>
      </section>
    </main>
  );
}

export default DatenschutzPage;
