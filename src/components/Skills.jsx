import React from "react";
import { motion } from "framer-motion";
import { 
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaDatabase, 
  FaGithub, FaTerminal, FaCode, FaRobot, FaCloud, FaSearch,
  FaFileExcel 
} from "react-icons/fa";
import { 
  SiC, SiMysql, SiJupyter, SiPycharm, SiSelenium, SiNumpy, SiMongodb, SiNodedotjs, SiReact 
} from "react-icons/si";

const skillCategories = [
  {
    title: "Core_Processors",
    code: "L1-DEV",
    skills: [
      { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
      { name: "Java", icon: <FaJava className="text-[#E76F00]" /> },
      { name: "C", icon: <SiC className="text-[#A8B9CC]" /> },
      { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
    ],
  },
  {
    title: "Stack_Modules",
    code: "L2-WEB",
    skills: [
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "HTML/CSS", icon: <FaHtml5 className="text-[#E34F26]" /> },
    ],
  },
  {
    title: "Logic_Engines",
    code: "L3-AUTO",
    skills: [
      { name: "Selenium", icon: <SiSelenium className="text-[#43B02A]" /> },
      { name: "NumPy", icon: <SiNumpy className="text-[#013243]" /> },
      { name: "RobotFrame", icon: <FaRobot className="text-white" /> },
      { name: "Matplotlib", icon: <FaCode className="text-[#11557C]" /> },
    ],
  },
  {
    title: "Peripheral_Tools",
    code: "L4-OPS",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "VS Code", icon: <FaCode className="text-[#007ACC]" /> },
      { name: "Pycharm", icon: <SiPycharm className="text-[#21D789]" /> },
    ],
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-40 px-6 relative overflow-hidden bg-transparent font-sans">
      
      {/* AMBIENT BACKGROUND DECOR */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-10 w-[2px] h-96 bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
        <div className="absolute bottom-1/4 right-10 w-[2px] h-96 bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER SECTION - SCALED UP */}
        <div className="mb-32 flex flex-col items-center md:items-start">
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: "150px" }} 
            className="h-[3px] bg-cyan-500 mb-8" 
          />
          <h2 className="text-7xl md:text-9xl font-black text-white italic tracking-tighter uppercase leading-[0.8]">
            TECH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">
              MATRIX
            </span>
          </h2>
          <p className="mt-8 text-cyan-500/60 font-mono text-xs tracking-[1em] uppercase font-bold">
            &gt;&gt; LOGGING_SYSTEM_CAPABILITIES_2026
          </p>
        </div>

        {/* SKILLS GRID - LARGER GAPS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group p-12 bg-[#0a1120]/60 backdrop-blur-3xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500"
              style={{ clipPath: "polygon(0 0, 92% 0, 100% 12%, 100% 100%, 8% 100%, 0 88%)" }}
            >
              {/* CATEGORY HEADER - BOLDER */}
              <div className="flex justify-between items-end mb-16 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-cyan-500 shadow-[0_0_10px_#22d3ee] animate-pulse" />
                  <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter">{category.title}</h3>
                </div>
                <span className="font-mono text-xs text-slate-500 tracking-[0.3em] uppercase mb-1">{category.code}</span>
              </div>

              {/* ICONS MATRIX - LARGER LOGOS */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
                {category.skills.map((skill, sIdx) => (
                  <motion.div 
                    key={sIdx}
                    whileHover={{ scale: 1.1, y: -8 }}
                    className="flex flex-col items-center group/item"
                  >
                    <div className="relative w-24 h-24 mb-6">
                      {/* Hexagonal Frame - Increased size */}
                      <div className="absolute inset-0 bg-white/[0.03] group-hover/item:bg-cyan-500/10 transition-all border border-white/10 group-hover/item:border-cyan-400/60 flex items-center justify-center shadow-2xl"
                        style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
                      >
                        {/* Icon - Scaled up */}
                        <div className="text-4xl group-hover/item:drop-shadow-[0_0_15px_rgba(34,211,238,0.9)] transition-all duration-300">
                          {skill.icon}
                        </div>
                      </div>
                      
                      {/* Interactive Corner Accent */}
                      <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-500/0 group-hover/item:bg-cyan-400 shadow-[0_0_10px_#22d3ee] transition-all" />
                    </div>

                    <span className="text-[10px] font-black text-slate-400 group-hover/item:text-white transition-colors text-center uppercase tracking-[0.3em] font-mono italic">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* TACTICAL OVERLAY INFO */}
              <div className="absolute bottom-6 right-8 flex gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-white/20" />
                <div className="w-8 h-2 bg-cyan-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER SYSTEM READOUT */}
        <div className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex gap-16">
            <div className="space-y-2 text-center md:text-left">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.4em]">Node_Health</p>
              <p className="text-xl font-black text-cyan-400 uppercase italic tracking-tighter">OPTIMIZED_100%</p>
            </div>
            <div className="space-y-2 text-center md:text-left">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.4em]">Sync_Status</p>
              <p className="text-xl font-black text-white uppercase italic tracking-tighter">ENCRYPTED_ID_601</p>
            </div>
          </div>
          
          <motion.div 
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-xs font-mono text-cyan-500/50 uppercase tracking-[0.5em] italic"
          >
            &gt;&gt; Ready_For_Deployment_
          </motion.div>
        </div>
      </div>
    </section>
  );
}