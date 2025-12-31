function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-16 sm:py-20 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      {/* Title Section */}
      <div className="text-center mb-10 sm:mb-12 md:mb-12 lg:mb-16">
        <span className="text-xs sm:text-sm tracking-widest px-3 py-2 rounded-full bg-[#F3F3F3] dark:bg-[#1E1E1E] text-[#3B82F6]">
          My Story
        </span>
        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-extrabold mt-4 sm:mt-5 leading-snug">
          From{" "}
          <span className="bg-[linear-gradient(270deg,_#3B82F6_10%,_#8B5CF6_100%)] bg-clip-text text-transparent">
            Curious Coder
          </span>{" "}
          to{" "}
          <span className="bg-[linear-gradient(270deg,_#3B82F6_10%,_#8B5CF6_100%)] bg-clip-text text-transparent">
            Problem-Solver
          </span>
        </h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-8 md:gap-8 lg:gap-12">
        {/* Profile Image with Badge */}
        <div className="relative flex justify-center md:justify-start flex-shrink-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <img
            src="/profile.jpg"
            alt="Mohammedamin Sadik - Software Engineer"
            className="w-full h-full rounded-lg object-cover shadow-[0_0_16px_#3B82F6]"
            width="400"
            height="400"
            loading="lazy"
          />
          <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-[#F3F3F3] dark:bg-[#1E1E1E] text-[#3B82F6] border border-[#3B82F6] rounded-md text-xs sm:text-sm font-semibold px-3 sm:px-5 py-2 sm:py-4 shadow-lg">
            Software Engineer
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center gap-3 md:gap-4 flex-1 w-full max-w-2xl">
          <h3 className="text-base sm:text-lg md:text-lg lg:text-xl font-semibold">
            Building{" "}
            <span className="bg-[linear-gradient(270deg,_#3B82F6_10%,_#8B5CF6_100%)] bg-clip-text text-transparent">
              Digital Solutions
            </span>{" "}
            That Matter
          </h3>

          <p className="text-xs sm:text-sm md:text-sm lg:text-base text-gray-800 dark:text-gray-300 leading-relaxed">
            I'm Mohammedamin Sadik, a dedicated software engineer with over 3 years of experience in crafting innovative web applications and AI-driven solutions. My journey began with a curiosity for code, evolving into a passion for solving real-world problems through technology. I've led the development of responsive websites, mobile apps, and data analytics tools, specializing in React, Node.js, Python, and machine learning.
          </p>

          <p className="text-xs sm:text-sm md:text-sm lg:text-base text-gray-800 dark:text-gray-300 leading-relaxed">
            What drives me is creating digital experiences that are not only functional but also intuitive and scalable. I've collaborated with teams to deliver projects that enhance user engagement and operational efficiency, always prioritizing clean code, accessibility, and performance. When I'm not coding, you'll find me exploring new tech trends or contributing to open-source communities.
          </p>

          {/* Current Focus for lg and up */}
          <div className="hidden lg:flex mt-2 p-3 md:p-4 rounded-lg bg-[#F3F3F3] dark:bg-[#181818] border-l-4 border-[#3B82F6] shadow flex-col gap-1">
            <span className="font-semibold text-[#3B82F6] text-sm sm:text-base">
              What I'm Working On
            </span>
            <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">
              Building responsive websites that work seamlessly across all devices
            </span>
          </div>
        </div>
      </div>

      {/* Current Focus for mobile and tablet */}
      <div className="flex md:hidden mt-6 justify-center px-4">
        <div className="w-full p-3 rounded-lg bg-[#F3F3F3] dark:bg-[#181818] border-l-4 border-[#3B82F6] shadow flex flex-col gap-1">
          <span className="font-semibold text-[#3B82F6] text-sm">
            What I'm Working On
          </span>
          <span className="text-xs text-gray-800 dark:text-gray-200">
            Building responsive websites that work seamlessly across all devices
          </span>
        </div>
      </div>

      {/* Current Focus for md only */}
      <div className="hidden md:flex lg:hidden mt-8 md:mt-12 justify-center">
        <div className="w-full max-w-3xl p-4 md:p-6 rounded-lg bg-[#F3F3F3] dark:bg-[#181818] border-l-4 border-[#3B82F6] shadow flex flex-col gap-1">
          <span className="font-semibold text-[#3B82F6] text-sm sm:text-base">
            What I'm Working On
          </span>
          <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">
            Building responsive websites that work seamlessly across all devices
          </span>
        </div>
      </div>

      {/* Smooth Section Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#F3F3F3] dark:to-[#0D0D0D] pointer-events-none"></div>
    </section>
  );
}

export default About;
