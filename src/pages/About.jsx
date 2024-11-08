import React from 'react';
import { motion } from 'framer-motion';
import BlurFade from '../components/BlurFade';
import portrait from '../assets/ak-img.jpeg';
import BoxReveal from '../components/BoxReveal';
import { useTheme } from '../context/ThemeContext';
import Narrator from '../components/Narrator';
import Ripple from '../components/Ripple';
import {LazyLoadImage} from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

const About = () => {

  const {darkMode, setDarkMode} = useTheme();

  return (
    <div className="min-h-screen gap-8 p-6 md:p-10 mt-28 rounded-lg w-full text-center">

    <div className='backdrop-filter backdrop-blur-lg bg-glass dark:bg-glass-dark rounded-lg w-full text-center'>
    <h3 className="text-3xl mb-10 text-center font-bold tracking-tighter sm:text-5xl">
         <BlurFade delay={0.2} inView={true}><span className=''>About me...
          </span>
          </BlurFade>
        </h3>
       <div className="w-full grid place-items-center mb-10">
        <BoxReveal boxDelay={0.4} slideDelay={0.4} boxColor={darkMode ? "#5046e6" : "#181818a9"}>
        <span className="w-40 md:w-60 rounded-xl mt-4 transition-transform duration-300 hover:scale-110 shadow-lg">
          <LazyLoadImage style={{
                width : 'inherit',
                marginRight : 30,
                gap : 10,
                height : 'fit-content',
                borderRadius : '12px'
            }} src={portrait} alt='Atharva portrait' />

        </span>
          </BoxReveal>
          </div>

        <BlurFade delay={0.2} duration={0.5} inView={true}>
          <div className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
          <div><h6>" "Don't try to chase success. Follow excellence. And success will chase you."</h6>
          <div className='text-right italic w-full'>-{`Ranchoddas Shamaldas Chanchad (2009)`} "</div></div>
          <div className='text-right italic w-full'>-{`Atharva Milind Kulkarni`} </div>
          </div>
        </BlurFade>
      </div>

      <div className="relative flex h-fit h-[100vh] w-full flex-col items-center justify-center mt-[20vh] overflow-hidden rounded-lg bg-background">
      <Narrator className={'z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white'} inputText={`Nice to meet you! I am Atharva, a Full Stack Developer. I'm passionate about both web design and web development. I built scalable web apps using modern front end and back end technologies. I'm a Full Stack Developer skilled in Java Full Stack development with hands-on experience. I specialize in building scalable web apps using modern front-end and back-end technologies.`} />
      <Ripple />
    </div>

      <h3 className="text-3xl mb-10 mt-[3vh] text-center font-bold tracking-tighter sm:text-5xl">
         <BlurFade inView={true} delay={0.6}><span className=''>Me-Online
          </span>
          </BlurFade>
        </h3>
      <BlurFade className={'flex flex-col w-full gap-10 content-center justify-center'} delay={0.1} inView={true}>
      <ul className="list-none flex justify-center mb-8 gap-4 h-fit text-indigo-500">
            <BoxReveal boxDelay={0.4} slideDelay={0.4} boxColor={darkMode ? "#5046e6" : "#181818a9"} duration={0.5}>
              <a target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 hover: duration-150 delay-200 transition-colors" href={'https://github.com/athrvdev'}>GitHub</a>
              </BoxReveal>
              <BoxReveal boxDelay={0.45} slideDelay={0.45}  boxColor={darkMode ? "#5046e6" : "#181818a9"} duration={0.5}>
              <a target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors" href={'https://linkedin.com/in/atharva-kulkarni-cs06'}>LinkedIn</a>
              </BoxReveal>
              <BoxReveal  boxDelay={0.5} slideDelay={0.5}  boxColor={darkMode ? "#5046e6" : "#181818a9"} duration={0.5}>
              <a target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors" href={'https://instagram.com/sarcastharv/'}>Instagram</a>
              </BoxReveal>
              <BoxReveal  boxDelay={0.55} slideDelay={0.55}  boxColor={darkMode ? "#5046e6" : "#181818a9"} duration={0.5}>
              <a target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors" href={'https://leetcode.com/u/AtharvaKulkarni612/'}>Leetcode</a>
              </BoxReveal>
        </ul>
      </BlurFade>

      <h3 className="text-3xl mb-10 mt-[3vh] text-center font-bold tracking-tighter sm:text-5xl">
  <BlurFade inView={true} delay={0.6}>
    <span>Professional Summary</span>
  </BlurFade>
</h3>

<BlurFade className="flex text-base flex-col items-center text-center space-y-4" delay={0.2} inView={true}>
  <BoxReveal boxDelay={0.8} slideDelay={0.8} boxColor={darkMode ? "#5046e6" : "#181818a9"} duration={0.5}>
    <p className="mt-2 w-full max-w-3xl leading-relaxed text-gray-700 dark:text-gray-300">
      Nice to meet you! I am <span className="text-indigo-500">Atharva</span>, a <span className="text-indigo-500">Full Stack Developer</span>.
    </p>
  </BoxReveal>

  <BoxReveal boxDelay={0.8} slideDelay={0.8} boxColor={darkMode ? "#5046e6" : "#181818a9"} duration={0.5}>
    <p className="mt-2 w-full max-w-3xl leading-relaxed text-gray-700 dark:text-gray-300">
      I'm passionate about both <span className="text-blue-500">Front-end web design</span> and <span className="text-red-500">Back-end development</span>.
    </p>
  </BoxReveal>

  <BoxReveal boxDelay={0.8} slideDelay={0.8} boxColor={darkMode ? "#5046e6" : "#181818a9"} duration={0.5}>
    <p className="mt-2 w-full max-w-3xl leading-relaxed text-gray-700 dark:text-gray-300">
      I build scalable web apps using <span className="text-blue-500">ReactJS, Spring Boot, PHP</span>, and more.
    </p>
  </BoxReveal>

  <BoxReveal boxDelay={0.8} slideDelay={0.8} boxColor={darkMode ? "#5046e6" : "#181818a9"} duration={0.5}>
    <p className="mt-2 w-full max-w-3xl leading-relaxed text-gray-700 dark:text-gray-300">
      I underwent an extensive 15-week Java Full Stack Training conducted by <span className="text-indigo-500">Symbiosis Skill University</span> and powered by <span className="text-red-500">Capgemini</span>.
    </p>
  </BoxReveal>

  <BoxReveal boxDelay={0.95} slideDelay={0.95} boxColor={darkMode ? "#5046e6" : "#181818a9"} duration={0.5}>
    <p className="mt-2 w-full max-w-3xl leading-relaxed text-gray-700 dark:text-gray-300">
      I specialize in building scalable web apps using modern <span className="text-blue-500">front-end</span> and <span className="text-blue-500">back-end</span> technologies.
    </p>
  </BoxReveal>
</BlurFade>


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className='mb-[15vh]'
      >
        <h3 className="text-3xl mb-8 mt-[12vh] text-center font-bold tracking-tighter sm:text-5xl">
         <BlurFade inView={true} delay={0.2}><span className=''>
          Hobbies
          </span>
          </BlurFade>
        </h3>
        <ul className="mt-3 text-gray-700 dark:text-gray-300">
          {['Gaming', 'Listening to music', 'Cooking'].map((hobby, idx) => (
            <BlurFade key={idx} inView={true} delay={0.3}>
            <motion.li
              key={hobby}
              className="list-item"
              whileHover={{ scale: 1.1, color: '#4f46e5' }}
            >
              {hobby}
            </motion.li>
            </BlurFade>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default About;
