import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const [hovered, setHovered] = useState(false);

  return (
    <section 
      id="home" 
      className="relative flex flex-col items-center justify-center min-h-screen pt-20 pb-20 px-4 overflow-hidden bg-transparent font-sans"
    >
      
      {/* 1. ATMOSPHERIC WATERMARK */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-[15vw] font-black text-white leading-none tracking-tighter italic uppercase text-center"
        >
          VENKAT NARAYAN T L
        </motion.h1> 
      </div>

      {/* 2. DYNAMIC AMBIENT GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] animate-pulse pointer-events-none" />

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl w-full">
        
        {/* PROFILE SECTION - TACTICAL BIOMETRIC STYLE */}
        <motion.div
          className="relative mb-16 mt-10"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Outer Rotating Radar Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-10 border border-dashed border-cyan-500/20 rounded-full pointer-events-none"
          />

          {/* Targeting Brackets */}
          <AnimatePresence>
            {hovered && (
              <>
                <motion.div 
                  initial={{ opacity: 0, scale: 1.2 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0 }}
                  className="absolute -top-6 -left-6 w-10 h-10 border-t-2 border-l-2 border-cyan-400 z-20" 
                />
                <motion.div 
                  initial={{ opacity: 0, scale: 1.2 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0 }}
                  className="absolute -bottom-6 -right-6 w-10 h-10 border-b-2 border-r-2 border-cyan-400 z-20" 
                />
              </>
            )}
          </AnimatePresence>

          {/* Hexagonal Image Container */}
          <div className="relative z-10 p-1 bg-gradient-to-br from-cyan-500/40 to-blue-600/40 shadow-[0_0_50px_rgba(34,211,238,0.15)] group"
            style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
          >
            <div 
              className="bg-slate-950 p-1 relative overflow-hidden"
              style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
            >
              <motion.img
                src="/profile.jpg"
                alt="Venkat Narayan T L"
                className="w-48 h-56 md:w-64 md:h-72 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                style={{ objectPosition: "top" }}
                animate={{ scale: hovered ? 1.08 : 1 }}
                transition={{ type: "spring", stiffness: 150 }}
              />
              
              {/* Scanning Line Effect */}
              <motion.div 
                animate={{ translateY: ["-100%", "300%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-[2px] bg-cyan-400 shadow-[0_0_20px_#22d3ee] z-20 opacity-40 pointer-events-none"
              />
            </div>
          </div>

          

          {/* Availability Badge */}
          <motion.div 
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-cyan-500 text-black shadow-2xl z-30"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            style={{ clipPath: "polygon(8% 0, 100% 0, 92% 100%, 0 100%)" }}
          >
            <span className="text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-black rounded-full animate-ping" />
              Status: Open_To_Work
            </span>
          </motion.div>
        </motion.div>

        {/* Brand Section */}
        <div className="text-center">
          <motion.h1
            className="text-5xl md:text-8xl font-black text-white tracking-tighter italic leading-tight uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            VENKAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.3)] bg-[length:200%_auto] animate-gradient">NARAYAN T L</span>
          </motion.h1>

          <motion.div
            className="text-lg md:text-2xl font-mono text-cyan-400/80 mt-4 h-8 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-slate-500 mr-2">$</span>
            <Typewriter
              words={[
                "CSE @ SVCE (Final Year)", 
                "Student"
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full max-w-4xl px-4">
           {[
             { label: "Aggregate CGPA", val: "8.51" },
             { label: "Engineering", val: "CSE @ SVCE" },
             { label: "Base_Loc", val: "Bengaluru" }
           ].map((stat, i) => (
             <motion.div 
               key={i}
               className="relative p-6 bg-white/[0.02] border border-white/5 backdrop-blur-xl group hover:border-cyan-500/40 transition-all text-center overflow-hidden"
               whileHover={{ y: -5 }}
               style={{ clipPath: "polygon(0 0, 90% 0, 100% 20%, 100% 100%, 10% 100%, 0 80%)" }}
             >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.4em] mb-2">{stat.label}</p>
                <p className="text-2xl text-white font-black group-hover:text-cyan-400 transition-colors uppercase italic tracking-tighter">{stat.val}</p>
             </motion.div>
           ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-8 mt-20 relative z-20">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 211, 238, 0.4)" }}
            className="px-12 py-4 bg-cyan-500 text-black font-black text-[10px] uppercase tracking-[0.3em] transition-all relative overflow-hidden group"
            style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
          >
            <span className="relative z-10 italic">Project_Vault</span>
          </motion.a>
          
          <motion.a
            href="/Venkat_resume_edi (1).pdf"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
            className="px-12 py-4 border border-white/10 text-white font-black text-[10px] uppercase tracking-[0.3em] transition-all relative group"
            style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
          >
            <span className="relative z-10 italic">Download_CV</span>
            <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}