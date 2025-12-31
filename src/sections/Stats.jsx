import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { FaCode, FaProjectDiagram, FaUsers, FaAward } from "react-icons/fa";

const stats = [
  {
    number: 4,
    suffix: "+",
    label: "Years Experience",
    icon: <FaCode className="text-blue-500 text-3xl mb-2" />,
  },
  {
    number: 8,
    suffix: "+",
    label: "Projects Completed",
    icon: <FaProjectDiagram className="text-green-500 text-3xl mb-2" />,
  },
  {
    number: 15,
    suffix: "+",
    label: "Happy Clients",
    icon: <FaUsers className="text-purple-500 text-3xl mb-2" />,
  },
  {
    number: 12,
    suffix: "+",
    label: "Technologies Mastered",
    icon: <FaAward className="text-yellow-500 text-3xl mb-2" />,
  },
];

function Stats() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Force re-animation on component mount or revisit
    setKey(prev => prev + 1);
  }, []);

  return (
    <section
      id="stats"
      className="py-16 sm:py-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-12">
          My Impact in{" "}
          <span className="bg-[linear-gradient(270deg,_#3B82F6_10%,_#8B5CF6_100%)] bg-clip-text text-transparent">
            Numbers
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#F3F3F3] dark:bg-[#181818] rounded-lg shadow-md p-6 text-center border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
              {stat.icon}
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                <CountUp key={`${key}-${i}`} end={stat.number} duration={2.5} suffix={stat.suffix} />
              </div>
              <p className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
