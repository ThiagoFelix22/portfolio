import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import "./navbar.css";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

// Descobre qual seção está no meio da tela para destacar o link dela
function useActiveSection() {
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return active;
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection();

  const renderLinks = (onClick) =>
    links.map((link) => (
      <a
        key={link.href}
        href={link.href}
        onClick={onClick}
        className={active === link.href ? "active" : undefined}
        aria-current={active === link.href ? "true" : undefined}
      >
        {link.label}
      </a>
    ));

  return (
    <div className="container">
      <header>
        <a href="#inicio" className="logo">
          <span className="simbol">{" </> "}</span>
          Thiago Felix
        </a>
        <nav className="desktop-nav">{renderLinks()}</nav>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && <nav className="mobile-nav">{renderLinks(() => setMenuOpen(false))}</nav>}
    </div>
  );
}

export default Navbar;
