import React from 'react';

const Projects = () => {
  const projectDetails = [
    {
      title: 'Advea Website',
      description: 'A website for the ADVANCE EMBRYOLOGY ACADEMY using HTML, CSS, Bootstrap, JS, PHP, and MySQL.',
      links: 'https://www.advea.in'
    },
    {
      title: 'APSSensors Website',
      description: 'A full-stack website providing a dashboard and control system for APS Labs equipment.',
      links: 'https://www.apssensors.com'
    },
    {
      title: 'AXLE Website for Voltty',
      description: 'A full-stack website for Axle IoT company, focusing on a rich UI and robust functionality.',
      links: 'https://www.voltty.in'
    },
    {
      title: 'Cognity',
      description: 'A mental well-being and surveillance website using React, Firebase, Node.js, Express.js, and Tailwind CSS.',
      links: 'https://www.advea.in'
    },
    {
      title: 'ThoughtStream',
      description: 'A blogging platform for the capstone project of Java Full Stack training.',
      links: 'https://cognity.vercel.app/'
    },
    {
      title: 'Personal React Portfolio',
      description: 'A personal portfolio made using ReactJS, TailwindCSS, FramerMotion and CSS.',
      links: 'https://portfolio-ak612.vercel.app/'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectDetails.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="font-bold underline transition-colors duration-500 cursor-pointer underline-offset-2 hover:text-cyan-800 project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.links} className='relative bottom-0 text-emerald-600'>Learn more...</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
