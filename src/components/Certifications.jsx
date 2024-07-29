import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  return (
    <motion.section 
      className="w-full p-10 text-center bg-appleGray dark:bg-appleDarkGray text-appleDarkGray dark:text-appleGray"
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold">Certifications</h2>
      <p className="mt-4">[Your certifications]</p>
    </motion.section>
  );
};

export default Certifications;
