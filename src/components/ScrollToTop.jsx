import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({path}) => {

useEffect(()=>{
    // console.log(path)
    window.scrollTo(0, 0);
}, [path])

  return null;
}

export default ScrollToTop