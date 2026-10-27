import React, { useState } from 'react';
import { useCourses } from '../../context/CourseContext';
import { 
  X, 
  Clock, 
  BookOpen, 
  Star, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  PlayCircle, 
  Code, 
  Award, 
  Layers, 
  CheckCircle2, 
  Users, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const CourseDetailsModal: React.FC = () => {
  const { 
    selectedCourse, 
    isDetailsModalOpen, 
    closeCourseDetails, 
    enrollCourse, 
    isEnrolled, 
    startLearning 
  } = useCourses();

  // Expanded modules state
  const [expandedModules, setExpandedModules] = useState<{ [key: string]: boolean }>({
    'm1': true,
    'm2': true
  });

  if (!isDetailsModalOpen || !selectedCourse) return null;

  const enrolled = isEnrolled(selectedCourse.id);

  const toggleModule = (modId: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [modId]: !prev[modId]
    }));
  };

  const handleEnrollOrLearn = () => {
    if (!enrolled) {
      enrollCourse(selectedCourse.id);
    }
    startLearning(selectedCourse);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-150">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 max-h-[92vh] flex flex-col">
        
        {/* Sticky Header with Title & Close */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white z-10 shrink-0">
          <div className="flex items-center gap-2 max-w-md sm:max-w-xl truncate">
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
              {selectedCourse.category}
            </span>
            <span className="text-sm font-bold text-slate-800 truncate">
              {selectedCourse.title}
            </span>
          </div>

          <button
            onClick={closeCourseDetails}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors ml-4 shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Info (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
                <span className="font-bold text-slate-900">{selectedCourse.difficulty} Level</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{selectedCourse.duration}</span>
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                  <span>{selectedCourse.lessonsCount} lessons</span>
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1 font-bold text-slate-800 font-mono-numbers">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{selectedCourse.rating.toFixed(1)}</span> ({selectedCourse.reviewsCount} reviews)
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                {selectedCourse.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {selectedCourse.description}
              </p>

              {/* Instructor Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedCourse.instructor.avatar}
                    alt={selectedCourse.instructor.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-xl object-cover ring-2 ring-white shadow-xs"
                  />
                  <div>
                    <span className="text-xs text-slate-500 block font-medium">Lead Mentor</span>
                    <h3 className="text-sm font-bold text-slate-900">{selectedCourse.instructor.name}</h3>
                    <p className="text-xs text-blue-600 font-semibold">{selectedCourse.instructor.company || selectedCourse.instructor.title}</p>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-xs text-slate-500 block">Weekly Live Sessions</span>
                  <span className="text-xs font-bold text-emerald-600">● 1:1 Code Reviews</span>
                </div>
              </div>

              {/* Skills You Will Master */}
              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-xs">
                  Skills You Will Master
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCourse.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card / Pricing & Quick Action (4 cols) */}
            <div className="lg:col-span-4 bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-5 sticky top-0">
              <div className="aspect-16/9 rounded-xl overflow-hidden bg-slate-900 border border-slate-200">
                <img
                  src={selectedCourse.thumbnail}
                  alt={selectedCourse.title}
                  loading="eager"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (selectedCourse.id === 'course-fullstack') {
                      target.src = '/assets/images/course_fullstack_1791009120393.jpg';
                    } else if (selectedCourse.id === 'course-datascience') {
                      target.src = '/assets/images/course_datascience_1791009133875.jpg';
                    } else if (selectedCourse.id === 'course-dsa') {
                      target.src = '/assets/images/course_dsa_bootcamp_1791096191028.jpg';
                    }
                  }}
                />
              </div>

              <div>
                <span className="text-xs text-slate-500 font-medium">Program Enrollment</span>
                <div className="flex items-baseline gap-2 mt-1">
                  {selectedCourse.isFree ? (
                    <span className="text-2xl font-black text-emerald-600">Free Access</span>
                  ) : (
                    <>
                      <span className="text-3xl font-black text-slate-900 font-mono-numbers">
                        ₹{selectedCourse.price.toLocaleString()}
                      </span>
                      {selectedCourse.originalPrice && (
                        <span className="text-sm text-slate-400 line-through font-mono-numbers">
                          ₹{selectedCourse.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </>
                  )}
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  One-time fee · Full lifetime access · Official certificate included
                </p>
              </div>

              <div className="space-y-2.5">
                <button
                  onClick={handleEnrollOrLearn}
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <PlayCircle className="w-4 h-4" />
                  <span>{enrolled ? 'Continue Learning (Open Player)' : 'Enroll Now & Start'}</span>
                </button>

                <p className="text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>14-day risk-free money-back guarantee</span>
                </p>
              </div>

              {/* Program features checklist */}
              <div className="pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2 font-medium">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{selectedCourse.lessonsCount} on-demand video & code lessons</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{selectedCourse.projects.length} real portfolio projects</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Weekly live Q&A with instructor</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verifiable Certificate of Completion</span>
                </div>
              </div>
            </div>

          </div>

          {/* Curriculum Section with Expandable Modules */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Course Curriculum
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {selectedCourse.curriculum.length} comprehensive modules · {selectedCourse.lessonsCount} lessons
                </p>
              </div>

              <button
                onClick={() => {
                  const allOpen = Object.values(expandedModules).every(Boolean);
                  const updated: any = {};
                  selectedCourse.curriculum.forEach(m => { updated[m.id] = !allOpen; });
                  setExpandedModules(updated);
                }}
                className="text-xs font-bold text-blue-600 hover:underline"
              >
                Toggle All Modules
              </button>
            </div>

            <div className="space-y-3">
              {selectedCourse.curriculum.map((mod, idx) => {
                const isOpen = !!expandedModules[mod.id];
                return (
                  <div
                    key={mod.id}
                    className="border border-slate-200 rounded-2xl overflow-hidden bg-white transition-colors"
                  >
                    {/* Module Accordion Header */}
                    <button
                      onClick={() => toggleModule(mod.id)}
                      className="w-full p-4.5 bg-slate-50/80 hover:bg-slate-100 flex items-center justify-between gap-4 text-left transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center font-mono">
                          {idx + 1}
                        </span>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">
                            {mod.title}
                          </h4>
                          {mod.description && (
                            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                              {mod.description}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                          {mod.lessons.length} lessons
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-slate-500" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-500" />
                        )}
                      </div>
                    </button>

                    {/* Module Lessons List */}
                    {isOpen && (
                      <div className="divide-y divide-slate-100 px-4 py-2">
                        {mod.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className="py-3 flex items-center justify-between gap-3 text-xs"
                          >
                            <div className="flex items-center gap-2.5">
                              {lesson.type === 'video' && <PlayCircle className="w-4 h-4 text-blue-500 shrink-0" />}
                              {lesson.type === 'code' && <Code className="w-4 h-4 text-purple-500 shrink-0" />}
                              {lesson.type === 'quiz' && <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />}
                              <span className="font-medium text-slate-800">{lesson.title}</span>
                            </div>

                            <div className="flex items-center gap-3 text-slate-400 font-mono-numbers shrink-0">
                              <span>{lesson.duration}</span>
                              <button
                                onClick={() => startLearning(selectedCourse, lesson.id)}
                                className="text-blue-600 hover:text-blue-800 font-bold hover:underline"
                              >
                                Preview
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Projects Included */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Capstone Projects You Will Build
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedCourse.projects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-600" />
                    <h4 className="text-sm font-bold text-slate-900">{proj.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] font-semibold text-slate-700 bg-white border border-slate-200 px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements & Certificate */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-xs">
                Course Requirements
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                {selectedCourse.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
              <div className="flex items-center gap-2 text-amber-800 font-bold text-xs">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Certificate of Achievement</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Upon submitting all module assignments and passing the capstone project evaluation, you will receive an official verifiable digital credential issued by Coding Vidya.
              </p>
            </div>
          </div>

          {/* Student Reviews */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Student Reviews ({selectedCourse.reviews.length})
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedCourse.reviews.map((rev) => (
                <div key={rev.id} className="p-4 rounded-xl border border-slate-100 bg-white shadow-2xs space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900">{rev.studentName}</span>
                    <span className="text-slate-400">{rev.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Sticky CTA */}
        <div className="p-4 px-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500">Need syllabus assistance?</span>
            <span className="text-xs font-bold text-blue-600">support@codingvidya.com</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={closeCourseDetails}
              className="px-4 py-2 border border-slate-200 text-slate-600 hover:bg-slate-100 rounded-xl text-xs font-bold cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handleEnrollOrLearn}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 cursor-pointer"
            >
              {enrolled ? 'Launch Lesson Player' : 'Enroll Now'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
