// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Hero from './components/hero.jsx';
import About from './components/about.jsx';
import Skills from './components/skills.jsx';
import Projects from './components/projects.jsx';
import Experience from './components/experience.jsx';
import Achievements from './components/achievements.jsx';
import Contact from './components/contact.jsx';
import LoadingScreen from './components/loadingscreen.jsx';

const App = () => {
  const [init, setInit] = useState(false);
  const [loading, setLoading] = useState(true);
  const bgMusicRef = useRef(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Simulate loading time
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // 3-second loading screen
  }, []);

  const particlesOptions = { /* Particle config goes here */ };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen bg-dark-bg font-body text-text-main">
      {init && <Particles id="tsparticles" options={particlesOptions} className="absolute inset-0 -z-10" />}
      <audio ref={bgMusicRef} src="/audio/fantasy-music.mp3" loop />
      
      <main className="container mx-auto px-6 py-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      
      {/* Music Toggle Button */}
      <button onClick={() => bgMusicRef.current.paused ? bgMusicRef.current.play() : bgMusicRef.current.pause()} className="fixed bottom-4 right-4 z-50 glass-panel p-3 rounded-full hover:shadow-glow-hover transition-shadow">
        🎵
      </button>
    </div>
  );
};

export default App;