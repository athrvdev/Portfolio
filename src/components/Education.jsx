import React from 'react';
import { motion } from 'framer-motion';

const EducationCard = ({ Degree, Course, College, City, Year }) => {
  return (
    <motion.div
      className="p-5 mb-6 rounded-lg shadow-md education-card bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="mb-2 text-lg font-bold degree">{Degree}</h3>
      <p className="mb-2 course text-md">{Course}</p>
      <p className="mb-2 college text-md">{College}</p>
      <p className="text-sm text-gray-500 city-year dark:text-gray-400">
        <span className="highlight">{City}</span>, {Year}
      </p>
    </motion.div>
  );
};

const Education = () => {
  const educationDetails = [
    [
      'B.Tech',
      'Computer Science and Engineering',
      'CSMSS Chh. Shahu College of Engineering',
      'Chh. Sambhajinagar',
      '2021 - 2024',
    ],
    [
      'Diploma',
      'Mechanical Engineering',
      'Govt. Polytechnic Aurangabad',
      'Chh. Sambhajinagar',
      '2018 - 2021',
    ],
    [
      'SSC',
      'Maharashtra State Board of Secondary and Higher Secondary Education',
      'Swami Vivekanand Academy',
      'Chh. Sambhajinagar',
      '2018',
    ],
  ];

  return (
    <section className="relative py-16 education-section ">
      <motion.div
        className="absolute inset-0 education-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        
      />
      <motion.div
        className="relative z-10 max-w-screen-lg px-4 mx-auto education-content sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-12 text-3xl text-left section-title text-appleDarkGray dark:text-appleGray">
          My Education
        </h2>
        <div className="grid grid-cols-1 gap-8 education-cards sm:grid-cols-2 lg:grid-cols-3">
          {educationDetails.map((detail, index) => (
            <EducationCard
              key={index}
              Degree={detail[0]}
              Course={detail[1]}
              College={detail[2]}
              City={detail[3]}
              Year={detail[4]}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
