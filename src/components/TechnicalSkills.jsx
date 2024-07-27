import React from 'react';
import { motion } from 'framer-motion';

const TechnicalSkills = () => {
  return (
    <motion.section 
      className="p-10 bg-appleGray dark:bg-appleDarkGray text-appleDarkGray dark:text-appleGray text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold">Technical Skills</h2>
      <p className="mt-4">[Your technical skills]</p>
    </motion.section>
  );
};

export default TechnicalSkills;
