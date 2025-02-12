import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
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
          Christiane Köhler
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
