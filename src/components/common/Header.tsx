import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  Code2, 
  Menu, 
  X, 
  ChevronDown, 
  GraduationCap, 
  UserCheck, 
  ShieldCheck, 
  LogOut,
  LayoutDashboard,
  Award,
  Sparkles,
  Lock,
  BookOpen
} from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, setCurrentTab }) => {
  const { user, role, logout, openAuthModal } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Courses' },
    { id: 'roadmap', label: 'Career Roadmap' },
    { id: 'mentors', label: 'Mentors' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getDashboardTarget = () => {
    if (role === 'mentor') return 'mentor-dashboard';
    if (role === 'admin') return 'admin-dashboard';
    return 'student-dashboard';
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 leading-none">
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                Coding <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Vidya</span>
              </span>
            </div>
            <p className="text-[10px] text-slate-600 font-medium tracking-wider uppercase mt-0.5">
              Empowering Tech Careers
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all ${
                  isActive
                    ? 'text-blue-600 bg-blue-50/80 font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions & Authentication Area */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2.5 p-1.5 pr-3 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all text-left"
              >
                <img
                  src={user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'}
                  alt={user.name}
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 rounded-lg object-cover ring-2 ring-blue-500/20"
                />
                <div className="leading-tight hidden sm:block">
                  <span className="text-xs font-bold text-slate-900 block truncate max-w-[120px]">
                    {user.name}
                  </span>
                  <span className={`text-[10px] font-bold capitalize ${
                    role === 'admin' ? 'text-emerald-600' : role === 'mentor' ? 'text-purple-600' : 'text-blue-600'
                  }`}>
                    {role === 'mentor' ? 'Teacher' : role === 'admin' ? 'Admin' : 'Student'} Info
                  </span>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {userDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200/80 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseLeave={() => setUserDropdownOpen(false)}
                >
                  <div className="px-4 py-3 border-b border-slate-100">
                    <p className="text-xs font-semibold text-slate-500">Authorized Profile</p>
                    <p className="text-sm font-bold text-slate-900 truncate">{user.name}</p>
                    <p className="text-[11px] text-slate-500 truncate">{user.email}</p>
                    <div className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-bold px-2 py-0.5 rounded-full capitalize">
                      {role === 'student' && (
                        <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded flex items-center gap-1">
                          <GraduationCap className="w-3.5 h-3.5" /> Student Account
                        </span>
                      )}
                      {role === 'mentor' && (
                        <span className="text-purple-700 bg-purple-50 px-2 py-0.5 rounded flex items-center gap-1">
                          <UserCheck className="w-3.5 h-3.5" /> Teacher Account
                        </span>
                      )}
                      {role === 'admin' && (
                        <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" /> Admin (All Access)
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Role-Specific Allowed Links */}
                  <div className="py-1">
                    
                    {/* Student Only Views */}
                    {role === 'student' && (
                      <>
                        <button
                          onClick={() => {
                            handleNavClick('student-dashboard');
                            setUserDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-bold flex items-center gap-2"
                        >
                          <LayoutDashboard className="w-4 h-4 text-blue-500" />
                          <span>My Student Dashboard</span>
                        </button>

                        <button
                          onClick={() => {
                            handleNavClick('student-dashboard');
                            setUserDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium flex items-center gap-2"
                        >
                          <Award className="w-4 h-4 text-amber-500" />
                          <span>My Certificates & Grades</span>
                        </button>
                      </>
                    )}

                    {/* Teacher Only Views */}
                    {role === 'mentor' && (
                      <>
                        <button
                          onClick={() => {
                            handleNavClick('mentor-dashboard');
                            setUserDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-purple-50 hover:text-purple-600 font-bold flex items-center gap-2"
                        >
                          <LayoutDashboard className="w-4 h-4 text-purple-600" />
                          <span>Teacher Console</span>
                        </button>

                        <button
                          onClick={() => {
                            handleNavClick('mentor-dashboard');
                            setUserDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-purple-50 hover:text-purple-600 font-medium flex items-center gap-2"
                        >
                          <BookOpen className="w-4 h-4 text-purple-500" />
                          <span>My Courses & Submissions</span>
                        </button>
                      </>
                    )}

                    {/* Admin Views All */}
                    {role === 'admin' && (
                      <>
                        <button
                          onClick={() => {
                            handleNavClick('admin-dashboard');
                            setUserDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 font-bold flex items-center gap-2"
                        >
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                          <span>Admin Control Center</span>
                        </button>

                        <button
                          onClick={() => {
                            handleNavClick('student-dashboard');
                            setUserDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 font-medium flex items-center gap-2"
                        >
                          <GraduationCap className="w-4 h-4 text-blue-500" />
                          <span>Inspect Student Records</span>
                        </button>

                        <button
                          onClick={() => {
                            handleNavClick('mentor-dashboard');
                            setUserDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 font-medium flex items-center gap-2"
                        >
                          <UserCheck className="w-4 h-4 text-purple-500" />
                          <span>Inspect Teacher Records</span>
                        </button>
                      </>
                    )}

                  </div>

                  <div className="border-t border-slate-100 pt-1">
                    <button
                      onClick={() => {
                        logout();
                        setUserDropdownOpen(false);
                        setCurrentTab('home');
                      }}
                      className="w-full text-left px-4 py-2 text-xs text-rose-600 hover:bg-rose-50 font-medium flex items-center gap-2"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => openAuthModal('student-login')}
                className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Student Login
              </button>

              <button
                onClick={() => openAuthModal('mentor-login')}
                className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-purple-600 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <UserCheck className="w-3.5 h-3.5 text-purple-600" />
                <span>Teacher Login</span>
              </button>
            </div>
          )}

          {/* CTA Button */}
          <button
            onClick={() => {
              if (user) {
                handleNavClick(getDashboardTarget());
              } else {
                openAuthModal('student-register');
              }
            }}
            className={`px-5 py-2.5 text-xs font-bold text-white rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap active:scale-95 ${
              role === 'mentor'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-purple-500/20'
                : role === 'admin'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 shadow-emerald-500/20'
                : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-blue-500/20'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {user 
                ? role === 'mentor' 
                  ? 'Teacher Console' 
                  : role === 'admin' 
                  ? 'Admin Console' 
                  : 'Student Dashboard' 
                : 'Get Started'}
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          {user && (
            <button
              onClick={() => handleNavClick(getDashboardTarget())}
              className={`p-1.5 rounded-lg border text-xs font-bold flex items-center gap-1 ${
                role === 'mentor'
                  ? 'border-purple-200 bg-purple-50 text-purple-700'
                  : role === 'admin'
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                  : 'border-blue-200 bg-blue-50 text-blue-700'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>{role === 'mentor' ? 'Teacher' : role === 'admin' ? 'Admin' : 'Student'}</span>
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  currentTab === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="border-t border-slate-100 pt-3 space-y-2">
            {user ? (
              <div className="space-y-2">
                <button
                  onClick={() => handleNavClick(getDashboardTarget())}
                  className="w-full py-2.5 px-4 bg-blue-600 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Go to {role === 'mentor' ? 'Teacher' : role === 'admin' ? 'Admin' : 'Student'} Console</span>
                </button>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                    setCurrentTab('home');
                  }}
                  className="w-full py-2 px-4 border border-rose-200 text-rose-600 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    openAuthModal('student-login');
                    setMobileMenuOpen(false);
                  }}
                  className="py-2.5 px-3 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 text-center"
                >
                  Student Login
                </button>
                <button
                  onClick={() => {
                    openAuthModal('mentor-login');
                    setMobileMenuOpen(false);
                  }}
                  className="py-2.5 px-3 border border-purple-200 bg-purple-50 text-purple-700 rounded-xl text-xs font-bold hover:bg-purple-100 text-center"
                >
                  Teacher Login
                </button>
                <button
                  onClick={() => {
                    openAuthModal('student-register');
                    setMobileMenuOpen(false);
                  }}
                  className="col-span-2 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-sm font-bold text-center shadow-md shadow-blue-500/20"
                >
                  Get Started (Join Coding Vidya)
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
