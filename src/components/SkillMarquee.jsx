import React from "react";
import { Marquee } from "./Marquee";

const SkillCard = ({
  img,
  name,
  className
}) => {
  return (
    <figure
      className={`relative w-28 py-2 cursor-pointer overflow-hidden bg-gray-200 dark:bg-[#262626] rounded-xl ${className}`}
    >
      <div className="flex flex-col items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        
          <figcaption className="text-sm font-medium dark:text-white">
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
