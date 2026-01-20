import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'
import Skill from './components/Skills/skill'
import About from './components/About/about'
import Contact from './components/Contact/contato'
import Footer from './components/Footer/footer'

function App() {
  const [count, setCount] = useState(0)
  const [open, setOpen] = useState(false)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Contact />
      <Footer />

    </>
  )
}

export default App;
