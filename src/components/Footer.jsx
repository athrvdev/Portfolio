import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="w-full p-10 text-center bg-appleDarkGray text-appleGray"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-center">Made with ❤️ by Atharva Milind Kulkarni.</p>
    </motion.footer>
  );
};

export default Footer;
