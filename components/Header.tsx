import React from "react";
import { useState } from "react";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Angebote", path: "/angebote" },
    { label: "Über mich", path: "/ueber-mich" },
    { label: "Kontakt", path: "/kontakt" },
  ];
  return (
    <header>
      <h1>{title}</h1>
      <button
        className="menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a key={item.path} href={item.path}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
