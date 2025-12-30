import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../utils/ProjectCard.jsx";
import data from "../utils/projectData.js";

const Projects = () => {
  return (
    <section className="w-full px-3 py-16 flex flex-col items-center text-gray-100">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2  gap-4 sm:gap-8 justify-items-center w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}>
        {data.map((project, index) => (
          <ProjectCard
            key={index}
            data={project}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-8">
        <a
          href="https://github.com/Ravi1470"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-500 font-semibold text-lg hover:text-sky-400 transition-colors"
          aria-label="View all projects on GitHub">
          View All Projects on GitHub
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;
