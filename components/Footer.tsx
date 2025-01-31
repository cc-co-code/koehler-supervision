import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Christiane Köhler</p>
      <nav>
        <a href="/impressum">Impressum</a> |{" "}
        <a href="/datenschutz">Datenschutz</a>
      </nav>
    </footer>
  );
}
