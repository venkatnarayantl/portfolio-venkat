import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", id: "home", code: "SYS-01" },
  { name: "Projects", id: "projects", code: "PRJ-02" },
  { name: "Skills", id: "skills", code: "SKL-03" },
  { name: "About", id: "about", code: "USR-04" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const sec = document.getElementById(id);
    if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
    <nav className="fixed top-0 left-0 w-full z-[100] px-10 pt-6 flex justify-between items-start pointer-events-none">
      
      {/* LEFT MODULE: BRANDING */}
      <div className="pointer-events-auto group">
        <motion.div 
          onClick={() => scrollToSection("home")}
          className="relative bg-black/40 backdrop-blur-xl border-l-4 border-cyan-500 p-4 flex flex-col cursor-pointer overflow-hidden shadow-[20px_0_40px_-20px_rgba(34,211,238,0.2)]"
        >
          <div className="absolute top-0 right-0 w-8 h-8 bg-white/5 rotate-45 translate-x-4 -translate-y-4" />
          <span className="text-xs font-mono text-cyan-500 leading-none mb-1 opacity-50 tracking-tighter">Welcome to my</span>
          <h1 className="text-2xl font-black text-white italic tracking-tighter leading-none">
            PORTFOLIO<span className="text-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity"></span>
          </h1>
        </motion.div>
      </div>

      {/* CENTER MODULE: NAVIGATION */}
      <div className="hidden lg:flex pointer-events-auto items-start">
        <div className="flex bg-black/40 backdrop-blur-xl border border-white/5 divide-x divide-white/5">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="relative px-8 py-5 group overflow-hidden"
            >
              {/* Hover Background */}
              <div className={`absolute inset-0 bg-cyan-500/5 transition-transform duration-500 origin-bottom ${active === link.id ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'}`} />
              
              <div className="relative z-10 flex flex-col items-center">
                <span className={`text-[8px] font-mono mb-1 transition-colors ${active === link.id ? 'text-cyan-400' : 'text-slate-600'}`}>
                  {link.code}
                </span>
                <span className={`text-[11px] font-black uppercase tracking-[0.3em] transition-all ${active === link.id ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                  {link.name}
                </span>
              </div>

              {/* Top Accent Line */}
              {active === link.id && (
                <motion.div 
                  layoutId="nav-top-line"
                  className="absolute top-0 left-0 w-full h-[3px] bg-cyan-500 shadow-[0_0_15px_#22d3ee]" 
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT MODULE: STATUS & SYSTEM */}
      

    </nav>
  );
}