import React from 'react'
import {ReactComponent as Laravel} from '../../assets/svg/laravel.svg'

function SkillTab(props) {
    return (
        <div className='w-full aspect-square bg-gray-600 p-4 rounded-xl flex flex-col gap-2 items-center justify-center'>
            {props.icon}
            <p className='font-jet-brains-mono text-lg'>{props.title}</p>
            <p className='text-sm text-gray-300'>{props.subtitle}</p>
        </div>
    )
}

export default SkillTab