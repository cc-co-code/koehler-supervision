import React from "react";
import Image from "next/image";

export default function Home() {
  const begleiteteGruppen = [
    "Professionelle oder ehrenamtliche Teams und Organisationen",
    "Führungskräfte und Fachkräfte in Leitungsfunktion",
    "Führungskräfte beim Neueinstieg",
    "Beschäftigte in der sozialen Arbeit, z.B. in Kindertagesstätten",
    "Beschäftigte im medizinischen Bereich, z.B. Pflegepersonal oder Praxisteams",
    "Lehrkräfte",
    "Menschen bei einer beruflichen Neuorientierung",
  ];

  return (
    <main>
      <section className="intro-section">
        <div className="intro-image">
          <Image
            src="/images/A 31-24-39 (2).jpg"
            alt="Frau in blauem Kleid im Wald"
            fill
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center 40%",
            }}
          />
        </div>
        <div className="intro-text">
          <h1 className="intro-title">Herzlich Willkommen</h1>
          <p className="intro-subtitle">
            Als Supervisorin biete ich Einzelsupervision, Teamsupervision und
            Gruppensupervision an.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="service-card">
          <h2 className="service-title">Über Supervision</h2>
          <p className="service-description">
            In der Supervision geht es allgemein um die Reflexion von
            beruflichen Themen. Supervision ist eine Form der beruflichen
            Beratung und bietet Ihnen einen geschützten Rahmen, um Ihre
            beruflichen Situationen zu reflektieren.
          </p>
          <p className="service-description">
            Wahrgenommene Schwierigkeiten und Probleme im beruflichen Kontext zu
            erforschen, zu verstehen damit Sie Klarheit gewinnen und einen
            Umgang und Lösungsansätze damit finden. Supervision dient zur
            Einhaltung qualitativer Standards und sichert damit die Qualität der
            beruflichen Arbeit.
          </p>
          <p className="service-description">
            Dies kann umso wichtiger sein, da die Arbeitswelt schneller denn je,
            einem beständigen Wandel unterliegt. Herausforderungen, wie
            hinzukommende Aufgaben, wandelnde Erwartungen, Umstrukturierungen in
            Firmen und Betrieben oder neu zusammengesetzte Teams führen
            permanent zu Veränderungen und Verunsicherung. Mit diesen
            Veränderungen umzugehen, ist ein wichtiges Thema, um handlungsfähig
            und gesund zu bleiben.
          </p>

          <h2 className="service-title">
            Ich begleite Einzelpersonen, Teams und Institutionen, zum Beispiel:
          </h2>
          <ul className="bullet-list">
            {begleiteteGruppen.map((item, index) => (
              <li key={index} className="bullet-item">
                {item}
              </li>
            ))}
          </ul>

          <p className="service-description">
            Supervision ist in Bremen oder Bremerhaven möglich, auch vor Ort.
          </p>
        </div>
      </div>
    </main>
  );
}
