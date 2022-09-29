import React from 'react'
import Mobile from './prototype/Mobile'

function Hero() {
  return (
    <div className='grid grid-cols-2 p-4 h-full'>
      <div className='flex flex-col justify-center gap-2'>
        <h1 className='text-7xl'>Hello, I'm Rainer Affan Regan</h1>
        <h2 className='text-3xl'>A <span className='text-primary-red'>Full-stack</span> Developer</h2>
      </div>
      <div className='flex items-center justify-center'>

        <Mobile />

      </div>
    </div>
  )
}

export default Hero