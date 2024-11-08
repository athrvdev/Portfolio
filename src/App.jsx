import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Loader from './components/Loader'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Dock from './components/Dock'
import MouseTracker from './components/MouseTracker'
import { AnimatePresence, motion } from 'framer-motion'
import Particles from './components/ParticleEffect'
import ErrorPage from './pages/ErrorPage'
import ScrollToTop from './components/ScrollToTop'

const AppContent = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showNav, setShowNav] = useState({
    width: window.innerWidth,
    isOpen: window.innerWidth < 425 ? false : true,
    navType: 'horizontal'
  });
  const location = useLocation();



  useEffect(() => {
    // Loader counter
    if (loading) {
      const interval = setInterval(() => {
        setCounter((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(()=>{
              setLoading(false)
            }, 400);
            ; // Stop loading when counter hits 100
            return 100;
          }
          return prev + 1;
        });
      }, 20); // Adjust interval speed as needed
    return () => clearInterval(interval);
    }
  }, [loading]);

  useEffect(() => {
    // Set screen resize event
    window.onresize = () => {
      window.innerWidth > 500 && setShowNav({navType:'horizontal', isOpen: true, width: window.innerWidth });
      window.innerWidth <= 500 && setShowNav({navType:'vertical', isOpen: false, width: window.innerWidth });
    };
    // Set cursor position on mouse move
    window.onmousemove = (e) => {
      setCursorPos({
        x: e.clientX ? e.clientX : 0,
        y: e.clientY ? e.clientY : 0,
      });
    };
  }, []);

  return (
    <div className={`min-w-96 min-h-[100vh] bg-[#bcc1cd fff 1turn)] text-gray-800 dark:bg-gray-900 dark:text-white transition-colors`}>
      <ScrollToTop path={location} />
      <Particles
        className="fixed inset-0"
        quantity={200}
        size={0.5}
        staticity={60}
        ease={80}
        color={darkMode ? '#ffffff' : '#000000'}
        refresh
      />
      <MouseTracker cursor={cursorPos} />
      {loading ? (
        <Loader count={counter} />
      ) : (
        <>
          <Dock handleNavData={setShowNav} navData={showNav} />
          {showNav.isOpen ? <Navbar type='' isDarkMode={darkMode} toggleTheme={toggleTheme} /> : null}

          {/* Carousel Page Animations */}
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname} 
              initial="initial"
              animate="enter"
              exit="exit"
              variants={{
                initial: { x: '50%', opacity: 0 },
                enter: { x: 0, opacity: 1, transition: { duration: 0.25 } },
                exit: { x: '-50%', opacity: 0, transition: { duration: 0.25 } },
              }}
              className="overflow-x-hidden lg:px-48 md:px-36 px-10"
            >
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </motion.div>
          </AnimatePresence>

          <Footer />
        </>
      )}
    </div>
  );
}

const App = () => (
  <ThemeProvider>
    <Router>
      <AppContent />
    </Router>
  </ThemeProvider>
);

export default App;
