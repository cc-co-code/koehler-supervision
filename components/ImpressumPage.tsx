import React from "react";

const Impressum = () => {
  return (
    <div className="container">
      <h1 className="title">Impressum</h1>

      <div className="service-card">
        <h2 className="service-title">Angaben gemäß § 5 TMG</h2>
        <div className="impressum-section">
          <p>Christiane Köhler</p>
          <p>Vogelweide 37</p>
          <p>28215 Bremen</p>
        </div>

        <h2 className="service-title">Kontakt</h2>
        <div className="impressum-section">
          <p>E-Mail: info@koehlersupervision.de</p>
        </div>

        <h2 className="service-title">Verantwortlich für den Inhalt</h2>
        <div className="impressum-section">
          <p>Christiane Köhler</p>
          <p>Freiberufliche Supervisorin und Coach</p>
        </div>

        <h2 className="service-title">Haftung für Inhalte</h2>
        <div className="impressum-section">
          <p>
            Als Diensteanbieterin bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG bin ich als Diensteanbieterin jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese
            Inhalte umgehend entfernen.
          </p>
        </div>

        <h2 className="service-title">Urheberrecht</h2>
        <div className="impressum-section">
          <p>
            Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung der jeweiligen Autorin bzw. Erstellerin.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht von der Betreiberin
            erstellt wurden, werden die Urheberrechte Dritter beachtet.
            Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
            Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
            werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden
            von Rechtsverletzungen werde ich derartige Inhalte umgehend
            entfernen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
