import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useCourses } from '../../context/CourseContext';
import { MENTORS, STUDENT_REVIEWS } from '../../data/mockData';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  Layers, 
  Award, 
  DollarSign, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Search, 
  Star,
  Settings,
  Plus,
  Trash2,
  Lock,
  Eye
} from 'lucide-react';
import { AccessDenied } from '../common/AccessDenied';

interface AdminDashboardProps {
  onNavigateHome?: () => void;
  onInspectStudent?: () => void;
  onInspectTeacher?: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  onNavigateHome = () => {},
  onInspectStudent = () => {},
  onInspectTeacher = () => {}
}) => {
  const { role, switchRole } = useAuth();
  const { courses, certificates } = useCourses();
  const [activeTab, setActiveTab] = useState<'overview' | 'students' | 'mentors' | 'courses' | 'certificates' | 'reviews'>('overview');
  const [searchFilter, setSearchFilter] = useState('');

  // RBAC Check: Only Admin can access the Admin Dashboard!
  if (role !== 'admin') {
    return (
      <AccessDenied
        requiredRole="admin"
        currentRole={role}
        onNavigateHome={onNavigateHome}
        onSwitchRole={(newRole) => switchRole(newRole)}
      />
    );
  }

  // Sample Students Table - Visible to Admin
  const [studentsList, setStudentsList] = useState([
    { id: 'std-1', name: 'Aarav Sharma', email: 'aarav@student.codingvidya.com', coursesCount: 3, progressAvg: 55, status: 'Active (In Progress)', enrolled: 'Python, DSA, Full Stack' },
    { id: 'std-2', name: 'Priya Iyer', email: 'priya.iyer@gmail.com', coursesCount: 2, progressAvg: 90, status: 'Active (Almost Done)', enrolled: 'Full Stack, React.js' },
    { id: 'std-3', name: 'Vikas Sharma', email: 'vikas.s@outlook.com', coursesCount: 4, progressAvg: 100, status: 'Placed @ Razorpay (14.5 LPA)', enrolled: 'Full Stack, Next.js, DSA' },
    { id: 'std-4', name: 'Kavita Sen', email: 'kavita.sen@yahoo.com', coursesCount: 1, progressAvg: 40, status: 'Active', enrolled: 'Database Engineering' },
    { id: 'std-5', name: 'Ritesh Varma', email: 'ritesh.v@gmail.com', coursesCount: 3, progressAvg: 95, status: 'Placed @ Microsoft (32 LPA)', enrolled: 'Tech Interview Mastery, DSA' },
    { id: 'std-6', name: 'Sneha Patel', email: 'sneha.patel@techmail.com', coursesCount: 2, progressAvg: 100, status: 'Placed @ Deloitte (11 LPA)', enrolled: 'Data Science & ML' }
  ]);

  const [reviewsList, setReviewsList] = useState(STUDENT_REVIEWS);

  const handleDeleteReview = (id: string) => {
    setReviewsList(prev => prev.filter(r => r.id !== id));
    alert('Review removed from public platform.');
  };

  const filteredStudents = studentsList.filter(s =>
    s.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
    s.email.toLowerCase().includes(searchFilter.toLowerCase()) ||
    s.enrolled.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Admin Header with All Info Access Badge */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Admin Master Oversight — All Information Accessible</span>
                </span>
                <span className="text-xs text-slate-500 font-medium">Unrestricted Platform Privileges</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Admin Control Center
              </h1>
              <p className="text-xs text-slate-500 mt-0.5">
                Complete access to all student records, faculty mentors, course management, cryptographically issued certificates, and revenue telemetry.
              </p>
            </div>

            <div className="flex items-center gap-2.5 flex-wrap">
              <button
                onClick={onInspectStudent}
                className="px-3.5 py-2 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Inspect how a student views their personal dashboard"
              >
                <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                <span>Inspect Student View</span>
              </button>

              <button
                onClick={onInspectTeacher}
                className="px-3.5 py-2 rounded-xl bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Inspect how a teacher views their faculty console"
              >
                <Users className="w-3.5 h-3.5 text-purple-600" />
                <span>Inspect Teacher View</span>
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 pt-6 mt-6 border-t border-slate-100 overflow-x-auto scrollbar-none">
            {[
              { id: 'overview', label: 'Platform Analytics & Revenue' },
              { id: 'students', label: `All Students Directory (${studentsList.length})` },
              { id: 'mentors', label: `All Teachers / Mentors (${MENTORS.length})` },
              { id: 'courses', label: `All Platform Courses (${courses.length})` },
              { id: 'certificates', label: `All Issued Certificates (${certificates.length})` },
              { id: 'reviews', label: 'Review Moderation' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 5 KPI Metric Cards for Admin */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-xs font-bold text-slate-500 uppercase">Total Students</span>
            <span className="text-2xl font-black text-slate-900 block mt-2 font-mono-numbers">12,480</span>
            <span className="text-[11px] text-emerald-600 font-bold block mt-1">+18% this month</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-xs font-bold text-slate-500 uppercase">Total Mentors</span>
            <span className="text-2xl font-black text-slate-900 block mt-2 font-mono-numbers">28</span>
            <span className="text-[11px] text-slate-500 block mt-1">Tier-1 FAANG Faculty</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-xs font-bold text-slate-500 uppercase">Total Courses</span>
            <span className="text-2xl font-black text-slate-900 block mt-2 font-mono-numbers">{courses.length}</span>
            <span className="text-[11px] text-indigo-600 font-bold block mt-1">6 Career Roadmaps</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-xs font-bold text-slate-500 uppercase">Total Enrollments</span>
            <span className="text-2xl font-black text-slate-900 block mt-2 font-mono-numbers">38,200</span>
            <span className="text-[11px] text-purple-600 font-bold block mt-1">Avg 3.1 / student</span>
          </div>

          <div className="col-span-2 lg:col-span-1 p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-xs font-bold text-slate-500 uppercase">Gross Revenue</span>
            <span className="text-2xl font-black text-emerald-600 block mt-2 font-mono-numbers">₹4.82 Cr</span>
            <span className="text-[11px] text-emerald-600 font-bold block mt-1">94% gross margin</span>
          </div>
        </div>

        {/* Tab 1: Overview & Analytics */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-slate-900">Enrollment & Hiring Placement Metrics</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-slate-500 font-bold uppercase">Average Placement CTC</span>
                  <span className="text-xl font-extrabold text-blue-700 block mt-1 font-mono-numbers">₹14.2 LPA</span>
                  <p className="text-[11px] text-slate-500 mt-1">Highest: ₹38 LPA (Uber)</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-slate-500 font-bold uppercase">Placement Success</span>
                  <span className="text-xl font-extrabold text-emerald-700 block mt-1 font-mono-numbers">94.8%</span>
                  <p className="text-[11px] text-slate-500 mt-1">Within 180 days of graduation</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-slate-500 font-bold uppercase">Certificates Issued</span>
                  <span className="text-xl font-extrabold text-purple-700 block mt-1 font-mono-numbers">8,940</span>
                  <p className="text-[11px] text-slate-500 mt-1">Verifiable on public ledger</p>
                </div>
              </div>

              {/* Top performing programs */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Top Revenue & Enrolled Programs
                </h4>
                <div className="space-y-2">
                  {courses.slice(0, 4).map((c) => (
                    <div key={c.id} className="p-3.5 rounded-xl bg-slate-50 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-slate-900 block">{c.title}</span>
                        <span className="text-[11px] text-slate-500">{c.instructor.name} · {c.category}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-900 font-bold font-mono-numbers block">₹{((c.price || 2499) * c.reviewsCount * 4).toLocaleString()}</span>
                        <span className="text-slate-500 text-[11px]">{c.reviewsCount * 4} Students</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200 p-6 space-y-4">
              <h3 className="text-base font-bold text-slate-900">System Telemetry & Access Logs</h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-center justify-between">
                  <span>RBAC Access Enforcement</span>
                  <span className="text-emerald-600 font-bold">100% Active</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Database Integrity</span>
                  <span className="text-emerald-600 font-bold">Encrypted & Nominal</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Active Student Sessions</span>
                  <span className="text-blue-600 font-bold font-mono-numbers">1,420 Live</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Faculty Mentor Sessions</span>
                  <span className="text-purple-600 font-bold font-mono-numbers">18 Live</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => alert('Platform security report exported.')}
                  className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Export Audit Compliance Report
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Manage All Students Table (Admin sees all student info) */}
        {activeTab === 'students' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">All Registered Students (Admin Access)</h3>
                <p className="text-xs text-slate-500">Admin can view all students, their enrolled courses, progress, and placement status.</p>
              </div>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search students, emails, courses..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="text-xs pl-9 pr-4 py-2 rounded-xl border border-slate-200 w-full sm:w-64"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Student Name</th>
                    <th className="py-3 px-4">Email Address</th>
                    <th className="py-3 px-4">Enrolled Courses</th>
                    <th className="py-3 px-4">Average Progress</th>
                    <th className="py-3 px-4">Placement Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredStudents.map((std) => (
                    <tr key={std.id}>
                      <td className="py-3.5 px-4 font-bold text-slate-900">{std.name}</td>
                      <td className="py-3.5 px-4 text-slate-500 font-mono text-[11px]">{std.email}</td>
                      <td className="py-3.5 px-4 text-slate-700">{std.enrolled}</td>
                      <td className="py-3.5 px-4 font-bold text-blue-600 font-mono-numbers">{std.progressAvg}%</td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          std.status.includes('Placed') ? 'bg-purple-100 text-purple-800' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {std.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => alert(`Admin reviewing complete academic file for ${std.name} (${std.email})`)}
                          className="text-blue-600 hover:underline font-bold flex items-center gap-1 justify-end ml-auto"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Full Record</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Manage All Mentors Table (Admin sees all mentor info) */}
        {activeTab === 'mentors' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">All Faculty Mentors (Admin Access)</h3>
                <p className="text-xs text-slate-500">Admin can oversee all teachers, ratings, assigned curriculum, and student feedback.</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Mentor Name</th>
                    <th className="py-3 px-4">Company & Title</th>
                    <th className="py-3 px-4">Experience</th>
                    <th className="py-3 px-4">Rating</th>
                    <th className="py-3 px-4">Active Courses</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {MENTORS.map((m) => (
                    <tr key={m.id}>
                      <td className="py-3.5 px-4 font-bold text-slate-900">{m.name}</td>
                      <td className="py-3.5 px-4 text-slate-600">{m.company} · {m.title}</td>
                      <td className="py-3.5 px-4 font-mono-numbers">{m.experienceYears} Years</td>
                      <td className="py-3.5 px-4 font-bold text-amber-600 font-mono-numbers">{m.rating}★</td>
                      <td className="py-3.5 px-4 font-mono-numbers">{m.coursesCount}</td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => alert(`Admin verifying faculty credentials for ${m.name}`)}
                          className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded font-bold hover:bg-slate-200"
                        >
                          Manage Faculty
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: Manage Courses */}
        {activeTab === 'courses' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">All Published Courses ({courses.length})</h3>
              <button
                onClick={() => alert('Opening course publishing wizard')}
                className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Create New Program</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Course Title</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Level</th>
                    <th className="py-3 px-4">Instructor</th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {courses.map((c) => (
                    <tr key={c.id}>
                      <td className="py-3.5 px-4 font-bold text-slate-900">{c.title}</td>
                      <td className="py-3.5 px-4 text-slate-500">{c.category}</td>
                      <td className="py-3.5 px-4 text-slate-600">{c.difficulty}</td>
                      <td className="py-3.5 px-4 text-slate-600">{c.instructor.name}</td>
                      <td className="py-3.5 px-4 font-bold font-mono-numbers">
                        {c.isFree ? 'Free' : `₹${c.price}`}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold text-[10px]">
                          Live
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 5: Issued Certificates */}
        {activeTab === 'certificates' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Cryptographically Issued Certificates (Admin Ledger)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Certificate ID</th>
                    <th className="py-3 px-4">Student Name</th>
                    <th className="py-3 px-4">Course</th>
                    <th className="py-3 px-4">Issue Date</th>
                    <th className="py-3 px-4">Grade</th>
                    <th className="py-3 px-4 text-right">Verification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {certificates.map((cert) => (
                    <tr key={cert.id}>
                      <td className="py-3.5 px-4 font-mono font-bold text-blue-600">{cert.certificateId}</td>
                      <td className="py-3.5 px-4 font-bold text-slate-900">{cert.studentName}</td>
                      <td className="py-3.5 px-4 text-slate-600">{cert.courseName}</td>
                      <td className="py-3.5 px-4 text-slate-400">{cert.issueDate}</td>
                      <td className="py-3.5 px-4 font-bold text-emerald-600">{cert.grade}</td>
                      <td className="py-3.5 px-4 text-right">
                        <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold text-[10px]">
                          Verified
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 6: Moderate Reviews */}
        {activeTab === 'reviews' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Student Reviews Moderation Queue</h3>
            <div className="space-y-3">
              {reviewsList.map((rev) => (
                <div key={rev.id} className="p-4 rounded-xl border border-slate-200 flex items-center justify-between gap-4 text-xs">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">{rev.studentName}</span>
                      <span className="text-slate-400">({rev.course})</span>
                      <span className="text-amber-500 font-bold font-mono-numbers">{rev.rating}★</span>
                    </div>
                    <p className="text-slate-600 mt-1 italic">"{rev.review}"</p>
                  </div>
                  <button
                    onClick={() => handleDeleteReview(rev.id)}
                    className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer shrink-0"
                    title="Remove Review"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
