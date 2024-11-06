import React from "react";
import BoxReveal from "../components/BoxReveal";
import { FaGithub } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import { useTheme } from "../context/ThemeContext";

const projects = [
  {
    title: 'Thought Stream',
    description: 'A blogging platform for the capstone project of Java Full Stack training.',
    links: 'https://cognity.vercel.app/',
    summary : 'project desc',

  },
  {
    title: 'Personal React Portfolio',
    description: 'A personal portfolio made using ReactJS, TailwindCSS, FramerMotion and CSS.',
    links: 'https://portfolio-ak612.vercel.app/',
    summary : 'project desc',

  },
  {
    title: 'Advea Website',
    description: 'A website for the ADVANCE EMBRYOLOGY ACADEMY using HTML, CSS, Bootstrap, JS, PHP, and MySQL.',
    links: 'https://www.advea.in',
    summary : 'project desc',

  },
  {
    title: 'APS Sensors Website',
    description: 'A full-stack website providing a dashboard and control system for APS Labs equipment.',
    links: 'https://www.apssensors.com',
    summary : 'project desc',

  },
  {
    title: 'AXLE Website for Voltty',
    description: 'A full-stack website for Axle IoT company, focusing on a rich UI and robust functionality.',
    links: 'https://www.voltty.in',
    summary : 'project desc',

  },
  {
    title: 'Cognity',
    description: 'A mental well-being and surveillance website using React, Firebase, Node.js, Express.js, and Tailwind CSS.',
    links: 'https://www.advea.in',
    summary : 'project desc',

  },
];

export default function Projects() {
  const { darkMode, toggleTheme } = useTheme();
  console.log(darkMode);
  return (
    <div className="flex flex-wrap justify-center min-h-screen gap-8 p-8  mt-36 rounded-lg backdrop-filter text-wrap backdrop-blur-lg bg-glass dark:bg-glass-dark w">
      {projects.map((project, index) => (
        <ProjectCard key={index}
        gradientColor={darkMode ? "#26262695" : "#d9d9d9b3"} className="w-full min-w-[280px] cursor-pointer shadow-2xl m-4 lg:w-2/5 xl:w-5/12 h-fit max-w-lg p-8">
          <BoxReveal boxColor={darkMode ? "#5046e6" : "#181818a9"} duration={0.5}>
            <h3 className=" text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] text-left  leading-[1] font-semibold tracking-tight text-wrap">{project.title}</h3>
          </BoxReveal>

          <BoxReveal boxColor={darkMode ? "#5046e6" : "#181818a9"} duration={0.5}>
            <h3 className="mt-[.5rem] text-[1rem]">{project.summary}</h3>
          </BoxReveal>
          <div className="border-b-2 border-b-black] dark:border-b-[#5046e6]"></div>
          <BoxReveal boxColor={darkMode ? "#5046e6" : "#181818a9"} duration={0.5}>
            <p className="text-base mt-8 text-gray-800 dark:text-gray-200 mb-4 tracking-wide leading-6">{project.description}</p>
          </BoxReveal>

          <BoxReveal boxColor={darkMode ? "#5046e6" : "#181818a9"} duration={0.5}>
            <a href={project.links} className="mt-[1.6rem] flex gap-1 p-2 rounded-md text-white hover:bg-[#4037b5] hover:bg-[#2c2c2cf6] bg-[#181818a9] dark:bg-[#5046e6]">View Project <FaGithub className="mt-1" /></a>
          </BoxReveal>
        </ProjectCard>
      ))}
    </div>
  );
}
