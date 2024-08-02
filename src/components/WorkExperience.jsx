import React from 'react';

const WorkExperience = () => {
  const experiences = [
    {
      position: 'Full Stack Developer',
      company: 'ShivaMatrix',
      duration: '2024 - Present',
      responsibilities: [
        'Developed and maintained web applications using modern frameworks and technologies.',
        'Collaborated with design and backend teams to implement UI/UX features.',
        'Optimized application performance and enhanced user experience.',
      ],
    },
    {
      position: 'Freelance Software Developer',
      company: 'Startup',
      duration: '2023 - 2024',
      responsibilities: [
        'Designed and developed frontend interfaces for various clients.',
        'Implemented responsive design principles for mobile-first development.',
        'Provided technical support and maintenance for deployed applications.',
      ],
    },
  ];

  return (
    <section id="experience" className="work-experience-section">
      <h2 className="section-title">Work Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="experience-card">
          <h3 className="experience-position">{experience.position}</h3>
          <h4 className="experience-company">{experience.company}</h4>
          <span className="experience-duration">{experience.duration}</span>
          <ul className="experience-responsibilities">
            {experience.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;
