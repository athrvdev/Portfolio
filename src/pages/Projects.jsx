import React from "react";
import BoxReveal from "../components/BoxReveal";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import { useTheme } from "../context/ThemeContext";
import BlurFade from "../components/BlurFade";

const projects = [
  {
    title: 'Thought Stream',
    description: 'A blogging platform for the capstone project of Java Full Stack training. This blogging platform is being developed using Spring Boot and AngularJS. With a robust back-end powered by Spring Boot and a dynamic front-end',
    links: ['https://thoughtstream-v2.vercel.app/', 'https://github.com/athrvdev/ThoughtStream'],
    summary: 'An interactive blogging platform where users can share and explore content.'
  },
  {
    title: 'Personal React Portfolio',
    description: 'A personal portfolio made using ReactJS, TailwindCSS and FramerMotion.',
    links: ['https://portfolio-ak612.vercel.app/', 'https://github.com/athrvdev/Portfolio'],
    summary: 'A dynamic showcase of my projects, skills, and experiences.'
  },
  {
    title: 'Advea Website',
    description: 'A website for the Advance Embryology Academy - Pune using HTML, CSS, Bootstrap, JS, PHP, and MySQL.',
    links: ['https://www.advea.in', ''],
    summary: 'An educational platform for embryology courses and resources.'
  },
  {
    title: 'APS Sensors Website',
    description: 'A full-stack website providing a dashboard and control system for APS Labs equipment.',
    links: ['https://www.apssensors.com', ''],
    summary: 'Dashboard and control system for real-time monitoring of lab equipment.'
  },
  {
    title: 'AXLE Website for Voltty',
    description: 'A full-stack website for Axle IoT company, focusing on a rich UI and robust functionality along with dashboard and control system for APS Labs equipment.',
    links: ['https://www.voltty.in', ''],
    summary: 'Website for IoT solutions company, featuring a dashboard for device control.'
  },
  {
    title: 'Speech Narrator',
    description: 'Simple Speech Narrator website',
    links: ['https://speech-narrator.vercel.app/', 'https://github.com/athrvdev/Speech-Narrator'],
    summary: 'An accessible tool that converts text to speech for easy narration.'
  },
  {
    title: 'To-Do List',
    description: 'A full-stack website for making to-do list to plan and track progress of tasks. It stores the tasks in a JSON file with the help of node and expressJS as backend technologies.',
    links: ['https://to-do-list-react-js-red.vercel.app/', 'https://github.com/athrvdev/ToDoList-ReactJS'],
    summary: 'A to-do list application for task management and tracking.'
  },
  {
    title: 'Cognity',
    description: 'B.Tech Final Year Project - A mental well-being and surveillance website using React, Firebase, Node.js, Express.js, and Tailwind CSS.',
    links: ['https://www.advea.in', 'https://github.com/The-Eternals/Cognity/tree/main'],
    summary: 'A mental well-being platform with tools for self-assessment and tracking.'
  },
  {
    title: 'Expense Tracker',
    description: 'Expense calculator and tracker for tracking monthly expenses. It comes along with the features to add, delete and modify existing expenses.',
    links: ['https://expense-tracker-ak.vercel.app/', 'https://github.com/athrvdev/Expense-Tracker'],
    summary: 'A budgeting tool for tracking and managing monthly expenses.'
  },
  {
    title: 'Leads Tracker Chrome Extension',
    description: 'Simple chrome extension to track leads, links and texts over various tabs. This was one of the very first projects I took on while learning JS fundamentals and DOM.',
    links: ['', 'https://github.com/athrvdev/Leads-Tracker-ChromeExt'],
    summary: 'A Chrome extension for tracking and saving leads across tabs.'
  },
];

export default function Projects() {
  const { darkMode } = useTheme();

  return (
    <div className="flex flex-wrap justify-center min-h-screen gap-8 p-8 mt-28 rounded-lg backdrop-filter text-wrap backdrop-blur-lg bg-glass dark:bg-glass-dark">
      <h3 className="text-3xl font-bold tracking-tighter sm:text-5xl">
        <BlurFade delay={0.6}><span>Check out my latest work</span></BlurFade>
      </h3>
      <BlurFade>
        <div className="text-muted-foreground md:text-xl lg:text-base xl:text-xl text-center">
          I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
        </div>
      </BlurFade>
      {projects.map((project, index) => (
        <ProjectCard 
          key={index}
          gradientColor={darkMode ? "#26262695" : "#d9d9d9b3"} 
          className="w-full min-w-[280px] cursor-pointer shadow-2xl m-4 lg:w-2/5 xl:w-5/12 max-w-lg p-8"
        >
          <BoxReveal boxColor={darkMode ? "#5046e6" : "#181818a9"} duration={0.5}>
            <h3 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] text-left leading-[1] font-semibold tracking-tight">{project.title}</h3>
          </BoxReveal>
          <BoxReveal boxColor={darkMode ? "#5046e6" : "#181818a9"} duration={0.5}>
            <h3 className="mt-[.5rem] text-[1rem]">{project.summary}</h3>
          </BoxReveal>
          <div className="border-b-2 dark:border-b-[#5046e6]"></div>
          <BoxReveal boxColor={darkMode ? "#5046e6" : "#181818a9"} duration={0.5}>
            <p className="text-base mt-8 text-gray-800 dark:text-gray-200 mb-4 tracking-wide leading-6">{project.description}</p>
          </BoxReveal>
          
            <BoxReveal boxColor={darkMode ? "#5046e6" : "#181818a9"} duration={0.5}>
              <div className="flex gap-4 mt-4">
                {project.links[0] && (
                  <a
                    href={project.links[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 p-2 rounded-md text-white bg-[#181818a9] dark:bg-[#5046e6] hover:bg-[#4037b5] transition-all ease-linear"
                  >
                    Live Preview <FaExternalLinkAlt className="ml-1" />
                  </a>
                )}
                {project.links[1] && (
                  <a
                    href={project.links[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 p-2 rounded-md text-white bg-[#181818a9] dark:bg-[#5046e6] hover:bg-[#4037b5] transition-all ease-linear"
                  >
                    GitHub Code <FaGithub className="ml-1" />
                  </a>
                )}
              </div>
            </BoxReveal>
        </ProjectCard>
      ))}
    </div>
  );
}
