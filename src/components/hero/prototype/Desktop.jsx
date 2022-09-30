import React from 'react'
import Anime from 'react-anime'
import Star from './Star'

function Desktop() {
  return (
    <Anime
      scale={[0.1, 0.9]}
      autoplay={true}
      
    >
      <div id='prototype' className='flex flex-col w-[600px] h-[350px] bg-white rounded-lg'>
        <div className='border-b h-[40px] flex px-4 text-gray-700 justify-between items-center'>
          <p className='font-bold'>Store.inc</p>

          <div className='flex gap-2'>
            <div className="h-2 bg-gray-200 rounded-full w-[40px]"></div>
            <div className="h-2 bg-gray-200 rounded-full w-[45px]"></div>
            <div className="h-2 bg-gray-200 rounded-full w-[70px]"></div>
            <div className="h-2 bg-gray-200 rounded-full w-[20px]"></div>
          </div>
        </div>
        <div className='flex text-gray-600 p-4 gap-4'>
          <div className='animate-pulse w-[150px] h-[150px] bg-gray-200 rounded'>
          </div>
          <div className='flex-1'>
            <p className='text-lg'>Lorem ipsum</p>
            <p className='font-semibold'>$100</p>
            <div className='flex mb-2'>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>

            <button className='text-xs px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600 active:bg-red-800 flex gap-2 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>

              Add to cart
            </button>

            <div role="status" className="max-w-sm animate-pulse mt-4">
              <div className="h-2 bg-gray-200 rounded-full max-w-[350px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[280px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[200px] mb-2.5"></div>
              <span className="sr-only">Loading...</span>
            </div>
          </div>

        </div>
      </div>
    </Anime>
  )
}

export default Desktop