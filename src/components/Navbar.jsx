import React, { useState, useEffect, useRef } from "react";
import {
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import NavLink from "../Ui/NavLink";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  {
    href: "#home",
    label: "Home",
    icon: <FaHome className="inline mr-2 mb-1" />,
  },
  {
    href: "#about",
    label: "About",
    icon: <FaUser className="inline mr-2 mb-1" />,
  },
  {
    href: "#skills",
    label: "Skills",
    icon: <FaTools className="inline mr-2 mb-1" />,
  },
  {
    href: "#projects",
    label: "Projects",
    icon: <FaProjectDiagram className="inline mr-2 mb-1" />,
  },
  {
    href: "#contact",
    label: "Contact",
    icon: <FaEnvelope className="inline mr-2 mb-1" />,
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const menuRef = useRef();

  // Close menu on outside click or Escape
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setMenuOpen(false);
    }
    function handleEsc(e) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [menuOpen]);

  // Scroll spy effect with IntersectionObserver for better performance
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Close menu on link click
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 h-[12vh] bg-white/95 backdrop-blur-sm text-black dark:bg-black/95 dark:backdrop-blur-sm dark:text-white transition-colors duration-300 shadow">
      {/* Logo as a link */}
      <a
        href="#home"
        className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold cursor-pointer transition-transform transform hover:scale-110 hover:rotate-3 bg-gradient-to-l from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent"
        style={{ fontFamily: "'Pacifico', cursive" }}
        aria-label="Go to Home">
        Kishir
      </a>
      {/* Desktop Navigation Links with Icons */}
      <ul className="hidden md:flex gap-2 lg:gap-3 items-center">
        {navLinks.map((link) => (
          <li key={link.href}>
            <NavLink
              href={link.href}
              isActive={active === link.href}
              className={`px-2 py-1 text-xs md:text-sm lg:text-base rounded-lg transition-all duration-200 ${
                active === link.href
                  ? "font-extrabold border-4 border-[#3B82F6] bg-[#3B82F6] text-white shadow-lg"
                  : "hover:bg-[#3B82F6]/80 hover:text-white dark:hover:bg-[#3B82F6]/80 dark:hover:text-white"
              }`}>
              {link.icon}
              {link.label}
            </NavLink>
          </li>
        ))}
        <li>
          <ThemeToggle />
        </li>
      </ul>
      {/* Mobile Hamburger & Theme Toggle */}
      <div className="md:hidden flex items-center gap-2">
        <ThemeToggle />
        <button
          className="text-3xl text-[#3B82F6] focus:outline-none transition-all duration-300"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          tabIndex={0}
          onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? (
            <FaTimes className="transition-all duration-300 rotate-90" />
          ) : (
            <FaBars className="transition-all duration-300" />
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`absolute top-full left-0 w-full bg-white dark:bg-black shadow-lg flex flex-col gap-3 items-center py-4 md:hidden z-50 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        style={{ minHeight: menuOpen ? "220px" : "0" }}>
        {menuOpen &&
          navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              isActive={active === link.href}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                active === link.href
                  ? "font-extrabold border-4 border-[#3B82F6] bg-[#3B82F6] text-white shadow-lg"
                  : "hover:bg-[#3B82F6]/80 hover:text-white dark:hover:bg-[#3B82F6]/80 dark:hover:text-white"
              }`}>
              {link.icon}
              {link.label}
            </NavLink>
          ))}
      </div>
    </nav>
  );
}

export default Navbar;
