import React from 'react'
import Line from '../../misc/Line'
import Paragraph from '../../misc/Paragraph'

function Dopami() {
  return (
    <div className='w-full max-w-6xl m-auto p-4 min-h-screen text-white grid grid-cols-2 gap-4 py-16'>
      <div className="flex flex-col justify-center">
        <h1 className='text-3xl mb-2 text-bright-red font-semibold font-jet-brains-mono' data-aos="fade-right">Dopami</h1>  
        <Paragraph dataAos={"fade-right"} dataAosDelay="200">
          Dopami is a rewarding app that can give its users in-app currency, Dopa Eggs, from playing sponsored games,
          applications, and videos. Users can collect and redeem their Dopa Eggs into real rewards such as digital wallets like
          Gopay, OVO, and Dana. This app has a goal to allow users to get real money by playing games.
        </Paragraph>
        <Line dataAos="fade-left" />
      </div>
    </div>
  )
}

export default Dopami