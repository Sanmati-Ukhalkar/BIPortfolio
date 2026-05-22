import React from 'react';
import { Activity } from 'lucide-react';

const Stats = () => {
  const stats = [
    { value: "3", label: "Projects Built End-to-End" },
    { value: "7+", label: "DAX Measures Written Per Project" },
    { value: "1,470", label: "Employee Records Analyzed" },
    { value: "500+", label: "Sales Records Modeled" },
    { value: "~70%", label: "Reporting Time Reduced" },
    { value: "3", label: "Automated Alerts Configured" },
    { value: "6", label: "SQL Tables Designed from Scratch" },
    { value: "8", label: "Financial KPIs Tracked Live" },
    { value: "4", label: "Extra Features Per Project" },
    { value: "1", label: "Advanced Enterprise Pipeline Built" }
  ];

  return (
    <section id="stats" className="py-24 px-6 relative bg-bg-dark grid-bg border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-4">
            By The <span className="bg-gradient-to-r from-accent-blue to-accent-teal bg-clip-text text-transparent">Numbers</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-teal mx-auto rounded-full shadow-glow-blue" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-accent-blue/30 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1 shadow-lg"
            >
              <h3 className="font-heading font-extrabold text-3xl text-white group-hover:text-accent-teal transition-colors mb-2">
                {stat.value}
              </h3>
              <p className="text-text-secondary text-xs font-semibold uppercase tracking-wider leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;
