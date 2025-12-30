import React from "react";
import { motion } from "framer-motion";
import resume from "../assets/myresume.pdf";

const Home = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-8 px-4 lg:px-0 py-16 text-teal-100">
      {/* Text Content */}
      <div className="flex flex-col items-center gap-4 max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-2 text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight">
          <span>Fresher</span>
          <span className="text-[#7C86FF]">Full Stack</span>
          <span>Developer.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-base sm:text-lg leading-relaxed text-justify text-teal-200">
          I build robust, scalable applications with a focus on clean code and
          exceptional user experience. Passionate about modern web technologies
          and architectural patterns.
        </motion.p>
      </div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex flex-col sm:flex-row gap-4">
        <a
          href="https://github.com/Ravi1470"
          className="cursor-pointer"
          target="_blank">
          <button
            className="bg-blue-900 hover:bg-blue-800 transition px-5 py-3 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="View Projects">
            View Projects →
          </button>
        </a>

        <a
          href={resume}
          download="RaviKumar_Resume.pdf"
          aria-label="Download Ravi Kumar Resume"
          className="bg-gray-700 hover:bg-gray-600 transition px-5 py-3 rounded-md text-gray-100 text-center focus:outline-none focus:ring-2 focus:ring-gray-400">
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
