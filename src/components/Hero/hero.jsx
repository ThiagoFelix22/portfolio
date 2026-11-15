import { useEffect, useState } from "react";
import { Download, Github, Linkedin } from "lucide-react";
import { CARGOS, CURRICULO, GITHUB, LINKEDIN } from "../../data/perfil";
import "./hero.css";

// Escreve e apaga cada cargo de CARGOS, em loop
function useTyping(words) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    if (!deleting && text === word) {
      const pause = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(pause);
    }
    if (deleting && text === "") {
      const next = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => i + 1);
      }, 300);
      return () => clearTimeout(next);
    }
    const step = setTimeout(
      () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
      deleting ? 40 : 80
    );
    return () => clearTimeout(step);
  }, [text, deleting, index, words]);

  return text;
}

function Hero() {
  const cargo = useTyping(CARGOS);

  return (
    <section id="inicio" className="hero-container">
      <div className="hero-glow" aria-hidden="true" />

      <div className="section">
        <span className="badge">
          <span className="badge-dot" aria-hidden="true" /> Disponível para oportunidades
        </span>

        <h1>
          Olá, eu sou <span className="gradient-text">Thiago Felix</span>
        </h1>

        <h3 aria-label={CARGOS[0]}>
          <span aria-hidden="true">
            {cargo}
            <span className="cursor">|</span>
          </span>
        </h3>

        <p>
          Crio sites e interfaces responsivas, rápidas e fáceis de usar com React,
          JavaScript e código limpo.
        </p>

        <div className="buttons">
          <a href="#projetos" className="btn">Ver projetos</a>
          <a href="#contato" className="contact">Fale comigo</a>
          {CURRICULO && (
            <a href={CURRICULO} className="contact" download>
              <Download size={18} aria-hidden="true" /> Baixar currículo
            </a>
          )}
        </div>

        <div className="hero-socials">
          <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github aria-hidden="true" className="hero-social-icon" />
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin aria-hidden="true" className="hero-social-icon" />
          </a>
        </div>
      </div>

      {/* TODO: trocar o emoji por uma foto sua (ex.: <img src="/foto.jpg" alt="Thiago Felix" />) */}
      <div className="hero-image">
        <div className="circle">
          <span className="emoji" role="img" aria-label="Desenvolvedor no computador">👨‍💻</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
