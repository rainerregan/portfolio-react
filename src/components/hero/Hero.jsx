import React, { useEffect, useState } from 'react'
import Mobile from './prototype/Mobile'
import Desktop from './prototype/Desktop'
import Typewriter from 'typewriter-effect';
import { Button, Link } from 'react-scroll';
import SampleApp from './SampleApp';
import Editor from '../skills/Editor';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Paragraph from '../misc/Paragraph';
import SectionNavigator from '../misc/SectionNavigator';

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
            wrapperClassName: "text-2xl text-gray-600 font-jet-brains-mono",
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

        <SectionNavigator title={"My Skills"} to={"skills-section"} />

      </div>

      {/* <SampleApp className='flex flex-col gap-2 items-center justify-center' /> */}

      <Editor className='pl-4' />

    </div>
  )
}

export default Hero