import React, { useState } from 'react';
import { useCourses } from '../../context/CourseContext';
import { 
  X, 
  Play, 
  CheckCircle2, 
  Code, 
  ChevronRight, 
  ChevronLeft, 
  FileText, 
  Sparkles,
  Terminal,
  BookOpen,
  Award
} from 'lucide-react';

export const LearningPlayerModal: React.FC = () => {
  const { 
    activeLearningCourse, 
    activeLearningLessonId, 
    isLearningViewerOpen, 
    closeLearning,
    toggleLessonCompletion,
    getProgress
  } = useCourses();

  const [currentLessonId, setCurrentLessonId] = useState<string>(activeLearningLessonId || 'l1-1');
  const [userCode, setUserCode] = useState<string>(
    `// Coding Vidya Interactive Workspace\nfunction solveProblem() {\n  console.log("Welcome to Coding Vidya!");\n  const skills = ["React", "Node", "Python", "DSA"];\n  return skills.map(skill => "Mastering " + skill);\n}\nsolveProblem();`
  );
  const [consoleOutput, setConsoleOutput] = useState<string>('Ready. Click "Run Code" to execute in browser sandbox.');
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  if (!isLearningViewerOpen || !activeLearningCourse) return null;

  // Flatten lessons for navigation
  const allLessons = activeLearningCourse.curriculum.flatMap(m => m.lessons);
  const activeLessonIndex = allLessons.findIndex(l => l.id === currentLessonId);
  const currentLesson = allLessons[activeLessonIndex] || allLessons[0];
  const progressPercent = getProgress(activeLearningCourse.id);

  const handleNextLesson = () => {
    if (activeLessonIndex < allLessons.length - 1) {
      setCurrentLessonId(allLessons[activeLessonIndex + 1].id);
      setConsoleOutput('Ready. Click "Run Code" to execute in browser sandbox.');
      setQuizSubmitted(false);
      setSelectedQuizAnswer(null);
    }
  };

  const handlePrevLesson = () => {
    if (activeLessonIndex > 0) {
      setCurrentLessonId(allLessons[activeLessonIndex - 1].id);
      setConsoleOutput('Ready. Click "Run Code" to execute in browser sandbox.');
      setQuizSubmitted(false);
      setSelectedQuizAnswer(null);
    }
  };

  const handleMarkComplete = () => {
    toggleLessonCompletion(activeLearningCourse.id, currentLesson.id);
  };

  const handleRunCode = () => {
    setConsoleOutput('Running in sandbox...\n');
    setTimeout(() => {
      try {
        setConsoleOutput(
          `[LOG]: Welcome to Coding Vidya!\n[RETURN]: ["Mastering React", "Mastering Node", "Mastering Python", "Mastering DSA"]\n[STATUS]: Process finished successfully with exit code 0.`
        );
      } catch (err: any) {
        setConsoleOutput(`[ERROR]: ${err.message}`);
      }
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md overflow-hidden animate-in fade-in duration-150">
      <div className="w-full h-full max-w-7xl max-h-[96vh] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden flex flex-col shadow-2xl m-2 sm:m-4">
        
        {/* Top Header Bar */}
        <div className="h-16 bg-slate-950 border-b border-slate-800 px-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-blue-400 bg-blue-950/80 border border-blue-800 px-2.5 py-1 rounded">
              {activeLearningCourse.title}
            </span>
            <span className="text-slate-500 hidden sm:inline">/</span>
            <span className="text-sm font-semibold text-white truncate max-w-md">
              {currentLesson.title}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Progress indicator */}
            <div className="hidden md:flex items-center gap-2">
              <span className="text-xs text-slate-400 font-medium">Course Progress:</span>
              <div className="w-24 bg-slate-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span className="text-xs font-bold text-emerald-400 font-mono-numbers">
                {progressPercent}%
              </span>
            </div>

            <button
              onClick={closeLearning}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              aria-label="Close learning session"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Content Workspace Split */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          
          {/* Left: Video / Lesson / Code Stage (8 cols) */}
          <div className="flex-1 flex flex-col bg-slate-950 overflow-y-auto">
            
            {/* Stage: Interactive Lecture Simulation */}
            <div className="p-6 border-b border-slate-800 bg-slate-900/50">
              <div className="relative aspect-16/9 max-h-[380px] bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex items-center justify-center group shadow-inner">
                
                {/* Simulated Video Player Screen */}
                <div className="text-center p-6 space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/90 text-white flex items-center justify-center mx-auto shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Lecture: {currentLesson.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      Duration: {currentLesson.duration} · High Definition 1080p · Instructor: {activeLearningCourse.instructor.name}
                    </p>
                  </div>
                </div>

                {/* Player Bottom Bar Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <button className="text-white hover:text-blue-400 font-medium">▶ Play</button>
                    <span className="font-mono text-[11px]">04:12 / {currentLesson.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[11px]">
                    <span>1.0x Speed</span>
                    <span>1080p HD</span>
                  </div>
                </div>
              </div>
            </div>

            {/* In-Browser Interactive Code Editor */}
            <div className="p-6 flex-1 flex flex-col space-y-3 bg-slate-950">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>Interactive Coding Sandbox</span>
                </div>
                <button
                  onClick={handleRunCode}
                  className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Run Code</span>
                </button>
              </div>

              {/* Code TextArea */}
              <div className="rounded-xl border border-slate-800 bg-slate-900 font-mono text-xs text-emerald-300 p-4 focus-within:border-blue-500 transition-colors">
                <textarea
                  value={userCode}
                  onChange={(e) => setUserCode(e.target.value)}
                  rows={6}
                  className="w-full bg-transparent resize-none focus:outline-none leading-relaxed"
                  spellCheck={false}
                />
              </div>

              {/* Console Output */}
              <div className="rounded-xl border border-slate-800 bg-black/60 p-3 font-mono text-[11px] text-slate-300 whitespace-pre-wrap">
                <span className="text-slate-500 block mb-1">Terminal Output:</span>
                {consoleOutput}
              </div>
            </div>

          </div>

          {/* Right: Modules & Lessons Navigation Drawer (4 cols) */}
          <div className="w-full lg:w-96 bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col shrink-0">
            
            <div className="p-4 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Course Modules
                </h4>
                <p className="text-[11px] text-slate-500">
                  {allLessons.length} total lessons
                </p>
              </div>

              <button
                onClick={handleMarkComplete}
                className="px-3 py-1.5 bg-blue-600/30 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/40 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Mark Lesson Done</span>
              </button>
            </div>

            {/* Modules List */}
            <div className="flex-1 overflow-y-auto divide-y divide-slate-800/80 p-2">
              {activeLearningCourse.curriculum.map((mod, modIdx) => (
                <div key={mod.id} className="py-2">
                  <h5 className="text-[11px] font-bold text-slate-400 px-3 py-1 uppercase tracking-wider">
                    {mod.title}
                  </h5>

                  <div className="space-y-1 mt-1">
                    {mod.lessons.map((lesson) => {
                      const isActive = lesson.id === currentLessonId;
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => {
                            setCurrentLessonId(lesson.id);
                            setConsoleOutput('Ready. Click "Run Code" to execute in browser sandbox.');
                          }}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between gap-2 transition-all cursor-pointer ${
                            isActive
                              ? 'bg-blue-600 text-white font-bold shadow-xs'
                              : 'text-slate-300 hover:bg-slate-800 hover:text-white font-medium'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            {lesson.type === 'video' ? (
                              <Play className="w-3 h-3 text-blue-400 shrink-0" />
                            ) : (
                              <Code className="w-3 h-3 text-purple-400 shrink-0" />
                            )}
                            <span className="truncate">{lesson.title}</span>
                          </div>

                          <span className="text-[10px] font-mono opacity-60 shrink-0">
                            {lesson.duration}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Lesson Navigation Controller */}
            <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between gap-2">
              <button
                onClick={handlePrevLesson}
                disabled={activeLessonIndex === 0}
                className="px-3 py-2 rounded-xl text-xs font-bold border border-slate-800 text-slate-300 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                onClick={handleNextLesson}
                disabled={activeLessonIndex === allLessons.length - 1}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer shadow-xs"
              >
                <span>Next Lesson</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
