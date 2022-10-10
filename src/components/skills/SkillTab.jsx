import React from 'react'
import {ReactComponent as Laravel} from '../../assets/svg/laravel.svg'

function SkillTab(props) {
    return (
        <div className='w-full aspect-square bg-gray-600 p-4 h-full rounded-xl flex flex-col gap-1 items-center justify-center'>
            {props.icon}
            <p className='font-jet-brains-mono text-md text-center'>{props.title}</p>
            <p className='text-xs text-gray-400'>{props.subtitle}</p>
        </div>
    )
}

export default SkillTab