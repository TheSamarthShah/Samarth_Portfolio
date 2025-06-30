"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { skillsData } from "../../lib/data";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.04 * index,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="mb-28 max-w-4xl scroll-mt-28 text-center px-4 sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-3 text-sm sm:text-base text-gray-800">
        {skillsData.map((skill: string, index: number) => (
          <motion.li
            key={index}
            className="px-4 py-2 border border-gray-300 rounded-full bg-white shadow-sm hover:shadow-md transition"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
