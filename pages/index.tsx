// pages/index.tsx
import React from "react";
import Image from "next/image";

type ServiceGroupProps = {
  title: string;
  items: string[];
};

const ServiceGroup = ({ title, items }: ServiceGroupProps) => (
  <div className="service-group">
    <h3 className="service-group-title">{title}</h3>
    <ul className="service-list">
      {items.map((item, index) => (
        <li key={index} className="service-item">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

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
      {/* Einführungsbereich */}
      <section className="intro-section">
        <div className="intro-image">
          <Image
            src="/images/A 31-24-39 (2).jpg"
            alt="Frau in blauem Kleid im Wald"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="intro-text">
          <h1 className="intro-title">Willkommen</h1>
          <p className="intro-subtitle">
            Als Supervisorin biete ich Einzelsupervision, Teamsupervision und
            Gruppensupervision an.
          </p>
        </div>
      </section>

      {/* Hauptinhalt */}
      <section className="main-content">
        <div className="content-wrapper">
          <div className="text-section">
            <h2 className="section-title">Über Supervision</h2>
            <p className="content-text">
              In der Supervision geht es allgemein um den Austausch und um die
              Reflexion von beruflichen Themen. Supervision ist eine Form der
              beruflichen Beratung und bietet Ihnen einen geschützten Rahmen, um
              Ihre beruflichen Situationen zu reflektieren.
            </p>
            <p className="content-text">
              Wahrgenommene Schwierigkeiten und Probleme im beruflichen Kontext
              zu erforschen, zu verstehen damit Sie Klarheit gewinnen und einen
              Umgang und Lösungsansätze damit finden. Supervision dient zur
              Qualitätssicherung und soll die Qualität der beruflichen Arbeit
              sichern und verbessern.
            </p>
          </div>

          <div className="text-section">
            <h2 className="section-title">Aktuelle Herausforderungen</h2>
            <p className="content-text">
              Die Arbeitswelt unterliegt schneller denn je einem beständigen
              Wandel. Herausforderungen wie hinzukommende Aufgaben, verändernde
              Erwartungen, Umstrukturierungen in Firmen und Betrieben oder neu
              zusammengesetzte Teams führen permanent zu Veränderungen. Mit
              diesen Veränderungen umzugehen, ist ein wichtiges Thema, um
              handlungsfähig und gesund zu bleiben.
            </p>
          </div>

          <ServiceGroup
            title="Ich begleite unter anderem:"
            items={begleiteteGruppen}
          />
        </div>
      </section>
    </main>
  );
}
