import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaPhp,
  FaDatabase,
  FaJava,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiMongodb } from "react-icons/si";

const techCategories = {
  "Frontend": [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-sky-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  ],
  "Backend": [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
  ],
  "Database": [
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  ],
  "Tools": [
    { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  ],
};

function TechStack() {
  return (
    <section
      id="techstack"
      className="min-h-[40vh] py-16 sm:py-20 bg-white dark:bg-black text-black dark:text-white px-4 sm:px-6 md:px-8 lg:px-12 transition-colors duration-300">
      <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-center mb-12 md:mb-16">
        <span className="bg-[linear-gradient(270deg,_#3B82F6_10%,_#8B5CF6_100%)] bg-clip-text text-transparent">
          Tech Stack &amp; Tools
        </span>
      </h2>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {Object.entries(techCategories).map(([category, tools]) => (
          <div 
            key={category}
            className="bg-white dark:bg-[#0D0D0D] border-2 border-[#3B82F6] rounded-lg p-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Category Title */}
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-center mb-2 pb-2 border-b-2 border-[#3B82F6]/30">
              <span className="bg-[linear-gradient(270deg,_#3B82F6_10%,_#8B5CF6_100%)] bg-clip-text text-transparent">
                {category}
              </span>
            </h3>
            
            {/* Tools Grid */}
            <div className="grid grid-cols-2 gap-2">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center justify-center bg-[#F3F3F3] dark:bg-[#181818] rounded p-2 hover:scale-105 hover:shadow-md transition-all duration-300">
                  <div className="text-lg sm:text-xl mb-1">{tool.icon}</div>
                  <span className="text-[0.55rem] sm:text-[0.6rem] font-medium text-gray-800 dark:text-gray-200 text-center">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
