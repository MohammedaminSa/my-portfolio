import CountUp from "react-countup";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black text-black dark:text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-[12vh] sm:pt-[14vh] md:pt-[16vh]">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-12">
        {/* Column 1: Description/Info */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
          {/* Name */}
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-2 font-extrabold leading-tight">
            <span className="text-black dark:text-white">Hi, I'm </span>
            <span className="bg-[linear-gradient(270deg,_#3B82F6_10%,_#8B5CF6_100%)] bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>

          {/* Title */}
          <p className="text-base sm:text-lg md:text-xl lg:text-xl font-bold text-black dark:text-white mb-4">
            Software Engineer
          </p>

          {/* Tagline - 2 lines */}
          <p className="text-xs sm:text-sm md:text-base lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Building innovative digital solutions with clean code and
            exceptional user experience.
          </p>

          {/* Buttons - Hidden on mobile, visible on desktop */}
          <div className="hidden md:flex flex-wrap gap-3 lg:gap-4 items-center mb-6">
            <a
              href="/Your_Name_CV.pdf"
              download="Your_Name_CV"
              className="text-sm md:text-sm lg:text-base px-5 py-2.5 md:px-6 md:py-3 lg:px-7 lg:py-3.5 bg-gradient-to-r from-[#3B82F6] to-[#d7cdef] text-white tracking-[1px] rounded-md shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] inline-flex items-center gap-2"
              aria-label="Download Your Name's CV">
              <FaDownload />
              Download CV
            </a>
            <a
              href="#contact"
              className="text-sm md:text-sm lg:text-base px-5 py-2.5 md:px-6 md:py-3 lg:px-7 lg:py-3.5 bg-[#1E1E1E] text-[#3B82F6] border border-[#3B82F6] rounded-md hover:bg-[#3B82F6] hover:text-white transition-all duration-500 hover:scale-105 inline-block text-center">
              Contact Me
            </a>
          </div>
          {/* Social Links: hidden on mobile, visible on sm and up */}
          <div className="hidden md:flex gap-4 items-center justify-start mt-6">
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="flex items-center justify-center w-12 h-12 bg-white dark:bg-[#1E1E1E] border-2 border-[#3B82F6] rounded-lg text-[#3B82F6] text-2xl transition-all duration-300 hover:bg-[#3B82F6] hover:text-white hover:scale-110 shadow-md">
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="flex items-center justify-center w-12 h-12 bg-white dark:bg-[#1E1E1E] border-2 border-[#3B82F6] rounded-lg text-[#3B82F6] text-2xl transition-all duration-300 hover:bg-[#3B82F6] hover:text-white hover:scale-110 shadow-md">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Column 2: Profile Image with Stats Overlay */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <div className="relative w-full max-w-xs sm:max-w-sm md:w-80 lg:w-96">
            {/* Profile Image */}
            <img
              className="w-full h-auto max-h-[70vh] rounded-2xl shadow-[0_0_25px_#3B82F6] transition duration-500 hover:shadow-[0_0_30px_#3B82F6,_0_0_50px_#8B5CF6] object-cover"
              src="/profile.jpg"
              alt="Your Name - Software Engineer"
              width="400"
              height="533"
            />

            {/* Stats Overlay at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-sm rounded-b-2xl p-4 border-t-4 border-[#3B82F6]">
              <div className="grid grid-cols-4 gap-3">
                {/* Years Experience */}
                <div className="flex flex-col items-center">
                  <div className="text-xl sm:text-2xl font-bold bg-[linear-gradient(270deg,_#3B82F6_10%,_#8B5CF6_100%)] bg-clip-text text-transparent">
                    <CountUp end={4} duration={2.5} suffix="+" />
                  </div>
                  <p className="text-[0.6rem] sm:text-xs text-gray-800 dark:text-gray-200 font-medium text-center">
                    Years
                  </p>
                </div>

                {/* Projects */}
                <div className="flex flex-col items-center">
                  <div className="text-xl sm:text-2xl font-bold bg-[linear-gradient(270deg,_#3B82F6_10%,_#8B5CF6_100%)] bg-clip-text text-transparent">
                    <CountUp end={8} duration={2.5} suffix="+" />
                  </div>
                  <p className="text-[0.6rem] sm:text-xs text-gray-800 dark:text-gray-200 font-medium text-center">
                    Projects
                  </p>
                </div>

                {/* Clients */}
                <div className="flex flex-col items-center">
                  <div className="text-xl sm:text-2xl font-bold bg-[linear-gradient(270deg,_#3B82F6_10%,_#8B5CF6_100%)] bg-clip-text text-transparent">
                    <CountUp end={15} duration={2.5} suffix="+" />
                  </div>
                  <p className="text-[0.6rem] sm:text-xs text-gray-800 dark:text-gray-200 font-medium text-center">
                    Clients
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-col items-center">
                  <div className="text-xl sm:text-2xl font-bold bg-[linear-gradient(270deg,_#3B82F6_10%,_#8B5CF6_100%)] bg-clip-text text-transparent">
                    <CountUp end={12} duration={2.5} suffix="+" />
                  </div>
                  <p className="text-[0.6rem] sm:text-xs text-gray-800 dark:text-gray-200 font-medium text-center">
                    Tech
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Buttons + Social Links */}
      <div className="flex md:hidden flex-col items-center gap-6 mt-8 w-full max-w-sm">
        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 w-full">
          <a
            href="/Your_Name_CV.pdf"
            download
            className="text-base px-6 py-3 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white tracking-[1px] rounded-md shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] inline-flex items-center gap-2">
            <FaDownload />
            Download CV
          </a>
          <a
            href="#contact"
            className="text-base px-6 py-3 bg-[#1E1E1E] text-[#3B82F6] border border-[#3B82F6] rounded-md hover:bg-[#3B82F6] hover:text-white transition-all duration-500 hover:scale-105 inline-block text-center">
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-8 items-center justify-center">
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-2xl text-black dark:text-white hover:text-[#FF7F50] transition">
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-2xl text-black dark:text-white hover:text-[#FF7F50] transition">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
