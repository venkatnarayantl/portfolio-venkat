import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      link: "https://github.com/venkatnarayantl",
      color: "hover:text-gray-300",
    },
    {
      icon: <FaLinkedin size={24} />,
      link: "https://www.linkedin.com/in/venkat-narayan-t-l-427a97234/",
      color: "hover:text-blue-500",
    },
    {
      icon: <FaTwitter size={24} />,
      link: "https://x.com/venkatnarayantl",
      color: "hover:text-sky-400",
    },
  ];

  return (
    <footer className="relative py-8 text-center text-white mt-16 overflow-hidden">
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 opacity-10 blur-3xl -z-10"></div>
      
      <p className="mb-4 font-mono">© {year} Venkat Narayan T L</p>

      <div className="flex justify-center gap-8">
        {socialLinks.map((social, i) => (
          <motion.a
            key={i}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-all ${social.color}`}
            whileHover={{ scale: 1.3, rotate: [0, 10, -10, 0] }}
            whileTap={{ scale: 0.9 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

      <p className="mt-6 text-gray-400 text-sm">
        Designed & built with 💻 by Venkat Narayan T L
      </p>
    </footer>
  );
}
