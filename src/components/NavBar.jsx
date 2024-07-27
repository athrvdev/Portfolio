import React from 'react'

const NavBar = () => {
  return (
    <nav className="w-screen flex justify-evenly bg-slate-600 ">
        <a>Projects</a>
        <a>Leetcode</a>
        <a>GitHub</a>
        <a>Insta</a>
        <a href="" className='nav-link'>Contact Me</a>
    </nav>
  )
}

export default NavBar