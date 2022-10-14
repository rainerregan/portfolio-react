import React from 'react'

function Paragraph({dataAos, dataAosDelay, children, className = 'text-gray-500'}) {
  return (
    <p className={`text-base ${className}`} data-aos={dataAos} data-aos-delay={dataAosDelay}>
      {children}
    </p>
  )
}

export default Paragraph