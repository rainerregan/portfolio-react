import React from 'react'
import Line from '../misc/Line'
import Paragraph from '../misc/Paragraph'

function ProjectSection({children, title, displayImage, reverse = false}) {
  return (
    <div className='w-full m-auto h-screen grid grid-cols-2'>
      <div className={`flex flex-col justify-center py-4 px-48 bg-calm-white ${reverse ? 'order-last' : ''}`}>
        <h1 className='text-3xl mb-2 text-bright-red font-semibold font-jet-brains-mono' data-aos="fade-right">{title}</h1>  
        <Paragraph dataAos={"fade-right"} dataAosDelay="200">
          {children}
        </Paragraph>
        <Line dataAos="fade-left" />
      </div>

      <div className="flex flex-col justify-center bg-bright-yellow h-full">
          <img src={displayImage} className="h-screen object-cover" />
      </div>
    </div>
  )
}

export default ProjectSection