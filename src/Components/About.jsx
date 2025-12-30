import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full px-4 py-16 mt-20 flex justify-center text-justify">
      <div className="max-w-4xl flex flex-col gap-6 text-gray-200">
        {/* Section Title */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-b-2 border-indigo-400 w-fit text-xl font-semibold">
          About Me
        </motion.span>

        {/* Paragraphs */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg leading-relaxed text-gray-300">
          I am a motivated Full Stack Developer with a solid grounding in
          computer science fundamentals. What started as curiosity about how
          systems function has evolved into hands-on experience building
          full-stack applications.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg leading-relaxed text-gray-300">
          I specialize in JavaScript-based technologies and adapt quickly to new
          frameworks and languages. I am eager to work with a collaborative team
          where I can deliver meaningful solutions and grow as a professional
          developer.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-6 sm:gap-10 pt-4 justify-start">
          <div>
            <h3 className="text-3xl font-bold text-indigo-400">5+</h3>
            <span className="text-gray-400 text-sm">Projects Completed</span>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-indigo-400">100+</h3>
            <span className="text-gray-400 text-sm">
              <a
                href="https://leetcode.com/u/ravi1470/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition">
                LeetCode Problems Solved
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
