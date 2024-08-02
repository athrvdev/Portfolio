import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Sidebar = ({ open, setOpen }) => {
  return (
    <div className={`sidebar ${open ? 'open' : ''}`}>
      <motion.div
        className="sidebar-overlay"
        onClick={() => setOpen(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 0.5 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="sidebar-content"
        initial={{ x: -250 }}
        animate={{ x: open ? 0 : -250 }}
        transition={{ duration: 0.3 }}
      >
        <ul>
          <li onClick={() => setOpen(false)}><a href="#portfolio-summary">Summary</a></li>
          <li onClick={() => setOpen(false)}><a href="#projects">Projects</a></li>
          <li onClick={() => setOpen(false)}><a href="#skills">Skills</a></li>
          <li onClick={() => setOpen(false)}><a href="#experience">Experience</a></li>
          <li onClick={() => setOpen(false)}><a href="#contact">Contact</a></li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Sidebar;
