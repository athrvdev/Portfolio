import React from 'react'
import { useState } from 'react'
import { HiArrowCircleRight } from 'react-icons/hi';

function Message(){

    const [msgDisplay, setMsgDisplay] = useState("flex");

  return (
    <div
    
    className={`${msgDisplay} fixed top-0 left-0 z-50 items-center justify-center w-screen h-full bg-slate-600`}>
        <span>
            <h1 className='text-yellow-400'>In development...</h1>
            <button onClick={()=> setMsgDisplay("hidden")} className='flex text-blue-200 ' >view website <HiArrowCircleRight className='mt-1' /> </button>
        </span>
    </div>
  )
}

export default Message