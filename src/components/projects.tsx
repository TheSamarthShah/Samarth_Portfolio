"use client";

import React, { useState } from "react";
import { featuredProjects, supportingProjects } from "../../lib/data";
import SectionHeading from "./section-heading";
import Project from "./project";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>

      <div>
        {featuredProjects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}

        <AnimatePresence>
          {showMore &&
            supportingProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.3 }}
              >
                <Project {...project} />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      <div className="mt-8 text-center">
        <button
          className="bg-white text-gray-700 px-6 py-2 rounded-full border border-black/10 shadow-sm text-sm transition transform hover:scale-105 active:scale-100"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? "See Less" : "See More"}
        </button>
      </div>
    </section>
  );
}
