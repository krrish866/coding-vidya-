import React, { useState, useMemo } from 'react';
import { MENTORS } from '../../data/mockData';
import { Mentor } from '../../types';
import { 
  Star, 
  Briefcase, 
  Users, 
  BookOpen, 
  Calendar, 
  Check, 
  Sparkles, 
  X,
  MessageSquare,
  Award,
  ArrowRight
} from 'lucide-react';

export const MentorsPage: React.FC = () => {
  const [selectedExpertise, setSelectedExpertise] = useState<string>('All');
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const filters = ['All', 'React', 'Python', 'Deep Learning', 'DSA', 'System Design', 'Java', 'Cloud Architecture'];

  const filteredMentors = useMemo(() => {
    if (selectedExpertise === 'All') return MENTORS;
    return MENTORS.filter((m) =>
      m.expertise.some((e) => e.toLowerCase().includes(selectedExpertise.toLowerCase()))
    );
  }, [selectedExpertise]);

  const handleBookSession = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedMentor(null);
      alert('Your 1:1 mentorship session request has been confirmed! An invitation has been sent to your email.');
    }, 1000);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Banner Header */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>World-Class Tech Faculty</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Learn From Expert Mentors
            </h1>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-light">
              Our instructors aren't theoretical lecturers. They are active engineering leads and principal architects at Google, Uber, Amazon, and Microsoft who review your code and guide your career.
            </p>
          </div>
        </div>

        {/* Expertise Filter Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-xs font-bold text-slate-500 mr-2 shrink-0">Filter Expertise:</span>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedExpertise(filter)}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                selectedExpertise === filter
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Mentors Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <div className="p-6">
                
                {/* Header with Avatar and Rating */}
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-2xl object-cover ring-2 ring-blue-100 shadow-md group-hover:scale-105 transition-transform"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 truncate">
                      {mentor.name}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 truncate">
                      {mentor.title}
                    </p>
                    <p className="text-xs text-slate-500 truncate">
                      {mentor.company}
                    </p>

                    <div className="flex items-center gap-1 mt-1 text-xs font-bold text-slate-800 font-mono-numbers">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{mentor.rating.toFixed(2)}</span>
                      <span className="text-[11px] text-slate-400 font-normal">
                        ({mentor.studentsCount}+ students)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {mentor.bio}
                </p>

                {/* Expertise Badges */}
                <div className="space-y-1.5 mb-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Domain Expertise
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {mentor.expertise.map((exp) => (
                      <span
                        key={exp}
                        className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[11px] font-semibold"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Courses Taught */}
                <div className="space-y-1 pt-3 border-t border-slate-100 text-xs text-slate-600">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Courses Taught:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {mentor.coursesTaught.map((c, i) => (
                      <li key={i} className="flex items-center gap-1.5 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        <span className="truncate font-medium">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="p-4 bg-slate-50/70 border-t border-slate-100 grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedMentor(mentor)}
                  className="py-2 px-3 text-xs font-bold text-slate-700 hover:text-blue-600 bg-white border border-slate-200 hover:border-blue-200 rounded-xl transition-colors cursor-pointer text-center"
                >
                  View Profile
                </button>

                <button
                  onClick={() => setSelectedMentor(mentor)}
                  className="py-2 px-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all cursor-pointer text-center shadow-2xs"
                >
                  Book 1:1 Mentorship
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Mentor Profile & Booking Modal */}
      {selectedMentor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-150">
          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
              <div className="flex items-center gap-3">
                <img
                  src={selectedMentor.avatar}
                  alt={selectedMentor.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-xl object-cover ring-2 ring-blue-200"
                />
                <div>
                  <h3 className="text-base font-bold text-slate-900">{selectedMentor.name}</h3>
                  <p className="text-xs text-blue-600 font-semibold">{selectedMentor.title}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedMentor(null)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-full"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-5">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  About Mentor
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedMentor.bio}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block font-medium">Industry Experience</span>
                  <span className="text-sm font-bold text-slate-900 font-mono-numbers">{selectedMentor.experienceYears} Years</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-400 block font-medium">Students Mentored</span>
                  <span className="text-sm font-bold text-slate-900 font-mono-numbers">{selectedMentor.studentsCount}+ Mentees</span>
                </div>
              </div>

              {/* 1:1 Booking Form */}
              <form onSubmit={handleBookSession} className="space-y-3 pt-3 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span>Schedule 1:1 Career / Project Consultation</span>
                </h4>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Topic</label>
                  <select className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50">
                    <option>Full Stack Architecture & Code Review</option>
                    <option>System Design Interview Preparation</option>
                    <option>Resume & GitHub Portfolio Teardown</option>
                    <option>Data Structures & Algorithms Problem Solving</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Select Date</label>
                    <input type="date" defaultValue="2026-10-10" className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Select Time Slot</label>
                    <select className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50">
                      <option>05:00 PM - 05:45 PM IST</option>
                      <option>07:00 PM - 07:45 PM IST</option>
                      <option>08:30 PM - 09:15 PM IST</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm 1:1 Mentorship Session</span>
                </button>
              </form>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
