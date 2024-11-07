import React from 'react';
import { motion } from 'framer-motion';
import BlurFade from '../components/BlurFade';
import portrait from '../assets/ak-img.jpeg';

const About = () => {
  return (
    <div className="text-left min-h-screen gap-8 p-6 md:p-10 mt-28 rounded-lg backdrop-filter backdrop-blur-lg bg-glass dark:bg-glass-dark shadow-xl">

      {/* Main Title */}
      <motion.h3
        className="max-w-[43.5rem] pt-5 md:mx-auto md:px-4 text-center font-semibold tracking-tighter text-5xl sm:text-6xl md:text-7xl"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
      >
        <BlurFade delay={0.6}>About Me</BlurFade>
      </motion.h3>

      {/* Portrait Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex flex-col items-center mb-8"
      >
        <h3 className="text-lg md:text-2xl font-semibold text-center hover:text-indigo-500 transition-colors duration-300">
          Portrait
        </h3>
        <img
          src={portrait}
          alt="Atharva portrait"
          className="w-40 md:w-60 rounded-xl mt-4 transition-transform duration-300 hover:scale-110 shadow-lg"
        />
      </motion.div>

      {/* Social Links Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <BlurFade delay={0.8}>
          <h3 className="text-lg md:text-2xl font-semibold hover:text-indigo-500 transition-colors duration-300">Me Online</h3>
        </BlurFade>
        <ul className="list-none mt-4 space-y-2 text-indigo-500">
          {['GitHub', 'LinkedIn', 'Instagram', 'LeetCode'].map((site) => (
            <motion.li
              key={site}
              whileHover={{ scale: 1.1, color: '#4f46e5' }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <a
                href={
                  site === 'GitHub'
                    ? 'https://github.com/athrvdev'
                    : site === 'LinkedIn'
                    ? 'https://linkedin.com/in/atharva-kulkarni-cs06'
                    : site === 'Instagram'
                    ? 'https://instagram.com/sarcastharv/'
                    : 'https://leetcode.com/u/AtharvaKulkarni612/'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-700 transition-colors"
              >
                {site}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <BlurFade delay={0.9}>
          <h3 className="text-lg md:text-2xl font-semibold hover:text-indigo-500 transition-colors duration-300">About Me</h3>
        </BlurFade>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-300">
          Nice to meet you! I am <span className="text-indigo-500">Atharva</span>, a <span className="text-indigo-500">Full Stack Developer</span>.
        </p>
        <p className="mt-1">
          I'm passionate about both <span className="text-blue-500">web design</span> and <span className="text-red-500">web development</span>. I build scalable web apps using <span className="text-blue-500">ReactJS, Spring Boot, PHP</span>, and more.
        </p>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="text-muted-foreground"
      >
        <BlurFade delay={1}>
          <h3 className="text-lg md:text-2xl font-semibold hover:text-indigo-500 transition-colors duration-300">Skills</h3>
        </BlurFade>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-300">
          I'm a <span className="text-indigo-500">Full Stack Developer</span> skilled in <span className="text-red-500">Java Full Stack</span> development with hands-on experience. I specialize in building scalable web apps using modern <span className="text-blue-500">front-end</span> and <span className="text-blue-500">back-end</span> technologies.
        </p>
      </motion.div>

      {/* Hobbies Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
      >
        <BlurFade delay={1.1}>
          <h3 className="text-lg md:text-2xl font-semibold hover:text-indigo-500 transition-colors duration-300">Hobbies</h3>
        </BlurFade>
        <ul className="mt-3 space-y-1 list-inside text-gray-700 dark:text-gray-300">
          {['Gaming', 'Listening to music', 'Cooking'].map((hobby) => (
            <motion.li
              key={hobby}
              className="list-item"
              whileHover={{ scale: 1.1, color: '#4f46e5' }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              {hobby}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default About;
