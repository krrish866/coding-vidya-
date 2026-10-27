import React, { useState, useMemo } from 'react';
import { useCourses } from '../../context/CourseContext';
import { Course, CourseCategory, CourseDifficulty } from '../../types';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  BookOpen, 
  Check, 
  Sparkles, 
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';

export const CoursesPage: React.FC = () => {
  const { courses, openCourseDetails, enrollCourse, isEnrolled } = useCourses();

  // Filter and Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'popular' | 'rating' | 'lessons' | 'price-low' | 'price-high'>('popular');

  const categories: (CourseCategory | 'All')[] = [
    'All',
    'Programming',
    'Web Development',
    'Data Science',
    'DSA',
    'Database',
    'Interview Preparation',
    'AI & Machine Learning'
  ];

  const difficulties: (CourseDifficulty | 'All')[] = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  // Filtered & Sorted Courses
  const filteredCourses = useMemo(() => {
    return courses
      .filter((course) => {
        // Search filter
        const matchesSearch =
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
          course.instructor.name.toLowerCase().includes(searchQuery.toLowerCase());

        // Category filter
        const matchesCategory =
          selectedCategory === 'All' ||
          course.category === selectedCategory ||
          (selectedCategory === 'AI & Machine Learning' && (course.category === 'Data Science' || course.title.includes('Machine Learning')));

        // Difficulty filter
        const matchesDifficulty =
          selectedDifficulty === 'All' || course.difficulty === selectedDifficulty;

        return matchesSearch && matchesCategory && matchesDifficulty;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'lessons') return b.lessonsCount - a.lessonsCount;
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        return b.reviewsCount - a.reviewsCount; // default popular
      });
  }, [courses, searchQuery, selectedCategory, selectedDifficulty, sortBy]);

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Banner Header */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Comprehensive Course Catalog</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Explore Our Courses
            </h1>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-light">
              Structured, career-oriented courses covering Web Development, Python, Java, DSA, Cloud, and AI. Built by industry veterans with hands-on labs and placement prep.
            </p>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs space-y-4">
          
          {/* Search bar & Sort Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, skills, technologies, mentors..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all bg-slate-50/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Sort by:</span>
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 text-xs font-bold rounded-xl border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="lessons">Most Lessons</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

          </div>

          {/* Category Tabs (Clean Segmented Controls) */}
          <div className="pt-2 border-t border-slate-100">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Categories
            </p>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Level Filters */}
          <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-500 mr-2">Level:</span>
            <div className="flex items-center gap-1.5 flex-wrap">
              {difficulties.map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    selectedDifficulty === diff
                      ? 'bg-slate-900 text-white'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
            
            <span className="ml-auto text-xs text-slate-400 font-medium">
              Showing <span className="font-bold text-slate-900 font-mono-numbers">{filteredCourses.length}</span> programs
            </span>
          </div>

        </div>

        {/* Courses Cards Grid */}
        {filteredCourses.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-lg mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No courses match your filter</h3>
            <p className="text-xs text-slate-500">
              Try adjusting your search query or selecting a different category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedDifficulty('All');
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCourses.map((course) => {
              const enrolled = isEnrolled(course.id);
              return (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-200 flex flex-col group"
                >
                  {/* Thumbnail */}
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

                    {course.badge && (
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold text-white bg-blue-600/90 backdrop-blur-xs shadow-xs">
                        {course.badge}
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded text-[11px] font-semibold text-slate-100 bg-slate-950/70 backdrop-blur-xs">
                      {course.difficulty}
                    </div>

                    <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-[11px] font-bold text-amber-300 bg-slate-950/70 backdrop-blur-xs flex items-center gap-1 font-mono-numbers">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{course.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Quiet metadata with bullet separators */}
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-2.5">
                        <span>{course.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{course.duration}</span>
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{course.lessonsCount} lessons</span>
                      </div>

                      <h3
                        onClick={() => openCourseDetails(course)}
                        className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer leading-snug line-clamp-2"
                      >
                        {course.title}
                      </h3>

                      <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                        {course.shortDescription}
                      </p>

                      {/* Skills Tags */}
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {course.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                        {course.skills.length > 3 && (
                          <span className="text-[10px] text-slate-400 font-medium self-center">
                            +{course.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-4 mt-4 border-t border-slate-100 space-y-3">
                      
                      {/* Instructor */}
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <img
                            src={course.instructor.avatar}
                            alt={course.instructor.name}
                            referrerPolicy="no-referrer"
                            className="w-6 h-6 rounded-full object-cover ring-1 ring-slate-200"
                          />
                          <div className="truncate max-w-[130px]">
                            <span className="font-semibold text-slate-800 block truncate">
                              {course.instructor.name}
                            </span>
                            <span className="text-[10px] text-slate-500 block truncate">
                              {course.instructor.company || course.instructor.title}
                            </span>
                          </div>
                        </div>

                        <div className="text-right">
                          {course.isFree ? (
                            <span className="text-sm font-extrabold text-emerald-600">
                              Free
                            </span>
                          ) : (
                            <div className="flex items-baseline gap-1">
                              <span className="text-base font-extrabold text-slate-900 font-mono-numbers">
                                ₹{course.price.toLocaleString()}
                              </span>
                              {course.originalPrice && (
                                <span className="text-[10px] text-slate-400 line-through font-mono-numbers">
                                  ₹{course.originalPrice.toLocaleString()}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Card Actions */}
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <button
                          onClick={() => openCourseDetails(course)}
                          className="w-full py-2 text-xs font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-xl transition-colors cursor-pointer text-center"
                        >
                          View Details
                        </button>

                        <button
                          onClick={() => {
                            enrollCourse(course.id);
                            openCourseDetails(course);
                          }}
                          className={`w-full py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                            enrolled
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : 'bg-blue-600 hover:bg-blue-700 text-white shadow-2xs'
                          }`}
                        >
                          {enrolled ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
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
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
