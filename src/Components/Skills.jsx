import React from "react";
import { motion } from "framer-motion";
import Card from "../utils/Card";
import skillsData from "../utils/skillsData";

const Skills = () => {
  return (
    <section className="w-full px-4 py-16 text-gray-200 flex flex-col items-center">
      <div className="max-w-4xl flex flex-col gap-8 w-full">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          <h1 className="text-2xl sm:text-3xl font-semibold mb-2">
            Technical Arsenal
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            A comprehensive list of technologies I've mastered and used in
            production-level hobby projects.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          {skillsData.map((skillGroup) => (
            <Card
              key={skillGroup.category}
              data={skillGroup}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
