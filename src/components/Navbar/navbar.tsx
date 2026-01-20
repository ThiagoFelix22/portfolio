import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import "./navbar.css";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="container">
      <header>
        <div>
          <span className="simbol">{" </> "}</span>
          DevPortfólio
        </div>
        <nav>
          <a href="#home">Inicio</a>
          <a href="#About">Sobre</a>
          <a href="#Skills">Skills</a>
          <a href="#Project">Projeto</a>
          <a href="#contact">Contato</a>
        </nav>
        {/* sempre mostra o menu nunca vai muda */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav">
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Inicio
          </a>
          <a href="#About" onClick={() => setMenuOpen(false)}>
            Sobre
          </a>
          <a href="#Skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#Project" onClick={() => setMenuOpen(false)}>
            Projeto
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contato
          </a>
        </nav>
      )}

      {/* <Menu/> */}
    </div>
  );
}
export default Navbar;
