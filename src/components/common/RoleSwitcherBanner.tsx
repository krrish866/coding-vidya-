import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { UserCheck, GraduationCap, ShieldCheck, LogOut } from 'lucide-react';
import { UserRole } from '../../types';

interface RoleSwitcherBannerProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export const RoleSwitcherBanner: React.FC<RoleSwitcherBannerProps> = ({ currentTab, setCurrentTab }) => {
  const { user, role, switchRole, openAuthModal, logout } = useAuth();

  return (
    <div className="bg-slate-950 text-slate-200 text-xs py-1.5 px-4 border-b border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-end">
        {/* 1-Click Role Switcher */}
        <div className="flex items-center gap-1.5 flex-wrap justify-center sm:justify-end w-full sm:w-auto">
          <span className="text-[11px] text-slate-500 mr-1 hidden sm:inline">Active Mode:</span>

          {/* Student Button */}
          <button
            onClick={() => {
              switchRole('student');
              setCurrentTab('student-dashboard');
            }}
            className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 font-bold text-xs cursor-pointer ${
              role === 'student'
                ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-400/30'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
            title="Active: Student (Aarav) - Can only view student courses, assignments & certificates"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Student {role === 'student' && '(Active)'}</span>
          </button>

          {/* Teacher (Mentor) Button */}
          <button
            onClick={() => {
              switchRole('mentor');
              setCurrentTab('mentor-dashboard');
            }}
            className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 font-bold text-xs cursor-pointer ${
              role === 'mentor'
                ? 'bg-purple-600 text-white shadow-sm ring-2 ring-purple-400/30'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
            title="Active: Teacher (Dr. Neha) - Can only view faculty tools, course management & submissions"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Teacher {role === 'mentor' && '(Active)'}</span>
          </button>

          {/* Admin Button */}
          <button
            onClick={() => {
              switchRole('admin');
              setCurrentTab('admin-dashboard');
            }}
            className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 font-bold text-xs cursor-pointer ${
              role === 'admin'
                ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-400/30'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
            title="Active: Platform Admin - Full complete oversight of all students, all teachers & revenue"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Admin (All Info) {role === 'admin' && '(Active)'}</span>
          </button>

          {user ? (
            <button
              onClick={() => {
                logout();
                setCurrentTab('home');
              }}
              className="text-slate-400 hover:text-rose-400 transition-colors px-2 py-1 flex items-center gap-1 ml-1 text-xs cursor-pointer"
              title="Sign out to Guest view"
            >
              <LogOut className="w-3 h-3" />
              <span className="hidden sm:inline">Guest</span>
            </button>
          ) : (
            <button
              onClick={() => openAuthModal('student-login')}
              className="text-blue-400 hover:text-blue-300 font-bold px-2 py-1 text-xs"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
