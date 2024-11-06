import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import TextRevealByWord from "../components/TextReveal";
import BlurFade from "../components/BlurFade";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center space-y-16">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Header />
        <BlurFade delay={1}>
          <button className="px-6 py-3 text-lg font-semibold text-white bg-indigo-500 rounded-full hover:bg-indigo-700 button-animation">
            <Link to={'/projects'}>
              <h2 className="flex items-center">View My Work <FaArrowCircleRight className="pl-2 scale-125" /></h2>
            </Link>
          </button>
        </BlurFade>
      </motion.div>

      <BlurFade inView={true}>
        <div className="flex gap-2">
          <a href="https://github.com/athrvdev" className="text-gray-700 hover:text-indigo-500 dark:text-gray-300">GitHub</a>
          <a href="https://linkedin.com/in/atharva-kulkarni-cs06" className="text-gray-700 hover:text-indigo-500 dark:text-gray-300">LinkedIn</a>
          <a href="https://leetcode.com/u/AtharvaKulkarni612/" className="text-gray-700 hover:text-indigo-500 dark:text-gray-300">Leetcode</a>
          <a href="https://instagram.com/sarcastharv/" className="text-gray-700 hover:text-indigo-500 dark:text-gray-300">Instagram</a>
          <a href="mailto:atharvamk6@gmail.com" className="text-gray-700 hover:text-indigo-500 dark:text-gray-300 z-20">E-Mail</a>
        </div>
      </BlurFade>

      <section className="w-full mt-20">
        <TextRevealByWord
          className="z-10 flex h-fit items-center justify-center rounded-lg text-sm tracking-tight text-gray-600 dark:text-gray-400"
          text={`I am Atharva Kulkarni, a passionate Full Stack Developer with a knack for creating immersive digital experiences. Passionate and results-driven Full Stack Developer with a strong foundation in Java Full Stack Development.`}
        />
      </section>

      <TextRevealByWord
        className="z-10 flex h-fit items-center justify-center rounded-lg text-sm tracking-tight text-gray-600 dark:text-gray-400"
        text="I have hands-on experience at ShivaMatrix Pvt. Ltd., where I design and implement scalable web applications using modern front-end and back-end technologies. I excel in collaborative environments and am committed to continuous learning and innovation in software development."
      />

      <TextRevealByWord
        className="z-10 flex h-fit items-center justify-center rounded-lg text-sm tracking-wide text-gray-600 dark:text-gray-400"
        text="Skilled in React, Node.js, Spring Boot, and creating user-centric applications."
      />
    </div>
  );
};

export default Home;
