// components/uebermich/uebermich.tsx
import React from "react";
import Image from "next/image";

type ExperienceSection = {
  title: string;
  items: string[];
};

const ExperienceList = ({ title, items }: ExperienceSection) => (
  <section className="experience-section">
    <h2 className="section-title">{title}</h2>
    <ul className="experience-list">
      {items.map((item, index) => (
        <li key={index} className="experience-item">
          {item}
        </li>
      ))}
    </ul>
  </section>
);

export default function UeberMich() {
  const feldkompetenzen = [
    "Erfahrung in der Pflege",
    "In der Psychoonkologie",
    "Im Pflegekinderbereich in der Fachberatung",
    "In der Kinder- und Jugendhilfe",
    "Leitung einer EFL-Beratungsstelle",
    "In der Psychologischen Beratung",
  ];

  const ausbildungen = [
    "Diplom Psychologin",
    "Systemische Beratung und Therapie (NIK Bremen)",
    "Psychoonkologie (WPO)",
    "Video Home Training SPIN",
    "Integrierte Familienorientierte Beratung Berlin (EZI/EKFUL)",
    "Supervisorin (DGSv)",
  ];

  return (
    <div className="container">
      <h1 className="title">Über Mich</h1>

      <div className="about-container">
        <div className="about-content">
          <ExperienceList title="Feldkompetenzen" items={feldkompetenzen} />

          <p className="personal-note">
            In Ihren unterschiedlichen Anliegen begleiten und beraten ich Sie
            mit Kompetenz, Erfahrung, Professionalität und Freude.
          </p>

          <ExperienceList
            title="Aus- und Weiterbildungen"
            items={ausbildungen}
          />
        </div>

        <div className="about-image">
          <Image
            src="/images/PortraitFace.jpg"
            alt="Portrait"
            width={500}
            height={350}
            className="portrait"
          />
        </div>
      </div>
    </div>
  );
}
