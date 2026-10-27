import React from 'react';
import { Users, BookOpen, Layers, Award, TrendingUp, CheckCircle } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      id: 'students',
      value: '10,000+',
      label: 'Students Enrolled',
      sublabel: 'Across 45+ colleges & companies',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'courses',
      value: '20+',
      label: 'Structured Courses',
      sublabel: 'From Beginner to Advanced FAANG',
      icon: BookOpen,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      id: 'projects',
      value: '50+',
      label: 'Real-World Projects',
      sublabel: 'Production-ready portfolios',
      icon: Layers,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'mentors',
      value: '25+',
      label: 'Expert Mentors',
      sublabel: 'Ex-Google, Microsoft, Amazon',
      icon: Award,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    }
  ];

  return (
    <section className="bg-white py-12 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl ${item.bgColor} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <span className="text-3xl font-extrabold text-slate-900 tracking-tight font-mono-numbers">
                    {item.value}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-800 leading-tight">
                  {item.label}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-snug">
                  {item.sublabel}
                </p>
              </div>
            );
          })}
        </div>

        {/* Claim-to-Proof Adjacency Ribbon */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900">Highest Placement Package:</span>
            <span className="text-blue-600 font-extrabold font-mono-numbers">₹38 LPA</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="font-bold text-slate-900">Average Salary Hike:</span>
            <span className="text-emerald-600 font-extrabold font-mono-numbers">+135%</span>
          </div>

          <div className="flex items-center gap-2 text-slate-500">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Audited placement outcomes verified by independent educational review</span>
          </div>
        </div>

      </div>
    </section>
  );
};
