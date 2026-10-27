import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface HomeCTAProps {
  onExploreCourses: () => void;
  onJoinCodingVidya: () => void;
}

export const HomeCTA: React.FC<HomeCTAProps> = ({ onExploreCourses, onJoinCodingVidya }) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-tr from-blue-700 via-indigo-700 to-violet-800 text-white relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold border border-white/20">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Transform Your Career in 2026</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight text-balance">
          Your Coding Journey Starts Here.
        </h2>

        <p className="text-base sm:text-xl text-blue-100 max-w-2xl mx-auto font-medium leading-relaxed">
          Learn the skills. Build real projects. Get career ready.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onExploreCourses}
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-100 text-blue-700 rounded-xl font-extrabold text-sm shadow-xl transition-all cursor-pointer hover:scale-102 active:scale-98"
          >
            Explore Courses
          </button>

          <button
            onClick={onJoinCodingVidya}
            className="w-full sm:w-auto px-8 py-4 bg-blue-600/60 hover:bg-blue-600 border border-white/30 text-white rounded-xl font-extrabold text-sm shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-102 active:scale-98"
          >
            <span>Join Coding Vidya</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Benefits reminder */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-200">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-300" /> 100% Money-Back Guarantee
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-300" /> Lifetime Access & Updates
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-300" /> 1:1 Mentorship Included
          </span>
        </div>

      </div>
    </section>
  );
};
