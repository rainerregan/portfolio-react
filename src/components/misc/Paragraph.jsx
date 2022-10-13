import React from 'react'

function Paragraph({dataAos, dataAosDelay, children}) {
  return (
    <p className='text-base text-gray-500' data-aos={dataAos} data-aos-delay={dataAosDelay}>
      {children}
    </p>
  )
}

export default Paragraph