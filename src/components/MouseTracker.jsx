import React, { useEffect, useRef, useState } from 'react'

const MouseTracker = ({cursor}) => {
    const [resting, setResting] = useState(false);
    const t1 = useRef(null);
    const t2 = useRef(null);

    useEffect(()=>{
        const handleMouseEnter = () => setResting(true);
        const handleMouseLeave = () => setResting(false);

        const hoverEl = document.querySelectorAll('.hover-target');
        hoverEl.forEach((el)=>{
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });
        return ()=>{
            hoverEl.forEach((el)=>{
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            })}
    }, [])

    return (
    <>
        <div
            ref={t1}
        style={{
            position : 'fixed',
            transform : `translate(${cursor.x-3}px, ${cursor.y-3}px)`,
            transition : 'transform 0.15s ease-out',
            touchAction : 'none',
            pointerEvents : 'none',
            zIndex : 1
        }} className={`rounded-full ${resting ? 'h-4 w-4' : 'h-2 w-2'} bg-slate-950 opacity-60 dark:bg-slate-100`}></div>
        <div
            ref={t2}
         style={{
            position : 'fixed',
            transform : `translate(${cursor.x-7}px, ${cursor.y-7}px)`,
            transition : 'all 0.3s ease-in',
            touchAction : 'none',
            pointerEvents : 'none',
            zIndex : 0,
        }} className={`rounded-full  ${resting ? 'h-6 w-6' : 'h-4 w-4'} bg-stone-800 opacity-80 dark:bg-lime-900`}></div>
    </>
  )
}

export default MouseTracker