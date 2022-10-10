import React from 'react'
import Line from '../misc/Line'

function Projects() {
    return (
        <div className='w-full max-w-6xl m-auto p-4 h-screen text-white flex flex-col gap-4 justify-center py-16'>
            <div className=' flex items-end flex-col'>
                <h1 className='font-jet-brains-mono text-3xl font-semibold text-bright-red'>_MyProjects;</h1>
                <p className='text-gray-600'>Some good apps that I've build.</p>
                <Line />
            </div>

            <div className='w-full'>

            </div>
        </div>
    )
}

export default Projects