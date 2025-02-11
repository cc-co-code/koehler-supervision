import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <div className="content-container">
          <Image
            src="/images/A 31-24-39 (2).jpg"
            alt="Frau in blauem Kleid im Wald"
            width={500}
            height={350}
            className="portrait-image"
            priority
          />
          <p className="intro-text">
            als Supervisorin biete ich Einzelsupervision, Teamsupervision und
            Gruppensupervision an. In der Supervision geht es allgemein um den
            Austausch und um die Reflexion von beruflichen Themen. Supervision
            ist eine Form der beruflichen Beratung und bietet Ihnen einen
            geschützten Rahmen, um Ihre beruflichen Situationen zu reflektieren.
            Wahrgenommene Schwierigkeiten und Probleme im beruflichen Kontext zu
            erforschen, zu verstehen damit Sie Klarheit gewinnen und einen
            Umgang und Lösungsansätze damit finden. Supervision dient zur
            Qualitätssicherung und soll die Qualität der beruflichen Arbeit
            sichern und verbessern. Dies kann umso wichtiger sein, da die
            Arbeitswelt schneller denn je, einem beständigen Wandel unterliegt.
             Herausforderungen, wie hinzukommende Aufgaben, verändernde
            Erwartungen, Umstrukturierungen in Firmen und Betrieben oder neu
            zusammengesetzte Teams führen permanent zu Veränderungen. Mit diesen
            Veränderungen umzugehen, ist ein wichtiges Thema, um handlungsfähig
            und gesund zu bleiben. Ich begleite Einzelpersonen, Teams und
            Institutionen zum Beispiel: professionelle oder ehrenamtliche Teams
            und Organisationen, Führungskräfte und Fachkräfte in
            Leitungsfunktion, Führungskräfte beim Neueinstieg Beschäftigte in
            der sozialen Arbeit, zB. In Kindertagestätten Beschäftigte in
            medizinischen Bereich, z.B.  Pflegepersonal oder Praxisteams
            Lehrkräfte Menschen, bei einer beruflichen Neuorientierung.
          </p>
        </div>
      </main>
    </>
  );
}
