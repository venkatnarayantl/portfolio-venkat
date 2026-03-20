import React from "react";
import { motion } from "framer-motion";
import { 
  AcademicCapIcon, 
  TrophyIcon, 
  MapPinIcon, 
  StarIcon,
  CpuChipIcon,
  ShieldCheckIcon 
} from "@heroicons/react/24/solid";

const educationMap = [
  {
    institution: "SVCE (Sri Venkateshwara College of Engineering)",
    location: "Bangalore, India",
    degree: "B.E. in Computer Science & Engineering",
    duration: "2024 – 2026",
    status: "Phase: Final_Year (CSE)",
    score: "8.51_CGPA",
    icon: <AcademicCapIcon />,
  },
  {
    institution: "Kendriya Vidyalaya Malleswaram",
    location: "Bangalore, India",
    degree: "Class XII (PCM)",
    duration: "Class of 2023",
    status: "Phase: Secondary_Complete",
    icon: <MapPinIcon />,
  },
  {
    institution: "Kendriya Vidyalaya Malleswaram",
    location: "Bangalore, India",
    degree: "Class X",
    duration: "Class of 2021",
    status: "Phase: Foundation_Complete",
    icon: <MapPinIcon />,
  },
];

const achievements = [
  { title: "Gold Medalist", detail: "MIT App Inventor Challenge", icon: <TrophyIcon/>, color: "from-yellow-500/20" },
  { title: "5-Star Python", detail: "HackerRank Professional", icon: <StarIcon/>, color: "from-cyan-500/20" },
  { title: "Top 30", detail: "SIH Internal Hackathon 2024", icon: <TrophyIcon/>, color: "from-blue-500/20" },
  { title: "31-Day Streak", detail: "Zoho ZEST Competition", icon: <StarIcon/>, color: "from-emerald-500/20" },
];

export default function ProfileSections() {
  return (
    <section id="profile" className="py-40 relative bg-transparent px-6 overflow-hidden font-sans">
      
      {/* SECTION 1: SYSTEM LOG (EDUCATION) */}
      <div className="max-w-7xl mx-auto mb-48">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="border-l-4 border-cyan-500 pl-8">
            <span className="text-cyan-500 font-mono text-xs tracking-[1em] uppercase font-bold block mb-4">
              Accessing_User_History...
            </span>
            <h2 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter text-white leading-none">
              STUDY <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">LOG</span>
            </h2>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">Database: SVCE_VTU_V3</p>
            <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">Status: Authenticated</p>
          </div>
        </div>

        <div className="relative">
          {/* Tactical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/20 md:-translate-x-1/2" />

          <div className="space-y-12">
            {educationMap.map((edu, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Central Data Node */}
                <div className="absolute left-0 md:left-1/2 top-10 w-4 h-4 bg-slate-950 border-2 border-cyan-500 rounded-full md:-translate-x-1/2 z-20 shadow-[0_0_15px_#22d3ee]" />

                {/* Card */}
                <div className="w-full md:w-[45%] group">
                  <div 
                    className="p-10 bg-[#0a1120]/60 backdrop-blur-3xl border border-white/5 group-hover:border-cyan-500/50 transition-all duration-500 relative"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)" }}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-cyan-400 border border-white/10 group-hover:scale-110 transition-transform">
                        {React.cloneElement(edu.icon, { className: "w-6 h-6" })}
                      </div>
                      <span className="text-[10px] font-black text-cyan-500/40 group-hover:text-cyan-400 transition-colors uppercase tracking-[0.3em] font-mono">
                        {edu.duration}
                      </span>
                    </div>

                    <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter leading-none mb-4 group-hover:text-cyan-400 transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="text-slate-400 text-sm font-bold uppercase mb-8 border-b border-white/5 pb-4">{edu.degree}</p>
                    
                    <div className="flex flex-wrap gap-6 items-center">
                      <span className="text-[10px] font-mono text-slate-500 flex items-center gap-2">
                        <div className="w-1 h-1 bg-cyan-500" /> {edu.status}
                      </span>
                      {edu.score && (
                        <span className="px-3 py-1 bg-cyan-500 text-black text-[10px] font-black uppercase italic tracking-tighter">
                          {edu.score}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Hidden spacer for grid alignment */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 2: ACCESS TOKENS (ACHIEVEMENTS) */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex items-center justify-end gap-6 text-right">
          <div className="h-px w-32 bg-cyan-500/30" />
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white">
            CORE <span className="text-cyan-400">ACHIEVEMENTS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((ach, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className={`relative p-8 bg-gradient-to-br ${ach.color} to-transparent border border-white/5 backdrop-blur-xl group hover:border-white/20 transition-all`}
              style={{ clipPath: "polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)" }}
            >
              {/* Decorative Serial Number */}
              <p className="absolute top-4 right-4 text-[8px] font-mono text-white/20 uppercase tracking-widest">
                ID_AUTH_00{idx + 1}
              </p>

              <div className="w-16 h-16 mb-8 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-2xl">
                {React.cloneElement(ach.icon, { className: "w-8 h-8" })}
              </div>

              <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-2 group-hover:text-cyan-400 transition-colors">
                {ach.title}
              </h4>
              <p className="text-slate-400 text-[10px] font-mono uppercase tracking-widest leading-tight">
                // {ach.detail}
              </p>

              {/* Verified Badge */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2">
                <ShieldCheckIcon className="w-3 h-3 text-cyan-500" />
                <span className="text-[8px] font-black text-cyan-500 uppercase tracking-[0.2em]">Achieved</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}