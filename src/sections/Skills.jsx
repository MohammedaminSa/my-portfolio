import {
  FaLaptopCode,
  FaMobileAlt,
  FaBrain,
  FaPencilRuler,
} from "react-icons/fa";

function Skills() {
  const skills = [
    {
      icon: <FaLaptopCode className="text-4xl mb-3" />,
      title: "Web Development",
      desc: "I build complete web solutions — from responsive frontends with React to scalable backends using PHP or Node.js. My goal is to deliver fast, clean, and user-friendly applications.",
      stack: "HTML, CSS, JavaScript, React, PHP, Node.js",
      level: "90%",
    },
    {
      icon: <FaMobileAlt className="text-4xl mb-3" />,
      title: "Mobile Development",
      desc: "I create smooth and reliable apps for Android and cross-platform solutions using React Native, always focusing on performance and a great user experience.",
      stack: "Java, Android SDK, React Native (learning)",
      level: "75%",
    },
    {
      icon: <FaBrain className="text-4xl mb-3" />,
      title: "AI / ML Enthusiast",
      desc: "I explore and build machine learning models that solve real problems — from predictive analytics to automation and data-driven insights.",
      stack: "Python, NumPy, Pandas, Scikit-learn",
      level: "80%",
    },
    {
      icon: <FaPencilRuler className="text-4xl mb-3" />,
      title: "UI / UX Design",
      desc: "I design modern, accessible, and visually appealing user interfaces that balance usability and aesthetics for the best experience.",
      stack: "Figma, UI/UX Design, Canva",
      level: "85%",
    },
  ];

  return (
    <section
      id="skills"
      aria-label="Skills"
      className="relative min-h-[100vh] pt-20 pb-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      {/* Smooth Top Separator */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-t from-[#F3F3F3] dark:from-[#0D0D0D] to-white dark:to-black"></div>

      {/* Section Title */}
      <h2 className="flex justify-center mb-10 md:mb-12 lg:mb-14 text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold">
        My{" "}
        <span className="bg-[linear-gradient(270deg,_#3B82F6_10%,_#8B5CF6_100%)] bg-clip-text text-transparent">
          Skills
        </span>
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-8 max-w-6xl mx-auto">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-between p-5 md:p-6 lg:p-7 rounded-2xl bg-[#F3F3F3] dark:bg-[#1A1A1A] 
                       shadow-md transition-transform duration-300 hover:scale-105 
                       hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] hover:-translate-y-1 w-full h-full min-h-[280px] sm:min-h-[320px] md:min-h-[340px]">
            <div className="flex flex-col items-center flex-1 justify-center">
              {skill.icon}
              <h3 className="text-sm md:text-base lg:text-lg font-bold mt-3 mb-2">
                {skill.title}
              </h3>
              <p className="text-xs md:text-xs lg:text-sm mt-1 text-center font-medium text-gray-800 dark:text-gray-200">
                {skill.stack}
              </p>
              <p className="text-[0.65rem] md:text-xs lg:text-sm mt-3 text-center opacity-80 text-gray-800 dark:text-gray-200 line-clamp-3">
                {skill.desc}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full mt-4">
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 mb-2">
                <div
                  className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] h-2 rounded-full"
                  style={{ width: skill.level }}></div>
              </div>
              <p className="text-[0.7rem] md:text-sm opacity-70 text-gray-800 dark:text-gray-200 text-center">
                {skill.level} Proficiency
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
