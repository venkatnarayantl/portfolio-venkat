import React from "react";
import { motion } from "framer-motion";
import { AcademicCapIcon, BriefcaseIcon, TrophyIcon } from "@heroicons/react/24/solid";

const education = [
  {
    degree: "B.E. Computer Science & Engineering",
    institution: "SVCE, Bangalore, India",
    duration: "2024 – Present",
  },
  {
    degree: "Class XII, PCM",
    institution: "Kendriya Vidyalaya Malleswaram, Bangalore",
    duration: "2023",
  },
  {
    degree: "Class X",
    institution: "Kendriya Vidyalaya Malleswaram, Bangalore",
    duration: "2021",
  },
];

const experience = [
  {
    role: "IBM Intern – AI & Cloud Computing",
    duration: "4 Weeks",
    project: "Developed an Agentic Career Counsellor using AI to guide students with personalized insights.",
  },
  {
    role: "Personal Projects",
    duration: "Ongoing",
    project: "Building web and AI applications to solve real-world problems and improve learning experiences.",
  },
];

const achievements = [
  "Gold Medal – MIT App Inventor Challenge for 'Smart School' App",
  "5-star Python Certification – Hackerrank",
  "Top 30 – SIH Internal Hackathon 2024",
  "31-day coding streak – Zoho ZEST Competition",
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 300 },
  }),
};

export default function ProfileSections() {
  return (
    <section className="relative px-4 md:px-16 py-16 space-y-20 text-white overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Education */}
      <div id="education">
        <h2 className="text-4xl font-bold text-green-400 mb-8 flex items-center gap-2">
          <AcademicCapIcon className="w-8 h-8 text-cyan-400" />
          Education
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="p-6 bg-gradient-to-br from-black/40 via-black/30 to-black/20 border-l-4 border-cyan-400 rounded-xl shadow-xl hover:shadow-cyan-400/50 hover:scale-105 transition-all"
            >
              <h3 className="font-bold text-xl mb-1">{edu.degree}</h3>
              <p className="text-gray-300">{edu.institution}</p>
              <p className="text-gray-400 mt-1">{edu.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div id="experience">
        <h2 className="text-4xl font-bold text-green-400 mb-8 flex items-center gap-2">
          <BriefcaseIcon className="w-8 h-8 text-cyan-400" />
          Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="p-6 bg-gradient-to-br from-black/40 via-black/30 to-black/20 border border-green-400 rounded-xl shadow-xl hover:shadow-green-400/50 hover:scale-105 transition-all"
            >
              <h3 className="font-bold text-xl mb-1">{exp.role}</h3>
              <p className="text-gray-400">{exp.duration}</p>
              <p className="mt-2">{exp.project}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div id="achievements">
        <h2 className="text-4xl font-bold text-green-400 mb-8 flex items-center gap-2">
          <TrophyIcon className="w-8 h-8 text-cyan-400" />
          Achievements
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="p-4 bg-gradient-to-br from-black/40 via-black/30 to-black/20 border-l-4 border-green-400 rounded-xl shadow-lg hover:shadow-green-400/50 hover:scale-105 transition-all"
            >
              {ach}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
