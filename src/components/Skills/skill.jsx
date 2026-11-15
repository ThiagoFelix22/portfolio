import { BookOpen, Code, Wrench } from 'lucide-react'
import './skill.css'

// Baseado nos projetos do GitHub. Deixe só o que você consegue explicar numa entrevista.
const groups = [
  {
    title: 'Front-End',
    icon: Code,
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'React Router', 'Tailwind CSS', 'Context API', 'Zustand', 'Design Responsivo'],
  },
  { title: 'Ferramentas', icon: Wrench, items: ['Git', 'GitHub', 'Vite', 'VS Code', 'APIs REST'] },
  // Já teve contato em projetos, mas ainda está aprofundando
  { title: 'Estudando', icon: BookOpen, items: ['Node.js', 'Express', 'NestJS', 'Prisma', 'PostgreSQL'] },
]

function Skills() {
  return (
    <section id="habilidades" className="skill-section">
      <div className="skill-container">
        <h2 className="reveal">Habilidades</h2>

        <div className="skills-grid">
          {groups.map(({ title, icon, items }) => {
            const Icon = icon
            return (
            <div className="skill-card reveal" key={title}>
              <div className="skill-header">
                <Icon className="skill-icon" aria-hidden="true" />
                <h3 className="skill-name">{title}</h3>
              </div>
              <ul className="skill-tags">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
