import './skill.css'
function Skill() {

  return (

    <section className="skill-section">
      <div className="skill-container">
        <h1>Minhas Habilidades</h1>

        <div className="skills-grid">
          {/* Card 1 - React */}
          <div className="skill-card">
            <div className="skill-header">
              <span className="skill-name">React</span>
              <span className="skill-percentage">90%</span>
            </div>
            <div className="skill-bar-background">
              <div className="skill-bar-fill skill-90"></div>
            </div>
          </div>

          {/* Card 2 - JavaScript */}
          <div className="skill-card">
            <div className="skill-header">
              <span className="skill-name">JavaScript</span>
              <span className="skill-percentage">85%</span>
            </div>
            <div className="skill-bar-background">
              <div className="skill-bar-fill skill-85"></div>
            </div>
          </div>

          {/* Card 3 - CSS/HTML */}
          <div className="skill-card">
            <div className="skill-header">
              <span className="skill-name">CSS/HTML</span>
              <span className="skill-percentage">88%</span>
            </div>
            <div className="skill-bar-background">
              <div className="skill-bar-fill skill-88"></div>
            </div>
          </div>

          {/* Card 4 - Node.js */}
          <div className="skill-card">
            <div className="skill-header">
              <span className="skill-name">Node.js</span>
              <span className="skill-percentage">75%</span>
            </div>
            <div className="skill-bar-background">
              <div className="skill-bar-fill skill-75"></div>
            </div>
          </div>

          {/* Card 5 - Git */}
          <div className="skill-card">
            <div className="skill-header">
              <span className="skill-name">Git</span>
              <span className="skill-percentage">80%</span>
            </div>
            <div className="skill-bar-background">
              <div className="skill-bar-fill skill-80"></div>
            </div>
          </div>

          {/* Card 6 - Responsive Design */}
          <div className="skill-card">
            <div className="skill-header">
              <span className="skill-name">Responsive Design</span>
              <span className="skill-percentage">92%</span>
            </div>
            <div className="skill-bar-background">
              <div className="skill-bar-fill skill-92"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Skill