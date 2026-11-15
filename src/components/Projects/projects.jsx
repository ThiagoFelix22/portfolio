import { ExternalLink, Github } from 'lucide-react'
import './projects.css'

const GITHUB_REPO = 'https://github.com/ThiagoFelix22/'

// "image": print da página inteira, em /public (o card rola a imagem no hover).
// TODO: depois de publicar cada projeto, cole o link do site em "demo".
// Enquanto "demo" estiver vazio, o botão Demo não aparece.
const projects = [
  {
    title: 'HairDay',
    description:
      'Agenda de atendimentos para barbearias: escolha data, horário livre e cliente, e veja o dia organizado em manhã, tarde e noite. Os agendamentos ficam salvos no navegador.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'date-fns'],
    image: '/hairday.webp',
    demo: '',
    code: GITHUB_REPO + 'HairDay',
  },
  {
    title: 'Carrinho E-commerce',
    description:
      'Mini loja virtual com listagem de produtos, página de detalhes e carrinho com quantidade e total calculados, usando Context API e uma API REST simulada com JSON Server.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Context API', 'React Router'],
    image: '/carrinho.webp',
    demo: '',
    code: GITHUB_REPO + 'carrinho-ecommerce',
  },
  {
    title: 'Cripto Tracker',
    description:
      'Lista as maiores criptomoedas com dados da API da CoinGecko, com busca, botão de carregar mais e página de detalhes com preço, valor de mercado e variação em 24h.',
    tags: ['React', 'TypeScript', 'API REST', 'React Router', 'CSS Modules'],
    image: '/cripto.webp',
    demo: '',
    code: GITHUB_REPO + 'Criptomoedas',
  },
  {
    title: 'Catálogo de Filmes',
    description:
      'Mostra os filmes em cartaz pela API do TMDB, com página de detalhes, link para o trailer e lista de favoritos salva no navegador.',
    tags: ['React', 'JavaScript', 'Axios', 'React Router', 'API REST'],
    image: '/filmes.webp',
    demo: '',
    code: GITHUB_REPO + 'Filmes',
  },
]

function Projects() {
  return (
    <section id="projetos" className="projects-section">
      <div className="projects-container">
        <h2 className="reveal">Projetos</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.title}>
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={`Tela do projeto ${project.title}`} loading="lazy" />
                ) : (
                  <span aria-hidden="true">{'</>'}</span>
                )}
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <ExternalLink size={18} aria-hidden="true" /> Demo
                    </a>
                  )}
                  <a href={project.code} target="_blank" rel="noreferrer">
                    <Github size={18} aria-hidden="true" /> Código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
