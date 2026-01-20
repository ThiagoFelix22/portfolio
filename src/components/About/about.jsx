import './about.css'
function Sobre(){
  return(
    <section className='about-section'>
      <div className='about-container'>
        <h1>Sobre mim</h1>

        <div className='about-content'>
          <div className='about-text'>
            <p>
              Olá, eu sou Thiago como você viu eu sou um iniciante na programação e 
              estou buscando minha primeira oportunidade de trabalho na área de 
              desenvolvimento web. Em toda minha trajetória eu sempre me dedico todos 
              os dias no meu aprendizado para conseguir me tornar um bom programador.
              <br /><br />
              Estou focado em aprender programação desenvolver projeto para meus 
              clientes e fazer com que eles se sinta satisfeito com o resultado final.
              na programação eu ainda sou um iniciante mais estou sempre buscando aprender mais e mais para conseguir me tornar um ótimo programador e poder ajudar meus clientes a alcançar seus objetivos tambem.
            </p>
          </div>
         <div className='about-card'>
        <div className='card'>
        <p className='card-number'>2+</p>
        <p className='card-label'>Anos de experiência</p>
        </div>
        <div className='card'>
        <p className='card-number'>10+</p>
        <p className='card-label'>Clientes Felizes</p>
        </div>
        <div className='card'>
        <p className='card-number'>15+</p>
        <p className='card-label'>Projetos Completos</p>
        </div>
</div>
        </div>
      </div>
    </section>
  )
}


export default Sobre