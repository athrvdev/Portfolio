import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const nameVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 1 },
    }),
  };

  return (
    <header className="relative flex items-center justify-center h-screen overflow-hidden header header-container">
      <motion.div
        className="p-10 transition-shadow duration-300 bg-white rounded-md shadow-lg blur-card bg-opacity-10 backdrop-filter backdrop-blur-lg backdrop-saturate-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-5xl font-bold text-center text-white header-title md:text-8xl lg:text-9xl">
          {['ATHARVA', 'KULKARNI'].map((word, index) => (
            <motion.span
              key={word}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={nameVariants}
              className="block"
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.div className='w-full mb-5 text-lg sm:text-xs lg:mb-10 header-title-roles roles animated-roll'>
          <h3>FRONT END WEB DEV</h3>
          <h3>JAVA FULL STACK</h3>
          <h3>PHOTOGRAPHER</h3>
          <h3>FREELANCE DEVELOPER</h3>
        </motion.div>
        
      </motion.div>
    </header>
  );
};

export default Header;
