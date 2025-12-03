import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { CpuChipIcon } from "@heroicons/react/24/solid"; // AI/code themed icon

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        y: [0, -20, 0],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      });
    }
  }, [inView, controls]);

  return (
    <section
      id="about"
      className="relative py-20 px-4 text-center text-white overflow-hidden"
      ref={ref}
    >
      {/* Background Glow Circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>

      {/* Floating AI/Code Icon */}
      <motion.div
        className="absolute -top-10 right-10 w-12 h-12 text-cyan-400"
        animate={controls}
      >
        <CpuChipIcon />
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="relative text-3xl md:text-4xl font-extrabold mb-8 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="relative max-w-3xl mx-auto font-mono text-lg md:text-xl leading-relaxed text-gray-300 tracking-wide z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        I am <span className="text-green-400 font-semibold">Venkat Narayan T L</span>, a passionate 
        <span className="text-cyan-400 font-semibold"> Computer Science student</span> with a keen interest in 
        <span className="text-green-400 font-semibold"> full-stack development, AI, and cloud computing</span>.  
        I enjoy building practical solutions that solve real-world problems and creating 
        <span className="text-cyan-400 font-semibold"> engaging, user-friendly applications</span>.  
        With hands-on experience in <span className="text-green-400 font-semibold">Python, Java, and JavaScript</span>, 
        and a curiosity for learning new technologies, I strive to combine creativity and technical skills to deliver impactful projects.  
        I am always exploring innovative ideas, collaborating with like-minded peers, and challenging myself to grow as a 
        <span className="text-cyan-400 font-semibold"> developer and problem solver</span>.
      </motion.p>
    </section>
  );
}
