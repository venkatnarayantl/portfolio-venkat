import React, { useEffect, useRef, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

const links = [
  { name: "Home", id: "home" },
  { name: "Stats", id: "stats" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "About", id: "about" },
];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [active, setActive] = useState("home");
  const containerRef = useRef(null);

  // add/remove dark class for tailwind dark styles
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  // smooth scroll
  const scrollToSection = (id) => {
    const sec = document.getElementById(id);
    if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // IntersectionObserver to set active link on scroll
  useEffect(() => {
    const options = { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 };
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, options);

    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[94%] md:w-[86%] lg:w-[74%] z-50 pointer-events-auto">
      {/* decorative soft glow for light theme */}
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 rounded-2xl transition-opacity duration-500 ${
          darkMode ? "opacity-0" : "opacity-80"
        }`}
      >
        <div className="absolute -left-24 -top-12 w-64 h-64 rounded-full bg-gradient-to-br from-pink-300 via-purple-300 to-cyan-200 opacity-30 blur-3xl animate-tilt" />
      </div>

      <div
        ref={containerRef}
        className={`relative flex items-center justify-between px-5 py-3 rounded-2xl backdrop-blur-lg border shadow-md transition-all duration-300
          ${darkMode
            ? "bg-black/65 border-black/20 text-white"
            : "bg-white/70 border-gray-200 text-gray-800"}
        `}
      >
        {/* logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("home")}>
          <motion.span
            className={`select-none font-extrabold text-lg md:text-2xl bg-clip-text text-transparent ${
              darkMode
                ? "bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500"
                : "bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400"
            }`}
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            MY PORTFOLIO
          </motion.span>

          {/* small badge next to logo */}
          <motion.span
            className={`hidden md:inline-flex items-center px-2 py-0.5 text-xs rounded-full font-medium transition-all
              ${darkMode ? "bg-white/5 text-cyan-200" : "bg-gradient-to-r from-yellow-200 to-pink-200 text-pink-700"}`}
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 1 }}
          >
            v1.0
          </motion.span>
        </div>

        {/* desktop menu */}
        <div className="hidden md:block relative">
          <ul className="flex gap-6 px-2 py-1 relative z-10">
            {links.map((link) => (
              <li key={link.id} className="relative">
                {/* moving pill: rendered only under the active item using shared layoutId */}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className={`absolute -inset-y-1 -inset-x-2 rounded-xl z-0 transition-all
                      ${darkMode ? "bg-gradient-to-r from-cyan-900/20 to-green-900/10" : "bg-gradient-to-r from-purple-100/50 via-pink-100/30 to-cyan-100/30"}
                    `}
                    style={{ top: -4, bottom: -4, left: -8, right: -8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`relative z-20 px-3 py-1 text-sm md:text-base font-medium tracking-wide transition-colors duration-250
                    ${darkMode
                      ? active === link.id
                        ? "text-cyan-200"
                        : "text-gray-200 hover:text-cyan-300"
                      : active === link.id
                      ? "text-purple-700"
                      : "text-gray-800 hover:text-pink-500"
                    }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* right controls */}
        <div className="flex items-center gap-3">
          {/* small mobile shortcut to Projects */}
          <button
            className={`md:hidden px-2 py-1 rounded-md text-sm ${
              darkMode ? "text-white/90" : "text-gray-800"
            }`}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>

          {/* theme toggle */}
          <motion.button
            onClick={() => setDarkMode((s) => !s)}
            aria-label="Toggle theme"
            className={`p-2 rounded-full border transition-colors duration-300 ${
              darkMode ? "border-white/10 hover:bg-white/5 text-yellow-300" : "border-gray-300 hover:bg-gray-100 text-gray-700"
            }`}
            whileHover={{ scale: 1.08 }}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
