import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Approach from './components/Approach';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Learning from './components/Learning';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="bg-bg-dark text-white min-h-screen selection:bg-accent-blue/30 selection:text-white">
      {/* Dynamic Grid Background Canvas */}
      <div className="fixed inset-0 grid-bg pointer-events-none opacity-20 z-0" />
      
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Structural Layout */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Stats />
        <Approach />
        <Skills />
        <Projects />
        <Learning />
        <Contact />
      </main>
    </div>
  );
}

export default App;
