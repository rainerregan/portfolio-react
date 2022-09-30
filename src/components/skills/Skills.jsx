import React from 'react'
import Typewriter from 'typewriter-effect';
import Editor from './Editor';

import {ReactComponent as Laravel} from '../../assets/svg/laravel.svg'
import {ReactComponent as ReactSVG} from '../../assets/svg/react.svg'
import SkillTab from './SkillTab';

function Skills() {
    return (
        <div className='w-full max-w-7xl m-auto p-4 h-screen text-white flex flex-col gap-4 justify-center'>
            <Typewriter
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
            />

            <div className='grid grid-cols-2 w-full mt-8'>
                <Editor />
                <div className='grid grid-cols-3 h-full w-full px-8 gap-4'>
                    <SkillTab 
                        icon={<Laravel className="fill-gray-100 w-10 h-10" />} 
                        title="Laravel"
                        subtitle="Lorem ipsum sit dolor amet."
                        />
                    <SkillTab 
                        icon={<ReactSVG className="fill-gray-100 w-10 h-10" />} 
                        title="React"
                        subtitle="Lorem ipsum sit dolor amet."
                        />
                </div>
            </div>

        </div>
    )
}

export default Skills