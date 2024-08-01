import React from 'react';
import PortfolioSummary from './PortfolioSummary';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Certifications from './Certifications';
import TechnicalSkills from './TechnicalSkills';

import Education from './Education';


const Body = () => {
  return (
    <div className='w-full body bg-slate-100 dark:bg-slate-800'>
    <PortfolioSummary />
      <WorkExperience />
      <Projects />
      <Certifications />
      <TechnicalSkills />

      <Education />
       
    </div>
  )
}

export default Body