import React from 'react';
import { Award, Briefcase, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

const About = () => {
  const storyPoints = [
    "I'm a final-year AI & Data Science student who got genuinely obsessed with one question — why do most businesses have mountains of data but still make gut-feel decisions?",
    "That curiosity pulled me deep into the world of Business Intelligence. What started with a basic Excel sheet slowly turned into building full Power BI dashboards, writing DAX measures at midnight, and designing data models that actually made sense of messy, real-world data.",
    "I come from an engineering background where I learned how to think logically and break complex problems into smaller pieces — and I bring that same mindset to every dataset I work with. Whether it's cleaning 1,500 rows of HR data in Power Query or writing a CTE in SQL to flatten a nested financial table, I genuinely enjoy the process of making data usable.",
    "I believe a good BI report isn't just technically correct — it tells a story that a non-technical manager can understand in 30 seconds. That's the standard I hold my work to.",
    "When I'm not building dashboards, I'm exploring machine learning concepts, taking Udemy courses, or breaking something in Python just to figure out how to fix it."
  ];

  return (
    <section id="about" className="py-24 px-6 relative bg-bg-dark grid-bg">
      {/* Dynamic Background Blur */}
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-accent-indigo/5 rounded-full blur-[90px]" />
      <div className="absolute bottom-10 left-10 w-[250px] h-[250px] bg-accent-teal/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-4">
            About Me — <span className="bg-gradient-to-r from-accent-blue to-accent-teal bg-clip-text text-transparent">My Story</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-teal mx-auto rounded-full shadow-glow-blue" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: My Story */}
          <div className="lg:col-span-7 space-y-8">
            <div className="glass-panel p-8 rounded-2xl border border-white/5 space-y-6">
              <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-blue" />
                From Data Science to Business Intelligence
              </h3>
              <div className="space-y-4">
                {storyPoints.map((point, idx) => (
                  <p key={idx} className="text-text-secondary text-sm sm:text-base leading-relaxed font-normal">
                    {point}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Highlight */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden flex flex-col items-center justify-center h-full min-h-[300px] text-center">
               <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-teal to-transparent opacity-50" />
               <Award className="w-16 h-16 text-accent-teal mb-6 animate-pulse" />
               <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  Built for Clarity
               </h3>
               <p className="text-text-secondary text-sm leading-relaxed">
                  "I believe a good BI report isn't just technically correct — it tells a story that a non-technical manager can understand in 30 seconds."
               </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
