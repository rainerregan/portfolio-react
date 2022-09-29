import React from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'

function App() {
  return (
    <div className='max-w-7xl m-auto'>
      <div className='text-white h-screen'>
        <Header/>
        <Hero/>
      </div>
    </div>
  )
}

export default App