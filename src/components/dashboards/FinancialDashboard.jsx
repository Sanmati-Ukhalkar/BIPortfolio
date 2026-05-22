import React, { useState } from 'react';
import { 
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
  BarChart, Bar, Cell, Legend, AreaChart, Area
} from 'recharts';
import { TrendingUp, CreditCard, PiggyBank, Briefcase, Filter } from 'lucide-react';

const FinancialDashboard = () => {
  const [fiscalYear, setFiscalYear] = useState('2026');

  const kpiData = {
    '2026': { revenue: '$5.2M', growth: '+15%', operatingCosts: '$3.8M', netProfit: '26.9%', cashFlow: '$1.4M' },
    '2025': { revenue: '$4.5M', growth: '+11%', operatingCosts: '$3.5M', netProfit: '22.2%', cashFlow: '$1.0M' }
  };

  const performanceData = {
    '2026': [
      { month: 'Jan', Actual: 720000, Budget: 700000 },
      { month: 'Feb', Actual: 810000, Budget: 720000 },
      { month: 'Mar', Actual: 850000, Budget: 750000 },
      { month: 'Apr', Actual: 920000, Budget: 800000 },
      { month: 'May', Actual: 990000, Budget: 850000 },
      { month: 'Jun', Actual: 1050000, Budget: 900000 },
    ],
    '2025': [
      { month: 'Jan', Actual: 600000, Budget: 620000 },
      { month: 'Feb', Actual: 640000, Budget: 630000 },
      { month: 'Mar', Actual: 710000, Budget: 650000 },
      { month: 'Apr', Actual: 780000, Budget: 700000 },
      { month: 'May', Actual: 880000, Budget: 750000 },
      { month: 'Jun', Actual: 890000, Budget: 800000 },
    ]
  };

  const costData = {
    '2026': [
      { category: 'Salaries', value: 1800000 },
      { category: 'SaaS & Cloud', value: 950000 },
      { category: 'R&D Operations', value: 650000 },
      { category: 'Marketing Hub', value: 400000 },
    ],
    '2025': [
      { category: 'Salaries', value: 1650000 },
      { category: 'SaaS & Cloud', value: 850000 },
      { category: 'R&D Operations', value: 600000 },
      { category: 'Marketing Hub', value: 400000 },
    ]
  };

  const COLORS = ['#fbbf24', '#f43f5e', '#38bdf8', '#14b8a6'];

  const currentKPI = kpiData[fiscalYear];

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Header and FY filter */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
        <div>
          <h4 className="font-heading text-lg font-bold text-white">Financial Yield & EBITDA KPI Dashboard</h4>
          <p className="text-xs text-text-secondary">Explore cash operations, burn ratios, and actual vs budgeted performance.</p>
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-amber-500" />
          <span className="text-xs text-text-secondary font-medium mr-2">Fiscal Year:</span>
          <div className="flex bg-bg-dark border border-white/10 rounded-lg p-0.5">
            <button 
              onClick={() => setFiscalYear('2026')}
              className={`px-3 py-1 text-xs rounded font-medium transition-all ${
                fiscalYear === '2026' ? 'bg-amber-500 text-bg-dark' : 'text-text-secondary hover:text-white'
              }`}
            >
              FY 2026
            </button>
            <button 
              onClick={() => setFiscalYear('2025')}
              className={`px-3 py-1 text-xs rounded font-medium transition-all ${
                fiscalYear === '2025' ? 'bg-amber-500 text-bg-dark' : 'text-text-secondary hover:text-white'
              }`}
            >
              FY 2025
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* KPI 1 */}
        <div className="glass-panel p-4 rounded-xl border border-white/5 flex items-center gap-3">
          <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-text-secondary font-bold uppercase tracking-wider">Operating Revenue</p>
            <h3 className="font-heading font-extrabold text-lg text-white">{currentKPI.revenue}</h3>
            <span className="text-[10px] text-accent-teal font-semibold">{currentKPI.growth} Growth</span>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="glass-panel p-4 rounded-xl border border-white/5 flex items-center gap-3">
          <div className="p-3 rounded-lg bg-red-500/10 text-red-400">
            <CreditCard className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-text-secondary font-bold uppercase tracking-wider">Operating Costs</p>
            <h3 className="font-heading font-extrabold text-lg text-white">{currentKPI.operatingCosts}</h3>
            <span className="text-[10px] text-text-secondary">EBITDA Deductions</span>
          </div>
        </div>

        {/* KPI 3 */}
        <div className="glass-panel p-4 rounded-xl border border-white/5 flex items-center gap-3">
          <div className="p-3 rounded-lg bg-accent-teal/10 text-accent-teal">
            <PiggyBank className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-text-secondary font-bold uppercase tracking-wider">Net Profit Margin</p>
            <h3 className="font-heading font-extrabold text-lg text-white">{currentKPI.netProfit}</h3>
            <span className="text-[10px] text-accent-teal font-semibold">Post-Tax yield</span>
          </div>
        </div>

        {/* KPI 4 */}
        <div className="glass-panel p-4 rounded-xl border border-white/5 flex items-center gap-3">
          <div className="p-3 rounded-lg bg-accent-blue/10 text-accent-blue">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-text-secondary font-bold uppercase tracking-wider">Free Cash Flow</p>
            <h3 className="font-heading font-extrabold text-lg text-white">{currentKPI.cashFlow}</h3>
            <span className="text-[10px] text-accent-teal font-semibold">Highly liquid</span>
          </div>
        </div>

      </div>

      {/* Main Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Actual vs Budget Line Chart (7 Cols) */}
        <div className="lg:col-span-7 glass-panel p-6 rounded-xl border border-white/5">
          <h5 className="font-heading text-sm font-bold text-white mb-6">Actual Performance vs Budget Guidelines</h5>
          <div className="w-full h-[260px] text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData[fiscalYear]} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" tickFormatter={(v) => `$${v/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
                  formatter={(value) => [`$${value.toLocaleString()}`, '']}
                />
                <Line type="monotone" dataKey="Actual" stroke="#fbbf24" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="Budget" stroke="#6366f1" strokeDasharray="5 5" strokeWidth={2} dot={{ r: 0 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Operating Costs Breakdown (5 Cols) */}
        <div className="lg:col-span-5 glass-panel p-6 rounded-xl border border-white/5 flex flex-col justify-between">
          <h5 className="font-heading text-sm font-bold text-white mb-6">Operating Capital Cost Distribution</h5>
          
          <div className="w-full h-[180px] text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={costData[fiscalYear]} layout="vertical" margin={{ top: 0, right: 5, left: 15, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={false} />
                <XAxis type="number" stroke="#94a3b8" tickFormatter={(v) => `$${v/1000}k`} />
                <YAxis dataKey="category" type="category" stroke="#94a3b8" width={80} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Spent']}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {costData[fiscalYear].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-between items-center text-xs mt-4 pt-3 border-t border-white/5">
            <span className="text-text-secondary">EBITDA Efficiency Target:</span>
            <span className="text-accent-teal font-extrabold">+18.4%</span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default FinancialDashboard;
