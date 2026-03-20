import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { CpuChipIcon, CommandLineIcon, CodeBracketIcon } from "@heroicons/react/24/solid";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="about"
      className="relative py-32 px-4 overflow-hidden"
      ref={ref}
    >
      {/* Background Stylized Text (Watermark Effect) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] text-[15rem] font-black text-white whitespace-nowrap z-0">
        VENKAT NARAYAN
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-6"
          >
            <CpuChipIcon className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_8px_#22d3ee]" />
          </motion.div>
          
          <motion.h2
            className="text-5xl md:text-7xl font-black text-white italic tracking-tighter"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            THE <span className="text-cyan-400">VISION</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-cyan-500 mt-4 rounded-full shadow-[0_0_15px_#22d3ee]" />
        </div>

        {/* Terminal Style Content Box */}
        <motion.div 
          className="relative rounded-[2.5rem] bg-slate-900/40 backdrop-blur-3xl border border-white/10 overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-8 py-4 bg-white/5 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="ml-4 font-mono text-xs text-slate-500 uppercase tracking-widest">bio.sys / developer_profile</span>
          </div>

          <div className="p-10 md:p-16 relative">
            {/* Corner Decorative Icon */}
            <CommandLineIcon className="absolute top-10 right-10 w-32 h-32 text-white/[0.02] -rotate-12" />

            <motion.p
              className="font-mono text-lg md:text-2xl leading-relaxed text-slate-300 tracking-tight relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              I am <span className="text-white font-black underline decoration-cyan-500 decoration-4 underline-offset-8">Venkat Narayan T L</span>, 
              a <span className="text-cyan-400 italic">Computer Science engineer</span> driven by the logic of 
              <span className="text-white font-bold"> full-stack development</span> and the potential of 
              <span className="text-cyan-400 italic"> AI/Cloud integration</span>.
              <br /><br />
              I specialize in bridging the gap between <span className="text-white font-bold">raw ML theory</span> and 
              <span className="text-cyan-400"> impactful IoT solutions</span>. With a strong foundation in 
              <span className="text-white"> Python, Java, and JS</span>, I build applications that don't just look good—they 
              <span className="text-cyan-400 font-bold italic underline decoration-white/20 underline-offset-4"> solve real-world problems</span>.
            </motion.p>

            <div className="mt-12 flex flex-wrap gap-4">
               <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-black uppercase tracking-widest">
                  <CodeBracketIcon className="w-4 h-4" />
                  Problem Solver
               </div>
               <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-black uppercase tracking-widest">
                  <CommandLineIcon className="w-4 h-4" />
                  SVCE Engineering
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}