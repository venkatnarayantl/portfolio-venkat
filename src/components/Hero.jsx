import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen text-center px-4 space-y-8">
      {/* Profile Image */}
      <motion.div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.img
          src="/profile.jpg"
          alt="Venkat"
          className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-8 border-green-400"
          style={{ objectPosition: "top" }} // crop to face
          animate={{ scale: hovered ? 1.2 : 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-green-400 shadow-[0_0_30px_#0ff]"
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        animate={{ y: hovered ? 30 : 0 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex flex-col items-center"
      >
        {/* Name */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-green-400 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Venkat Narayan T L
        </motion.h1>

        {/* Typewriter */}
        <motion.h2
          className="text-xl md:text-2xl font-mono text-cyan-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Typewriter
            words={[
              "Programming Enthusiast ",
              "Computer Science Student @ SVCE",
              "Programming Enthusiast ",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.h2>

        {/* Buttons */}
        <motion.div className="flex gap-6 mt-8">
          <motion.a
            href="#projects"
            className="px-6 py-3 border border-green-400 rounded-lg hover:bg-green-400 hover:text-black transition-all  hover:scale-110"
            whileHover={{ scale: 1.1 }}
          >
            Projects
          </motion.a>
          <motion.a
            href="/resume.pdf"
            target="_blank"       // opens in a new tab
            rel="noopener noreferrer"
            className="px-6 py-3 border border-green-400 rounded-lg hover:bg-green-400 hover:text-black transition-all hover:scale-110"
            whileHover={{ scale: 1.1 }}
            >
            Resume
            </motion.a>

        </motion.div>
      </motion.div>
    </section>
  );
}
