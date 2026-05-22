import React, { useEffect, useState } from 'react';
import { ArrowRight, BarChart3, Database, TrendingUp, Cpu, FileText } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
      document.documentElement.style.setProperty('--x', `${x}%`);
      document.documentElement.style.setProperty('--y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeMouseMove && window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden grid-bg radial-glow"
    >
      {/* Decorative Glow Background Spheres */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-accent-blue/10 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-teal/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Hero Left Content */}
        <div className="lg:col-span-7 text-left space-y-6 flex flex-col justify-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-accent-blue text-xs font-semibold self-start shadow-glow-blue border-accent-blue/20">
            <Cpu className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Fresher BI Developer | AI & Data Science Student</span>
          </div>

          {/* Main Tagline */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
            Hi, I'm <span className="text-accent-teal">[Your Name]</span> — <br />
            <span className="bg-gradient-to-r from-accent-blue via-accent-indigo to-accent-teal bg-clip-text text-transparent">
              I turn raw data into decisions.
            </span>
          </h1>

          {/* Detailed Paragraph */}
          <p className="text-text-secondary text-base sm:text-lg max-w-xl font-normal leading-relaxed">
            I don't just build dashboards — I build clarity for businesses that run on data. <br/>
            <span className="font-bold text-white">Power BI • SQL • Python</span>
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#projects" 
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-indigo text-bg-dark font-bold text-sm tracking-wide shadow-glow-blue transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]"
            >
              View My Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="/resume.pdf" 
              download
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel text-white hover:text-accent-teal hover:border-accent-teal/40 font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.03]"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
            <a 
              href="#contact" 
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel text-white hover:text-accent-blue hover:border-accent-blue/40 font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.03]"
            >
              Let's Connect
            </a>
          </div>

        </div>

        {/* Hero Right Visuals - BI Visual Floaters Mockup */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
            
            {/* Core glowing central shield */}
            <div className="absolute w-[240px] h-[240px] rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-teal/20 border border-white/10 animate-pulse flex items-center justify-center shadow-glow-blue">
              <div className="w-[180px] h-[180px] rounded-full bg-bg-dark/80 border border-white/5 flex flex-col justify-center items-center text-center p-4">
                <Database className="w-10 h-10 text-accent-blue mb-2 animate-bounce" />
                <span className="text-xs text-text-secondary tracking-widest uppercase">Data Pipelines</span>
                <span className="font-heading font-extrabold text-xl text-white">End-to-End BI</span>
              </div>
            </div>

            {/* Floater 1 */}
            <div className="absolute top-4 left-0 glass-panel p-4 rounded-xl flex items-center gap-3 border border-white/10 shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="p-2.5 rounded-lg bg-accent-blue/10 text-accent-blue shadow-glow-blue">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider">Time Saved</p>
                <h4 className="font-heading font-bold text-base text-white">~70% Weekly</h4>
              </div>
            </div>

            {/* Floater 2 */}
            <div className="absolute bottom-4 right-0 glass-panel p-4 rounded-xl flex items-center gap-3 border border-white/10 shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="p-2.5 rounded-lg bg-accent-teal/10 text-accent-teal shadow-glow-teal">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider">Business Impact</p>
                <h4 className="font-heading font-bold text-base text-white">Clearer Decisions</h4>
              </div>
            </div>

            {/* Minor technical background shapes */}
            <div className="absolute -top-10 right-10 w-3 h-3 rounded-full bg-accent-teal shadow-glow-teal animate-ping" />
            <div className="absolute -bottom-8 left-10 w-2.5 h-2.5 rounded-full bg-accent-blue shadow-glow-blue animate-ping" style={{ animationDelay: '1.5s' }} />

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
