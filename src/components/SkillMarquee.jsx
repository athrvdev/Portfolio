import React from "react";
import { Marquee } from "./Marquee";

const SkillCard = ({
  img,
  name,
  className
}) => {
  return (
    <figure
      className={`relative w-28 py-2 cursor-pointer overflow-hidden bg-neutral-100 transform hover:-translate-y-1 hover:scale-110 shadow-md shadow-neutral-300 dark:shadow-neutral-800 delay-200 duration-100 linear  transition-all  text-black dark:bg-neutral-900 rounded-xl ${className} skill-card`}
    >
      <div className="skill-container flex flex-col items-center gap-2">
        <img className="skill-img rounded-full  shadow-black" width="32" height="32" alt="" src={img} />
        
          <figcaption className="skill-name text-sm font-medium dark:text-white p-[2px]">
            {name}
          </figcaption>
      </div>
    </figure>
  );
};

export default function SkillMarquee({skills, className}) {
    const firstRow = skills.slice(0, skills.length / 2);
    const secondRow = skills.slice(skills.length / 2);

  return (
    <div className="relative flex h-fit gap-10 w-full flex-col mt-2 justify-center overflow-hidden ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((skill, idx) => (
          <SkillCard key={idx} {...skill} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((skill, idx) => (
          <SkillCard key={idx} {...skill} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#fff] dark:from-gray-900"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#fff] dark:from-gray-900"></div>
    </div>
  );
}
