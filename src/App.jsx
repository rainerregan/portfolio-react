import React, { useCallback } from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Skills from './components/skills/Skills';

function App() {

  // const particlesInit = useCallback(async (engine) => {
  //   console.log(engine);
  //   // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
  //   // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //   // starting from v2 you can add only the features you need reducing the bundle size
  //   await loadFull(engine);
  // }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //   await console.log(container);
  // }, []);

  return (
    <div className='' id='main'>
      {/* Section 1 */}
      <div className='bg-primary-gray'>
        <div className='text-white h-screen flex flex-col items-center' id='home-section'>
          <Header />
          <Hero />
        </div>
      </div>

      {/* Section 2 */}
      <div className='bg-primary-gray' id='skills-section'>
        <Skills />
      </div>

    </div>
  )
}

export default App