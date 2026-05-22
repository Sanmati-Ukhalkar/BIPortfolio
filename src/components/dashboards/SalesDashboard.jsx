import React, { useState } from 'react';
import { 
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, 
  BarChart, Bar, PieChart, Pie, Cell, Legend 
} from 'recharts';
import { DollarSign, ShoppingCart, Percent, TrendingUp, Filter } from 'lucide-react';

const SalesDashboard = () => {
  const [regionFilter, setRegionFilter] = useState('All');

  // Mock sales data based on region filter
  const kpiData = {
    All: { revenue: '$2,450,800', growth: '+12.4%', orders: '12,450', convRate: '3.2%', aov: '$196.85' },
    US: { revenue: '$1,320,400', growth: '+14.1%', orders: '6,680', convRate: '3.5%', aov: '$197.66' },
    Europe: { revenue: '$740,200', growth: '+9.8%', orders: '3,810', convRate: '2.9%', aov: '$194.27' },
    Asia: { revenue: '$390,200', growth: '+11.5%', orders: '1,960', convRate: '3.1%', aov: '$199.08' }
  };

  const trendData = {
    All: [
      { name: 'Jan', Sales: 240000, Profit: 98000 },
      { name: 'Feb', Sales: 310000, Profit: 125000 },
      { name: 'Mar', Sales: 290000, Profit: 110000 },
      { name: 'Apr', Sales: 420000, Profit: 180000 },
      { name: 'May', Sales: 550000, Profit: 230000 },
      { name: 'Jun', Sales: 640800, Profit: 285000 },
    ],
    US: [
      { name: 'Jan', Sales: 130000, Profit: 55000 },
      { name: 'Feb', Sales: 170000, Profit: 72000 },
      { name: 'Mar', Sales: 155000, Profit: 60000 },
      { name: 'Apr', Sales: 220000, Profit: 98000 },
      { name: 'May', Sales: 300000, Profit: 130000 },
      { name: 'Jun', Sales: 345400, Profit: 154000 },
    ],
    Europe: [
      { name: 'Jan', Sales: 70000, Profit: 27000 },
      { name: 'Feb', Sales: 95000, Profit: 38000 },
      { name: 'Mar', Sales: 90000, Profit: 34000 },
      { name: 'Apr', Sales: 130000, Profit: 52000 },
      { name: 'May', Sales: 165000, Profit: 68000 },
      { name: 'Jun', Sales: 190200, Profit: 81000 },
    ],
    Asia: [
      { name: 'Jan', Sales: 40000, Profit: 16000 },
      { name: 'Feb', Sales: 45000, Profit: 15000 },
      { name: 'Mar', Sales: 45000, Profit: 16000 },
      { name: 'Apr', Sales: 70000, Profit: 30000 },
      { name: 'May', Sales: 85000, Profit: 32000 },
      { name: 'Jun', Sales: 105200, Profit: 50000 },
    ]
  };

  const categoryData = {
    All: [
      { name: 'Electronics', value: 45 },
      { name: 'Apparel', value: 25 },
      { name: 'Home Living', value: 18 },
      { name: 'Fitness & Sports', value: 12 },
    ],
    US: [
      { name: 'Electronics', value: 48 },
      { name: 'Apparel', value: 22 },
      { name: 'Home Living', value: 16 },
      { name: 'Fitness & Sports', value: 14 },
    ],
    Europe: [
      { name: 'Electronics', value: 42 },
      { name: 'Apparel', value: 28 },
      { name: 'Home Living', value: 20 },
      { name: 'Fitness & Sports', value: 10 },
    ],
    Asia: [
      { name: 'Electronics', value: 40 },
      { name: 'Apparel', value: 30 },
      { name: 'Home Living', value: 22 },
      { name: 'Fitness & Sports', value: 8 },
    ]
  };

  const COLORS = ['#38bdf8', '#14b8a6', '#6366f1', '#fbbf24'];

  const currentKPI = kpiData[regionFilter];

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Filter and Dashboard Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
        <div>
          <h4 className="font-heading text-lg font-bold text-white">Sales & Product Analytics</h4>
          <p className="text-xs text-text-secondary">Explore sales execution metrics with dynamic regional breakdowns.</p>
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-accent-blue" />
          <span className="text-xs text-text-secondary font-medium mr-2">Region:</span>
          <select 
            value={regionFilter} 
            onChange={(e) => setRegionFilter(e.target.value)}
            className="bg-bg-dark border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-accent-blue"
          >
            <option value="All">Global Sales</option>
            <option value="US">North America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
          </select>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* KPI 1 */}
        <div className="glass-panel p-4 rounded-xl border border-white/5 flex items-center gap-3">
          <div className="p-3 rounded-lg bg-accent-blue/10 text-accent-blue">
            <DollarSign className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-text-secondary font-bold uppercase tracking-wider">Gross Revenue</p>
            <h3 className="font-heading font-extrabold text-lg text-white">{currentKPI.revenue}</h3>
            <span className="text-[10px] text-accent-teal font-semibold">{currentKPI.growth} MoM</span>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="glass-panel p-4 rounded-xl border border-white/5 flex items-center gap-3">
          <div className="p-3 rounded-lg bg-accent-teal/10 text-accent-teal">
            <ShoppingCart className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-text-secondary font-bold uppercase tracking-wider">Total Orders</p>
            <h3 className="font-heading font-extrabold text-lg text-white">{currentKPI.orders}</h3>
            <span className="text-[10px] text-text-secondary">Processed online</span>
          </div>
        </div>

        {/* KPI 3 */}
        <div className="glass-panel p-4 rounded-xl border border-white/5 flex items-center gap-3">
          <div className="p-3 rounded-lg bg-accent-indigo/10 text-accent-indigo">
            <Percent className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-text-secondary font-bold uppercase tracking-wider">Conversion Rate</p>
            <h3 className="font-heading font-extrabold text-lg text-white">{currentKPI.convRate}</h3>
            <span className="text-[10px] text-accent-blue font-semibold">Web checkout</span>
          </div>
        </div>

        {/* KPI 4 */}
        <div className="glass-panel p-4 rounded-xl border border-white/5 flex items-center gap-3">
          <div className="p-3 rounded-lg bg-yellow-500/10 text-yellow-500">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-text-secondary font-bold uppercase tracking-wider">Avg Order Value</p>
            <h3 className="font-heading font-extrabold text-lg text-white">{currentKPI.aov}</h3>
            <span className="text-[10px] text-text-secondary">Gross basket size</span>
          </div>
        </div>

      </div>

      {/* Main Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Sales & Profit Area Chart (7 Cols) */}
        <div className="lg:col-span-8 glass-panel p-6 rounded-xl border border-white/5">
          <h5 className="font-heading text-sm font-bold text-white mb-6">Revenue & Profit Performance Trend</h5>
          <div className="w-full h-[260px] text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData[regionFilter]} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#38bdf8" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="profitGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" tickFormatter={(v) => `$${v/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
                  formatter={(value) => [`$${value.toLocaleString()}`, '']}
                />
                <Area type="monotone" dataKey="Sales" stroke="#38bdf8" fillOpacity={1} fill="url(#salesGrad)" strokeWidth={2} />
                <Area type="monotone" dataKey="Profit" stroke="#14b8a6" fillOpacity={1} fill="url(#profitGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Product Category breakdown (4 Cols) */}
        <div className="lg:col-span-4 glass-panel p-6 rounded-xl border border-white/5 flex flex-col justify-between">
          <h5 className="font-heading text-sm font-bold text-white mb-4">Category Distribution (%)</h5>
          
          <div className="w-full h-[180px] text-xs flex justify-center items-center relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData[regionFilter]}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {categoryData[regionFilter].map((entry, index) => (
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
            {categoryData[regionFilter].map((item, idx) => (
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

export default SalesDashboard;
