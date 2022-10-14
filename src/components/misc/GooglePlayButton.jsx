import React from 'react'
import { FaGooglePlay } from 'react-icons/fa';

function GooglePlayButton({ link }) {
  return (
    <a href={link} target="_blank" className="transition ease-in-out text-gray-600 bg-gradient-to-tr from-gray-50 to-gray-300 w-fit px-4 py-2 hover:cursor-pointer rounded-lg mt-4 hover:shadow-lg hover:bg-gradient-to-tr hover:from-gray-700 hover:to-gray-600 hover:text-white" data-aos="fade-right" data-aos-delay="300">
      <div className='flex gap-4 items-center'>
        <FaGooglePlay className='w-8 h-8' />

        <div className='flex flex-col'>
          <p className='text-xs'>
            Get it on
          </p>
          <p className='text-base font-semibold'>
            Google Play
          </p>
        </div>
      </div>
    </a>
  )
}

export default GooglePlayButton