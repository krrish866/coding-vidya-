import React from 'react';
import { 
  BookOpen, 
  Code, 
  Rocket, 
  Users, 
  Target, 
  Briefcase, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const LearningProcess: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Learn',
      description: 'Master core concepts through structured, modular video lectures and interactive visual breakdowns.',
      icon: BookOpen,
      color: 'border-blue-600 text-blue-600 bg-blue-50'
    },
    {
      step: '02',
      title: 'Practice',
      description: 'Solve interactive coding challenges and quizzes in our browser-based IDE with automated tests.',
      icon: Code,
      color: 'border-indigo-600 text-indigo-600 bg-indigo-50'
    },
    {
      step: '03',
      title: 'Build',
      description: 'Engineer full-scale production applications using industry-standard tools, Git, and modern frameworks.',
      icon: Rocket,
      color: 'border-purple-600 text-purple-600 bg-purple-50'
    },
    {
      step: '04',
      title: 'Get Mentored',
      description: 'Receive personalized code reviews, architectural feedback, and 1:1 guidance from FAANG mentors.',
      icon: Users,
      color: 'border-emerald-600 text-emerald-600 bg-emerald-50'
    },
    {
      step: '05',
      title: 'Prepare',
      description: 'Practice high-pressure technical mock interviews, data structure patterns, and system design rounds.',
      icon: Target,
      color: 'border-amber-600 text-amber-600 bg-amber-50'
    },
    {
      step: '06',
      title: 'Get Career Ready',
      description: 'Polish your resume, optimize your GitHub, and get referred to our 150+ hiring partner companies.',
      icon: Briefcase,
      color: 'border-cyan-600 text-cyan-600 bg-cyan-50'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-blue-600/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Pedagogy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            About Our Courses
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed font-light">
            “Coding Vidya courses are designed to take students from fundamentals to real-world development. Each course combines theory, practical coding exercises, projects, quizzes, and career preparation.”
          </p>
        </div>

        {/* 6 Step Interactive Process Flow */}
        <div className="relative">
          
          {/* Connecting Line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-8 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.step}
                  className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 hover:border-blue-500/50 hover:bg-slate-900 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Step badge & icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5 stroke-[2.2]" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-500">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors flex items-center justify-between">
                      <span>{item.title}</span>
                      {idx < steps.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden lg:block group-hover:translate-x-1 transition-transform" />
                      )}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-slate-800/80 text-[10px] uppercase font-bold text-slate-500">
                    Phase {idx + 1}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Process Highlights Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/80 flex flex-wrap items-center justify-around gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>100% Practical Hands-on Labs</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Automated Code Evaluation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Lifetime Curriculum Updates</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Industry Recognized Credentials</span>
          </div>
        </div>

      </div>
    </section>
  );
};
