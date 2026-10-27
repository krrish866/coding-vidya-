import React from 'react';
import { 
  Target, 
  Eye, 
  Lightbulb, 
  HeartHandshake, 
  Users, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  Building2,
  GraduationCap,
  ArrowRight
} from 'lucide-react';
import { MENTOR_SHOWCASE_IMAGE, MENTORS } from '../../data/mockData';

interface AboutPageProps {
  onJoinClick: () => void;
  onExploreCourses: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onJoinClick, onExploreCourses }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-800 rounded-3xl p-8 sm:p-14 text-white shadow-xl relative overflow-hidden text-center max-w-5xl mx-auto">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>About Coding Vidya</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Pioneering High-Impact Tech Education
            </h1>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-light">
              We empower aspiring software engineers, students, and working professionals to build production-grade software and break into elite technology firms.
            </p>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Target className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">Our Core Mission</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
              “Our mission is to make quality coding education accessible, practical, and career-focused for every student.”
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We eliminate traditional textbook rote memorization. We believe that true technical mastery comes from building real applications, resolving messy runtime exceptions, and receiving constructive pull-request reviews from seasoned industry veterans.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Eye className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 block">Our Vision</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
              Building India's Most Trusted Engineering Academy
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We envision a future where geographical location, college tier, or financial background never limits a passionate student from becoming a world-class software engineer. Every graduate from Coding Vidya emerges with proven competence and unshakeable confidence.
            </p>
          </div>

        </div>

        {/* Why Coding Vidya Was Created */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider">
                <Lightbulb className="w-4 h-4" />
                <span>The Origin Story</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Why Coding Vidya Was Created
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                In 2023, while conducting hundreds of technical interviews at top tier-1 tech companies, our founding team observed an alarming pattern: thousands of smart, hardworking engineering college graduates were struggling in coding rounds—not due to lack of intelligence, but because college curriculums were 10 years outdated.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Students were being taught deprecated syntaxes on blackboards without ever building a single deployed full stack product, understanding Git collaboration, or learning high-scale distributed systems.
              </p>
              <p className="text-xs sm:text-sm text-slate-900 font-semibold leading-relaxed">
                Coding Vidya was born to fix this broken pipeline: pairing students directly with senior FAANG engineers, replacing static exams with production capstone projects, and providing lifelong mentorship.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="aspect-4/3 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <img
                  src={MENTOR_SHOWCASE_IMAGE}
                  alt="Coding Vidya Founder"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 text-center">
                <p className="text-xs font-bold text-slate-900">Dr. Neha Verma & Rohan Mehta</p>
                <p className="text-[11px] text-slate-500">Co-Founders & Academic Directors, Coding Vidya</p>
              </div>
            </div>

          </div>
        </div>

        {/* Learning Philosophy Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Pedagogical Principles</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Our Learning Philosophy
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Four fundamental pillars that power every single module at Coding Vidya.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900">Code-First Intuition</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We explain mental models with live code and visual memory diagrams before diving into formal definitions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900">Production Standards</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We write clean TypeScript, enforce unit testing, write modular architectures, and deploy with CI/CD.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900">No Passive Watching</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every lecture comes with hands-on challenges you must type and pass in our sandbox before moving forward.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h3 className="text-base font-bold text-slate-900">Accountability & Care</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Teaching assistants and mentors track your weekly streak. If you get stuck on a bug, we unblock you within minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership & Faculty Team */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Our Faculty</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Meet the Leadership & Mentor Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MENTORS.slice(0, 3).map((mentor) => (
              <div key={mentor.id} className="p-6 bg-white rounded-2xl border border-slate-200 flex items-center gap-4">
                <img
                  src={mentor.avatar}
                  alt={mentor.name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-2xl object-cover ring-2 ring-slate-100"
                />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{mentor.name}</h3>
                  <p className="text-xs text-blue-600 font-semibold">{mentor.title}</p>
                  <p className="text-[11px] text-slate-500">{mentor.company}</p>
                  <span className="text-[10px] text-slate-400 font-mono mt-1 block">
                    {mentor.experienceYears} Years Exp
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <span className="text-3xl sm:text-4xl font-black text-blue-400 font-mono-numbers">10,000+</span>
              <p className="text-xs text-slate-300 mt-1 font-medium">Students Upskilled</p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono-numbers">150+</span>
              <p className="text-xs text-slate-300 mt-1 font-medium">Hiring Tech Partners</p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-black text-amber-400 font-mono-numbers">94%</span>
              <p className="text-xs text-slate-300 mt-1 font-medium">Placement Placement Rate</p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-black text-purple-400 font-mono-numbers">4.92 / 5</span>
              <p className="text-xs text-slate-300 mt-1 font-medium">Average Student Rating</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4 pt-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Join thousands of passionate engineers and start building with Coding Vidya today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onExploreCourses}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 cursor-pointer"
            >
              Explore Course Catalog
            </button>
            <button
              onClick={onJoinClick}
              className="px-6 py-3 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 rounded-xl text-xs font-bold shadow-2xs cursor-pointer"
            >
              Apply as Student
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
