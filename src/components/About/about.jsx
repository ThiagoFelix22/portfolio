import './about.css'

// TODO: confirmar se estes números são reais; se não forem, troque por fatos verificáveis
const stats = [
  { number: '2+', label: 'Anos estudando programação' },
  { number: '10+', label: 'Clientes atendidos' },
  { number: '15+', label: 'Projetos concluídos' },
]

function About() {
  return (
    <section id="sobre" className='about-section'>
      <div className='about-container'>
        <h2 className="reveal">Sobre mim</h2>

        <div className='about-content'>
          <div className='about-text reveal'>
            <p>
              Sou o Thiago, desenvolvedor front-end focado em criar sites
              modernos, responsivos e fáceis de usar com React e JavaScript.
            </p>
            <p>
              Estudo programação todos os dias e coloco o que aprendo em
              prática em projetos reais, sempre buscando código limpo e uma
              boa experiência para quem usa.
            </p>
            <p>
              Hoje busco minha primeira oportunidade como desenvolvedor, onde
              eu possa contribuir com o time, aprender com pessoas mais
              experientes e crescer na área.
            </p>
          </div>

          <div className='about-card'>
            {stats.map((stat) => (
              <div className='card reveal' key={stat.label}>
                <p className='card-number'>{stat.number}</p>
                <p className='card-label'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
