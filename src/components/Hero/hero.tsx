import "./hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <div className="section">
        <h1>Olá, eu sou Thiago</h1>
        <h3>Desenvolvedor Front-End</h3>
        <p>
          Criando experiências digitais incríveis com <br />
          React, JavaScript e muito código limpo 🚀
        </p>

        <div className="buttons">
          <button className="btn">Ver projetos</button>
          <button className="contact">Contato</button>
        </div>
      </div>

      {/* Lado Direito - Emoji */}
      <div className="hero-image">
        <div className="circle">
          <span className="emoji">👨‍💻</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
