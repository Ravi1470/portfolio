import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Track scroll to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 80; // offset for navbar
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPos) {
          setActive(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -20;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setOpen(false);
    }
  };

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-slate-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-white">Ravi Kumar</h1>

        <ul className="hidden md:flex gap-6 text-gray-300">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`${
                  active === link.id ? "text-blue-400 font-semibold" : ""
                } hover:text-blue-400 transition cursor-pointer`}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-gray-300 text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu">
          ☰
        </button>
      </div>
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-slate-900 px-4 pb-4 flex flex-col gap-4 text-gray-300">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`w-full text-left ${
                  active === link.id ? "text-blue-400 font-semibold" : ""
                } hover:text-blue-400 transition`}>
                {link.label}
              </button>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default NavBar;
