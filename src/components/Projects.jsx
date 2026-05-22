import React, { useState } from 'react';
import SalesDashboard from './dashboards/SalesDashboard';
import HRDashboard from './dashboards/HRDashboard';
import FinancialDashboard from './dashboards/FinancialDashboard';
import { AreaChart, Users, DollarSign, BrainCircuit, CheckCircle, Cpu, ShieldAlert, Star, TrendingUp } from 'lucide-react';

const Projects = () => {
  const [activeDashboard, setActiveDashboard] = useState('sales');

  const dashboards = [
    { 
      id: 'sales', 
      name: 'Sales Performance', 
      icon: AreaChart,
      color: 'text-accent-blue',
      bgColor: 'bg-accent-blue/10',
      component: SalesDashboard,
      caseStudy: {
        title: "Sales Performance Dashboard",
        pitch: "Built a multi-region sales KPI dashboard in Power BI that replaced manual Excel reporting and saved ~70% of weekly reporting time.",
        details: [
          "Star Schema data model with 4 dimension tables",
          "7 live DAX measures including YoY Growth and Rolling Average",
          "Drill-through pages, dynamic bookmarks, and mobile layout",
          "Identified a hidden 15% Q3 seasonal dip invisible in raw data"
        ],
        outcomes: ["~70% Time Saved", "7 KPIs Live", "15% Insight Found"],
        stack: ["Power BI", "DAX", "Star Schema"]
      }
    },
    { 
      id: 'hr', 
      name: 'HR & Attrition', 
      icon: Users,
      color: 'text-accent-teal',
      bgColor: 'bg-accent-teal/10',
      component: HRDashboard,
      caseStudy: {
        title: "HR Analytics & Attrition Dashboard",
        pitch: "Analyzed 1,470 employee records to uncover the top 3 reasons people quit — and gave HR a tool to act on it before it happens.",
        details: [
          "Python EDA before Power BI — full end-to-end workflow",
          "Row-Level Security so each department head sees only their data",
          "What-If salary slider to simulate attrition reduction scenarios",
          "Surfaced 26% higher attrition in Sales vs company average"
        ],
        outcomes: ["1,470 Records", "Top 3 Risk Drivers Found", "RLS Deployed"],
        stack: ["Python", "Power BI", "Row-Level Security"]
      }
    },
    { 
      id: 'finance', 
      name: 'Financial KPIs (Advanced)', 
      icon: DollarSign,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      component: FinancialDashboard,
      caseStudy: {
        title: "Financial KPI Report System",
        isAdvanced: true,
        pitch: "Built a complete enterprise BI pipeline — SQL Server database to Power BI dashboard to automated Power Automate email alerts — end to end.",
        details: [
          "Self-designed normalized SQL Server database with 6 tables",
          "DirectQuery connection for near-real-time financial data",
          "Automated alerts when Net Profit KPI drops below threshold",
          "Uncovered a recurring Q1 budget overrun through rolling average"
        ],
        outcomes: ["~40% Query Improvement", "3 Alerts Automated", "8 KPIs Tracked"],
        stack: ["SQL Server", "Power BI", "Power Automate"]
      }
    }
  ];

  const currentDash = dashboards.find(d => d.id === activeDashboard);
  const DashboardComponent = currentDash.component;

  return (
    <section id="projects" className="py-24 px-6 relative bg-bg-dark grid-bg">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent-teal/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Interactive <span className="bg-gradient-to-r from-accent-blue via-accent-indigo to-accent-teal bg-clip-text text-transparent">Projects Showcase</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-teal mx-auto rounded-full shadow-glow-blue" />
        </div>

        {/* Dashboard Switcher Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {dashboards.map((dash) => {
            const Icon = dash.icon;
            const isActive = activeDashboard === dash.id;
            return (
              <button
                key={dash.id}
                onClick={() => setActiveDashboard(dash.id)}
                className={`flex items-center gap-3 p-5 rounded-2xl border text-left transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-br from-bg-card to-bg-card border-accent-blue/40 shadow-glow-blue scale-[1.02]' 
                    : 'glass-panel text-text-secondary border-white/5 hover:border-white/20 hover:text-white'
                }`}
              >
                <div className={`p-3 rounded-xl ${dash.bgColor} ${dash.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className={`font-heading font-bold text-sm ${isActive ? 'text-white' : 'text-text-secondary'}`}>
                    {dash.name}
                  </h4>
                  <span className="text-[10px] text-text-secondary font-medium uppercase tracking-widest">
                    Interactive Live App
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* The Live Interactive Dashboard Container */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 shadow-2xl mb-12 relative overflow-hidden">
          {/* Subtle neon glowing header bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-blue via-accent-indigo to-accent-teal opacity-50" />
          
          <DashboardComponent />
        </div>

        {/* Architectural Case Study Breakdown */}
        <div className="glass-panel p-8 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/5" />
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left Col Case Study Details */}
            <div className="lg:w-8/12 space-y-6">
              
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
                {currentDash.caseStudy.title}
                {currentDash.caseStudy.isAdvanced && (
                   <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-md text-[10px] uppercase tracking-wider">
                      <Star className="w-3 h-3" /> Advanced
                   </span>
                )}
              </h3>
              
              <p className="text-accent-blue text-sm sm:text-base font-semibold italic border-l-2 border-accent-blue pl-4 py-1">
                 "{currentDash.caseStudy.pitch}"
              </p>

              <div className="space-y-4">
                 <h5 className="font-bold text-white text-sm">Why it's worth clicking:</h5>
                 <ul className="space-y-3">
                    {currentDash.caseStudy.details.map((detail, idx) => (
                       <li key={idx} className="flex items-start gap-3 text-text-secondary text-sm">
                          <CheckCircle className="w-5 h-5 text-accent-teal shrink-0 mt-0.5" />
                          <span>{detail}</span>
                       </li>
                    ))}
                 </ul>
              </div>

            </div>

            {/* Right Col Technical Stack & Tags */}
            <div className="lg:w-4/12 w-full space-y-6">
              <div className="space-y-4">
                 <h5 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
                   Outcome Metrics
                 </h5>
                 <div className="flex flex-col gap-2">
                   {currentDash.caseStudy.outcomes.map((tag, idx) => (
                     <div key={idx} className="px-4 py-2.5 rounded-xl bg-accent-teal/10 border border-accent-teal/20 text-accent-teal font-bold text-xs flex items-center shadow-glow-teal">
                        <TrendingUp className="w-4 h-4 mr-2 opacity-70" />
                        {tag}
                     </div>
                   ))}
                 </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/5">
                 <h5 className="font-heading text-xs font-bold text-text-secondary uppercase tracking-wider">
                   Tech Stack Used
                 </h5>
                 <div className="flex flex-wrap gap-2">
                   {currentDash.caseStudy.stack.map((tech, idx) => (
                     <span 
                       key={idx}
                       className="px-3 py-1.5 rounded-lg bg-bg-dark border border-white/10 text-xs text-white font-medium hover:border-accent-blue hover:text-accent-blue transition-colors duration-300"
                     >
                       {tech}
                     </span>
                   ))}
                 </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
