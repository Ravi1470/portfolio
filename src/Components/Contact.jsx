import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../utils/ContactForm";
import { HiOutlineMail } from "react-icons/hi";
import { TbBrandLinkedin } from "react-icons/tb";
import { ImGithub } from "react-icons/im";

const Contact = () => {
  return (
    <section className="w-full px-4 py-16 text-gray-100 flex justify-center">
      <div className="w-full max-w-6xl flex flex-col lg:grid lg:grid-cols-2 gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center gap-6">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
            Let&apos;s build something{" "}
            <span className="text-blue-500">amazing</span> together.
          </h3>

          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-xl text-justify">
            I&apos;m currently looking for new opportunities as a full-stack
            developer. If you have a role that matches my skills, feel free to
            reach out!
          </p>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
            <a
              href="mailto:vk8580318@gmail.com"
              aria-label="Send email"
              className="flex items-center gap-2 px-4 py-2 border border-slate-700 rounded-md hover:border-blue-500 hover:text-blue-400 transition focus:outline-none focus:ring-2 focus:ring-blue-500">
              <HiOutlineMail size={18} />
              <span>Email</span>
            </a>

            <a
              href="https://www.linkedin.com/in/vkravi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex items-center gap-2 px-4 py-2 border border-slate-700 rounded-md hover:border-blue-500 hover:text-blue-400 transition focus:outline-none focus:ring-2 focus:ring-blue-500">
              <TbBrandLinkedin size={18} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/Ravi1470"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex items-center gap-2 px-4 py-2 border border-slate-700 rounded-md hover:border-blue-500 hover:text-blue-400 transition focus:outline-none focus:ring-2 focus:ring-blue-500">
              <ImGithub size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex justify-center lg:justify-end mt-6 lg:mt-0">
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
