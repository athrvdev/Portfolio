import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { useTheme } from '../context/ThemeContext';

const DraggableCard = ({ children, initialPosition }) => {
  const { darkMode } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const controls = useAnimation();

  // Toggle expand state on click
  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  // Autonomous slow floating animation
  useEffect(() => {
    controls.start({
      x: [initialPosition.x, initialPosition.x + 10, initialPosition.x - 10],
      y: [initialPosition.y, initialPosition.y + 10, initialPosition.y - 10],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut'
      }
    });
  }, [controls, initialPosition]);

  return (
    <motion.div
      drag
      animate={controls}
      dragConstraints={{ top: -100, bottom: 100, left: -100, right: 100 }}
      className={`m-4 rounded-xl shadow-lg ${
        isExpanded ? 'min-w-[350px] max-w-md p-10 z-40' : 'w-fit'
      } cursor-pointer transition-all duration-300`}
      whileHover={{ scale: 1.05 }}
      onClick={handleToggleExpand}
    >
      <ProjectCard
        gradientColor={darkMode ? '#26262695' : '#d9d9d9b3'}
        className={`transition-all duration-300 p-4 ${
          isExpanded ? 'max-h-fit overflow-visible' : 'max-w-xs max-h-32 overflow-hidden'
        }`}
      >
        {children}
      </ProjectCard>
    </motion.div>
  );
};

export default DraggableCard;
