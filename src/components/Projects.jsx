import React from 'react';

const Projects = () => {
  const projectDetails = [
    {
      title: 'Advea Website',
      description: 'A website for the ADVANCE EMBRYOLOGY ACADEMY using HTML, CSS, Bootstrap, JS, PHP, and MySQL.',
    },
    {
      title: 'APSSensors Website',
      description: 'A full-stack website providing a dashboard and control system for APS Labs equipment.',
    },
    {
      title: 'AXLE Website for Voltty',
      description: 'A full-stack website for Axle IoT company, focusing on a rich UI and robust functionality.',
    },
    {
      title: 'Cognity',
      description: 'A mental well-being and surveillance website using React, Firebase, Node.js, Express.js, and Tailwind CSS.',
    },
    {
      title: 'ThoughtStream',
      description: 'A blogging platform for the capstone project of Java Full Stack training.',
    },
    {
      title: 'Mini Projects',
      description: 'Various projects like dynamic user card, VideoHub, Realtime clock, and more.',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectDetails.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
