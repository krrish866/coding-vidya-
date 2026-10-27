import React from 'react';
import { 
  Briefcase, 
  Users, 
  FolderGit2, 
  Video, 
  Compass, 
  Award, 
  Building2, 
  LineChart,
  Sparkles
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      id: 'curriculum',
      title: 'Industry-Focused Curriculum',
      description: 'Crafted with senior engineering leads from Tier-1 tech firms. Updated continuously to cover production trends like React 19, FastAPI, and Cloud Native setups.',
      icon: Briefcase,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'mentors',
      title: 'Top Tier-1 Expert Mentors',
      description: 'Learn directly from engineers at Google, Uber, Amazon, and Microsoft who review your pull requests and provide constructive architectural feedback.',
      icon: Users,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      id: 'projects',
      title: 'Practical Production Projects',
      description: 'Zero toy code or boilerplate clones. You build 3 to 6 production-grade full stack applications and deploy them to real cloud infrastructure.',
      icon: FolderGit2,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'classes',
      title: 'Live & Recorded Interactive Classes',
      description: 'Attend weekend live deep-dive workshops, engage in interactive Q&As, or review 4K recorded modules anytime with lifetime access.',
      icon: Video,
      color: 'text-rose-600',
      bgColor: 'bg-rose-50'
    },
    {
      id: 'guidance',
      title: 'Dedicated 1:1 Career Guidance',
      description: 'One-on-one resume teardowns, GitHub portfolio audit, LinkedIn profile optimization, and tailored career roadmap planning.',
      icon: Compass,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      id: 'certificates',
      title: 'Accredited Verifiable Certificates',
      description: 'Earn digital certificates authenticated with unique cryptographic verification codes shareable on LinkedIn and company portals.',
      icon: Award,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50'
    },
    {
      id: 'placement',
      title: 'Rigorous Placement Preparation',
      description: 'Mock technical coding interviews, system design whiteboarding sessions, and behavioral STAR rounds with hiring partner referrals.',
      icon: Building2,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50'
    },
    {
      id: 'tracking',
      title: 'Granular Progress Tracking',
      description: 'Monitor your weekly learning streaks, track module completion percentages, solve quiz challenges, and submit code assignments.',
      icon: LineChart,
      color: 'text-violet-600',
      bgColor: 'bg-violet-50'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Coding Vidya Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            Why Choose Coding Vidya?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            We bridge the gap between academic theory and practical software engineering. Here is why over 10,000 students trust us for their tech career transformations.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl border border-slate-200/80 bg-white hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center ${item.color} mb-4 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                  Standard in all programs
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
