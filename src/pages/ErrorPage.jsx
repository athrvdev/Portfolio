import React from 'react'
import { Link } from 'react-router-dom'
import BlurFade from '../components/BlurFade'
import { FaArrowCircleRight } from 'react-icons/fa'

const ErrorPage = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center text-center space-y-16'>
        <BlurFade delay={0.7}>
        <h3 className="pointer-events-none max-w-[43.5rem] pt-5 md:mx-auto md:px-4 md:py-2 text-balance text-center font-semibold tracking-tighter text-5xl sm:text-7xl md:text-7xl lg:text-7xl">Page not found!!!</h3>
        </BlurFade>
        <BlurFade delay={1}>

          <button className="px-6 py-3 text-lg font-semibold text-white bg-indigo-500 rounded-full hover:bg-indigo-700 button-animation">
            <Link to={'/'}>
              <h2 className="flex items-center">landing page <FaArrowCircleRight className="pl-2 -rotate-45 -mb-2 scale-[200%]" /></h2>
            </Link>
          </button>
        </BlurFade>
    </div>
  )
}

export default ErrorPage