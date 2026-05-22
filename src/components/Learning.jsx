import React from 'react';
import { Target, Brain, Cloud, BarChart2, BookOpen } from 'lucide-react';

const Learning = () => {
  const steps = [
    {
      status: "Certification Track",
      title: "Microsoft PL-300",
      description: "Preparing for the official Power BI Data Analyst certification to formally validate my data modeling and visualization expertise.",
      icon: Target,
      color: "border-blue-500/30 text-blue-400 shadow-glow-blue",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
      status: "Deepening Skills",
      title: "Machine Learning",
      description: "Exploring supervised models, feature engineering, and model evaluation to bridge the gap between descriptive and predictive analytics.",
      icon: Brain,
      color: "border-purple-500/30 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    },
    {
      status: "Cloud Data Engineering",
      title: "Azure Data Factory",
      description: "Learning cloud-based ETL pipelines, orchestrating data movement, and managing data integration across enterprise systems.",
      icon: Cloud,
      color: "border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
    },
    {
      status: "Technical Deep Dive",
      title: "Advanced DAX Patterns",
      description: "Mastering context transition, virtual tables, and functions like CALCULATETABLE to solve complex business logic scenarios.",
      icon: BarChart2,
      color: "border-yellow-500/30 text-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.2)]",
      badgeColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
    }
  ];

  return (
    <section id="learning" className="py-24 px-6 relative bg-bg-dark grid-bg">
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-accent-blue/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent-teal/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-4">
            What I'm <span className="bg-gradient-to-r from-accent-blue to-accent-teal bg-clip-text text-transparent">Currently Learning</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-teal mx-auto rounded-full shadow-glow-blue" />
        </div>

        {/* Honest Note */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-accent-blue border-white/5 shadow-lg flex items-start gap-4">
             <BookOpen className="w-6 h-6 text-accent-blue shrink-0 mt-1" />
             <p className="text-white text-sm sm:text-base leading-relaxed italic font-medium">
               "I treat learning as a daily habit, not a one-time event. Every week I'm either building something new, breaking something old, or figuring out why my DAX measure is returning blank."
             </p>
          </div>
        </div>

        {/* Roadmap Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className={`glass-panel p-6 rounded-3xl border ${step.color} hover:border-white/20 transition-all duration-300 flex flex-col group`}
              >
                <div className="flex justify-between items-start mb-6">
                  <span className={`px-2.5 py-1 rounded-md border text-[9px] font-bold uppercase tracking-widest ${step.badgeColor}`}>
                    {step.status}
                  </span>
                  <div className="p-2 rounded-xl bg-white/5 text-text-secondary group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-3 text-left flex-grow">
                  <h3 className="font-heading text-lg font-bold text-white leading-snug group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                    {step.description}
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

export default Learning;
