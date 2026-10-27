import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useCourses } from '../../context/CourseContext';
import { 
  GraduationCap, 
  Play, 
  Award, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  FileText, 
  Flame, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  BookOpen,
  Send,
  Video,
  Download,
  AlertCircle,
  ShieldCheck,
  Lock
} from 'lucide-react';
import { AccessDenied } from '../common/AccessDenied';

interface StudentDashboardProps {
  onExploreMoreCourses: () => void;
  onNavigateHome?: () => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({ 
  onExploreMoreCourses, 
  onNavigateHome = () => {} 
}) => {
  const { user, role, switchRole } = useAuth();
  const { 
    courses, 
    getProgress, 
    startLearning, 
    certificates, 
    openCertificate, 
    assignments, 
    submitAssignment,
    quizResults,
    liveClasses 
  } = useCourses();

  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'certificates' | 'assignments'>('overview');
  const [submissionModalAssignmentId, setSubmissionModalAssignmentId] = useState<string | null>(null);
  const [submissionLink, setSubmissionLink] = useState('');

  // RBAC Check: Only Student can see student info. (Admin has super-user oversight)
  if (role !== 'student' && role !== 'admin') {
    return (
      <AccessDenied
        requiredRole="student"
        currentRole={role}
        onNavigateHome={onNavigateHome}
        onSwitchRole={(newRole) => switchRole(newRole)}
      />
    );
  }

  // Filter ONLY this student's enrolled courses and certificates
  const studentEnrolledIds = user?.enrolledCourseIds || ['course-python', 'course-dsa', 'course-fullstack'];
  const enrolledCourses = courses.filter((c) => studentEnrolledIds.includes(c.id));

  // Only certificates belonging to this student
  const studentCertificates = certificates.filter(
    (c) => c.studentId === user?.id || c.studentName === user?.name || role === 'admin'
  );

  const handleAssignmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submissionModalAssignmentId && submissionLink) {
      submitAssignment(submissionModalAssignmentId, submissionLink);
      setSubmissionModalAssignmentId(null);
      setSubmissionLink('');
      alert('Assignment submitted successfully! Your mentor will review and provide feedback.');
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
                <strong>Admin Mode:</strong> You are viewing student records for <strong>{user?.name}</strong>. As an admin, you have access to all system information.
              </span>
            </div>
            <span className="text-[11px] bg-emerald-200/60 px-2 py-0.5 rounded text-emerald-800 font-bold">
              Super Administrator Access
            </span>
          </div>
        ) : (
          <div className="p-3 rounded-2xl bg-blue-50/80 border border-blue-200/80 text-blue-900 text-xs font-medium flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>
              <strong>Private Student Record:</strong> Only you ({user?.email}) have access to view your enrolled courses, certificates, and grades.
            </span>
          </div>
        )}

        {/* Welcome & Profile Header Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Left: User Avatar & Welcome */}
            <div className="flex items-center gap-4">
              <img
                src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'}
                alt={user?.name || 'Student'}
                referrerPolicy="no-referrer"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover ring-4 ring-blue-50 shadow-md"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                    Student Workspace
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full">
                    <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>7-Day Learning Streak</span>
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Welcome back, {user?.name || 'Aarav'}!
                </h1>

                <p className="text-xs text-slate-500 mt-0.5">
                  {user?.email} · Track your personal coding progress, submit assignments, and view certificates.
                </p>
              </div>
            </div>

            {/* Quick Metrics Badges */}
            <div className="flex items-center gap-3 sm:gap-4 self-start md:self-auto shrink-0">
              <div className="p-3.5 rounded-2xl bg-blue-50/80 border border-blue-100 text-center min-w-[90px]">
                <span className="text-xl font-extrabold text-blue-700 block font-mono-numbers">
                  {enrolledCourses.length}
                </span>
                <span className="text-[11px] font-semibold text-slate-600">My Courses</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-100 text-center min-w-[90px]">
                <span className="text-xl font-extrabold text-emerald-700 block font-mono-numbers">
                  {studentCertificates.length}
                </span>
                <span className="text-[11px] font-semibold text-slate-600">Certificates</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-purple-50/80 border border-purple-100 text-center min-w-[90px]">
                <span className="text-xl font-extrabold text-purple-700 block font-mono-numbers">
                  48.5h
                </span>
                <span className="text-[11px] font-semibold text-slate-600">Hours Logged</span>
              </div>
            </div>

          </div>

          {/* Navigation Sub-Tabs */}
          <div className="flex items-center gap-2 pt-6 mt-6 border-t border-slate-100 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Dashboard Overview
            </button>
            <button
              onClick={() => setActiveTab('courses')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'courses'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              My Enrolled Courses ({enrolledCourses.length})
            </button>
            <button
              onClick={() => setActiveTab('certificates')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'certificates'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              My Certificates ({studentCertificates.length})
            </button>
            <button
              onClick={() => setActiveTab('assignments')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'assignments'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              My Assignments & Quizzes
            </button>
          </div>
        </div>

        {/* Dashboard Content Areas */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (8 cols): Enrolled Courses & Progress Bars */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                      My Course Progress & Continue Learning
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Your personal learning path and curriculum status
                    </p>
                  </div>
                  <button
                    onClick={onExploreMoreCourses}
                    className="text-xs font-bold text-blue-600 hover:underline"
                  >
                    + Browse More Courses
                  </button>
                </div>

                {/* Progress List */}
                <div className="space-y-5">
                  {enrolledCourses.map((course) => {
                    const progress = getProgress(course.id);
                    return (
                      <div
                        key={course.id}
                        className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all space-y-3"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0">
                              <BookOpen className="w-5 h-5" />
                            </div>
                            <div>
                              <h3 className="text-sm font-bold text-slate-900">
                                {course.title}
                              </h3>
                              <p className="text-xs text-slate-500">
                                Instructor: {course.instructor.name} · {course.difficulty} Level
                              </p>
                            </div>
                          </div>

                          <button
                            onClick={() => startLearning(course)}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer self-start sm:self-auto shrink-0"
                          >
                            <Play className="w-3.5 h-3.5 fill-white" />
                            <span>Continue Learning</span>
                          </button>
                        </div>

                        {/* Progress Bar & Percentage */}
                        <div className="space-y-1.5 pt-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-500 font-medium">Curriculum Completion</span>
                            <span className="font-extrabold text-blue-600 font-mono-numbers">
                              {progress}% Complete
                            </span>
                          </div>
                          
                          {/* Visual Progress Bar */}
                          <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2.5 rounded-full transition-all duration-500"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        </div>

                        {progress === 100 && (
                          <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 text-xs">
                            <span className="text-emerald-700 font-bold flex items-center gap-1">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              <span>Course Completed!</span>
                            </span>
                            <button
                              onClick={() => {
                                const cert = studentCertificates.find(c => c.courseId === course.id) || studentCertificates[0];
                                if (cert) openCertificate(cert);
                              }}
                              className="text-amber-700 font-bold hover:underline flex items-center gap-1"
                            >
                              <Award className="w-3.5 h-3.5 text-amber-500" />
                              <span>View Certificate</span>
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Completed Courses & Certificates Quick Shelf */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-500" />
                    <h2 className="text-base sm:text-lg font-bold text-slate-900">
                      My Earned Credentials & Certificates
                    </h2>
                  </div>
                  <span className="text-xs text-slate-400">Verifiable credentials</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {studentCertificates.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-3"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">
                            Verified Certificate
                          </span>
                          <h4 className="text-sm font-bold text-slate-900 mt-0.5">{cert.courseName}</h4>
                          <p className="text-[11px] text-slate-500">Issued on {cert.issueDate}</p>
                        </div>
                        <Award className="w-6 h-6 text-amber-600 shrink-0" />
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-amber-200/60 text-xs">
                        <span className="text-[10px] font-mono text-slate-500">{cert.certificateId}</span>
                        <button
                          onClick={() => openCertificate(cert)}
                          className="px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-bold text-xs transition-colors cursor-pointer"
                        >
                          View Certificate
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column (4 cols): Upcoming Live Classes, Quizzes & Recent Activity */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Upcoming Live Classes */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <Video className="w-5 h-5 text-rose-500" />
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Upcoming Live Sessions
                  </h3>
                </div>

                <div className="space-y-3">
                  {liveClasses.map((live) => (
                    <div
                      key={live.id}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs"
                    >
                      <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200 inline-block">
                        Live Workshop
                      </span>
                      <h4 className="font-bold text-slate-900 leading-snug">
                        {live.title}
                      </h4>
                      <p className="text-slate-500 text-[11px]">
                        Mentor: {live.mentorName}
                      </p>
                      
                      <div className="pt-2 flex items-center justify-between text-slate-600">
                        <span className="font-medium font-mono-numbers">{live.time}</span>
                        <a
                          href={live.meetingUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 text-[11px]"
                        >
                          Join Class
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assignments Due */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-indigo-600" />
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                      My Assignments
                    </h3>
                  </div>
                  <span className="text-xs text-slate-400 font-mono-numbers">{assignments.length} Total</span>
                </div>

                <div className="space-y-3">
                  {assignments.slice(0, 3).map((asg) => (
                    <div
                      key={asg.id}
                      className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 space-y-2 text-xs"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-bold text-slate-900 line-clamp-2">{asg.title}</h4>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded capitalize shrink-0 ${
                            asg.status === 'graded'
                              ? 'bg-emerald-100 text-emerald-800'
                              : asg.status === 'submitted'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {asg.status}
                        </span>
                      </div>

                      <p className="text-[11px] text-slate-500">{asg.courseName}</p>

                      <div className="pt-1 flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">{asg.deadline}</span>
                        {asg.status === 'pending' ? (
                          <button
                            onClick={() => setSubmissionModalAssignmentId(asg.id)}
                            className="text-blue-600 hover:text-blue-800 font-bold"
                          >
                            Submit Code
                          </button>
                        ) : asg.status === 'graded' ? (
                          <span className="font-bold text-emerald-600">Score: {asg.score}%</span>
                        ) : (
                          <span className="text-blue-600 font-medium">In Review</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity Timeline */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  My Recent Learning Activity
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <div>
                      <p className="text-slate-800 font-semibold">Completed "Building Custom Hooks" in React 19</p>
                      <span className="text-[10px] text-slate-400">Today, 2:40 PM</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <div>
                      <p className="text-slate-800 font-semibold">Scored 10/10 in HTML5 & Web Standards Quiz</p>
                      <span className="text-[10px] text-slate-400">Yesterday</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <div>
                      <p className="text-slate-800 font-semibold">Earned Python Programming Distinction Certificate</p>
                      <span className="text-[10px] text-slate-400">Sep 20, 2026</span>
                    </div>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: Enrolled Courses Only */}
        {activeTab === 'courses' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map((course) => {
              const progress = getProgress(course.id);
              return (
                <div key={course.id} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {course.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mt-2">{course.title}</h3>
                    <p className="text-xs text-slate-500 mt-1">{course.shortDescription}</p>

                    <div className="mt-4 space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">My Progress</span>
                        <span className="font-bold text-blue-600 font-mono-numbers">{progress}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${progress}%` }} />
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => startLearning(course)}
                    className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Open Lesson Player</span>
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 3: Certificates Only */}
        {activeTab === 'certificates' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentCertificates.map((cert) => (
              <div key={cert.id} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 text-center">
                <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border-2 border-amber-300">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{cert.courseName}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{cert.grade} · Issued {cert.issueDate}</p>
                  <p className="text-[10px] font-mono text-slate-400 mt-1">{cert.certificateId}</p>
                </div>
                <button
                  onClick={() => openCertificate(cert)}
                  className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>View & Download Certificate</span>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Assignments & Quizzes */}
        {activeTab === 'assignments' && (
          <div className="space-y-8">
            {/* Assignments Table */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">My Project Submissions</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Assignment Name</th>
                      <th className="py-3 px-4">Course</th>
                      <th className="py-3 px-4">Deadline</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {assignments.map((asg) => (
                      <tr key={asg.id}>
                        <td className="py-3.5 px-4 font-bold text-slate-900">{asg.title}</td>
                        <td className="py-3.5 px-4 text-slate-500">{asg.courseName}</td>
                        <td className="py-3.5 px-4 text-slate-500">{asg.deadline}</td>
                        <td className="py-3.5 px-4">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold capitalize ${
                            asg.status === 'graded' ? 'bg-emerald-100 text-emerald-800' :
                            asg.status === 'submitted' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {asg.status} {asg.score ? `(${asg.score}%)` : ''}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          {asg.status === 'pending' ? (
                            <button
                              onClick={() => setSubmissionModalAssignmentId(asg.id)}
                              className="px-3 py-1 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700"
                            >
                              Submit
                            </button>
                          ) : (
                            <span className="text-slate-400">Submitted</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quiz Results Table */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">My Quiz Scores & Knowledge Checks</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Quiz Title</th>
                      <th className="py-3 px-4">Course</th>
                      <th className="py-3 px-4">Score</th>
                      <th className="py-3 px-4">Date Completed</th>
                      <th className="py-3 px-4">Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {quizResults.map((q) => (
                      <tr key={q.id}>
                        <td className="py-3.5 px-4 font-bold text-slate-900">{q.quizTitle}</td>
                        <td className="py-3.5 px-4 text-slate-500">{q.courseName}</td>
                        <td className="py-3.5 px-4 font-bold text-slate-900 font-mono-numbers">{q.score} / {q.totalQuestions}</td>
                        <td className="py-3.5 px-4 text-slate-400">{q.date}</td>
                        <td className="py-3.5 px-4">
                          <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold text-[10px]">
                            Passed
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Assignment Submit Modal */}
      {submissionModalAssignmentId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-xl border border-slate-200">
            <h3 className="text-base font-bold text-slate-900">Submit Project Solution</h3>
            <p className="text-xs text-slate-500">
              Provide your GitHub repository URL or live deployed demo link for mentor grading.
            </p>

            <form onSubmit={handleAssignmentSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  GitHub / Vercel Link
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://github.com/your-username/project-repo"
                  value={submissionLink}
                  onChange={(e) => setSubmissionLink(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setSubmissionModalAssignmentId(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-xs"
                >
                  Confirm Submission
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
