import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    // Check localStorage first, then fall back to system preference
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      aria-label={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      onClick={() => setDark((d) => !d)}
      className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-yellow-300 shadow hover:scale-110 transition">
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggle;
