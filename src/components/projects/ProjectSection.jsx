import React from 'react'
import GooglePlayButton from '../misc/GooglePlayButton'
import Line from '../misc/Line'
import Paragraph from '../misc/Paragraph'

function ProjectSection({children, title, displayImage, reverse = false, className = '', titleClassName = '', descriptionClassName = '', googlePlayLink}) {
  return (
    <div className={`w-full m-auto h-screen grid grid-cols-1 md:grid-cols-2 ${className}`}>
      <div className={`flex flex-col justify-center py-4 px-4 md:px-16 lg:px-24 xl:px-48 ${reverse ? 'order-last' : ''}`}>
        <h1 className={`text-5xl md:text-7xl mb-4 md:mb-8 text-bright-red font-semibold ${titleClassName}`} data-aos="fade-right">{title}</h1>  
        <Paragraph dataAos={"fade-right"} dataAosDelay="200" className={descriptionClassName}>
          {children}
        </Paragraph>

        {googlePlayLink ? <GooglePlayButton link={googlePlayLink} />  : ''}

        <Line dataAos="fade-left" />
      </div>

      <div className="flex flex-col justify-center h-full order-first md:-order-none" data-aos="fade-left">
          <img src={displayImage} className="h-full md:h-screen object-contain xl:object-cover" />
      </div>
    </div>
  )
}

export default ProjectSection