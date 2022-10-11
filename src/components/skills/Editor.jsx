import React from 'react'
import Typewriter from 'typewriter-effect'

function Editor() {
    return (
        <div className='flex justify-center items-center text-white' data-aos="zoom-in">
            <div className='bg-dark-navy w-full rounded-xl flex flex-col shadow-lg shadow-gray-700/50'>
                <div className='w-full h-[30px] bg-gradient-to-tr from-bright-red to-red-500 rounded-t-xl flex justify-between items-center px-4'>
                    <p className='text-xs text-white font-semibold'>cool_app.js</p>
                    <div className='flex gap-2'>
                        <div className='hover:cursor-pointer w-3 h-3 bg-green-400 rounded-full'></div>
                        <div className='hover:cursor-pointer w-3 h-3 bg-yellow-400 rounded-full'></div>
                        <div className='hover:cursor-pointer w-3 h-3 bg-red-400 rounded-full'></div>
                    </div>
                </div>
                <div className='flex flex-1'>
                    <div className='basis-[150px] border-r border-gray-300 flex flex-col'>
                        <div className='bg-gray-700 border-b px-2 py-1 flex gap-2 items-center justify-between border-gray-600'>
                            <p className='text-xs'>cool_app.js</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3 hover:cursor-pointer">
                                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex flex-1">
                        <div className='flex-1 p-4'>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .pauseFor(1000)
                                        .typeString('<span class="text-blue-400">const</span> name = ')
                                        .pasteString('<span class="text-orange-400">"Rainer Regan"</span>;')
                                        .pasteString("<br>")
                                        .typeString('<span class="text-blue-400">const</span> skills = ')
                                        .pasteString('[<span class="text-orange-400">"Laravel"</span>, <span class="text-orange-400">"React"</span>, <span class="text-orange-400">"PHP"</span>, <span class="text-orange-400">"Android Studio"</span>, <span class="text-orange-400">"Java"</span>];')
                                        .pauseFor(1000)
                                        .pasteString("<br>")
                                        .pasteString("<br>")
                                        .typeString('<span class="text-blue-400">const</span> callMyName = (name) => {')
                                        .pasteString("<br>")
                                        .pasteString('<span class="ml-4">console.<span class="text-red-400">log</span>(<span class="text-orange-400">"Hello!, "</span> + name)</span>;')
                                        .pasteString("<br>")
                                        .typeString("}")
                                        .pasteString("<br>")
                                        .pasteString("<br>")
                                        .typeString('<span class="text-green-400">callMyName</span>(name);')
                                        .pauseFor(10000)
                                        .start();
                                }}

                                options={{
                                    autoStart: true,
                                    loop: true,
                                    wrapperClassName: "text-gray-200 font-jet-brains-mono text-sm",
                                    cursorClassName: "Typewriter__cursor text-sm"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editor