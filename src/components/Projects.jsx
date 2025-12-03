import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GITHUB_USERNAME = "venkatnarayantl";

const FEATURED_PROJECTS = [
  {
    name: "JARVIS AI Assistant",
    desc: "Voice-activated assistant built in Python with speech recognition and task automation.",
    tech: ["Python", "Tkinter", "Speech Recognition"],
    link: "https://github.com/venkatnarayantl/jarvis",
  },
  {
    name: "Mask Detection System",
    desc: "Real-time mask detection using OpenCV and Machine Learning.",
    tech: ["Python", "OpenCV", "ML"],
    link: "https://github.com/venkatnarayantl/mask-detection",
  },
  {
    name: "Amazon Automation Suite",
    desc: "Automates common Amazon tasks using Python scripts.",
    tech: ["Python", "Selenium"],
    link: "https://github.com/venkatnarayantl/amazon-automation",
  },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // Fetch GitHub repos
  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
        );
        const data = await res.json();

        const filtered = data
          .filter(
            (repo) =>
              !repo.fork &&
              !repo.archived &&
              !FEATURED_PROJECTS.some((p) =>
                repo.name.toLowerCase().includes(p.name.split(" ")[0].toLowerCase())
              )
          )
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        const allProjects = filtered.map((repo) => ({
          name: repo.name,
          desc: repo.description || "No description",
          tech: repo.language ? [repo.language] : [],
          link: repo.html_url,
        }));

        setProjects(allProjects);
      } catch (err) {
        console.error("GitHub fetch error:", err);
      }
    }
    fetchRepos();
  }, []);

  const displayedProjects = showAll
    ? [...FEATURED_PROJECTS, ...projects]
    : FEATURED_PROJECTS;

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden text-center"
    >
      {/* Background gradient glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl animate-pulse bg-gradient-to-r from-cyan-400 to-purple-500 opacity-30"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl animate-pulse bg-gradient-to-r from-pink-500 to-violet-600 opacity-30"></div>

      <h2
        className={`text-3xl md:text-5xl font-bold mb-12 relative z-10 ${
          showAll ? "text-pink-400" : "text-cyan-400"
        }`}
      >
        {showAll ? "All Projects" : "Featured Projects"}
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto relative z-10">
        {displayedProjects.map((p, i) => (
          <motion.div
            key={p.name}
            className={`p-6 rounded-3xl cursor-pointer flex flex-col justify-between text-center shadow-xl border-2 ${
              showAll
                ? "border-pink-500 bg-black/80 hover:shadow-[0_0_50px_#f0f]"
                : "border-cyan-400 bg-black/80 hover:shadow-[0_0_50px_#0ff]"
            }`}
            onClick={() => window.open(p.link, "_blank")}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.07, rotateY: 5 }}
            transition={{ delay: i * 0.15, type: "spring", stiffness: 200 }}
          >
            <h3
              className={`text-xl font-bold mb-2 ${
                showAll ? "text-pink-400" : "text-cyan-400"
              }`}
            >
              {p.name}
            </h3>
            <p className={`mb-4 ${showAll ? "text-gray-200" : "text-green-300"}`}>
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {p.tech.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1 rounded-full text-sm font-mono ${
                    showAll
                      ? "border border-pink-400 text-pink-400"
                      : "border border-cyan-400 text-cyan-400"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <motion.span
              className={`font-semibold hover:underline ${
                showAll ? "text-pink-400" : "text-cyan-400"
              }`}
              whileHover={{ scale: 1.15, color: "#fff" }}
            >
              View Project
            </motion.span>
          </motion.div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="mt-12 relative z-10">
        <motion.button
          onClick={() => setShowAll(!showAll)}
          className={`px-8 py-3 rounded-full font-bold transition-transform hover:scale-110 ${
            showAll
              ? "border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black"
              : "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
          }`}
          whileHover={{ scale: 1.1 }}
        >
          {showAll ? "Show Featured" : "More Projects"}
        </motion.button>
      </div>
    </section>
  );
}
