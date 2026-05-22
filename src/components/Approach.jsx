import React from 'react';
import { Lightbulb, Database, Maximize2, LineChart } from 'lucide-react';

const Approach = () => {
  const approaches = [
    {
      title: "Understand Before You Build",
      description: "Before opening Power BI, I always ask — what decision does this report need to support? Who reads it? What would make them act differently?",
      icon: Lightbulb,
      color: "text-amber-400 bg-amber-400/10 border-amber-400/20"
    },
    {
      title: "Clean Data is Non-Negotiable",
      description: "A beautiful dashboard built on dirty data is just a beautiful lie. I spend as much time in Power Query and Python cleaning data as I do designing visuals.",
      icon: Database,
      color: "text-blue-400 bg-blue-400/10 border-blue-400/20"
    },
    {
      title: "Simplicity is the Hard Part",
      description: "Anyone can throw 20 charts on a page. The real skill is knowing which 3 visuals tell the whole story. I design for the 30-second executive glance.",
      icon: Maximize2,
      color: "text-teal-400 bg-teal-400/10 border-teal-400/20"
    },
    {
      title: "Always Quantify",
      description: "Every project I build, I ask — what measurably improved? Time saved, patterns found, alerts automated. If I can't measure the impact, I push myself harder.",
      icon: LineChart,
      color: "text-purple-400 bg-purple-400/10 border-purple-400/20"
    }
  ];

  return (
    <section id="approach" className="py-24 px-6 relative bg-bg-dark grid-bg">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-4">
            My Approach to <span className="bg-gradient-to-r from-accent-blue to-accent-teal bg-clip-text text-transparent">Data</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-teal mx-auto rounded-full shadow-glow-blue" />
        </div>

        {/* Approach Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approaches.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="glass-panel p-8 rounded-3xl border border-white/5 flex gap-6 hover:border-white/20 transition-all duration-300 group"
              >
                <div className={`p-4 rounded-2xl border shrink-0 h-fit ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-heading text-lg font-bold text-white">
                    {idx + 1}. {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Approach;
