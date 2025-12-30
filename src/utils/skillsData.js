import { AiFillLayout } from "react-icons/ai";
import { FaServer, FaDatabase } from "react-icons/fa";

const skillsData = [
  {
    category: "Frontend",
    icon: AiFillLayout,
    skills: ["React", "JavaScript", "Tailwind CSS", "React Query"],
  },
  {
    category: "Backend",
    icon: FaServer,
    skills: ["Node.js", "Spring Boot", "Express", "REST APIs", "JWT Auth"],
  },
  {
    category: "Database & Tools",
    icon: FaDatabase,
    skills: ["MySql", "Git/GitHub", "Vercel"],
  },
];

export default skillsData;
