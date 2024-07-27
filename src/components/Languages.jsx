import React from 'react';
import { motion } from 'framer-motion';

const Languages = () => {
  return (
    <motion.section 
      className="p-10 bg-appleGray dark:bg-appleDarkGray text-appleDarkGray dark:text-appleGray text-center"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold">Languages</h2>
      <p className="mt-4">[Your languages]</p>
    </motion.section>
  );
};

export default Languages;
