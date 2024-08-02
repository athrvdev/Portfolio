import React from 'react';

const WorkExperience = () => {
  const experiences = [
    {
      position: 'Full Stack Developer',
      company: 'ShivaMatrix Pvt. Ltd.',
      duration: 'May 2024 - Present',
      responsibilities: [
        'Developed and maintained web applications using modern frameworks and technologies.',
        'Collaborated with Managers and clients directly to implement UI/UX, and features.',
        'Optimized application performance and enhanced user experience.',
      ],
    },
    {
      position: 'Java Full Stack Development Internship',
      company: 'Symbiosis SKill and professional University / Capgemini',
      duration: 'Apr 2023 - Jul 2024',
      responsibilities: [

        'Continuous implementation of newly learnt concepts of Core Java, JDBC, Hibernate, MySQL,etc.',
        'Made Login/Servlet Registration System using Java servlets, JSP and JDBC',
        'This comprehensive training covered both front-end and back-end development, providing hands-on experience with a variety of modern technologies and frameworks like Core Java, JavaScript, TypeScript, JDBC, MySQL, SpringBoot, AngularJS, etc.',
      ],
    },
    {
      position: 'Front End Development Intern',
      company: 'E-Katta Innovators LLP',
      duration: 'Oct 2023 - Dec 2024',
      responsibilities: [
        'Designed and developed frontend interfaces for various clients.',
        'Implemented responsive design principles for mobile-first development.',
        'Provided technical support and maintenance for deployed applications.',
      ],
    },
    {
      position: 'DMS Associate',
      company: 'Maruti Suzuki Arena, Pagariya Auto Pvt. Ltd.',
      duration: 'May 2023 - Sept 2023',
      responsibilities: [
        'Designed and developed frontend interfaces for various clients.',
        'Implemented responsive design principles for mobile-first development.',
        'Provided technical support and maintenance for deployed applications.',
      ],
    },
  ];

  return (
    <section id="experience" className="work-experience-section">
      <h2 className="section-title">Work Experience </h2>
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
