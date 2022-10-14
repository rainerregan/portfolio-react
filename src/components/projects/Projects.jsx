import React from 'react'
import { Link } from 'react-scroll'
import Line from '../misc/Line'
import SectionNavigator from '../misc/SectionNavigator'

function Projects() {
    return (
        <div className='w-full max-w-6xl m-auto p-4 h-screen text-white grid grid-cols-2 gap-4 py-16'>
            <div className=' flex flex-col justify-center gap-4'>
                <div>
                    <h1 className='text-6xl font-semibold text-bright-red mb-4' data-aos="fade-down">My Projects</h1>
                    <p className='text-gray-600 text-xl' data-aos="fade-up">Some good apps that I've build.</p>
                    <Line dataAos="fade-right" />

                </div>

                <SectionNavigator 
                    title={"Explore"}
                    to="projects-section"
                />
            </div>
        </div>
    )
}

export default Projects