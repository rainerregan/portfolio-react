import React, { useEffect, useState } from 'react'
import Mobile from './prototype/Mobile'
import Desktop from './prototype/Desktop'
import Typewriter from 'typewriter-effect';
import { Button, Link } from 'react-scroll';

function Hero() {
  const [checked, setChecked] = useState(false)
  const handleClick = () => setChecked(!checked)

  return (
    <div className='grid grid-cols-2 p-4 h-full max-w-7xl m-auto'>
      <div className='flex flex-col justify-center gap-4'>
        
        <h1 className='text-7xl'>Hello, I'm Rainer Regan</h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("// I am a ")
              .typeString("<span class='text-primary-red'>Web Apps</span> Developer")
              .pauseFor(1500)
              .deleteChars(18)
              .typeString("<span class='text-primary-red'>Mobile Apps</span> Developer")
              .pauseFor(1500)
              .deleteChars(21)
              .typeString("<span class='text-primary-red'>Front-end</span> Developer")
              .pauseFor(1500)
              .deleteChars(19)
              .typeString("<span class='text-primary-red'>Back-end</span> Developer")
              .pauseFor(1500)
              .deleteChars(18)
              .typeString("<span class='text-primary-red'>Full-stack</span> Developer")
              .pauseFor(5000)
              .start();
          }}

          options={{
            autoStart: true,
            loop: true,
            wrapperClassName: "text-2xl text-gray-400 font-jet-brains-mono",
            cursorClassName: "Typewriter__cursor text-2xl"
          }}
        />

        <div className='flex items-center gap-4 mt-4'>
          <Link className='w-[64px] h-[64px] border-2 border-white rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-white hover:text-primary-gray transition duration-200' to="skills-section" spy={true} smooth={true} duration={1000}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </Link>
          <p className='text-lg'>My Skills</p>
        </div>
      </div>

      <div className='flex flex-col gap-4 items-center justify-center'>
        <p className='text-xl'>Try me!</p>

        <div className='h-[500px] flex items-center'>

          {checked ?
            <Mobile />
            :
            <Desktop />
          }
        </div>

        <div className='flex gap-4'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>

          </div>
          <div>

            <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" value="" id="default-toggle" className="sr-only peer" onChange={handleClick} />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero