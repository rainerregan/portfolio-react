import React from 'react'
import { Link } from 'react-scroll'

function Header() {
  return (
    <div className='flex justify-between px-4 py-4 pt-8 items-center font-jet-brains-mono fixed max-w-7xl w-full top-0 bg-primary-gray z-50'>
        <div>
            <p className='text-2xl'>rainer.regan</p>
        </div>

        <div className=''>
            <ul className='flex gap-10'>
                <li className='hover:bg-white hover:text-primary-gray hover:animate-pulse'>
                    <Link activeClass="hover:bg-white" className="hover:cursor-pointer" to="home-section" spy={true} smooth={true} duration={1000} >Home</Link>
                </li>
                <li className='hover:bg-white hover:text-primary-gray hover:animate-pulse'>
                    <Link activeClass="hover:bg-white" className="hover:cursor-pointer" to="skills-section" spy={true} smooth={true} duration={1000} >Skills</Link>
                </li>
                <li className='hover:bg-white hover:text-primary-gray hover:animate-pulse'>
                    <a href="">Projects</a>
                </li>
                <li className='hover:bg-white hover:text-primary-gray hover:animate-pulse'>
                    <a href="">Contact</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header