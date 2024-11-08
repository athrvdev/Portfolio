import React from 'react'
import { useState } from 'react'
import SpeechNarrator from './SpeechNarrator';
import { useEffect } from 'react';

const Narrator = ({inputText, className}) => {

  const [range, setRange] = useState(1);
  const [text, setText] = useState("");
  const [play, setPlay] = useState(false);
  const [end, setEnd] = useState(true);

  const [highlightedSection, setHighlightedSection] = useState({
    from : 0,
    to : 0
  });

  const splitText = (text, from, to) =>[
    text.slice(0,from),
    text.slice(from, to),
    text.slice(to)

  ]

  const handleRangeChange = (e) =>{
    setRange(e.target.value);
  }

  const synth = window.speechSynthesis;
  let utterance = new SpeechSynthesisUtterance(text); 

  
  const setUtterance = () =>{
    utterance.addEventListener("boundary", ({charIndex, charLength})=>{
      setHighlightedSection({from : charIndex, to : charIndex + charLength});
    });
    utterance.addEventListener("end", ()=>{setPlay(false); setEnd(true)})
  }
  setUtterance();

  const HighlightedText = ({text, from, to}) =>{
    let [start, highlight, finish] = splitText(text, from, to);

    return (
      <div className='text-center'>
        <span className='dark:text-slate-300 text-slate-800 text-xl my-2 text-center font-bold tracking-tighter sm:text-3xl'>{!end && highlight}</span>
      </div>
    )
  }

  const handlePlay = () =>{
      synth.speak(utterance);
      synth.resume();
      setPlay(true);
      setEnd(false);
  }

  const handlePause =()=>{
    synth.pause();
    setPlay(false);

  }
  useEffect(()=>{
    utterance.rate = range;
  }, [range])
  useEffect(()=>{
    setText(inputText);
    setEnd(true);
  }, [])

  return (
    <div className={className}>
    <SpeechNarrator HighEl={HighlightedText} showPlay={play} handlePause={handlePause} handlePlay={handlePlay} text={text} highSec={highlightedSection} />
    
    {/* <div className='flex w-full justify-center items-center flex-column h-8'>  */}
      {/* <label className='text-neutral-700 dark:text-neutral-300'>speed: {" " + range}x</label>  */}
      {/* <input list='values' className='text-neutral-700 -mb-1 dark:text-neutral-300 bg-neutral-300 dark:bg-neutral-700 outline-none border-none appearance-none rounded-lg' value={range} onChange={handleRangeChange} type="range" step=".1" min={"0.5"} max={"2"} />  */}
      
      {/* <textarea cols="30" rows="10" type='text' value={text} onChange={(e) => setText(e.target.value)} style={{
        width: '400px',
        height : '300px',
        resize : "none"
      }} /> */}
    {/* </div> */}
    {/* <datalist id="values">
        <option value="0.5" label="0.5"></option>
        <option value="1" label="1"></option>
        <option value="1.25" label="1.25"></option>
        <option value="1.5" label="1.5"></option>
        <option value="2" label="2"></option>
      </datalist> */}
    </div>
  )
}

export default Narrator