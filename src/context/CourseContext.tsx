import React, { createContext, useContext, useState, useEffect } from 'react';
import { Course, Assignment, Certificate, QuizResult, LiveClass } from '../types';
import {
  COURSES,
  INITIAL_ASSIGNMENTS,
  INITIAL_CERTIFICATES,
  INITIAL_QUIZ_RESULTS,
  UPCOMING_LIVE_CLASSES,
  MENTOR_SHOWCASE_IMAGE
} from '../data/mockData';
import { useAuth } from './AuthContext';

interface CourseProgressMap {
  [courseId: string]: {
    completedLessonIds: string[];
    progressPercentage: number;
    lastAccessedLessonId?: string;
  };
}

interface CourseContextType {
  courses: Course[];
  assignments: Assignment[];
  certificates: Certificate[];
  quizResults: QuizResult[];
  liveClasses: LiveClass[];
  selectedCourse: Course | null;
  activeCertificate: Certificate | null;
  activeLearningCourse: Course | null;
  activeLearningLessonId: string | null;
  isDetailsModalOpen: boolean;
  isCertificateModalOpen: boolean;
  isLearningViewerOpen: boolean;
  openCourseDetails: (course: Course) => void;
  closeCourseDetails: () => void;
  openCertificate: (cert: Certificate) => void;
  closeCertificate: () => void;
  startLearning: (course: Course, lessonId?: string) => void;
  closeLearning: () => void;
  enrollCourse: (courseId: string) => void;
  isEnrolled: (courseId: string) => boolean;
  getProgress: (courseId: string) => number;
  toggleLessonCompletion: (courseId: string, lessonId: string) => void;
  submitAssignment: (assignmentId: string, submissionLink: string) => void;
  gradeAssignment: (assignmentId: string, score: number, feedback: string) => void;
  createCourse: (newCourse: Partial<Course>) => void;
  createLiveClass: (newClass: Omit<LiveClass, 'id'>) => void;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();

  const [courses, setCourses] = useState<Course[]>(() => {
    try {
      const saved = localStorage.getItem('coding_vidya_courses');
      if (saved) {
        const parsed: Course[] = JSON.parse(saved);
        return parsed.map((c) => {
          const fresh = COURSES.find((fc) => fc.id === c.id);
          return fresh ? { ...c, thumbnail: fresh.thumbnail } : c;
        });
      }
      return COURSES;
    } catch {
      return COURSES;
    }
  });

  const [courseProgress, setCourseProgress] = useState<CourseProgressMap>(() => {
    try {
      const saved = localStorage.getItem('coding_vidya_progress');
      if (saved) return JSON.parse(saved);
      // Pre-seed realistic progress as requested:
      // Python Programming 80%, DSA 50%, Full Stack 35%
      return {
        'course-python': {
          completedLessonIds: ['l1', 'l2', 'l3', 'l4', 'l5'],
          progressPercentage: 80,
          lastAccessedLessonId: 'l6'
        },
        'course-dsa': {
          completedLessonIds: ['l1', 'l2', 'l3'],
          progressPercentage: 50,
          lastAccessedLessonId: 'l4'
        },
        'course-fullstack': {
          completedLessonIds: ['l1-1', 'l1-2', 'l1-3'],
          progressPercentage: 35,
          lastAccessedLessonId: 'l2-1'
        }
      };
    } catch {
      return {};
    }
  });

  const [assignments, setAssignments] = useState<Assignment[]>(() => {
    try {
      const saved = localStorage.getItem('coding_vidya_assignments');
      return saved ? JSON.parse(saved) : INITIAL_ASSIGNMENTS;
    } catch {
      return INITIAL_ASSIGNMENTS;
    }
  });

  const [certificates, setCertificates] = useState<Certificate[]>(() => {
    try {
      const saved = localStorage.getItem('coding_vidya_certificates');
      return saved ? JSON.parse(saved) : INITIAL_CERTIFICATES;
    } catch {
      return INITIAL_CERTIFICATES;
    }
  });

