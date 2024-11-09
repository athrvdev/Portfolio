import React, { useEffect, useState } from 'react';
import TypingEffect from './TypingEffect';
import BlurFade from './BlurFade';

const Header = () => {
  const roles = [
    "Full Stack Developer",
    "Freelance Developer",
    "Certified Java Full Stack Dev",
    "ReactJS Developer"
  ];
  
  return (
    <div className="heading h-[55vh] mt-36 rounded-lg backdrop-filter backdrop-blur-lg bg-glass dark:bg-glass-dark ">
      
        <h3 className="pointer-events-none max-w-[43.5rem] pt-5 md:mx-auto md:px-4 md:py-2 text-balance text-center font-semibold tracking-tighter text-5xl sm:text-7xl md:text-7xl lg:text-7xl">
        <BlurFade delay={0.25}>Hey! </BlurFade><BlurFade delay={0.35}> I'm </BlurFade> <BlurFade delay={0.7}><span className='text-indigo-500'>Atharva Kulkarni
          </span>, </BlurFade>
        </h3>
    
      <TypingEffect roles={roles} />
    </div>
  );
};

export default Header;
