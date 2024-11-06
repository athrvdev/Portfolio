import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TextRevealByWord = ({ text, className }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center start"],
  });

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={`relative z-0 ${className}`}>
      <div className="sticky top-1/4 mx-auto flex min-h-[150vh] items-center justify-center px-4 py-16">
        <p className="flex flex-wrap text-xl font-bold text-gray-600 dark:text-gray-400 md:text-xl lg:text-2xl xl:text-3xl">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1 lg:mx-2.5">
      <motion.span style={{ opacity }} className="text-black dark:text-white">
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
