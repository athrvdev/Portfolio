import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  // Animation for the name reveal
  const nameVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.4, duration: 1.2, ease: 'easeOut' },
    }),
  };

  // Animation for the background container
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  return (
    <header className="relative flex items-center justify-center h-screen overflow-hidden header-container" >
      <motion.div
        className="relative p-10 transition-shadow duration-300 rounded-lg blur-card bg-opacity-10 backdrop-filter backdrop-blur-xl backdrop-saturate-150"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300 transition-all duration-1000 header-title md:text-8xl lg:text-9xl">
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
      </motion.div>
    </header>
  );
};

export default Header;
