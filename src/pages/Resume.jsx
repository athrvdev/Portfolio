import React from 'react'
import BlurFade from '../components/BlurFade'
import ResumeDoc from '../assets/resume.pdf'
import { FaFileDownload } from "react-icons/fa";

const Resume = () => {

  function triggerDownload(e){
    let element = document.createElement('a');
    element.setAttribute('href', ResumeDoc);
    element.setAttribute('download', 'Atharva_Kulkarni_Resume.pdf');
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  return (
    <div className="flex items-center text-center flex-col min-h-screen gap-8 p-8 my-28 rounded-lg backdrop-filter text-wrap backdrop-blur-lg bg-glass dark:bg-glass-dark w">
    <div className='w-full grid place-items-center'>
    <h3 className="text-3xl font-bold mb-5 tracking-tighter sm:text-5xl">
      <BlurFade inView={true}  delay={0.6}><span className=''>
        </span>View - Resume / CV
      </BlurFade>
    </h3>
    <BlurFade inView={true} delay={0.2}>
      <button onClick={triggerDownload} className="px-6 py-3 mt-5 text-lg font-semibold p-2 rounded-md text-white hover:bg-[#4037b5] hover:bg-[#2c2c2cf6] bg-[#181818a9] dark:bg-[#5046e6] delay-200 transition-all ease-linear">
        <h2 className="flex items-center">Download <FaFileDownload className="pl-2 scale-[140%]" /></h2>
      </button>
    </BlurFade>
    <BlurFade inView={true}  delay={0.3} duration={1}>
    <iframe src={ResumeDoc} className='rounded-xl shadow-xl shadow-neutral-300 mt-4 dark:shadow-neutral-800' allowFullScreen width="450" loading='lazy' height="700"></iframe>
    </BlurFade>
    
    </div>
    </div>
  )
}

export default Resume