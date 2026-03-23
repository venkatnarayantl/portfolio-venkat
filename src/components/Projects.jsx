import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const GITHUB_USERNAME = "venkatnarayantl";

// --- 1. DATA DEFINITIONS ---

const LIVE_PROJECTS = [
  {
    name: "Note Maker",
    desc: "A full-stack MERN application for persistent note-taking. Features secure CRUD operations and a minimalist dashboard UI.",
    github: "https://github.com/venkatnarayantl/Note-maker",
    web: "https://personal-note-maker.onrender.com", 
    type: "LIVE_STATION",
    skills: ["MongoDB", "Express", "React", "Node.js"]
  },
  {
    name: "Digital Portfolio",
    desc: "V3 of my professional identity. Built with high-precision Framer Motion animations and a custom cyber-dock navigation.",
    github: "https://github.com/venkatnarayantl/portfolio-venkat",
    web: "https://portfolio-venkat-y14b.vercel.app/",
    type: "LIVE_STATION",
    skills: ["React", "Framer Motion", "Tailwind CSS", "Vite"]
  }
];

const FEATURED_GITHUB = [
  {
    name: "BuzzyBox",
    desc: "Anonymous social media platform focusing on real-time messaging using Socket.io and encryption logic.",
    github: "https://github.com/venkatnarayantl/BuzzyBox",
    type: "ARCHIVE",
    skills: ["Node.js", "Socket.io", "Express", "JavaScript"]
  },
  {
    name: "JARVIS AI",
    desc: "Voice-activated Python assistant capable of system automation and speech-to-text processing.",
    github: "https://github.com/venkatnarayantl/jarvis",
    type: "ARCHIVE",
    skills: ["Python", "Pyttsx3", "SpeechRecognition"]
  }
];

// --- 2. COMPONENT LOGIC ---

export default function Projects() {
  const [githubProjects, setGithubProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // Scroll Animation for Background
  const { scrollYProgress } = useScroll();
  const xMove = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const opacityText = useTransform(scrollYProgress, [0, 0.2, 0.5], [0.05, 0.02, 0]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
        let data;
        if (!res.ok && res.status === 403) {
          const token = import.meta.env.VITE_GITHUB_TOKEN;
          const authRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`, {
            headers: { "Authorization": `token ${token?.trim()}`, "Accept": "application/vnd.github.v3+json" }
          });
          data = await authRes.json();
        } else {
          data = await res.json();
        }

        const manualLinks = [
          ...LIVE_PROJECTS.map(p => p.github.toLowerCase()),
          ...FEATURED_GITHUB.map(p => p.github.toLowerCase())
        ];

        const filtered = data
          .filter(repo => !repo.fork && !repo.archived && !manualLinks.includes(repo.html_url.toLowerCase()))
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        setGithubProjects(filtered.map(repo => ({
          name: repo.name.replace(/-/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2'), 
          desc: repo.description || "Technical implementation archive.",
          github: repo.html_url,
          type: "REPOSITORY"
          // No skills added here as requested
        })));
      } catch (err) { console.error(err); }
    }
    fetchRepos();
  }, []);

  const allDisplay = useMemo(() => {
    return showAll 
      ? [...LIVE_PROJECTS, ...FEATURED_GITHUB, ...githubProjects] 
      : [...LIVE_PROJECTS, ...FEATURED_GITHUB];
  }, [showAll, githubProjects]);

  return (
    <section id="projects" className="py-40 relative bg-transparent px-6 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <motion.h1 style={{ x: xMove, opacity: opacityText }} className="text-[25vw] font-black text-white tracking-tighter italic uppercase font-serif whitespace-nowrap">
          VAULT VAULT VAULT VAULT
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col mb-32 border-l-4 border-cyan-500 pl-8">
          <p className="text-cyan-500 font-mono text-xs tracking-[0.8em] uppercase font-bold mb-4">Deployment_Archive // Index_2026</p>
          <h2 className="text-7xl md:text-9xl font-black text-white italic tracking-tighter uppercase leading-none">
            PROJECT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">FILES</span>
          </h2>
        </div>

        <motion.div layout className="grid gap-12 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {allDisplay.map((p, i) => (
              <motion.div
                key={p.github + i} 
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative group min-h-[450px] flex flex-col bg-[#0a1120]/40 backdrop-blur-3xl border border-white/5 hover:border-cyan-500/40 transition-all duration-700 cursor-pointer"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 92% 100%, 0 100%)" }}
                onClick={() => window.open(p.github, "_blank")}
              >
                <div className="flex justify-between items-center px-10 py-6 border-b border-white/5 group-hover:bg-cyan-500/[0.03] transition-colors">
                  <span className="text-[11px] font-mono text-slate-500 group-hover:text-cyan-400 tracking-[0.4em] uppercase">
                    {p.type} // {i < 9 ? `0${i + 1}` : i + 1}
                  </span>
                  <div className={`w-2 h-2 rounded-full ${p.type.includes('LIVE') ? 'bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-pulse' : 'bg-slate-700'}`} />
                </div>

                <div className="p-10 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-tight mb-4 group-hover:text-cyan-400 transition-colors">
                      {p.name}
                    </h3>
                    
                    {/* Skills only show if they exist in the object */}
                    {p.skills && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {p.skills.map((skill, idx) => (
                          <span key={idx} className="text-[9px] font-mono font-bold px-2 py-1 border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 uppercase tracking-widest">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    <p className="text-slate-400 text-sm font-mono leading-relaxed max-w-xl italic group-hover:text-slate-200 transition-colors">
                      <span className="text-cyan-500 mr-3">#</span>
                      {p.desc}
                    </p>
                  </div>

                  <div className="flex gap-6 mt-12">
                    <button className="flex-1 text-[11px] font-black uppercase tracking-[0.3em] text-white border border-white/10 hover:border-cyan-500 hover:bg-cyan-500 hover:text-black transition-all py-4 italic">
                      [ View_Source ]
                    </button>
                    {p.web && (
                      <button 
                        onClick={(e) => { e.stopPropagation(); window.open(p.web, "_blank"); }}
                        className="flex-1 text-[11px] font-black uppercase tracking-[0.3em] bg-white text-black hover:bg-cyan-400 transition-all py-4 italic"
                      >
                        Launch_Application
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-32 flex justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => { e.stopPropagation(); setShowAll(!showAll); }}
            className="px-20 py-6 border border-cyan-500/30 text-cyan-400 font-black uppercase text-sm tracking-[0.8em] transition-all bg-cyan-500/5 backdrop-blur-3xl italic hover:bg-cyan-500 hover:text-black"
          >
            {showAll ? "Restrict_Log_Archive" : "Access_Full_Log_Archive"}
          </motion.button>
        </div>
      </div>
    </section>
  );
}