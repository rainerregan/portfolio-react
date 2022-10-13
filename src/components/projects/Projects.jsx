import React from 'react'
import { Link } from 'react-scroll'
import Line from '../misc/Line'

function Projects() {
    return (
        <div className='w-full max-w-6xl m-auto p-4 h-screen text-white grid grid-cols-2 gap-4 py-16'>
            <div className=' flex flex-col justify-center gap-4'>
                <div>
                    <h1 className='font-jet-brains-mono text-6xl font-semibold text-bright-red mb-4' data-aos="fade-down">_MyProjects;</h1>
                    <p className='text-gray-600 text-xl' data-aos="fade-up">Some good apps that I've build.</p>
                    <Line dataAos="fade-right" />

                </div>

                <div className='flex items-center gap-4 mt-4 text-bright-red' data-aos="fade-left" data-aos-delay="100">
                    <Link className='w-[64px] h-[64px] border-2 border-white rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-white hover:text-primary-gray transition duration-200' to="projects-section" spy={true} smooth={true} duration={1000}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                        </svg>
                    </Link>
                    <p className='text-lg'>Explore</p>
                </div>
            </div>
        </div>
    )
}

export default Projects