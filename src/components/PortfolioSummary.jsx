import React from 'react';
import { motion } from 'framer-motion';

const PortfolioSummary = () => {
  return (
    <motion.section 
      className="p-10 bg-appleGray dark:bg-appleDarkGray text-appleDarkGray dark:text-appleGray text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold">Portfolio Summary</h2>
      <p className="mt-4">[Your portfolio summary]</p>
    </motion.section>
  );
};

export default PortfolioSummary;
