import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaTelegram, FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="bg-black dark:bg-black text-white dark:text-white py-10 border-t border-[#3B82F6] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
        {/* Brand */}
        <div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent mb-2" style={{ fontFamily: "'Pacifico', cursive" }}>
            Kishir
          </h3>
          <p className="text-sm text-gray-400 mb-1">by Mohammedamin Sadik</p>
          <p className="text-gray-400 text-sm">
            Crafting modern web experiences with passion and precision.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 items-center sm:items-start">
          <h4 className="text-lg font-semibold text-[#3B82F6] mb-2">
            Quick Links
          </h4>
          <Link
            to="home"
            smooth={true}
            duration={600}
            className="cursor-pointer hover:text-[#3B82F6] transition">
            Home
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={600}
            className="cursor-pointer hover:text-[#3B82F6] transition">
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={600}
            className="cursor-pointer hover:text-[#3B82F6] transition">
            Contact
          </Link>
        </div>

        {/* Socials + Back to Top */}
        <div className="flex flex-col items-center sm:items-end gap-4">
          {/* Social Icons */}
          <div className="flex gap-3 flex-wrap justify-center sm:justify-end">
            <a
              href="https://github.com/MohammedaminSa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-[#181818] border-2 border-[#3B82F6] rounded-full text-[#3B82F6] text-lg sm:text-xl transition-transform duration-300 hover:bg-[#3B82F6] hover:text-white hover:scale-110 shadow-md">
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/mohammedamin-sadik"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-[#181818] border-2 border-[#3B82F6] rounded-full text-[#3B82F6] text-lg sm:text-xl transition-transform duration-300 hover:bg-[#3B82F6] hover:text-white hover:scale-110 shadow-md">
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/kishira.kishira"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-[#181818] border-2 border-[#3B82F6] rounded-full text-[#3B82F6] text-lg sm:text-xl transition-transform duration-300 hover:bg-[#3B82F6] hover:text-white hover:scale-110 shadow-md">
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/mohammedamin.sadik"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-[#181818] border-2 border-[#3B82F6] rounded-full text-[#3B82F6] text-lg sm:text-xl transition-transform duration-300 hover:bg-[#3B82F6] hover:text-white hover:scale-110 shadow-md">
              <FaInstagram />
            </a>
            <a
              href="https://t.me/kishirsa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram Profile"
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-[#181818] border-2 border-[#3B82F6] rounded-full text-[#3B82F6] text-lg sm:text-xl transition-transform duration-300 hover:bg-[#3B82F6] hover:text-white hover:scale-110 shadow-md">
              <FaTelegram />
            </a>
          </div>

          {/* Back to Top Button */}
          <Link
            to="home"
            smooth={true}
            duration={600}
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full text-white text-lg sm:text-xl shadow-lg hover:scale-110 hover:-translate-y-1 transition-transform cursor-pointer"
            aria-label="Back to Top">
            <FaArrowUp />
          </Link>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 text-center text-gray-500 text-xs sm:text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Kishir - Mohammedamin Sadik. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
