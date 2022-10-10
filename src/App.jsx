import React, { useCallback } from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import 'animate.css';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';

function App() {

  return (
    <div id='main'>
      {/* Section 1 */}
      <div className='bg-bright-yellow h-screen flex flex-col items-center' id='home-section'>
        <Header />
        <Hero />
      </div>

      {/* Section 2 */}
      <div className='bg-dark-navy' id='skills-section'>
        <Skills  />
      </div>

      {/* Section 3 */}
      <div className='bg-gray-900' id='projects-section'>
        <Projects />
      </div>
    </div>
  )
}

export default App