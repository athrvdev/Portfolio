import React from 'react';

const TechnicalSkills = () => {
  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Express.js', 'PHP', 'MySQL',
    'Tailwind CSS', 'Bootstrap', 'Spring Boot', 'Angular', 'TypeScript', 'Firebase',
  ];

  return (
    <section id="skills" className="technical-skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
