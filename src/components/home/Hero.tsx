import React from 'react';
import { HERO_IMAGE } from '../../data/mockData';
import { ArrowRight, Sparkles, CheckCircle2, Play, Terminal, Users, BookOpen } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface HeroProps {
  onExploreCourses: () => void;
  onStartLearning: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCourses, onStartLearning }) => {
  const { openAuthModal } = useAuth();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50 pt-12 pb-16 lg:pt-18 lg:pb-24 border-b border-slate-200/60">
      
      {/* Subtle Background Geometry */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-blue-400/10 via-indigo-400/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subheading, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust Kicker / Subtitle (Clean unboxed text with dot separators) */}
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 bg-blue-100/60 px-3.5 py-1.5 rounded-full border border-blue-200/80">
              <Sparkles className="w-3.5 h-3.5" />
              <span>India's Premier Career-Focused Coding Academy</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-600 font-medium">Batch 2026 Admissions Open</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.12] text-balance">
              Learn Coding.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                Build Skills.
              </span>{' '}
              Start Your Career.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Master programming and industry-ready skills with structured courses, expert mentors, practical projects, and career roadmaps.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-700 font-semibold max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Structured Roadmaps</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Live Mentor 1:1s</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Production Projects</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <button
                onClick={onExploreCourses}
                className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white rounded-xl font-bold text-sm shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onStartLearning}
                className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 rounded-xl font-bold text-sm shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer hover:border-slate-400"
              >
                <Play className="w-4 h-4 text-blue-600 fill-blue-600" />
                <span>Start Learning</span>
              </button>
            </div>

            {/* Live Social Proof Adjacency */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-500">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Student" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Student" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Student" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" alt="Student" />
              </div>
              <div>
                <span className="font-bold text-slate-900">4.9/5 Rating</span> from 10,000+ engineers placed at Google, Amazon, Razorpay & startups.
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-1000 -z-10" />
              
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-900 aspect-16/10">
                <img
                  src={HERO_IMAGE}
                  alt="Coding Vidya Educational Illustration"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('coding_vidya_hero')) {
                      target.src = '/assets/images/coding_vidya_hero_1791009108075.jpg';
                    }
                  }}
                />

                {/* Live Floating Interactive Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md rounded-xl p-3.5 border border-slate-700/80 text-white flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shrink-0">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-100">Live Interactive Coding Labs</p>
                      <p className="text-[11px] text-slate-400">Browser IDE · Real-time code execution</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-700">
                    ● ACTIVE
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
