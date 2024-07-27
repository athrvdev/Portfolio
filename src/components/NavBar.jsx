import React from 'react'
import Resume from '../assets/Resume.pdf'

const NavBar = () => {
  return (
    <nav className="w-screen z-40 flex justify-evenly bg-slate-600 ">
        <a>Projects</a>
        <a>Leetcode</a>
        <a>GitHub</a>
        <a>Insta</a>
        <a href="" className='nav-link'>Contact Me</a>
        <a href={Resume} download="AtharvaKulkarniResume" className='nav-link'>Resume</a>
    </nav>
  )
}

export default NavBar