import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useCourses } from '../../context/CourseContext';
import { Course, Assignment, LiveClass } from '../../types';
import { 
  Users, 
  BookOpen, 
  Calendar, 
  FileText, 
  Plus, 
  Upload, 
  Video, 
  CheckCircle2, 
  Star, 
  TrendingUp,
  X,
  FileCode,
  Sparkles,
  MessageSquare,
  ShieldCheck,
  Lock
} from 'lucide-react';
import { AccessDenied } from '../common/AccessDenied';

interface MentorDashboardProps {
  onNavigateHome?: () => void;
}

export const MentorDashboard: React.FC<MentorDashboardProps> = ({ onNavigateHome = () => {} }) => {
  const { user, role, switchRole } = useAuth();
  const { 
    courses, 
    createCourse, 
    assignments, 
    gradeAssignment, 
    liveClasses, 
    createLiveClass 
  } = useCourses();

  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'submissions' | 'classes'>('overview');

  // Modals
  const [isCreateCourseOpen, setIsCreateCourseOpen] = useState(false);
  const [isAddLessonOpen, setIsAddLessonOpen] = useState(false);
  const [isGradeModalOpen, setIsGradeModalOpen] = useState(false);
  const [isScheduleClassOpen, setIsScheduleClassOpen] = useState(false);

  // New Course Form state
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<any>('Programming');
  const [newDifficulty, setNewDifficulty] = useState<any>('Intermediate');
  const [newPrice, setNewPrice] = useState('2499');
  const [newDescription, setNewDescription] = useState('');

  // Selected assignment for grading
  const [gradingAssignment, setGradingAssignment] = useState<Assignment | null>(null);
  const [gradeScore, setGradeScore] = useState('95');
  const [gradeFeedback, setGradeFeedback] = useState('Clean implementation with good code modularity and test coverage.');

  // Schedule class form
  const [classTitle, setClassTitle] = useState('');
  const [classTime, setClassTime] = useState('Sunday, 6:00 PM IST');

  // RBAC Check: Only Mentor / Teacher can see teacher info (Admin can see all)
  if (role !== 'mentor' && role !== 'admin') {
    return (
      <AccessDenied
        requiredRole="mentor"
        currentRole={role}
        onNavigateHome={onNavigateHome}
        onSwitchRole={(newRole) => switchRole(newRole)}
      />
    );
  }

  // Filter courses managed by this mentor
  const mentorCourses = courses.slice(0, 4);

  const handleCreateCourseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;
    createCourse({
      title: newTitle,
      category: newCategory,
      difficulty: newDifficulty,
      price: Number(newPrice) || 1999,
      description: newDescription || 'Comprehensive programming course by expert industry faculty.',
      shortDescription: newDescription ? newDescription.slice(0, 100) : 'Learn industry-ready skills with hands-on practice.'
    });
    setIsCreateCourseOpen(false);
    setNewTitle('');
    setNewDescription('');
    alert('New course created and published to the Coding Vidya catalog!');
  };

  const handleGradeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (gradingAssignment) {
      gradeAssignment(gradingAssignment.id, Number(gradeScore) || 90, gradeFeedback);
      setIsGradeModalOpen(false);
      setGradingAssignment(null);
      alert('Student submission has been graded and feedback released to their dashboard!');
    }
  };

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (classTitle) {
      createLiveClass({
        title: classTitle,
        courseName: mentorCourses[0]?.title || 'Advanced Masterclass',
        mentorName: user?.name || 'Dr. Neha Verma',
        date: 'This Weekend',
        time: classTime,
        duration: '90 Mins',
        status: 'upcoming',
        meetingUrl: 'https://meet.google.com/codingvidya-live'
      });
      setIsScheduleClassOpen(false);
      setClassTitle('');
      alert('Live workshop scheduled! Notification dispatched to all enrolled students.');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Role Enforcement Banner */}
        {role === 'admin' ? (
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>
                <strong>Admin Mode:</strong> You are viewing Teacher & Faculty information as a Super Administrator.
              </span>
            </div>
            <span className="text-[11px] bg-emerald-200/60 px-2 py-0.5 rounded text-emerald-800 font-bold">
              Super Administrator Access
            </span>
          </div>
        ) : (
          <div className="p-3 rounded-2xl bg-purple-50/80 border border-purple-200/80 text-purple-900 text-xs font-medium flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-purple-600 shrink-0" />
            <span>
              <strong>Teacher / Faculty Zone:</strong> Restricted to authorized faculty instructors only. Teachers see course curriculum, student assignment queues, and scheduling tools.
            </span>
          </div>
        )}

        {/* Mentor Header Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="flex items-center gap-4">
              <img
                src={user?.avatar || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'}
                alt={user?.name || 'Mentor'}
                referrerPolicy="no-referrer"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover ring-4 ring-purple-50 shadow-md"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full">
                    Teacher & Course Director Console
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Verified Instructor</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Faculty Workspace: {user?.name || 'Dr. Neha Verma'}
                </h1>

                <p className="text-xs text-slate-500 mt-0.5">
                  {user?.title || 'Lead AI Scientist & Tech Lead'} · Manage your courses, review code, and schedule live workshops.
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2.5 flex-wrap self-start md:self-auto">
              <button
                onClick={() => setIsCreateCourseOpen(true)}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-md shadow-purple-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Create Course</span>
              </button>

              <button
                onClick={() => setIsScheduleClassOpen(true)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule Live Class</span>
              </button>
            </div>

          </div>

          {/* Sub Navigation Tabs */}
          <div className="flex items-center gap-2 pt-6 mt-6 border-t border-slate-100 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Faculty Overview
            </button>
            <button
              onClick={() => setActiveTab('courses')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'courses'
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              My Courses ({mentorCourses.length})
            </button>
            <button
              onClick={() => setActiveTab('submissions')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'submissions'
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Student Submissions ({assignments.length})
            </button>
            <button
              onClick={() => setActiveTab('classes')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'classes'
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              My Live Sessions ({liveClasses.length})
            </button>
          </div>
        </div>

        {/* 5 KPI Cards: Teacher Information only */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between text-blue-600 mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Students Taught</span>
              <Users className="w-4 h-4" />
            </div>
            <span className="text-2xl font-black text-slate-900 font-mono-numbers">2,840</span>
            <span className="text-[11px] text-emerald-600 font-bold block mt-1">+140 this week</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between text-indigo-600 mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">My Courses</span>
              <BookOpen className="w-4 h-4" />
            </div>
            <span className="text-2xl font-black text-slate-900 font-mono-numbers">{mentorCourses.length}</span>
            <span className="text-[11px] text-slate-500 block mt-1">Active curriculum</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between text-rose-600 mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Workshops</span>
              <Video className="w-4 h-4" />
            </div>
            <span className="text-2xl font-black text-slate-900 font-mono-numbers">{liveClasses.length}</span>
            <span className="text-[11px] text-slate-500 block mt-1">Upcoming live classes</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between text-purple-600 mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Pending Grading</span>
              <FileText className="w-4 h-4" />
            </div>
            <span className="text-2xl font-black text-slate-900 font-mono-numbers">{assignments.length}</span>
            <span className="text-[11px] text-amber-600 font-bold block mt-1">Needs review</span>
          </div>

          <div className="col-span-2 lg:col-span-1 p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between text-emerald-600 mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Course Rating</span>
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            <span className="text-2xl font-black text-slate-900 font-mono-numbers">4.92★</span>
            <span className="text-[11px] text-emerald-600 font-bold block mt-1">From 980+ reviews</span>
          </div>
        </div>

        {/* Tab 1: Overview & Management Shortcuts */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Active Course Management List (8 cols) */}
            <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Your Active Programs</h2>
                  <p className="text-xs text-slate-500">Manage curriculum, upload videos, and publish lecture notes</p>
                </div>
                <button
                  onClick={() => setIsCreateCourseOpen(true)}
                  className="text-xs font-bold text-purple-600 hover:underline flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>New Course</span>
                </button>
              </div>

              <div className="space-y-4">
                {mentorCourses.map((c) => (
                  <div
                    key={c.id}
                    className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={c.thumbnail}
                        alt={c.title}
                        referrerPolicy="no-referrer"
                        className="w-16 h-12 rounded-xl object-cover ring-1 ring-slate-200 shrink-0"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{c.title}</h4>
                        <p className="text-xs text-slate-500">
                          {c.curriculum.length} modules · {c.lessonsCount} lessons · {c.rating}★ rating
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                      <button
                        onClick={() => setIsAddLessonOpen(true)}
                        className="px-3 py-1.5 bg-white border border-slate-200 hover:border-purple-300 text-slate-700 hover:text-purple-600 rounded-lg text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Upload className="w-3 h-3" />
                        <span>Upload Video/Notes</span>
                      </button>

                      <button
                        onClick={() => alert(`Opening curriculum editor for "${c.title}"`)}
                        className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-xs font-bold hover:bg-purple-100 transition-colors"
                      >
                        Manage
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Pending Student Submissions to Review (4 cols) */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-600" />
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Submissions to Review
                  </h3>
                </div>
                <span className="text-xs text-slate-400">Needs Grading</span>
              </div>

              <div className="space-y-3">
                {assignments.map((asg) => (
                  <div key={asg.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50/60 space-y-2 text-xs">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-bold text-slate-900 leading-snug">{asg.title}</h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded capitalize shrink-0 ${
                        asg.status === 'graded' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {asg.status}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-500">{asg.courseName}</p>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-slate-400 text-[10px]">{asg.deadline}</span>
                      <button
                        onClick={() => {
                          setGradingAssignment(asg);
                          setIsGradeModalOpen(true);
                        }}
                        className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-[11px] font-bold cursor-pointer"
                      >
                        {asg.status === 'graded' ? 'Edit Grade' : 'Grade Submission'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Course Management */}
        {activeTab === 'courses' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Your Course Catalog & Curriculum Management</h3>
                <p className="text-xs text-slate-500">Add modules, upload videos, attach lecture notes, and create quizzes</p>
              </div>
              <button
                onClick={() => setIsCreateCourseOpen(true)}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Course</span>
              </button>
            </div>

            <div className="divide-y divide-slate-100">
              {mentorCourses.map((c) => (
                <div key={c.id} className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img src={c.thumbnail} alt={c.title} className="w-16 h-12 rounded-xl object-cover" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{c.title}</h4>
                      <p className="text-xs text-slate-500">{c.category} · {c.duration} · ₹{c.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsAddLessonOpen(true)}
                      className="px-3 py-1.5 border border-slate-200 text-slate-700 rounded-lg text-xs font-bold hover:bg-slate-50"
                    >
                      + Add Lesson
                    </button>
                    <button
                      onClick={() => setIsAddLessonOpen(true)}
                      className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold hover:bg-blue-100"
                    >
                      + Create Quiz
                    </button>
                    <button
                      onClick={() => alert(`Course settings for "${c.title}" saved.`)}
                      className="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-bold"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Student Submissions Review Table */}
        {activeTab === 'submissions' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Student Assignment Review Queue</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Assignment Title</th>
                    <th className="py-3 px-4">Course</th>
                    <th className="py-3 px-4">Student Submission</th>
                    <th className="py-3 px-4">Status & Score</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {assignments.map((asg) => (
                    <tr key={asg.id}>
                      <td className="py-3.5 px-4 font-bold text-slate-900">{asg.title}</td>
                      <td className="py-3.5 px-4 text-slate-500">{asg.courseName}</td>
                      <td className="py-3.5 px-4 text-blue-600 font-mono text-[11px]">
                        {asg.studentSubmission || 'https://github.com/student/solution'}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold capitalize ${
                          asg.status === 'graded' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {asg.status} {asg.score ? `(${asg.score}%)` : ''}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => {
                            setGradingAssignment(asg);
                            setIsGradeModalOpen(true);
                          }}
                          className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold"
                        >
                          Grade / Feedback
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: Live Workshops Scheduled by this Teacher */}
        {activeTab === 'classes' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">Scheduled Faculty Live Workshops</h3>
              <button
                onClick={() => setIsScheduleClassOpen(true)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold"
              >
                + Schedule New Workshop
              </button>
            </div>

            <div className="divide-y divide-slate-100">
              {liveClasses.map((live) => (
                <div key={live.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{live.title}</h4>
                    <p className="text-xs text-slate-500">{live.courseName} · {live.time} ({live.duration})</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={live.meetingUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-lg"
                    >
                      Start Meeting
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Modal 1: Create Course Modal */}
      {isCreateCourseOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-4 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">Create New Course</h3>
              <button onClick={() => setIsCreateCourseOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateCourseSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Course Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Modern Rust Systems Programming"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50"
                  >
                    <option value="Programming">Programming</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Data Science">Data Science</option>
                    <option value="DSA">DSA</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Difficulty</label>
                  <select
                    value={newDifficulty}
                    onChange={(e) => setNewDifficulty(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Course Price (INR)</label>
                <input
                  type="number"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Description</label>
                <textarea
                  rows={3}
                  placeholder="Detailed breakdown of syllabus, target audience, and outcome..."
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCreateCourseOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-xs"
                >
                  Publish Program
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal 2: Upload Video / Notes Modal */}
      {isAddLessonOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-xl border border-slate-200">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900">Upload Lesson Video / Notes</h3>
              <button onClick={() => setIsAddLessonOpen(false)} className="text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-slate-500">
              Upload 4K MP4 lectures, PDF study guides, or interactive coding tests.
            </p>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Lesson Title</label>
                <input type="text" defaultValue="Introduction to Advanced Microservices" className="w-full text-xs p-2.5 rounded-xl border border-slate-200" />
              </div>
              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center text-xs text-slate-500 hover:border-purple-400 cursor-pointer">
                <Upload className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                <span className="font-bold text-slate-800 block">Drag & drop video/lecture notes</span>
                <span>or click to browse files (MP4, PDF, MD)</span>
              </div>
              <button
                onClick={() => {
                  setIsAddLessonOpen(false);
                  alert('Lesson assets uploaded and synchronized with course syllabus!');
                }}
                className="w-full py-2.5 bg-purple-600 text-white font-bold text-xs rounded-xl shadow-xs"
              >
                Save & Attach to Module
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 3: Grade Assignment Modal */}
      {isGradeModalOpen && gradingAssignment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-xl border border-slate-200">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900">Grade Student Submission</h3>
              <button onClick={() => setIsGradeModalOpen(false)} className="text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-slate-500 font-semibold">{gradingAssignment.title}</p>

            <form onSubmit={handleGradeSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Score (0 - 100%)</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={gradeScore}
                  onChange={(e) => setGradeScore(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mentor Feedback / Code Review</label>
                <textarea
                  rows={3}
                  value={gradeFeedback}
                  onChange={(e) => setGradeFeedback(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 resize-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsGradeModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold bg-purple-600 text-white rounded-xl"
                >
                  Publish Grade
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal 4: Schedule Live Workshop */}
      {isScheduleClassOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-xl border border-slate-200">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900">Schedule Live Class</h3>
              <button onClick={() => setIsScheduleClassOpen(false)} className="text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleScheduleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Workshop Topic</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Live Q&A: Dynamic Programming Patterns"
                  value={classTitle}
                  onChange={(e) => setClassTitle(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Date & Time</label>
                <input
                  type="text"
                  value={classTime}
                  onChange={(e) => setClassTime(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsScheduleClassOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold bg-blue-600 text-white rounded-xl"
                >
                  Schedule Session
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
