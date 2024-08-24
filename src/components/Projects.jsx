import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  const projectDetails = [
    {
      id: '1',
      title: 'Advea Website',
      description: 'A website for the ADVANCE EMBRYOLOGY ACADEMY using HTML, CSS, Bootstrap, JS, PHP, and MySQL.',
      links: 'https://www.advea.in'
    },
    {
      id: '2',
      title: 'APSSensors Website',
      description: 'A full-stack website providing a dashboard and control system for APS Labs equipment.',
      links: 'https://www.apssensors.com'
    },
    {
      id: '3',
      title: 'AXLE Website for Voltty',
      description: 'A full-stack website for Axle IoT company, focusing on a rich UI and robust functionality.',
      links: 'https://www.voltty.in'
    },
    {
      id: '4',
      title: 'Cognity',
      description: 'A mental well-being and surveillance website using React, Firebase, Node.js, Express.js, and Tailwind CSS.',
      links: 'https://www.advea.in'
    },
    {
      id: '5',
      title: 'ThoughtStream',
      description: 'A blogging platform for the capstone project of Java Full Stack training.',
      links: 'https://cognity.vercel.app/'
    },
    {
      id: '6',
      title: 'Personal React Portfolio',
      description: 'A personal portfolio made using ReactJS, TailwindCSS, FramerMotion, and CSS.',
      links: 'https://portfolio-ak612.vercel.app/'
    }
  ];

  // Spring animation for the section title
  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        duration: 0.8,
      },
    },
  };

  return (
    <section id="projects" className="projects-section relative">
      <motion.h2
        className="section-title"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        Projects
      </motion.h2>
      <div className="projects-grid">
        {projectDetails.map((project) => (
          <motion.div
            key={project.id}
            layoutId={project.id}
            className="project-card"
            onClick={() => setSelectedId(project.id)}
          >
            <motion.h3 className="font-bold underline transition-colors duration-500 cursor-pointer underline-offset-2 hover:text-cyan-800 project-title">
              {project.title}
            </motion.h3>
            <motion.p className="project-description">{project.description}</motion.p>
            <motion.a href={project.links} className="relative bottom-0 text-emerald-600">
              Learn more...
            </motion.a>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            onClick={() => setSelectedId(null)}
            layoutId={selectedId}
            className="project-card-expanded bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg z-50"
          >
            <motion.h3 className="text-lg font-semibold">{projectDetails.find((p) => p.id === selectedId).title}</motion.h3>
            <motion.p className="mt-2">{projectDetails.find((p) => p.id === selectedId).description}</motion.p>
            <motion.a target='blank' href={projectDetails.find((p) => p.id === selectedId).links} className="text-emerald-600 mt-4 inline-block">
              Visit Project
            </motion.a>
            <motion.button
              onClick={() => setSelectedId(null)}
              className="absolute top-2 right-2 text-red-500 font-bold"
            >
              Close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
