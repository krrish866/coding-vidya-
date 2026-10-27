/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CourseProvider, useCourses } from './context/CourseContext';

// Common Components
import { RoleSwitcherBanner } from './components/common/RoleSwitcherBanner';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { CertificateModal } from './components/common/CertificateModal';
import { AuthModal } from './components/auth/AuthModal';

// Home Sections
import { Hero } from './components/home/Hero';
import { StatsBar } from './components/home/StatsBar';
import { PopularCourses } from './components/home/PopularCourses';
import { WhyChooseUs } from './components/home/WhyChooseUs';
import { LearningProcess } from './components/home/LearningProcess';
import { ReviewsCarousel } from './components/home/ReviewsCarousel';
import { HomeCTA } from './components/home/HomeCTA';

// Pages
import { CoursesPage } from './components/courses/CoursesPage';
import { CourseDetailsModal } from './components/courses/CourseDetailsModal';
import { LearningPlayerModal } from './components/learning/LearningPlayerModal';
import { RoadmapPage } from './components/roadmap/RoadmapPage';
import { MentorsPage } from './components/mentors/MentorsPage';
import { AboutPage } from './components/about/AboutPage';
import { ContactPage } from './components/contact/ContactPage';

// Dashboards
import { StudentDashboard } from './components/dashboard/StudentDashboard';
import { MentorDashboard } from './components/dashboard/MentorDashboard';
import { AdminDashboard } from './components/dashboard/AdminDashboard';

function MainApp() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const { openAuthModal } = useAuth();
  const { 
    activeCertificate, 
    isCertificateModalOpen, 
    closeCertificate,
    courses,
    startLearning
  } = useCourses();

  const handleStartLearning = () => {
    // Open the featured Full Stack or Python course in the interactive player
    const featuredCourse = courses.find(c => c.id === 'course-fullstack') || courses[0];
    startLearning(featuredCourse);
  };

  const handleAuthSuccess = (intendedRole: 'student' | 'mentor') => {
    if (intendedRole === 'mentor') {
      setCurrentTab('mentor-dashboard');
    } else {
      setCurrentTab('student-dashboard');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Interactive Quick Demo Switcher */}
      <RoleSwitcherBanner currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* Main Sticky Header */}
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <div>
            <Hero
              onExploreCourses={() => {
                setCurrentTab('courses');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onStartLearning={handleStartLearning}
            />
            <StatsBar />
            <PopularCourses
              onViewAllCourses={() => {
                setCurrentTab('courses');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <WhyChooseUs />
            <LearningProcess />
            <ReviewsCarousel />
            <HomeCTA
              onExploreCourses={() => {
                setCurrentTab('courses');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onJoinCodingVidya={() => openAuthModal('student-register')}
            />
          </div>
        )}

        {currentTab === 'courses' && <CoursesPage />}
        {currentTab === 'roadmap' && <RoadmapPage />}
        {currentTab === 'mentors' && <MentorsPage />}
        {currentTab === 'about' && (
          <AboutPage 
            onJoinClick={() => openAuthModal('student-register')} 
            onExploreCourses={() => {
              setCurrentTab('courses');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
          />
        )}
        {currentTab === 'contact' && <ContactPage />}

        {/* Protected Dashboard Views */}
        {currentTab === 'student-dashboard' && (
          <StudentDashboard
            onExploreMoreCourses={() => {
              setCurrentTab('courses');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateHome={() => {
              setCurrentTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
        {currentTab === 'mentor-dashboard' && (
          <MentorDashboard
            onNavigateHome={() => {
              setCurrentTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
        {currentTab === 'admin-dashboard' && (
          <AdminDashboard
            onNavigateHome={() => {
              setCurrentTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onInspectStudent={() => {
              setCurrentTab('student-dashboard');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onInspectTeacher={() => {
              setCurrentTab('mentor-dashboard');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Footer */}
      <Footer setCurrentTab={setCurrentTab} />

      {/* Global Interactive Modals */}
      <CourseDetailsModal />
      <LearningPlayerModal />
      <CertificateModal
        certificate={activeCertificate}
        isOpen={isCertificateModalOpen}
        onClose={closeCertificate}
      />
      <AuthModal onSuccessRedirect={handleAuthSuccess} />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CourseProvider>
        <MainApp />
      </CourseProvider>
    </AuthProvider>
  );
}
