import React from 'react'
import { Link } from 'react-scroll'

function SectionNavigator({title, to, borderColor="bright-red"}) {
  return (
    <div className='flex items-center gap-4 mt-4 text-bright-red' data-aos="fade-up" data-aos-delay="300">
      <Link className={`w-[64px] h-[64px] border-2 border-${borderColor} rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-white hover:text-primary-gray transition duration-200`} to={to} spy={true} smooth={true} duration={1000}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </Link>
      <p className='text-lg'>{title}</p>
    </div>
  )
}

export default SectionNavigator