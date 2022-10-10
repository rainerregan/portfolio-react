import React from 'react'
import {ReactComponent as Laravel} from '../../assets/svg/laravel.svg'

function SkillTab(props) {
    return (
        <div className='w-full aspect-square bg-bright-yellow p-4 rounded-xl flex flex-col gap-1 items-center justify-center'>
            {props.icon}
            <p className='font-jet-brains-mono text-md text-center text-bright-red font-bold mt-2'>{props.title}</p>
            <p className='text-xs text-gray-500'>{props.subtitle}</p>
        </div>
    )
}

export default SkillTab