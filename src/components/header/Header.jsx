import React from 'react'

function Header() {
  return (
    <div className='flex justify-between p-4 items-center'>
        <div>
            <p className='text-2xl'>rr</p>
        </div>

        <div>
            <ul className='flex gap-4'>
                <li>
                    <a href="">Skills</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header