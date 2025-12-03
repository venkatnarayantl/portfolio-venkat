import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trackers from "./components/Trackers";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Background from "./components/HackerBackground";
import Skills from "./components/Skills";
import ProfileSections from "./components/ProfileSections";

export default function App() {
  return (
    <Router>
      <Background />
      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Trackers />
                <Projects />
                <Skills />
                <About />
                <ProfileSections />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
