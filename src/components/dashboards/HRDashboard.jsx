import React, { useState } from 'react';
import { 
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  LineChart, Line, PieChart, Pie, Cell, Legend
} from 'recharts';
import { Users, UserMinus, Heart, Smile, Filter } from 'lucide-react';

const HRDashboard = () => {
  const [deptFilter, setDeptFilter] = useState('All');

  const kpiData = {
    All: { headcount: '1,240', attrition: '8.4%', eNPS: '+42', avgTenure: '3.4 yrs' },
    Engineering: { headcount: '450', attrition: '6.2%', eNPS: '+48', avgTenure: '4.1 yrs' },
    Sales: { headcount: '380', attrition: '12.8%', eNPS: '+32', avgTenure: '2.2 yrs' },
    Support: { headcount: '410', attrition: '9.5%', eNPS: '+38', avgTenure: '3.2 yrs' }
  };

  const attritionData = {
    All: [
      { dept: 'Engineering', Rate: 6.2 },
      { dept: 'Sales', Rate: 12.8 },
      { dept: 'Support', Rate: 9.5 },
      { dept: 'HR & Ops', Rate: 5.4 },
      { dept: 'Finance', Rate: 4.8 },
    ],
    Engineering: [
      { dept: 'Frontend', Rate: 7.2 },
      { dept: 'Backend', Rate: 5.5 },
      { dept: 'DevOps', Rate: 4.2 },
      { dept: 'QA', Rate: 8.0 },
    ],
    Sales: [
      { dept: 'Enterprise', Rate: 10.5 },
      { dept: 'Mid-Market', Rate: 13.2 },
      { dept: 'SMB', Rate: 14.8 },
    ],
    Support: [
      { dept: 'Tier 1', Rate: 11.2 },
      { dept: 'Tier 2', Rate: 8.5 },
      { dept: 'Enterprise Support', Rate: 6.4 },
    ]
  };

  const tenureData = {
    All: [
      { name: '< 1 Year', value: 25 },
      { name: '1-3 Years', value: 45 },
      { name: '3-5 Years', value: 20 },
      { name: '5+ Years', value: 10 },
    ],
    Engineering: [
      { name: '< 1 Year', value: 15 },
      { name: '1-3 Years', value: 50 },
      { name: '3-5 Years', value: 23 },
      { name: '5+ Years', value: 12 },
    ],
    Sales: [
      { name: '< 1 Year', value: 35 },
      { name: '1-3 Years', value: 40 },
      { name: '3-5 Years', value: 18 },
      { name: '5+ Years', value: 7 },
    ],
    Support: [
      { name: '< 1 Year', value: 28 },
      { name: '1-3 Years', value: 42 },
      { name: '3-5 Years', value: 22 },
      { name: '5+ Years', value: 8 },
    ]
  };

  const COLORS = ['#6366f1', '#38bdf8', '#14b8a6', '#f43f5e'];
  
  const currentKPI = kpiData[deptFilter];

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Header filter */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
        <div>
          <h4 className="font-heading text-lg font-bold text-white">HR Analytics & Attrition Profiling</h4>
          <p className="text-xs text-text-secondary">Analyze employee lifecycle retention, demographics, and department wellness metrics.</p>
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-accent-teal" />
          <span className="text-xs text-text-secondary font-medium mr-2">Department:</span>
          <select 
            value={deptFilter} 
            onChange={(e) => setDeptFilter(e.target.value)}
            className="bg-bg-dark border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-accent-teal"
          >
            <option value="All">All Departments</option>
            <option value="Engineering">Engineering</option>
            <option value="Sales">Sales & Account Mgmt</option>
            <option value="Support">Customer Support</option>
          </select>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* KPI 1 */}
        <div className="glass-panel p-4 rounded-xl border border-white/5 flex items-center gap-3">
          <div className="p-3 rounded-lg bg-accent-indigo/10 text-accent-indigo">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-text-secondary font-bold uppercase tracking-wider">Total Headcount</p>
            <h3 className="font-heading font-extrabold text-lg text-white">{currentKPI.headcount}</h3>
            <span className="text-[10px] text-accent-teal font-semibold">Active Full-time</span>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="glass-panel p-4 rounded-xl border border-white/5 flex items-center gap-3">
          <div className="p-3 rounded-lg bg-red-500/10 text-red-400">
            <UserMinus className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-text-secondary font-bold uppercase tracking-wider">Attrition Rate</p>
            <h3 className="font-heading font-extrabold text-lg text-white">{currentKPI.attrition}</h3>
            <span className="text-[10px] text-accent-teal font-semibold">Down 1.4% YoY</span>
          </div>
        </div>

        {/* KPI 3 */}
        <div className="glass-panel p-4 rounded-xl border border-white/5 flex items-center gap-3">
          <div className="p-3 rounded-lg bg-accent-teal/10 text-accent-teal">
            <Smile className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-text-secondary font-bold uppercase tracking-wider">Employee eNPS</p>
            <h3 className="font-heading font-extrabold text-lg text-white">{currentKPI.eNPS}</h3>
            <span className="text-[10px] text-accent-teal font-semibold">High job satisfaction</span>
          </div>
        </div>

        {/* KPI 4 */}
        <div className="glass-panel p-4 rounded-xl border border-white/5 flex items-center gap-3">
          <div className="p-3 rounded-lg bg-accent-blue/10 text-accent-blue">
            <Heart className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-text-secondary font-bold uppercase tracking-wider">Avg Tenure</p>
            <h3 className="font-heading font-extrabold text-lg text-white">{currentKPI.avgTenure}</h3>
            <span className="text-[10px] text-text-secondary">Loyalty benchmark</span>
          </div>
        </div>

      </div>

      {/* Main Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Attrition by Sub-division (7 Cols) */}
        <div className="lg:col-span-8 glass-panel p-6 rounded-xl border border-white/5">
          <h5 className="font-heading text-sm font-bold text-white mb-6">Attrition Percentage by Sub-division / Department</h5>
          <div className="w-full h-[260px] text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attritionData[deptFilter]} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="dept" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" tickFormatter={(v) => `${v}%`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
                  formatter={(value) => [`${value}%`, 'Attrition Rate']}
                />
                <Bar dataKey="Rate" fill="#f43f5e" radius={[4, 4, 0, 0]}>
                  {attritionData[deptFilter].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#f43f5e' : '#fb7185'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Employee Tenure Split (4 Cols) */}
        <div className="lg:col-span-4 glass-panel p-6 rounded-xl border border-white/5 flex flex-col justify-between">
          <h5 className="font-heading text-sm font-bold text-white mb-4">Tenure Distribution Split</h5>
          
          <div className="w-full h-[180px] text-xs flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={tenureData[deptFilter]}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={65}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {tenureData[deptFilter].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  formatter={(value) => [`${value}%`, 'Share']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-2 mt-4">
            {tenureData[deptFilter].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[idx] }} />
                  <span className="text-text-secondary">{item.name}</span>
                </div>
                <span className="text-white font-bold">{item.value}%</span>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
};

export default HRDashboard;
