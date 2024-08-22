import React from 'react';
import { motion } from 'framer-motion';

const PortfolioSummary = () => {
  // Typing effect for the description
  const descriptionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1,
        staggerChildren: 0.04,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Spring animation for the title
  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        duration: 0.4,
      },
    },
  };

  return (
    <section
      id="portfolio-summary"
      className="relative py-16 mt-8 portfolio-summary education-section  from-appleGray to-lightBg dark:from-darkBg dark:to-appleDarkGray text-pretty"
    >
      <motion.h2
        className="section-title"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        ABOUT ME
      </motion.h2>
      
      <motion.p
        className="section-description"
        variants={descriptionVariants}
        initial="hidden"
        animate="visible"
      >
        {"Passionate and results-driven Full Stack Developer with a strong foundation in Java Full Stack Development. I have hands-on experience at ShivaMatrix Pvt. Ltd., where I design and implement scalable web applications using modern front-end and back-end technologies. I excel in collaborative environments and am committed to continuous learning and innovation in software development.".split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.p>
    </section>
  );
};

export default PortfolioSummary;
