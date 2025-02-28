import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Christiane Köhler</p>
      <nav>
        <Link href="/impressum">Impressum</Link> |{" "}
        <Link href="/datenschutz">Datenschutz</Link>
      </nav>
    </footer>
  );
}
