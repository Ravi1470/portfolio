import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="cursor-pointer rounded-2xl overflow-hidden bg-slate-900 shadow-md shadow-sky-400/20 hover:shadow-sky-600/40 transition-all duration-300 hover:-translate-y-1 p-3 w-full max-w-sm">
      <img
        className="w-full h-48 sm:h-56 object-cover rounded-lg"
        src={data.img_url}
        alt={data.title}
      />
      <div className="p-4 space-y-4">
        <h3 className="text-sm sm:text-base font-semibold text-white">
          {data.title}
        </h3>
        <p className="text-sm text-gray-400 line-clamp-4 text-justify">
          {data.description}
        </p>

        <div className="flex flex-wrap gap-1 sm:gap-2 mt-2">
          {data.stack.map((tech, index) => (
            <span
              key={index}
              className="bg-sky-600 text-white text-xs sm:text-sm font-medium px-2 py-1 rounded-md">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-3">
          <a
            href={data.code}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${data.title} code`}
            className="text-sky-500 hover:text-sky-400 text-sm sm:text-base font-medium">
            Code
          </a>
          <a
            href={data.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${data.title} demo`}
            className="text-sky-500 hover:text-sky-400 text-sm sm:text-base font-medium">
            Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
