import React from 'react';
import { BarChart2, Database, Code, ArrowUpRight } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';

const Skills = () => {
  const pillars = [
    {
      name: "Data Analysis & BI",
      icon: BarChart2,
      color: "from-accent-blue to-accent-indigo",
      shadow: "shadow-glow-blue",
      spotlightColor: "rgba(56, 189, 248, 0.15)",
      details: "I connect to raw data sources, clean and model the data, and build interactive Power BI dashboards that track KPIs, reveal trends, and support faster business decisions.",
      tools: ["Power BI", "DAX", "Power Query", "Excel"]
    },
    {
      name: "SQL & Database Querying",
      icon: Database,
      color: "from-accent-teal to-emerald-500",
      shadow: "shadow-glow-teal",
      spotlightColor: "rgba(20, 184, 166, 0.15)",
      details: "I write structured SQL queries — joins, CTEs, window functions — to extract and transform data from relational databases before visualization.",
      tools: ["SQL Server", "MySQL", "CTEs", "Window Functions"]
    },
    {
      name: "Python & Data Science",
      icon: Code,
      color: "from-yellow-400 to-orange-500",
      shadow: "shadow-[0_0_15px_rgba(250,204,21,0.2)]",
      spotlightColor: "rgba(250, 204, 21, 0.12)",
      details: "I use Python for exploratory data analysis, statistical summaries, and data preprocessing — bridging the gap between raw data and business-ready insights.",
      tools: ["Python", "Pandas", "NumPy", "Scikit-Learn"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative bg-bg-dark grid-bg">
      {/* Glow Effect */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-accent-blue/5 rounded-full blur-[110px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-accent-teal/5 rounded-full blur-[110px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-4">
            What I Do — <span className="bg-gradient-to-r from-accent-blue via-accent-indigo to-accent-teal bg-clip-text text-transparent">Skills Overview</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-teal mx-auto rounded-full shadow-glow-blue" />
        </div>

        {/* 3 Pillars Grid using SpotlightCard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <SpotlightCard 
                key={idx}
                spotlightColor={pillar.spotlightColor}
                className="p-8 rounded-3xl border border-white/5 flex flex-col justify-between hover:border-white/15 transition-all duration-300 group hover:-translate-y-1.5"
              >
                <div>
                  <div className={`p-4 inline-block rounded-2xl bg-gradient-to-br ${pillar.color} mb-6 ${pillar.shadow} bg-opacity-10`}>
                     <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="font-heading font-bold text-xl text-white mb-4 group-hover:text-accent-blue transition-colors flex items-center justify-between">
                    {pillar.name}
                    <ArrowUpRight className="w-5 h-5 text-text-secondary opacity-0 group-hover:opacity-100 group-hover:text-accent-blue transition-all duration-300" />
                  </h4>

                  <p className="text-text-secondary text-sm leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                    {pillar.details}
                  </p>
                </div>

                {/* Sub-skills tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {pillar.tools.map((tool, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-3 py-1.5 rounded-lg bg-bg-dark border border-white/5 text-xs text-text-secondary hover:text-white hover:border-white/20 transition-colors duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
