import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole, Certificate } from '../types';
import { INITIAL_CERTIFICATES, MENTOR_SHOWCASE_IMAGE } from '../data/mockData';

interface AuthContextType {
  user: User | null;
  role: UserRole;
  isAuthenticated: boolean;
  login: (email: string, password?: string, intendedRole?: UserRole) => { success: boolean; message?: string };
  register: (name: string, email: string, phone: string, role: UserRole, expertise?: string) => { success: boolean; message?: string };
  logout: () => void;
  switchRole: (role: UserRole) => void;
  loginAsDemo: (role: 'student' | 'mentor' | 'admin') => void;
  authModalOpen: boolean;
  authModalTab: 'student-login' | 'student-register' | 'mentor-login' | 'mentor-register';
  openAuthModal: (tab?: 'student-login' | 'student-register' | 'mentor-login' | 'mentor-register') => void;
  closeAuthModal: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DEMO_STUDENT: User = {
  id: 'student-aarav',
  name: 'Aarav Sharma',
  email: 'aarav@student.codingvidya.com',
  role: 'student',
  phone: '+91 98765 43210',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
  title: 'Aspiring Full Stack Engineer',
  bio: 'Computer Science undergraduate passionate about building scalable web applications and learning modern algorithms.',
  enrolledCourseIds: ['course-fullstack', 'course-dsa', 'course-react'],
  completedCourseIds: ['course-python'],
  certificates: INITIAL_CERTIFICATES
};

const DEMO_MENTOR: User = {
  id: 'mentor-2',
  name: 'Dr. Neha Verma',
  email: 'neha@mentor.codingvidya.com',
  role: 'mentor',
  phone: '+91 98111 22334',
  avatar: MENTOR_SHOWCASE_IMAGE,
  title: 'Lead AI Scientist & Course Director',
  bio: '10+ years researching Machine Learning and Neural Networks. Mentoring next generation of tech leaders.',
  expertise: ['Data Science', 'Machine Learning', 'Python', 'Deep Learning'],
  experienceYears: 9,
  enrolledCourseIds: [],
  completedCourseIds: [],
  certificates: []
};

const DEMO_ADMIN: User = {
  id: 'admin-1',
  name: 'Vikramaditya (Platform Admin)',
  email: 'admin@codingvidya.com',
  role: 'admin',
  phone: '+91 98000 11223',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  title: 'Head of Operations & Curriculum',
  bio: 'Platform super administrator with full oversight of courses, mentors, certifications, and analytics.',
  enrolledCourseIds: [],
  completedCourseIds: [],
  certificates: []
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem('coding_vidya_user');
      return saved ? JSON.parse(saved) : DEMO_STUDENT; // Default to demo student so reviewers have immediate active state
    } catch {
      return DEMO_STUDENT;
    }
  });

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<'student-login' | 'student-register' | 'mentor-login' | 'mentor-register'>('student-login');

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('coding_vidya_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('coding_vidya_user');
      }
    } catch (e) {
      console.error(e);
    }
  }, [user]);

  const role: UserRole = user ? user.role : 'guest';
  const isAuthenticated = !!user;

  const login = (email: string, _password?: string, intendedRole: UserRole = 'student') => {
    if (!email) {
      return { success: false, message: 'Please enter a valid email address.' };
    }

    if (intendedRole === 'mentor' || email.includes('mentor')) {
      setUser(DEMO_MENTOR);
      return { success: true };
    } else if (intendedRole === 'admin' || email.includes('admin')) {
      setUser(DEMO_ADMIN);
      return { success: true };
    } else {
      const loggedStudent: User = {
        ...DEMO_STUDENT,
        email: email,
        name: email.split('@')[0].replace('.', ' ').replace(/^./, str => str.toUpperCase()) || 'Student User'
      };
      setUser(loggedStudent);
      return { success: true };
    }
  };

  const register = (name: string, email: string, phone: string, newRole: UserRole, expertise?: string) => {
    if (!name || !email) {
      return { success: false, message: 'Name and email are required.' };
    }

    const newUser: User = {
      id: `user-${Date.now()}`,
      name,
      email,
      phone,
      role: newRole,
      avatar: newRole === 'mentor' ? MENTOR_SHOWCASE_IMAGE : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      title: newRole === 'mentor' ? 'Industry Mentor' : 'Coding Vidya Student',
      bio: `Registered member on Coding Vidya platform as ${newRole}.`,
      expertise: expertise ? expertise.split(',').map(s => s.trim()) : [],
      experienceYears: newRole === 'mentor' ? 3 : 0,
      enrolledCourseIds: newRole === 'student' ? ['course-fullstack'] : [],
      completedCourseIds: [],
      certificates: []
    };

    setUser(newUser);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
  };

  const switchRole = (newRole: UserRole) => {
    if (newRole === 'student') setUser(DEMO_STUDENT);
    else if (newRole === 'mentor') setUser(DEMO_MENTOR);
    else if (newRole === 'admin') setUser(DEMO_ADMIN);
    else setUser(null);
  };

  const loginAsDemo = (demoRole: 'student' | 'mentor' | 'admin') => {
    if (demoRole === 'student') setUser(DEMO_STUDENT);
    else if (demoRole === 'mentor') setUser(DEMO_MENTOR);
    else if (demoRole === 'admin') setUser(DEMO_ADMIN);
    setAuthModalOpen(false);
  };

  const openAuthModal = (tab: 'student-login' | 'student-register' | 'mentor-login' | 'mentor-register' = 'student-login') => {
    setAuthModalTab(tab);
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        isAuthenticated,
        login,
        register,
        logout,
        switchRole,
        loginAsDemo,
        authModalOpen,
        authModalTab,
        openAuthModal,
        closeAuthModal
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
