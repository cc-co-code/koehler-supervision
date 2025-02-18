// angebote.tsx
import React from "react";

type ServiceProps = {
  title: string;
  description: string;
  bulletPoints?: string[];
  additionalText?: string; // Neue Prop für den Zwischentext
  finalBulletPoints?: string[]; // Neue Prop für die letzten Bullet Points
};

const ServiceCard = ({
  title,
  description,
  bulletPoints,
  additionalText,
  finalBulletPoints,
}: ServiceProps) => (
  <div className="service-card">
    <h2 className="service-title">{title}</h2>
    <p className="service-description">{description}</p>
    {bulletPoints && bulletPoints.length > 0 && (
      <ul className="bullet-list">
        {bulletPoints.map((point, index) => (
          <li key={index} className="bullet-item">
            {point}
          </li>
        ))}
      </ul>
    )}
    {additionalText && (
      <p className="service-additional-text">{additionalText}</p>
    )}
    {finalBulletPoints && finalBulletPoints.length > 0 && (
      <ul className="bullet-list">
        {finalBulletPoints.map((point, index) => (
          <li key={index} className="bullet-item">
            {point}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default function Angebote() {
  return (
    <div className="container">
      <h1 className="title">Meine Angebote</h1>

      <ServiceCard
        title="Fallsupervision"
        description="Im Zentrum der Fallsupervision steht die direkte Interaktion mit dem Klienten und die Falldynamik. Miteinbezogen wird die Interaktion mit dem falleinbringenden Menschen, als auch das umgebende System und der Kontext."
        bulletPoints={[
          "Fallsupervision hilft beim Verstehen von Fällen und kann die darunter liegenden unbewussten Motive, sowie die zugrunde liegende Falldynamik zu Tage fördern.",
          "Dies unterstützt das Fallverstehen und kann hilfreich beim Entwickeln neuer Handlungsmöglichkeiten und Perspektiven sein.",
          "Sie fördert die Entlastung der Handelnden durch Reflexion.",
        ]}
      />

      <ServiceCard
        title="Teamsupervision"
        description="In der Teamsupervision steht das Team und Teamthemen im Mittelpunkt. In der Teamsupervision ist beispielsweise die Klärung von:"
        bulletPoints={[
          "Rolle, Aufgabe und dazugehörigen Strukturen",
          "Konflikte innerhalb eines Teams können in konstruktiver Art und Weise und im geschützten Rahmen bearbeitet werden, so dass sich die Teamsituation verbessert und die Arbeitszufriedenheit sich wieder erhöht.",
        ]}
      />

      <ServiceCard
        title="Gruppensupervision"
        description="In der Gruppensupervision kommen Menschen aus ähnlichen beruflichen Feldern zusammen und besprechen und reflektieren gemeinsam Fälle. Durch den gemeinsamen Austausch und die Reflexion wird die eigene berufliche Sicht überprüft und es ergeben sich neue Perspektiven und Handlungsoptionen."
      />

      <ServiceCard
        title="Einzelsupervision"
        description="In der Einzelsupervision werden individuelle Anliegen der Supervisanden bearbeitet. Etwa:"
        bulletPoints={[
          "die eigenen Stärken und Ressourcen herauszuarbeiten",
          "Lösungswege für berufliche Herausforderungen zu finden",
          "die eigene Berufsidentität zu stärken",
          "...",
        ]}
      />

      <ServiceCard
        title="Coaching"
        description="Berufliches Coaching ist ein Beratungsformat für Führungskräfte, die ihre eigene Rolle reflektieren und gestalten möchten. Die ihre Führungskompetenzen erweitern und ihre Fähigkeiten und persönlichen Bedürfnisse vergegenwärtigen. Themen können sein:"
        bulletPoints={[
          "Klarheit und Stärkung der eigenen Rolle",
          "den eignen Führungsstil zu reflektieren",
          "Veränderungen zu initiieren",
          "berufliche Neuorientierung oder Entscheidungsfindung",
          "...",
        ]}
        additionalText="Das Coaching richtet sich an Führungskräfte und Mitarbeitende, die sich beruflich verändern möchten. Es findet bei Ihnen vor Ort, online oder in Bremen statt."
        finalBulletPoints={[
          "Führungskräfte, die ihre eigene Rolle reflektieren und gestalten möchten. Die ihre Führungskompetenzen erweitern und ihre persönlichen Bedürfnisse und Fähigkeiten dabei im Blick behalten wollen",
          "Mitarbeitende, die ihre Stärken fokussieren und ihre Kompetenzen optimal ins Team und Unternehmen einbringen möchten. Die Klarheit über ihre weitere berufliche Laufbahn gewinnen möchten",
        ]}
      />
    </div>
  );
}
