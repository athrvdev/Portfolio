import React from 'react'
import {AiFillRobot, AiOutlineRobot} from "react-icons/ai"

const robotStyle ={
    fontSize : 100,
    padding : 0,
    cursor: 'pointer',
}

const SpeechNarrator = ({HighEl, showPlay, text, highSec, handlePause, handlePlay}) => {
  return (
    <div title='Click the robot to make it speak ' className='container h-[30vh] my-3 gap-2 text-center transform translate-y-12'>
       <div className='w-full flex justify-center'>
        {showPlay ?<AiFillRobot style={robotStyle} onClick={handlePause} className="text-indigo-500" /> :
        <AiOutlineRobot style={robotStyle} className='dark:text-neutral-100 text-neutral-900' onClick={handlePlay} />}
      </div>
        <HighEl text={text} {...highSec} />
    </div>
  )
}

export default SpeechNarrator
