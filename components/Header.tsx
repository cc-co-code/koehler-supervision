import React from "react";
import { useState } from "react";
import Link from "next/link";

type HeaderProps = {
  title: string; // Stellt sicher, dass der title-Prop als string erwartet wird
};

export default function Header({ title }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Startseite", path: "/" },
    { label: "Angebote", path: "/angebote" },
    { label: "Über mich", path: "/uebermich" },
    { label: "Kontakt", path: "/kontakt" },
  ];

  return (
    <header className="header">
      <div className="header-content">
        <Link href="/" className="logo-link">
          {title}
        </Link>

        {/* Hamburger Menü für Mobile */}
        <button
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
