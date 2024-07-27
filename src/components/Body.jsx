import React from 'react';
import PortfolioSummary from './PortfolioSummary';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Certifications from './Certifications';
import TechnicalSkills from './TechnicalSkills';
import SoftSkills from './SoftSkills';
import Education from './Education';
import Languages from './Languages';
import PhotoGallery from './PhotoGallery';
import Interests from './Interests';

const Body = () => {
  return (
    <div className='body bg-slate-100 dark:bg-slate-800 w-full'>
    <PortfolioSummary />
      <WorkExperience />
      <Projects />
      <Certifications />
      <TechnicalSkills />
      <SoftSkills />
      <Education />
      <Languages />
      <PhotoGallery />
      <Interests />    
    </div>
  )
}

export default Body