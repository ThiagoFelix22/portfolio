import { GraduationCap, Briefcase, Award } from 'lucide-react'
import './trajetoria.css'

// TODO: trocar pelos seus cursos, faculdade, certificados e experiências reais
// type: 'curso' | 'trabalho' | 'certificado' (só muda o ícone)
const items = [
  {
    type: 'curso',
    period: '2024 - Atual',
    title: 'Nome do curso ou faculdade',
    place: 'Instituição',
    description: 'O que você estuda ou estudou e o que aprendeu de mais importante.',
  },
  {
    type: 'certificado',
    period: '2025',
    title: 'Nome do certificado',
    place: 'Plataforma (ex.: Alura, Udemy, Rocketseat)',
    description: 'Tema do certificado e carga horária.',
  },
  {
    type: 'trabalho',
    period: '2025',
    title: 'Projeto freelancer ou experiência',
    place: 'Cliente ou empresa',
    description: 'O que você entregou e qual foi o resultado.',
  },
]

const icons = { curso: GraduationCap, trabalho: Briefcase, certificado: Award }

function Journey() {
  return (
    <section id="trajetoria" className="journey-section">
      <div className="journey-container">
        <h2 className="reveal">Trajetória</h2>

        <ol className="timeline">
          {items.map((item) => {
            const Icon = icons[item.type] ?? GraduationCap
            return (
              <li className="timeline-item reveal" key={item.title}>
                <span className="timeline-icon" aria-hidden="true">
                  <Icon size={20} />
                </span>
                <div className="timeline-content">
                  <span className="timeline-period">{item.period}</span>
                  <h3>{item.title}</h3>
                  <p className="timeline-place">{item.place}</p>
                  <p>{item.description}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default Journey
