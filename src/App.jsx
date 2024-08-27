import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About'; 
import Projects from './components/Projects';
import Skills from './components/Skills';
import ProfileCard from './components/ProfileCard'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProfileCard />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
};

export default App;
