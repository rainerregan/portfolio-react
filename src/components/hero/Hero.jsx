import React, { useEffect, useState } from 'react'
import Mobile from './prototype/Mobile'
import Desktop from './prototype/Desktop'
import Typewriter from 'typewriter-effect';
import { Button, Link } from 'react-scroll';
import SampleApp from './SampleApp';
import Editor from '../skills/Editor';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Paragraph from '../misc/Paragraph';

function Hero() {
  return (
    <div className='grid grid-cols-2 p-4 h-full max-w-6xl m-auto'>
      <div className='flex flex-col justify-center gap-4 pr-4'>

        <p className='text-bright-red' data-aos="fade-right">WELCOME TO MY SITE</p>
        <h1 className='text-6xl text-dark-navy' data-aos="fade-right" data-aos-delay="100">Hello, I'm Rainer Regan.</h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("// I am a ")
              .typeString("<span class='text-bright-red'>Web Apps</span> Developer")
              .pauseFor(1500)
              .deleteChars(18)
              .typeString("<span class='text-bright-red'>Mobile Apps</span> Developer")
              .pauseFor(1500)
              .deleteChars(21)
              .typeString("<span class='text-bright-red'>Front-end</span> Developer")
              .pauseFor(1500)
              .deleteChars(19)
              .typeString("<span class='text-bright-red'>Back-end</span> Developer")
              .pauseFor(1500)
              .deleteChars(18)
              .typeString("<span class='text-bright-red'>Full-stack</span> Developer")
              .pauseFor(5000)
              .start();
          }}

          options={{
            autoStart: true,
            loop: true,
            wrapperClassName: "text-2xl text-white font-jet-brains-mono",
            cursorClassName: "Typewriter__cursor text-2xl"
          }}
        />

        <Paragraph dataAos={"fade-right"} dataAosDelay="200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vel nam expedita voluptatum, corporis aliquid, quo, eum aspernatur optio illum ducimus atque odit harum unde ratione? Vero iusto voluptates similique.
        </Paragraph>

        <div className='mt-2 flex gap-2'>
          <a href="" className='flex'>
            <div className='flex gap-2 px-4 py-2 rounded bg-gradient-to-tr from-github to-gray-600 hover:shadow-xl duration-500 transition ease-in-out text-white items-center'>
              <FaGithub />
              <p>GitHub</p>
            </div>
          </a>
          <a href="" className='flex'>
            <div className='flex gap-2 px-4 py-2 rounded bg-gradient-to-tr from-linked-in to-blue-500 text-white items-center'>
              <FaLinkedin />
              <p>LinkedIn</p>
            </div>
          </a>
        </div>

        <div className='flex items-center gap-4 mt-4 text-bright-red' data-aos="fade-up" data-aos-delay="300">
          <Link className='w-[64px] h-[64px] border-2 border-white rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-white hover:text-primary-gray transition duration-200' to="skills-section" spy={true} smooth={true} duration={1000}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </Link>
          <p className='text-lg'>My Skills</p>
        </div>
      </div>

      {/* <SampleApp className='flex flex-col gap-2 items-center justify-center' /> */}
      <Editor />

    </div>
  )
}

export default Hero