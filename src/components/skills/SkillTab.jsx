import React from 'react'
import { ReactComponent as Laravel } from '../../assets/svg/laravel.svg'

function SkillTab(props) {
  return (
    <div id='anchor' className='w-full h-full aspect-square bg-gradient-to-bl shadow-lg from-gray-50 to-gray-300 p-4 rounded-xl flex flex-col gap-1 items-center justify-center'
      data-aos="fade-down"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      data-aos-delay={props.animateDelay}>
      <div className='child:h-16 child:w-16 child:fill-bright-red'>
        {props.icon}
      </div>
      <p className='font-jet-brains-mono text-lg text-center text-bright-red font-bold mt-2'>{props.title}</p>
      <p className='text-xs text-gray-500'>{props.subtitle}</p>
    </div>
  )
}

export default SkillTab