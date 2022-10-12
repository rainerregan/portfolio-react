import React, { useCallback } from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import 'animate.css';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Dopami from './components/projects/dopami/Dopami';

function App() {
  Aos.init();

  return (
    <div id='main'>
      {/* Section 1 */}
      <div className='bg-bright-yellow h-screen flex flex-col items-center' id='home-section'>
        <Header />
        <Hero />
      </div>

      {/* Section 2 */}
      <div className='bg-dark-navy h-screen' id='skills-section'>
        <Skills  />
      </div>

      {/* Section 3 */}
      <div className='bg-bright-yellow' id='projects-section'>
        <Projects />
      </div>

      <div className='bg-bright-yellow' id='project-dopami'>
        <Dopami />
      </div>
    </div>
  )
}

export default App