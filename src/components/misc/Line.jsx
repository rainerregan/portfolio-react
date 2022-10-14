import React from 'react'

function Line({dataAos, color='bright-red'}) {
  return (
    <div data-aos={dataAos} className={`w-10 h-1 bg-${color} mt-4`}></div>
  )
}

export default Line