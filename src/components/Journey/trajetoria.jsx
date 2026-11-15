import { GraduationCap, Briefcase, Award, FileText } from 'lucide-react'
import './trajetoria.css'

// TODO: trocar pelos seus cursos, faculdade, certificados e experiências reais
// type: 'curso' | 'trabalho' | 'certificado' (só muda o ícone)
// description e certificate são opcionais.
// certificate: PDF em public/certificados/ (ex.: '/certificados/react.pdf') vira o botão "Ver certificado".
const items = [
  {
    type: 'curso',
    period: '2024 - começo',
    title: 'Nome do curso ou faculdade',
    place: 'Rocketseat',
  },
  {
    type: 'certificado',
    period: '2026',
    title: 'Curso de Extensão em React (35h)',
    place: 'Faculdade de Tecnologia Rocketseat',
    description:
      'Hooks, Context API, React Query, roteamento, validação com Zod, Radix UI, Tailwind e deploy.',
    certificate: '/certificados/Certificado_React.pdf',
  },
  {
    type: 'curso',
    period: '2026 - Atual',
    title: 'Desenvolvimento Full Stack',
    place: 'Rocketseat',
    description:
      'Aprofundando no back-end com Node.js, Express, NestJS, Prisma e PostgreSQL para criar aplicações completas, do front ao banco de dados.',
  },
  // Quando tiver um freelancer ou emprego, adicione aqui com type: 'trabalho'
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
                  {item.place && <p className="timeline-place">{item.place}</p>}
                  {item.description && <p>{item.description}</p>}
                  {item.certificate && (
                    <a className="timeline-link" href={item.certificate} target="_blank" rel="noreferrer">
                      <FileText size={16} aria-hidden="true" /> Ver certificado
                    </a>
                  )}
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
