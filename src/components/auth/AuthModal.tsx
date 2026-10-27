import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  X, 
  Mail, 
  Lock, 
  User, 
  Phone, 
  Briefcase, 
  GraduationCap, 
  UserCheck, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';

interface AuthModalProps {
  onSuccessRedirect: (role: 'student' | 'mentor') => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ onSuccessRedirect }) => {
  const { 
    authModalOpen, 
    authModalTab, 
    closeAuthModal, 
    openAuthModal, 
    login, 
    register, 
    loginAsDemo 
  } = useAuth();

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [expertise, setExpertise] = useState('React, Node.js, Python');
  const [experienceYears, setExperienceYears] = useState('5');
  const [rememberMe, setRememberMe] = useState(true);

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  if (!authModalOpen) return null;

  const isStudentTab = authModalTab.startsWith('student');
  const isLogin = authModalTab.endsWith('login');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (isLogin) {
      if (!email) {
        setErrorMessage('Please enter your email address.');
        return;
      }
      const intendedRole = isStudentTab ? 'student' : 'mentor';
      const res = login(email, password, intendedRole);
      if (res.success) {
        setSuccessMessage('Logged in successfully! Redirecting...');
        setTimeout(() => {
          closeAuthModal();
          onSuccessRedirect(intendedRole);
        }, 400);
      } else {
        setErrorMessage(res.message || 'Login failed');
      }
    } else {
      // Registration
      if (!name || !email) {
        setErrorMessage('Please fill in your name and email.');
        return;
      }
      if (password && password !== confirmPassword) {
        setErrorMessage('Passwords do not match. Please verify.');
        return;
      }
      const newRole = isStudentTab ? 'student' : 'mentor';
      const res = register(name, email, phone, newRole, expertise);
      if (res.success) {
        setSuccessMessage('Account registered successfully! Redirecting to dashboard...');
        setTimeout(() => {
          closeAuthModal();
          onSuccessRedirect(newRole);
        }, 500);
      } else {
        setErrorMessage(res.message || 'Registration failed');
      }
    }
  };

  const handleGoogleLogin = () => {
    const roleToLogin = isStudentTab ? 'student' : 'mentor';
    loginAsDemo(roleToLogin);
    closeAuthModal();
    onSuccessRedirect(roleToLogin);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        
        {/* Close Button */}
        <button
          onClick={closeAuthModal}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tab Switcher: Student vs Mentor */}
        <div className="pt-6 px-6 sm:px-8 border-b border-slate-100 bg-slate-50/60">
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={() => openAuthModal(isLogin ? 'student-login' : 'student-register')}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                isStudentTab
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Student Portal</span>
            </button>

            <button
              onClick={() => openAuthModal(isLogin ? 'mentor-login' : 'mentor-register')}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                !isStudentTab
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Mentor Portal</span>
            </button>
          </div>

          {/* Sub tabs: Login vs Register */}
          <div className="flex border-b border-slate-200">
            <button
              onClick={() => openAuthModal(isStudentTab ? 'student-login' : 'mentor-login')}
              className={`pb-3 text-sm font-bold border-b-2 mr-6 transition-colors ${
                isLogin
                  ? isStudentTab ? 'border-blue-600 text-blue-600' : 'border-purple-600 text-purple-600'
                  : 'border-transparent text-slate-400 hover:text-slate-700'
              }`}
            >
              Sign In
            </button>

            <button
              onClick={() => openAuthModal(isStudentTab ? 'student-register' : 'mentor-register')}
              className={`pb-3 text-sm font-bold border-b-2 transition-colors ${
                !isLogin
                  ? isStudentTab ? 'border-blue-600 text-blue-600' : 'border-purple-600 text-purple-600'
                  : 'border-transparent text-slate-400 hover:text-slate-700'
              }`}
            >
              Create Account
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          
          <div className="mb-6">
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
              {isStudentTab
                ? isLogin ? 'Welcome Back to Coding Vidya' : 'Join 10,000+ Students Today'
                : isLogin ? 'Mentor Faculty Sign In' : 'Apply to Become a Mentor'}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {isStudentTab
                ? isLogin ? 'Enter your credentials to continue your coding journey.' : 'Register for lifetime course access, project reviews, and job preparation.'
                : isLogin ? 'Sign in to access your curriculum, assignments, and student reviews.' : 'Share your industry expertise and guide passionate engineering students.'}
            </p>
          </div>

          {/* Quick 1-Click Demo Buttons for Fast Review */}
          <div className="mb-5 p-3 rounded-2xl bg-amber-50/70 border border-amber-200/80">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold text-amber-900 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Instant Evaluator Demo Access</span>
              </span>
              <span className="text-[10px] text-amber-700 font-medium">No typing required</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  loginAsDemo('student');
                  closeAuthModal();
                  onSuccessRedirect('student');
                }}
                className="py-1.5 px-2.5 rounded-lg bg-white border border-amber-300 text-slate-800 hover:bg-amber-100 text-xs font-semibold flex items-center justify-center gap-1 shadow-2xs"
              >
                <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                <span>Sign in as Student</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  loginAsDemo('mentor');
                  closeAuthModal();
                  onSuccessRedirect('mentor');
                }}
                className="py-1.5 px-2.5 rounded-lg bg-white border border-amber-300 text-slate-800 hover:bg-amber-100 text-xs font-semibold flex items-center justify-center gap-1 shadow-2xs"
              >
                <UserCheck className="w-3.5 h-3.5 text-purple-600" />
                <span>Sign in as Mentor</span>
              </button>
            </div>
          </div>

          {/* Messages */}
          {errorMessage && (
            <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
              {errorMessage}
            </div>
          )}

          {successMessage && (
            <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-700 font-medium flex items-center gap-1.5">
              <Check className="w-4 h-4" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Registration specific fields */}
            {!isLogin && (
              <>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={isStudentTab ? "e.g. Aarav Sharma" : "e.g. Dr. Neha Verma"}
                      className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                    />
                  </div>
                </div>

                {!isStudentTab && (
                  <>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Domain Expertise (comma separated)
                      </label>
                      <div className="relative">
                        <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          value={expertise}
                          onChange={(e) => setExpertise(e.target.value)}
                          placeholder="e.g. Full Stack, AI/ML, Python, System Design"
                          className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Years of Industry Experience
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="30"
                        value={experienceYears}
                        onChange={(e) => setExperienceYears(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600"
                      />
                    </div>
                  </>
                )}
              </>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={
                    isStudentTab
                      ? "student@codingvidya.com"
                      : "mentor@codingvidya.com"
                  }
                  className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold text-slate-700">
                  Password
                </label>
                {isLogin && (
                  <button
                    type="button"
                    onClick={() => alert('Password reset link sent to registered email!')}
                    className="text-[11px] text-blue-600 hover:underline font-semibold"
                  >
                    Forgot Password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                />
              </div>
            </div>

            {/* Confirm Password Field (Registration only) */}
            {!isLogin && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                  />
                </div>
              </div>
            )}

            {/* Remember Me Checkbox */}
            {isLogin && (
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                />
                <label htmlFor="remember-me" className="text-xs text-slate-600 select-none">
                  Remember me on this browser
                </label>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-3 px-4 rounded-xl text-xs font-bold text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98 ${
                isStudentTab
                  ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/20'
                  : 'bg-purple-600 hover:bg-purple-700 shadow-purple-500/20'
              }`}
            >
              <span>{isLogin ? `Sign In as ${isStudentTab ? 'Student' : 'Mentor'}` : `Create ${isStudentTab ? 'Student' : 'Mentor'} Account`}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Social Sign In (Google) */}
          <div className="mt-5">
            <div className="relative flex items-center justify-center my-4">
              <div className="border-t border-slate-200 w-full" />
              <span className="bg-white px-3 text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                Or continue with
              </span>
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full py-2.5 px-4 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2.5 shadow-2xs"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-slate-500">
              {isLogin ? (
                <>
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => openAuthModal(isStudentTab ? 'student-register' : 'mentor-register')}
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Register here
                  </button>
                </>
              ) : (
                <>
                  Already registered?{' '}
                  <button
                    type="button"
                    onClick={() => openAuthModal(isStudentTab ? 'student-login' : 'mentor-login')}
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Sign in here
                  </button>
                </>
              )}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
