import React from 'react';
import { 
  Code2, 
  Github, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab }) => {
  const handleNav = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => handleNav('home')} 
              className="flex items-center gap-2.5 cursor-pointer select-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Code2 className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Coding <span className="text-blue-400">Vidya</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              An online platform for mastering computer programming, web development, software engineering, and career-oriented technical skills. Learn from top tech veterans, build real-world systems, and land your dream tech job.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#github" className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#linkedin" className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#twitter" className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#youtube" className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-rose-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="w-4 h-4" /> Verified Certificates
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 text-amber-400">
                <Award className="w-4 h-4" /> ISO 9001:2026 Certified
              </span>
            </div>
          </div>

          {/* Column 1: Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Platform</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('courses')} className="hover:text-white transition-colors text-left">
                  Courses Catalog
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('roadmap')} className="hover:text-white transition-colors text-left">
                  Career Roadmap
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('mentors')} className="hover:text-white transition-colors text-left">
                  Expert Mentors
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('student-dashboard')} className="hover:text-white transition-colors text-left">
                  Certificates & Grades
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('courses')} className="hover:text-white transition-colors text-left">
                  Free Starter Workshops
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors text-left">
                  Contact & Support
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors text-left">
                  Careers at Coding Vidya
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors text-left">
                  Hiring Partner Network
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('mentors')} className="hover:text-white transition-colors text-left">
                  Become a Mentor
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Support & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Support & Contact</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="truncate">support@codingvidya.com</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91 80 4920 8800</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>Tech Park, Outer Ring Rd, Bengaluru, Karnataka 560103</span>
              </li>
              <li className="pt-2">
                <button 
                  onClick={() => handleNav('contact')}
                  className="text-xs text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 group"
                >
                  <span>Student Help Center & FAQ</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Coding Vidya Education Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('about')} className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => handleNav('about')} className="hover:text-slate-400 transition-colors">
              Terms & Conditions
            </button>
            <button onClick={() => handleNav('contact')} className="hover:text-slate-400 transition-colors">
              Security & Compliance
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
