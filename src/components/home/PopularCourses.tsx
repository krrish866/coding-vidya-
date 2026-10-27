import React, { useState } from 'react';
import { useCourses } from '../../context/CourseContext';
import { Course } from '../../types';
import { 
  Star, 
  Clock, 
  BookOpen, 
  ArrowRight, 
  Sparkles, 
  Check, 
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';

interface PopularCoursesProps {
  onViewAllCourses: () => void;
}

export const PopularCourses: React.FC<PopularCoursesProps> = ({ onViewAllCourses }) => {
  const { courses, openCourseDetails, enrollCourse, isEnrolled } = useCourses();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Web Development', 'Programming', 'Data Science', 'DSA'];

  const filteredCourses = selectedCategory === 'All'
    ? courses.slice(0, 6)
    : courses.filter(c => c.category.includes(selectedCategory)).slice(0, 6);

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Industry Programs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Popular Courses
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Master hands-on programming with structured modules, real-world capstone projects, and direct mentor feedback.
            </p>
          </div>

          {/* Interactive Filter Tabs (functional segmented controls per anti-slop rules) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-2xs self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCourses.map((course) => {
            const enrolled = isEnrolled(course.id);
            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-200 flex flex-col group"
              >
                {/* Thumbnail Header */}
                <div className="relative aspect-16/9 bg-slate-900 overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    loading="eager"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (course.id === 'course-fullstack') {
                        target.src = '/assets/images/course_fullstack_1791009120393.jpg';
                      } else if (course.id === 'course-datascience') {
                        target.src = '/assets/images/course_datascience_1791009133875.jpg';
                      } else if (course.id === 'course-dsa') {
                        target.src = '/assets/images/course_dsa_bootcamp_1791096191028.jpg';
                      }
                    }}
                  />
                  
                  {/* Badge */}
                  {course.badge && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold text-white bg-blue-600/90 backdrop-blur-xs shadow-xs">
                      {course.badge}
                    </div>
                  )}

                  {/* Level text */}
                  <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded text-[11px] font-semibold text-slate-100 bg-slate-950/70 backdrop-blur-xs">
                    {course.difficulty} Level
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Quiet Metadata with typographic separators per constitution */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-2.5">
                      <span>{course.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{course.duration}</span>
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                        <span>{course.lessonsCount} lessons</span>
                      </span>
                    </div>

                    <h3 
                      onClick={() => openCourseDetails(course)}
                      className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 cursor-pointer leading-snug"
                    >
                      {course.title}
                    </h3>

                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {course.shortDescription}
                    </p>
                  </div>

                  {/* Footer & Actions */}
                  <div className="pt-4 mt-4 border-t border-slate-100 space-y-3">
                    
                    {/* Instructor & Rating Row */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <img
                          src={course.instructor.avatar}
                          alt={course.instructor.name}
                          referrerPolicy="no-referrer"
                          className="w-6 h-6 rounded-full object-cover ring-1 ring-slate-200"
                        />
                        <span className="font-semibold text-slate-700 truncate max-w-[120px]">
                          {course.instructor.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 font-bold text-slate-900 font-mono-numbers">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span>{course.rating.toFixed(1)}</span>
                        <span className="text-[11px] text-slate-400 font-normal">
                          ({course.reviewsCount})
                        </span>
                      </div>
                    </div>

                    {/* Price and Action Buttons */}
                    <div className="flex items-center justify-between pt-1">
                      <div>
                        {course.isFree ? (
                          <span className="text-base font-extrabold text-emerald-600">
                            Free
                          </span>
                        ) : (
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-lg font-extrabold text-slate-900 font-mono-numbers">
                              ₹{course.price.toLocaleString()}
                            </span>
                            {course.originalPrice && (
                              <span className="text-xs text-slate-400 line-through font-mono-numbers">
                                ₹{course.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openCourseDetails(course)}
                          className="px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-lg transition-colors cursor-pointer"
                        >
                          View Course
                        </button>

                        <button
                          onClick={() => {
                            enrollCourse(course.id);
                            openCourseDetails(course);
                          }}
                          className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                            enrolled
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : 'bg-blue-600 hover:bg-blue-700 text-white shadow-2xs'
                          }`}
                        >
                          {enrolled ? (
                            <>
                              <Check className="w-3 h-3" />
                              <span>Enrolled</span>
                            </>
                          ) : (
                            <span>Enroll Now</span>
                          )}
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Courses CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onViewAllCourses}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 rounded-xl font-bold text-sm shadow-xs hover:border-slate-400 transition-all cursor-pointer"
          >
            <span>View All 12+ Available Courses</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
