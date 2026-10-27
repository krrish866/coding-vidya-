import React, { useState } from 'react';
import { STUDENT_REVIEWS } from '../../data/mockData';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Sparkles,
  Building,
  CheckCircle
} from 'lucide-react';

export const ReviewsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? STUDENT_REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === STUDENT_REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const current = STUDENT_REVIEWS[currentIndex];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Student Success</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Student Reviews & Placement Stories
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Hear directly from graduates who leveled up their skills and landed high-growth engineering roles.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={prevReview}
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextReview}
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Hero Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-12 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Student Profile & Outcome */}
            <div className="lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-8">
              <img
                src={current.avatar}
                alt={current.studentName}
                referrerPolicy="no-referrer"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover ring-4 ring-blue-50 shadow-md mb-4"
              />

              <h3 className="text-xl font-bold text-slate-900">
                {current.studentName}
              </h3>

              <div className="flex items-center gap-1.5 text-xs text-blue-600 font-bold mt-1">
                <Building className="w-3.5 h-3.5" />
                <span>{current.role} at {current.company}</span>
              </div>

              <div className="mt-3 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold inline-flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Package: {current.placedPackage}</span>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 w-full text-xs text-slate-500">
                <span className="block text-slate-400">Completed Program:</span>
                <span className="font-semibold text-slate-700">{current.course}</span>
              </div>
            </div>

            {/* Right: Review Quote & Stars */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
                <span className="text-xs font-bold text-slate-700 ml-2 font-mono-numbers">
                  5.0 / 5.0
                </span>
              </div>

              <Quote className="w-10 h-10 text-blue-100 stroke-[1.5]" />

              <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed italic">
                “{current.review}”
              </p>

              {/* Indicator dots */}
              <div className="flex items-center gap-2 pt-4">
                {STUDENT_REVIEWS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentIndex === idx ? 'w-8 bg-blue-600' : 'w-2 bg-slate-200'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Small Responsive Grid of Other Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {STUDENT_REVIEWS.filter((_, idx) => idx !== currentIndex).slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              onClick={() => setCurrentIndex(STUDENT_REVIEWS.findIndex(r => r.id === rev.id))}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={rev.avatar}
                    alt={rev.studentName}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{rev.studentName}</h4>
                    <p className="text-[11px] text-slate-500 truncate">{rev.role} @ {rev.company}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  "{rev.review}"
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="font-semibold text-emerald-600 font-mono-numbers">{rev.placedPackage}</span>
                <span className="text-slate-400 font-medium">Click to expand</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
