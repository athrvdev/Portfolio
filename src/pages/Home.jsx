import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import BlurFade from "../components/BlurFade";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import { WordFadeIn } from "../components/WordFadeIn";
import MarqueeDemo from "../components/SkillMarquee";

const Home = () => {
  const techStack = [
    {
      name: "Java",
      img: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png",
    },
    {
      name: "Spring Boot",
      img: "https://img.icons8.com/color/48/000000/spring-logo.png",
    },
    {
      name: "Hibernate",
      img: "https://img.icons8.com/color/48/000000/hibernate.png",
    },
    {
      name: "MySQL",
      img: "https://img.icons8.com/color/48/000000/mysql-logo.png",
    },
    {
      name: "PostgreSQL",
      img: "https://img.icons8.com/color/48/000000/postgresql.png",
    },
    {
      name: "HTML",
      img: "https://img.icons8.com/color/48/000000/html-5--v1.png",
    },
    {
      name: "CSS",
      img: "https://img.icons8.com/color/48/000000/css3.png",
    },
    {
      name: "JavaScript",
      img: "https://img.icons8.com/color/48/000000/javascript--v1.png",
    },
    {
      name: "TypeScript",
      img: "https://img.icons8.com/color/48/000000/typescript.png",
    },
    {
      name: "React",
      img: "https://img.icons8.com/plasticine/48/000000/react.png",
    },
    {
      name: "Angular",
      img: "https://img.icons8.com/color/48/000000/angularjs.png",
    },
    {
      name: "Git",
      img: "https://img.icons8.com/color/48/000000/git.png",
    },
    {
      name: "Docker",
      img: "https://img.icons8.com/color/48/000000/docker.png",
    },
    {
      name: "REST API",
      img: "https://img.icons8.com/color/48/000000/api.png",
    },
    {
      name: "Node.js",
      img: "https://img.icons8.com/color/48/000000/nodejs.png",
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center space-y-16 pb-[20vh]">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Header />
        <BlurFade delay={0.7}>
        <p className="max-w-xl lg:pl-28 sm:pl-8 mb-5 w-full text-balance text-base tracking-tight dark:font-medium text-center md:text-lg">Crafting elegant solutions with creativity.</p>
        </BlurFade>
        <BlurFade delay={1}>

          <button className="px-6 py-3 text-lg font-semibold text-white bg-indigo-500 rounded-full hover:bg-indigo-700 button-animation">
            <Link to={'/projects'}>
              <h2 className="flex items-center">View My Work <FaArrowCircleRight className="pl-2 -rotate-45 -mb-2 scale-[200%]" /></h2>
            </Link>
          </button>
        </BlurFade>
      </motion.div>

      <BlurFade inView={true}>
        <WordFadeIn delay={1} words={'My skills include...'} />
      </BlurFade>
      <MarqueeDemo skills={techStack} />
      
    </div>
  );
};

export default Home;