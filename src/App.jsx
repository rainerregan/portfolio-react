import React from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import 'particles.js'

function App() {

  return (
    <div className='bg-primary-gray' id='main'>
      <div className='max-w-7xl m-auto'>

        {/* Section 1 */}
        <div className='text-white h-screen flex flex-col w-full' id='home-section'>
          <Header/>
          <Hero/>
        </div>

        {/* Section 2 */}
        <div className='h-screen'  id='skills-section'>

        </div>
      </div>
    </div>
  )
}

export default App