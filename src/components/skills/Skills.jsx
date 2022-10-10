import React from 'react'
import Typewriter from 'typewriter-effect';
import Editor from './Editor';

import SkillTab from './SkillTab';
import { RiFlutterFill, RiReactjsFill } from 'react-icons/ri';
import { GrNode } from 'react-icons/gr';
import { FaLaravel, FaPhp } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import Line from '../misc/Line';
import { Link } from 'react-scroll';

function Skills() {
    return (
        <div className='w-full max-w-6xl m-auto px-4 h-screen text-white flex flex-col justify-center py-16'>
            <div>
                <h1 className='font-jet-brains-mono text-3xl font-semibold'>What am I Great at.</h1>
                <p className=''>Technical skills that I am good at.</p>
                <Line />
            </div>
            {/* <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("What Am I Not")
                        .deleteChars(3)
                        .typeString("Great At.")
                        .pauseFor(3000)
                        .deleteAll()
                        .typeString('My Skills Set.')
                        .pauseFor(3000)
                        .start();
                }}

                options={{
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "text-4xl font-jet-brains-mono font-bold mb-8",
                    cursorClassName: "Typewriter__cursor text-4xl"
                }}
            /> */}

            <div className='grid grid-cols-2 w-full mt-8'>
                <Editor />
                <div className='grid grid-cols-4 h-full w-full pl-4 gap-4'>
                    <SkillTab
                        icon={<FaLaravel className="fill-gray-100 w-10 h-10" />}
                        title="Laravel"
                        subtitle="Lorem ipsum sit dolor amet."
                    />
                    <SkillTab
                        icon={<RiReactjsFill className="fill-gray-100 w-10 h-10" />}
                        title="React"
                        subtitle="Lorem ipsum sit dolor amet."
                    />
                    <SkillTab
                        icon={<RiFlutterFill className="fill-gray-100 w-10 h-10" />}
                        title="Flutter"
                        subtitle="Lorem ipsum sit dolor amet."
                    />
                    <SkillTab
                        icon={<FaPhp className="fill-gray-100 w-10 h-10" />}
                        title="PHP"
                        subtitle="Lorem ipsum sit dolor amet."
                    />
                    <SkillTab
                        icon={<GrNode className="fill-gray-100 w-10 h-10" />}
                        title="Node.js"
                        subtitle="Lorem ipsum sit dolor amet."
                    />
                    <SkillTab
                        icon={<SiTailwindcss className="fill-gray-100 w-10 h-10" />}
                        title="Tailwind CSS"
                        subtitle="Lorem ipsum sit dolor amet."
                    />
                </div>
            </div>

            <div className='flex items-center gap-4 mt-4 justify-end'>
                <p className='text-lg'>My Projects</p>
                <Link className='w-[64px] h-[64px] border-2 border-white rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-white hover:text-primary-gray transition duration-200' to="projects-section" spy={true} smooth={true} duration={1000}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default Skills