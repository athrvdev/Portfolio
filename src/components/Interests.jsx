import React from 'react';
import { motion } from 'framer-motion';

const Interests = () => {
  return (
    <motion.section 
      className="p-10 bg-appleGray dark:bg-appleDarkGray text-appleDarkGray dark:text-appleGray text-center"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold">Interests</h2>
      <p className="mt-4">[Your interests]</p>
    </motion.section>
  );
};

export default Interests;
