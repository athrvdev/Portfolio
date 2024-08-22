import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PortfolioSummary from './components/PortfolioSummary';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import WorkExperience from './components/WorkExperience';
import ThemeToggle from './components/ThemeToggle';
import Education from './components/Education';
// import Message from './components/Message';
// import SphereWithPoints from './components/SphereWithPoints';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  // const [websiteView, setWebsiteView] = useState("hide");
  // function viewWebsite(){
  // }
  // const {//scrollYProgress} = useScroll();

  return (
    <>
    {/* <Message /> */}

    <div className={darkMode ? 'dark' : ''}>
      
    <NavBar />
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <motion.div
        className="app-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{type:"spring", duration: 0.5 }}
      >
        <Header />
        
        <main className="main-content">
          <PortfolioSummary />
          <Projects />
          <WorkExperience />
          {/* <SphereWithPoints /> */}
          <TechnicalSkills />
          <Education />
        </main>
        <Footer />
      </motion.div>
    </div>
    </>
  );
}

export default App;
