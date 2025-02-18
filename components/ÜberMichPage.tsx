import React from "react";
import Image from "next/image";

type ExperienceItem = {
  content: string;
  type?: "text" | "image";
  imageProps?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

type ExperienceSection = {
  title: string;
  items: ExperienceItem[];
};

const ExperienceList = ({ title, items }: ExperienceSection) => (
  <section className="experience-section">
    <h2 className="section-title">{title}</h2>
    <ul className="experience-list">
      {items.map((item, index) => (
        <li key={index} className="experience-item">
          {item.type === "image" && item.imageProps ? (
            <div className="image-container">
              <Image
                src={item.imageProps.src}
                alt={item.imageProps.alt}
                width={item.imageProps.width}
                height={item.imageProps.height}
                className="inline-image"
              />
            </div>
          ) : (
            item.content
          )}
        </li>
      ))}
    </ul>
  </section>
);

export default function UeberMich() {
  const feldkompetenzen: ExperienceItem[] = [
    { content: "Erfahrung in der Pflege" },
    { content: "In der Psychoonkologie" },
    { content: "Im Pflegekinderbereich in der Fachberatung" },
    { content: "In der Kinder- und Jugendhilfe" },
    { content: "Leitung einer EFL-Beratungsstelle" },
    { content: "In der Psychologischen Beratung" },
  ];

  const ausbildungen: ExperienceItem[] = [
    { content: "Diplom Psychologin" },
    { content: "Systemische Beratung und Therapie (NIK Bremen)" },
    { content: "Psychoonkologie (WPO)" },
    { content: "Video Home Training SPIN" },
    { content: "Integrierte Familienorientierte Beratung Berlin (EZI/EKFUL)" },
    {
      content:
        "Ich nehme regelmäßig Kontrollsupervision in Anspruch, um meine Arbeit zu reflektieren.",
    },
    {
      content:
        "Ich bin Mitglied in einer Intervisionsgruppe um mich mit anderen Supervisor:innen fachlich auszutauschen.",
    },
    {
      content:
        "Ich bin Mitglied der Deutschen Gesellschaft für Supervision und Coaching e.V. (DGSV)",
    },
    {
      type: "image",
      content: " ", // Leerer String mit Leerzeichen, damit kein Bullet Point erscheint
      imageProps: {
        src: "/images/dgsv-logo.jpg",
        alt: "DGSV Logo",
        width: 150,
        height: 150,
      },
    },
  ];

  return (
    <div className="container">
      <h1 className="title">Über mich</h1>

      <div className="about-container">
        <div className="about-content">
          <ExperienceList title="Feldkompetenzen" items={feldkompetenzen} />

          <p className="personal-note">
            In Ihren unterschiedlichen Anliegen begleite und berate ich Sie mit
            Kompetenz, Erfahrung, Professionalität und Freude.
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
