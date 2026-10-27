import React from 'react';
import { ShieldAlert, Lock, ArrowLeft, UserCheck, GraduationCap, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { UserRole } from '../../types';

interface AccessDeniedProps {
  requiredRole: 'student' | 'mentor' | 'admin';
  currentRole: UserRole;
  onNavigateHome: () => void;
  onSwitchRole?: (role: UserRole) => void;
}

export const AccessDenied: React.FC<AccessDeniedProps> = ({
  requiredRole,
  currentRole,
  onNavigateHome,
  onSwitchRole
}) => {
  const { openAuthModal } = useAuth();

  const getRoleTitle = (role: string) => {
    if (role === 'mentor') return 'Teacher / Mentor';
    if (role === 'admin') return 'Platform Administrator';
    if (role === 'student') return 'Enrolled Student';
    return 'Authorized User';
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4 bg-slate-50">
      <div className="max-w-lg w-full bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-10 text-center space-y-6">
        
        {/* Security Shield Icon */}
        <div className="w-16 h-16 rounded-3xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center mx-auto shadow-inner">
          <ShieldAlert className="w-8 h-8 stroke-[2.2]" />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold border border-rose-200">
            <Lock className="w-3.5 h-3.5" />
            <span>Role-Based Access Control (RBAC) Enforced</span>
          </div>

          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Access Restricted
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            {currentRole === 'guest' ? (
              <>
                You must be logged in to view this section. Please sign in with an authorized account.
              </>
            ) : currentRole === 'student' ? (
              <>
                You are currently signed in as a <strong className="text-slate-900 font-bold">Student</strong>. Under Coding Vidya's data privacy policy, students can only view their own student info and coursework, and cannot access Teacher or Admin records.
              </>
            ) : currentRole === 'mentor' ? (
              <>
                You are currently signed in as a <strong className="text-slate-900 font-bold">Teacher / Mentor</strong>. Teachers can only access teacher tools and course records, and do not have access to platform administration or private personal student dashboards.
              </>
            ) : (
              <>
                This section requires <strong className="text-slate-900 font-bold">{getRoleTitle(requiredRole)}</strong> permissions.
              </>
            )}
          </p>
        </div>

        {/* Quick Permission Switcher for Testing */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5 text-xs text-left">
          <span className="font-bold text-slate-700 block uppercase tracking-wider text-[11px]">
            Switch role to test access boundaries:
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              onClick={() => onSwitchRole?.('student')}
              className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                currentRole === 'student'
                  ? 'bg-blue-600 text-white border-blue-700'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Student</span>
            </button>

            <button
              onClick={() => onSwitchRole?.('mentor')}
              className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                currentRole === 'mentor'
                  ? 'bg-purple-600 text-white border-purple-700'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Teacher</span>
            </button>

            <button
              onClick={() => onSwitchRole?.('admin')}
              className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                currentRole === 'admin'
                  ? 'bg-emerald-600 text-white border-emerald-700'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin (All)</span>
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onNavigateHome}
            className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>

          {currentRole === 'guest' && (
            <button
              onClick={() => openAuthModal('student-login')}
              className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              Sign In to Your Account
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
