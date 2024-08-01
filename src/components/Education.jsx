import React from 'react';
import { motion } from 'framer-motion';

const EducationCard = ({ Degree, Course, College, City, Year }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px 0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    minWidth: '250px',
    width: '33%',
    display: 'grid',
    placeSelf:'center',
    // gridTemplateColumns: '1fr 1fr 1fr',
  };

  const degreeStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
  };

  const courseStyle = {
    fontSize: '16px',
    color: '#555',
    marginBottom: '4px',
  };

  const collegeStyle = {
    fontSize: '16px',
    marginBottom: '4px',
  };

  const cityYearStyle = {
    fontSize: '14px',
    color: '#888',
  };

  return (
    <div style={cardStyle}>
      <div style={degreeStyle}>{Degree}</div>
      <div style={courseStyle}>{Course}</div>
      <div style={collegeStyle}>{College}</div>
      <div style={cityYearStyle}>{City}, {Year}</div>
    </div>
  );
};


const Education = () => {

  const educationDetails = [
    ["B.Tech", "Computer Science and Engineering", "CSMSS Chh. Shahu College of Engineering", "Chh. Sambhajinagar", "2021 - 2024"],
    ["Diploma", "Mechanical Engineering", "Govt. Polytechnic Aurangabad", "Chh. Sambhajinagar", "2018 - 2021"],
    ["SSC", "Maharashtra State Board of Secondary and Higher Secondary Education", "Swami Vivekanand Academy" ,"Chh. Sambhajinagar", "2018"],
  ]

  return (

    <>
    <motion.section 
      className="w-full p-10 text-center  bg-appleGray dark:bg-appleDarkGray text-appleDarkGray dark:text-appleGray"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
    
    {
      educationDetails.map((detail, index) =>(
        <EducationCard   
          key={index}
          Degree={detail[0]}
          Course={detail[1]}
          College={detail[2]}
          City={detail[3]}
          Year={detail[4]}
        />
      ))
    }
      
    </motion.section>
    </>
  );
};

export default Education;
