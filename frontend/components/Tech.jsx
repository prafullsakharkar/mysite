"use client";

import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@utils/motion";

import Image from "next/image";
import SectionWrapper from "@hoc/SectionWrapper";
import { technologies } from "@constants";


const TechCard = ({ index, name, icon }) => (
  <Tilt className='xs:w-[150px] md:w-[150px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-full shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-full py-5 px-12 min-h-[150px] flex justify-evenly items-center flex-col'
      >
        <Image
          width={50}
          height={50}
          src={icon}
          alt='software-engineer'
          className='object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {name}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <TechCard key={technology.name} index={index} {...technology} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
