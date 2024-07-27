import React from 'react';
import { motion } from 'framer-motion';

const WorkExperience = () => {
  return (
    <motion.section 
      className="p-10 bg-appleGray dark:bg-appleDarkGray text-appleDarkGray dark:text-appleGray text-center"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold">Work Experience</h2>
      <p className="mt-4">[Your work experience]</p>
    </motion.section>
  );
};

export default WorkExperience;
