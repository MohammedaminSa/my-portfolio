import { useState, useEffect } from 'react';

function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0% { transform: translate(0, 0) rotate(0deg); }
        25% { transform: translate(-20px, -20px) rotate(90deg); }
        50% { transform: translate(20px, -10px) rotate(180deg); }
        75% { transform: translate(-10px, 20px) rotate(270deg); }
        100% { transform: translate(0, 0) rotate(360deg); }
      }
      .modal-scroll::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    // Simulate loading for demo; replace with actual fetch if needed
    const timer = setTimeout(() => {
      setProjects([
        {
          title: "Bankist App",
          desc: "A modern banking application built with vanilla JavaScript, featuring secure login, account management, transaction history, and real-time balance updates. Designed with a clean UI for seamless user experience in managing finances.",
          stack: "HTML, CSS, JavaScript",
          image: "bankist.png",
          link: "https://github.com/MohammedaminSa/bankist-app",
          category: "JavaScript",
        },
        {
          title: "Chicken Farm Productivity Predictor",
          desc: "AI-powered system predicting chicken farm productivity using historical data.",
          stack: "Python, Machine Learning, Data Analysis",
          image: "chicken.png",
          link: "#",
          category: "AI/ML",
        },
        {
          title: "Fast React Pizza",
          desc: "A modern pizza ordering application built with React and Tailwind CSS, featuring real-time cart management, geolocation for delivery, and priority ordering options. Enjoy a seamless and responsive user experience for quick and easy pizza orders.",
          stack: "React, React Router, Tailwind CSS",
          image: "fastReactPizza.png",
          link: "https://github.com/MohammedaminSa/Fast-React-pizza",
          category: "React",
        },
        {
          title: "React Quiz App",
          desc: "A dynamic and interactive quiz application built with React, featuring real-time timers, intelligent scoring systems, and comprehensive progress tracking. Designed for an engaging learning experience with multiple quiz modes, responsive design, and user-friendly navigation to help users test and improve their knowledge effectively.",
          stack: "React, useReducer, Context API",
          image: "reactQuiz.png",
          link: "https://github.com/MohammedaminSa/react-quiz",
          category: "React",
        },
        {
          title: "Currency Converter",
          desc: "A real-time currency conversion tool built with React and Tailwind CSS, integrating live exchange rates from a REST API. Supports multiple international currencies with an intuitive interface for quick and accurate conversions on the go.",
          stack: "React, REST API, Tailwind CSS",
          image: "currency.png",
          link: "https://github.com/MohammedaminSa/currency-converter",
          category: "React",
        },
        {
          title: "Campus Recycling Tracker",
          desc: "A system to track recycling activities across campus and encourage eco-friendly practices.",
          stack: "HTML, CSS, JavaScript, PHP, MySQL",
          image: "",
          link: "#",
          category: "Web App",
        },
      ]);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-[100vh] flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <p className="ml-4">Loading projects...</p>
      </div>
    );
  }

  return (
    <div
      id="projects"
      className="relative min-h-[100vh] pt-20 pb-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      {/* Section Title */}
      <h2 className="flex justify-center mb-10 md:mb-12 lg:mb-14 text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold">
        My{" "}
        <span className="bg-[linear-gradient(270deg,_#3B82F6_10%,_#8B5CF6_100%)] bg-clip-text text-transparent">
          Projects
        </span>
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <div
            key={i}
            className="flex flex-col rounded-lg bg-white dark:bg-gray-800 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:scale-[1.02] h-full border border-gray-100 dark:border-gray-700 min-h-[380px] sm:min-h-[400px] md:min-h-[420px] backdrop-blur-sm"
          >
            <div className="w-full h-40 md:h-44 lg:h-48 bg-gray-200 dark:bg-gray-900 flex items-center justify-center flex-shrink-0">
              {project.image ? (
                <img
                  src={`/${project.image}`}
                  alt={`${project.title} - Project Screenshot`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = '/placeholder.png'; // Fallback for broken images
                  }}
                />
              ) : (
                <span className="text-gray-500 text-sm">No Image</span>
              )}
            </div>
            <div className="p-5 md:p-5 lg:p-6 flex flex-col flex-1 bg-white dark:bg-gray-800 justify-between">
              <div>
                <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-3 text-gray-900 dark:text-white leading-tight">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm lg:text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-3 leading-relaxed">
                  {project.desc}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 font-medium">
                  {project.stack}
                </p>
              </div>
              <div className="flex gap-2 mt-auto">
                {project.link && project.link !== "#" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-md text-white text-xs md:text-sm font-medium hover:scale-105 transition-transform duration-300 text-center flex-1">
                    View Project
                  </a>
                ) : (
                  <span className="text-gray-500 text-sm">No Link Available</span>
                )}
                <button
                  onClick={() => {
                    setModalProject(project);
                    setIsModalOpen(true);
                  }}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-700 dark:text-gray-300 text-xs md:text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      {/* Animated Background Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 dark:opacity-10"
            style={{
              width: `${Math.random() * 4 + 2}px`, // Random size between 2-6px
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s infinite linear`, // Random duration for variety
            }}
          />
        ))}
      </div>
      {isModalOpen && modalProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 md:p-8 max-w-md md:max-w-lg w-full max-h-[90vh] overflow-y-auto relative modal-scroll" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl">
              &times;
            </button>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 text-gray-900 dark:text-white pr-8">{modalProject.title}</h3>
            <img
              src={`/${modalProject.image}`}
              alt={modalProject.title}
              className="w-full h-40 md:h-48 lg:h-52 object-cover rounded-md mb-4 shadow-sm"
              onError={(e) => {
                e.target.src = '/placeholder.png';
              }}
            />
            <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{modalProject.desc}</p>
            <p className="text-xs md:text-sm lg:text-sm text-gray-500 dark:text-gray-400 mb-6">Tech Stack: {modalProject.stack}</p>
            <div className="flex gap-3">
              <a
                href={modalProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors shadow-sm flex-1 text-center">
                View on GitHub
              </a>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors shadow-sm">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div> </div>
  );
}

export default Project;
