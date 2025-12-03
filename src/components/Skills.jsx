// src/components/Skills.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GITHUB_USERNAME = "venkatnarayantl";

export default function Skills() {
  const [skills, setSkills] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const token = import.meta.env?.VITE_GITHUB_TOKEN || null;

  useEffect(() => {
    console.log("[Skills] component mounted");
    let cancelled = false;

    async function fetchLangs() {
      setLoading(true);
      setErrorMsg(null);
      try {
        const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`;
        console.log("[Skills] fetching", url, "token present:", !!token);
        const headers = token ? { Authorization: `token ${token}` } : {};
        const res = await fetch(url, { headers });
        console.log("[Skills] fetch status:", res.status);
        const data = await res.json().catch(() => null);
        console.log("[Skills] fetched data length:", Array.isArray(data) ? data.length : typeof data);

        if (!res.ok) {
          const msg = data?.message || `${res.status} ${res.statusText}`;
          throw new Error(msg);
        }
        if (!Array.isArray(data)) throw new Error("Unexpected GitHub response");

        const langMap = {};
        data.forEach((repo) => {
          if (!repo) return;
          if (repo.fork || repo.archived) return;
          const lang = repo.language;
          if (lang) langMap[lang] = (langMap[lang] || 0) + 1;
        });

        const entries = Object.entries(langMap).sort((a, b) => b[1] - a[1]);
        const max = entries.length ? entries[0][1] : 1;
        const mapped = entries.map(([name, count]) => ({ name, count, level: Math.round((count / max) * 100) }));

        if (!cancelled) {
          setSkills(mapped);
          setLoading(false);
          console.log("[Skills] languages:", mapped);
        }
      } catch (err) {
        if (!cancelled) {
          console.error("[Skills] fetch error:", err);
          setErrorMsg(err.message || "Fetch failed");
          setSkills([]); // ensure UI still shows
          setLoading(false);
        }
      }
    }

    fetchLangs();
    return () => { cancelled = true; };
  }, [token]);

  // UI: Guaranteed visible (even when empty)
  return (
    <section id="skills" className="py-20 text-center text-white px-4 border-t border-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills</h2>

      <p className="text-sm text-gray-300 mb-4">This component is mounted and always visible. Check console for `[Skills]` logs.</p>

      {loading && <p className="text-cyan-300">Loading from GitHub...</p>}

      {!loading && errorMsg && (
        <div className="max-w-2xl mx-auto bg-black/70 border border-red-600 p-4 rounded mb-6">
          <p className="text-red-300">Error loading skills: {errorMsg}</p>
        </div>
      )}

      {!loading && skills && skills.length === 0 && (
        <div className="max-w-2xl mx-auto bg-black/60 border border-cyan-400 p-4 rounded mb-6">
          <p className="text-cyan-300">No languages found in your public repos (or fetch failed). You will still see fallback below.</p>
        </div>
      )}

      {/* If skills loaded, show bars. If not, show fallback sample */}
      <div className="max-w-3xl mx-auto space-y-6 mt-6">
        {(skills && skills.length > 0 ? skills : [
          { name: "Python", count: 1, level: 100 },
          { name: "HTML", count: 1, level: 60 },
          { name: "C", count: 1, level: 40 },
        ]).map(skill => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg md:text-xl font-mono">{skill.name}</h3>
              <span className="text-sm text-cyan-300">{skill.count} repo{skill.count>1?"s":""}</span>
            </div>
            <div className="w-full bg-black/60 border border-cyan-400 h-6 rounded-full overflow-hidden">
              <motion.div
                className="bg-cyan-400 h-6 rounded-full origin-left"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                whileHover={{ scaleX: 1.03 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
