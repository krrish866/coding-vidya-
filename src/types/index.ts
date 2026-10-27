export type UserRole = 'student' | 'mentor' | 'admin' | 'guest';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  phone?: string;
  avatar?: string;
  title?: string;
  bio?: string;
  expertise?: string[];
  experienceYears?: number;
  enrolledCourseIds: string[];
  completedCourseIds: string[];
  certificates: Certificate[];
}

export type CourseDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export type CourseCategory =
  | 'Programming'
  | 'Web Development'
  | 'App Development'
  | 'Data Science'
  | 'AI & Machine Learning'
  | 'Database'
  | 'DSA'
  | 'Interview Preparation';

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'reading' | 'code' | 'quiz';
  isCompleted?: boolean;
  videoUrl?: string;
  summary?: string;
  codeSnippet?: string;
  quizQuestion?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export interface CourseModule {
  id: string;
  title: string;
  description?: string;
  lessons: Lesson[];
}

export interface CourseProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
}

export interface CourseReview {
  id: string;
  studentName: string;
  studentAvatar?: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  category: CourseCategory;
  difficulty: CourseDifficulty;
  duration: string;
  lessonsCount: number;
  rating: number;
  reviewsCount: number;
  price: number;
  originalPrice?: number;
  isFree?: boolean;
  badge?: string;
  thumbnail: string;
  instructor: {
    id: string;
    name: string;
    title: string;
    company?: string;
    avatar: string;
  };
  skills: string[];
  curriculum: CourseModule[];
  projects: CourseProject[];
  requirements: string[];
  reviews: CourseReview[];
  featured?: boolean;
}

export interface RoadmapStep {
  stepNumber: number;
  title: string;
  description: string;
  keySkills: string[];
  recommendedCourseId?: string;
  recommendedCourseTitle?: string;
  projectIdea: string;
  level: CourseDifficulty;
  estimatedHours: string;
}

export interface CareerRoadmap {
  id: string;
  title: string;
  slug: string;
  description: string;
  iconName: string;
  estimatedTime: string;
  averageSalary: string;
  level: string;
  steps: RoadmapStep[];
}

export interface Mentor {
  id: string;
  name: string;
  title: string;
  company: string;
  expertise: string[];
  experienceYears: number;
  bio: string;
  avatar: string;
  rating: number;
  studentsCount: number;
  coursesCount: number;
  coursesTaught: string[];
}

export interface Certificate {
  id: string;
  certificateId: string;
  studentName: string;
  studentId: string;
  courseId: string;
  courseName: string;
  mentorName: string;
  issueDate: string;
  grade: string;
  credentialUrl?: string;
}

export interface Assignment {
  id: string;
  title: string;
  courseId: string;
  courseName: string;
  deadline: string;
  status: 'pending' | 'submitted' | 'graded';
  studentSubmission?: string;
  submittedAt?: string;
  score?: number;
  feedback?: string;
}

export interface QuizResult {
  id: string;
  courseId: string;
  courseName: string;
  quizTitle: string;
  score: number;
  totalQuestions: number;
  passed: boolean;
  date: string;
}

export interface LiveClass {
  id: string;
  title: string;
  courseName: string;
  mentorName: string;
  date: string;
  time: string;
  duration: string;
  status: 'upcoming' | 'live' | 'completed';
  meetingUrl: string;
}

export interface StudentReview {
  id: string;
  studentName: string;
  role: string;
  company: string;
  avatar: string;
  course: string;
  rating: number;
  review: string;
  placedPackage?: string;
}