  const [quizResults, setQuizResults] = useState<QuizResult[]>(INITIAL_QUIZ_RESULTS);
  const [liveClasses, setLiveClasses] = useState<LiveClass[]>(UPCOMING_LIVE_CLASSES);

  // Modals & Viewers
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);

  const [activeLearningCourse, setActiveLearningCourse] = useState<Course | null>(null);
  const [activeLearningLessonId, setActiveLearningLessonId] = useState<string | null>(null);
  const [isLearningViewerOpen, setIsLearningViewerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('coding_vidya_courses', JSON.stringify(courses));
    } catch (e) {
      console.error(e);
    }
  }, [courses]);

  useEffect(() => {
    try {
      localStorage.setItem('coding_vidya_progress', JSON.stringify(courseProgress));
    } catch (e) {
      console.error(e);
    }
  }, [courseProgress]);

  useEffect(() => {
    try {
      localStorage.setItem('coding_vidya_assignments', JSON.stringify(assignments));
    } catch (e) {
      console.error(e);
    }
  }, [assignments]);

  useEffect(() => {
    try {
      localStorage.setItem('coding_vidya_certificates', JSON.stringify(certificates));
    } catch (e) {
      console.error(e);
    }
  }, [certificates]);

  const openCourseDetails = (course: Course) => {
    setSelectedCourse(course);
    setIsDetailsModalOpen(true);
  };

  const closeCourseDetails = () => {
    setIsDetailsModalOpen(false);
  };

  const openCertificate = (cert: Certificate) => {
    setActiveCertificate(cert);
    setIsCertificateModalOpen(true);
  };

  const closeCertificate = () => {
    setIsCertificateModalOpen(false);
  };

  const startLearning = (course: Course, lessonId?: string) => {
    setActiveLearningCourse(course);
    const firstLessonId = lessonId || course.curriculum[0]?.lessons[0]?.id || 'l1-1';
    setActiveLearningLessonId(firstLessonId);
    setIsLearningViewerOpen(true);
    setIsDetailsModalOpen(false);
  };

  const closeLearning = () => {
    setIsLearningViewerOpen(false);
  };

  const enrollCourse = (courseId: string) => {
    if (!user) return;
    if (!user.enrolledCourseIds.includes(courseId)) {
      user.enrolledCourseIds.push(courseId);
    }
    if (!courseProgress[courseId]) {
      setCourseProgress(prev => ({
        ...prev,
        [courseId]: {
          completedLessonIds: [],
          progressPercentage: 5,
          lastAccessedLessonId: undefined
        }
      }));
    }
  };

  const isEnrolled = (courseId: string) => {
    return !!user?.enrolledCourseIds.includes(courseId);
  };

  const getProgress = (courseId: string) => {
    return courseProgress[courseId]?.progressPercentage ?? (isEnrolled(courseId) ? 10 : 0);
  };

  const toggleLessonCompletion = (courseId: string, lessonId: string) => {
    setCourseProgress(prev => {
      const current = prev[courseId] || { completedLessonIds: [], progressPercentage: 0 };
      const exists = current.completedLessonIds.includes(lessonId);
      const updated = exists
        ? current.completedLessonIds.filter(id => id !== lessonId)
        : [...current.completedLessonIds, lessonId];

      const targetCourse = courses.find(c => c.id === courseId);
      const totalLessons = targetCourse
        ? targetCourse.curriculum.reduce((acc, m) => acc + m.lessons.length, 0)
        : 10;

      const newPercentage = Math.min(100, Math.round((updated.length / Math.max(1, totalLessons)) * 100));

      // If user reaches 100%, award a certificate!
      if (newPercentage === 100 && !certificates.some(c => c.courseId === courseId)) {
        const newCert: Certificate = {
          id: `cert-${Date.now()}`,
          certificateId: `CV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}-${courseId.slice(-4).toUpperCase()}`,
          studentName: user?.name || 'Aarav Sharma',
          studentId: user?.id || 'student-1',
          courseId,
          courseName: targetCourse?.title || 'Coding Vidya Program',
          mentorName: targetCourse?.instructor.name || 'Coding Vidya Faculty',
          issueDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          grade: 'Grade A+ (Distinction)',
          credentialUrl: `https://codingvidya.com/verify/${courseId}`
        };
        setCertificates(cList => [newCert, ...cList]);
      }

      return {
        ...prev,
        [courseId]: {
          completedLessonIds: updated,
          progressPercentage: newPercentage,
          lastAccessedLessonId: lessonId
        }
      };
    });
  };

  const submitAssignment = (assignmentId: string, submissionLink: string) => {
    setAssignments(prev =>
      prev.map(asg =>
        asg.id === assignmentId
          ? {
              ...asg,
              status: 'submitted',
              studentSubmission: submissionLink,
              submittedAt: 'Just now'
            }
          : asg
      )
    );
  };

  const gradeAssignment = (assignmentId: string, score: number, feedback: string) => {
    setAssignments(prev =>
      prev.map(asg =>
        asg.id === assignmentId
          ? {
              ...asg,
              status: 'graded',
              score,
              feedback
            }
          : asg
      )
    );
  };

  const createCourse = (newCourseData: Partial<Course>) => {
    const course: Course = {
      id: `course-${Date.now()}`,
      title: newCourseData.title || 'New Coding Program',
      slug: (newCourseData.title || 'new-course').toLowerCase().replace(/\s+/g, '-'),
      shortDescription: newCourseData.shortDescription || 'Master technical skills with hands-on labs.',
      description: newCourseData.description || 'Comprehensive programming course by expert industry faculty.',
      category: newCourseData.category || 'Programming',
      difficulty: newCourseData.difficulty || 'Beginner',
      duration: newCourseData.duration || '8 Weeks',
      lessonsCount: 24,
      rating: 5.0,
      reviewsCount: 1,
      price: newCourseData.price || 1999,
      badge: 'New Launch',
      thumbnail: newCourseData.thumbnail || MENTOR_SHOWCASE_IMAGE,
      instructor: {
        id: user?.id || 'mentor-2',
        name: user?.name || 'Dr. Neha Verma',
        title: user?.title || 'Industry Mentor',
        company: 'Coding Vidya Faculty',
        avatar: user?.avatar || MENTOR_SHOWCASE_IMAGE
      },
      skills: newCourseData.skills || ['Fundamentals', 'Clean Code', 'Projects'],
      requirements: ['Basic computer familiarity'],
      curriculum: [
        {
          id: 'mod-1',
          title: 'Module 1: Introduction & Architecture',
          lessons: [
            { id: `l-${Date.now()}-1`, title: 'Course Overview & Roadmap', duration: '20 mins', type: 'video' },
            { id: `l-${Date.now()}-2`, title: 'Development Setup & CLI Basics', duration: '30 mins', type: 'code' }
          ]
        }
      ],
      projects: [
        { id: `p-${Date.now()}`, title: 'Capstone Industry Project', description: 'Hands-on project implementing learned techniques.', techStack: ['Modern Tools'] }
      ],
      reviews: []
    };

    setCourses(prev => [course, ...prev]);
  };

  const createLiveClass = (newClass: Omit<LiveClass, 'id'>) => {
    const liveItem: LiveClass = {
      ...newClass,
      id: `live-${Date.now()}`
    };
    setLiveClasses(prev => [liveItem, ...prev]);
  };

  return (
    <CourseContext.Provider
      value={{
        courses,
        assignments,
        certificates,
        quizResults,
        liveClasses,
        selectedCourse,
        activeCertificate,
        activeLearningCourse,
        activeLearningLessonId,
        isDetailsModalOpen,
        isCertificateModalOpen,
        isLearningViewerOpen,
        openCourseDetails,
        closeCourseDetails,
        openCertificate,
        closeCertificate,
        startLearning,
        closeLearning,
        enrollCourse,
        isEnrolled,
        getProgress,
        toggleLessonCompletion,
        submitAssignment,
        gradeAssignment,
        createCourse,
        createLiveClass
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourses = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourses must be used within a CourseProvider');
  }
  return context;
};
