import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaHackerrank, FaLaptopCode } from "react-icons/fa";

const GITHUB_USERNAME = "venkatnarayantl";
const HACKERRANK_URL = "https://www.hackerrank.com/venkatnarayantl";
const LEETCODE_URL = "https://leetcode.com/venkatnarayantl/";
const LEETCODE_TARGET = 500; // target problems for progress bar

export default function Trackers() {
  const [github, setGithub] = useState({ repos: 0, languages: {} });
  const [hackerrank, setHackerRank] = useState({ badges: [], languages: [] });
  const [leetcode, setLeetCode] = useState({ solved: 0 });

  // GitHub fetch
  useEffect(() => {
    async function fetchGitHub() {
      try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
        const data = await res.json();
        const langCount = {};
        data.forEach(repo => {
          if (repo.language) langCount[repo.language] = (langCount[repo.language] || 0) + 1;
        });
        setGithub({ repos: data.length, languages: langCount });
      } catch (err) {
        console.error("GitHub fetch error:", err);
      }
    }
    fetchGitHub();
  }, []);

  // HackerRank static
  useEffect(() => {
    setHackerRank({ badges: ["Python"], languages: ["Python", "C"] });
  }, []);

  // LeetCode fetch
  useEffect(() => {
    async function fetchLeetCode() {
      try {
        const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${GITHUB_USERNAME}`);
        const data = await res.json();
        setLeetCode({ solved: data.totalSolved || 0 });
      } catch (err) {
        console.error("LeetCode fetch error:", err);
      }
    }
    fetchLeetCode();
  }, []);

  const createProgressBars = (data) => {
    const total = Object.values(data).reduce((a, b) => a + b, 0) || 1;
    return Object.entries(data).map(([lang, count], idx) => {
      const percent = Math.round((count / total) * 100);
      return (
        <div key={idx} className="w-full mb-2">
          <div className="flex justify-between text-gray-300 text-sm mb-1">
            <span>{lang}</span>
            <span>{percent}%</span>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percent}%` }}
              transition={{ duration: 1.2, type: "spring" }}
              className="h-2 rounded-full bg-cyan-400"
            ></motion.div>
          </div>
        </div>
      );
    });
  };

  return (
    <section id="stats" className="py-20 text-center relative overflow-hidden">
      {/* Floating Glows */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>

      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-400 relative z-10">
        My Profiles & Stats
      </h2>

      <div className="flex flex-wrap justify-center gap-10 relative z-10">
        {/* GitHub Card */}
        <motion.div
          className="bg-black/70 border border-cyan-400 p-8 rounded-2xl cursor-pointer hover:scale-105 transition-transform flex flex-col items-center justify-center text-center shadow-xl hover:shadow-cyan-500/50 w-72"
          onClick={() => window.open(`https://github.com/${GITHUB_USERNAME}`, "_blank")}
        >
          <FaGithub size={36} className="text-cyan-400 mb-3" />
          <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
          <p className="text-gray-300 mb-2">Repos: {github.repos}</p>
          {createProgressBars(github.languages)}
        </motion.div>

        {/* HackerRank Card */}
        <motion.div
          className="bg-black/70 border border-green-400 p-8 rounded-2xl cursor-pointer hover:scale-105 transition-transform flex flex-col items-center justify-center text-center shadow-xl hover:shadow-green-500/50 w-72"
          onClick={() => window.open(HACKERRANK_URL, "_blank")}
        >
          <FaHackerrank size={36} className="text-green-400 mb-3" />
          <h3 className="text-xl font-semibold text-white mb-2">HackerRank</h3>
          {hackerrank.badges.map((badge, idx) => (
            <div key={idx} className="w-full mb-2">
              <div className="flex justify-between text-gray-300 text-sm mb-1">
                <span>{badge}</span>
                <span>100%</span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1 }}
                className="w-full bg-gray-700 h-2 rounded-full overflow-hidden"
              >
                <div className="h-2 rounded-full bg-green-400"></div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* LeetCode Card */}
        <motion.div
          className="bg-black/70 border border-orange-400 p-8 rounded-2xl cursor-pointer hover:scale-105 transition-transform flex flex-col items-center justify-center text-center shadow-xl hover:shadow-orange-500/50 w-72"
          onClick={() => window.open(LEETCODE_URL, "_blank")}
        >
          <FaLaptopCode size={36} className="text-orange-400 mb-3" />
          <h3 className="text-xl font-semibold text-white mb-2">LeetCode</h3>
          <p className="text-gray-300 mb-2">Problems Solved: {leetcode.solved}</p>
          <div className="w-full">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min((leetcode.solved / LEETCODE_TARGET) * 100, 100)}%` }}
              transition={{ duration: 1.5, type: "spring" }}
              className="h-2 rounded-full bg-orange-400"
            ></motion.div>
            <div className="flex justify-between text-gray-300 text-sm mt-1">
              <span>0</span>
              <span>{LEETCODE_TARGET}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
