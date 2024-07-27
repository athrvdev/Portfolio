import React from 'react';
import Header from './components/Header';
import PortfolioSummary from './components/PortfolioSummary';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import TechnicalSkills from './components/TechnicalSkills';
import SoftSkills from './components/SoftSkills';
import Education from './components/Education';
import Languages from './components/Languages';
import PhotoGallery from './components/PhotoGallery';
import Interests from './components/Interests';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import './index.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App font-sans bg-appleGray dark:bg-appleDarkGray text-appleDarkGray dark:text-appleGray">
      <NavBar />
      <ThemeToggle />
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
