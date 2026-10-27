import React, { useState } from 'react';
import { ROADMAPS } from '../../data/mockData';
import { CareerRoadmap, RoadmapStep } from '../../types';
import { useCourses } from '../../context/CourseContext';
import { 
  Globe, 
  Code, 
  Coffee, 
  BarChart2, 
  Cpu, 
  Layers, 
  Clock, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Sparkles,
  ChevronRight,
  TrendingUp,
  FolderGit2
} from 'lucide-react';

export const RoadmapPage: React.FC = () => {
  const { courses, openCourseDetails } = useCourses();
  const [selectedRoadmapId, setSelectedRoadmapId] = useState<string>('web-developer');
  const [completedSteps, setCompletedSteps] = useState<{ [key: string]: boolean }>({
    'web-developer-1': true,
    'web-developer-2': true,
    'python-developer-1': true,
    'fullstack-developer-1': true
  });

  const activeRoadmap = ROADMAPS.find((r) => r.id === selectedRoadmapId) || ROADMAPS[0];

  const getRoadmapIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-4 h-4" />;
      case 'Code': return <Code className="w-4 h-4" />;
      case 'Coffee': return <Coffee className="w-4 h-4" />;
      case 'BarChart2': return <BarChart2 className="w-4 h-4" />;
      case 'Cpu': return <Cpu className="w-4 h-4" />;
      default: return <Layers className="w-4 h-4" />;
    }
  };

  const toggleStepCompletion = (stepKey: string) => {
    setCompletedSteps(prev => ({
      ...prev,
      [stepKey]: !prev[stepKey]
    }));
  };

  const handleOpenRecommendedCourse = (courseId?: string) => {
    if (!courseId) return;
    const found = courses.find(c => c.id === courseId);
    if (found) {
      openCourseDetails(found);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Hero Header */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Industry Tested Blueprints</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Interactive Career Roadmaps
            </h1>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-light">
              Follow step-by-step milestones to land top software engineering, data science, and AI roles. Clear skills, curated projects, and course recommendations.
            </p>
          </div>
        </div>

        {/* Roadmap Selector Tabs */}
        <div className="bg-white rounded-2xl border border-slate-200 p-2 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {ROADMAPS.map((roadmap) => {
              const isActive = roadmap.id === selectedRoadmapId;
              return (
                <button
                  key={roadmap.id}
                  onClick={() => setSelectedRoadmapId(roadmap.id)}
                  className={`p-3 rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`p-1.5 rounded-lg ${isActive ? 'bg-white/20 text-white' : 'bg-white text-blue-600 border border-slate-200'}`}>
                      {getRoadmapIcon(roadmap.iconName)}
                    </div>
                  </div>
                  <div>
                    <h3 className={`text-xs font-bold line-clamp-1 ${isActive ? 'text-white' : 'text-slate-900'}`}>
                      {roadmap.title.replace(' Roadmap', '')}
                    </h3>
                    <p className={`text-[10px] mt-0.5 ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                      {roadmap.steps.length} Steps · {roadmap.estimatedTime}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Roadmap Banner & Overview */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs text-blue-600 font-bold uppercase tracking-wider mb-1">
                <span>Milestone Plan</span>
                <span aria-hidden="true">·</span>
                <span>{activeRoadmap.level}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {activeRoadmap.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                {activeRoadmap.description}
              </p>
            </div>

            <div className="flex items-center gap-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 self-start md:self-auto shrink-0">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Est. Duration</span>
                <span className="text-sm font-bold text-slate-900 flex items-center gap-1 font-mono-numbers">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  {activeRoadmap.estimatedTime}
                </span>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Average Salary</span>
                <span className="text-sm font-bold text-emerald-600 font-mono-numbers">
                  {activeRoadmap.averageSalary}
                </span>
              </div>
            </div>
          </div>

          {/* Step-by-Step Interactive Timeline */}
          <div className="pt-8 space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
              Step-by-Step Learning Timeline
            </h3>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-slate-200 before:hidden sm:before:block">
              {activeRoadmap.steps.map((step, idx) => {
                const stepKey = `${activeRoadmap.id}-${step.stepNumber}`;
                const isDone = !!completedSteps[stepKey];
                return (
                  <div
                    key={step.stepNumber}
                    className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group"
                  >
                    {/* Step Number Bubble */}
                    <div 
                      onClick={() => toggleStepCompletion(stepKey)}
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 z-10 font-bold text-xs transition-all cursor-pointer ${
                        isDone
                          ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                          : 'bg-white border-2 border-blue-600 text-blue-700 hover:bg-blue-50'
                      }`}
                      title="Click to mark milestone completed"
                    >
                      {isDone ? <CheckCircle2 className="w-5 h-5" /> : step.stepNumber}
                    </div>

                    {/* Step Detail Card */}
                    <div className="flex-1 bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all space-y-4">
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500">
                            <span className="text-blue-600 font-bold">Step {step.stepNumber}</span>
                            <span aria-hidden="true">·</span>
                            <span>{step.level} Level</span>
                            <span aria-hidden="true">·</span>
                            <span className="font-mono-numbers">{step.estimatedHours}</span>
                          </div>
                          <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                            {step.title}
                          </h4>
                        </div>

                        {/* Toggle Checkbox Button */}
                        <button
                          onClick={() => toggleStepCompletion(stepKey)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 self-start sm:self-auto ${
                            isDone
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{isDone ? 'Completed' : 'Mark as Done'}</span>
                        </button>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Key Skills */}
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-bold text-slate-500 block uppercase tracking-wider">
                          Key Skills to Master:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {step.keySkills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-800 text-xs font-semibold"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Recommended Project & Course Adjacency */}
                      <div className="pt-3 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        
                        {/* Project Idea */}
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block flex items-center gap-1">
                            <FolderGit2 className="w-3.5 h-3.5 text-blue-600" />
                            <span>Recommended Portfolio Project</span>
                          </span>
                          <p className="text-xs text-slate-800 font-semibold mt-1">
                            {step.projectIdea}
                          </p>
                        </div>

                        {/* Recommended Course */}
                        {step.recommendedCourseTitle && (
                          <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200/80 flex flex-col justify-between">
                            <div>
                              <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block flex items-center gap-1">
                                <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                                <span>Official Coding Vidya Course</span>
                              </span>
                              <p className="text-xs text-slate-900 font-bold mt-1 line-clamp-1">
                                {step.recommendedCourseTitle}
                              </p>
                            </div>
                            <button
                              onClick={() => handleOpenRecommendedCourse(step.recommendedCourseId)}
                              className="mt-2 text-xs text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1 group/btn cursor-pointer self-start"
                            >
                              <span>View Course Syllabus</span>
                              <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        )}

                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
