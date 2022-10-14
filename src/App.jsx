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
      <div className='bg-gradient-to-tr from-gray-50 to-gray-300 h-screen flex flex-col items-center' id='home-section'>
        {/* <Header /> */}
        <Hero />
      </div>

      {/* Section 2 */}
      <div className='bg-gradient-to-br from-bright-red to bg-orange-500' id='skills-section'>
        <Skills  />
      </div>

      {/* Section 3 */}
      <div className='bg-gradient-to-tr from-gray-50 to-gray-300' id='projects-section'>
        <Projects />
      </div>

      <div className='bg-calm-white' id='project-dopami'>
        <Dopami />
      </div>
    </div>
  )
}

export default App