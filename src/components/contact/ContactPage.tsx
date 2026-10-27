import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  Github, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Sparkles,
  MessageSquare,
  HelpCircle,
  Clock
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Course Counseling & Guidance');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // save message to local storage or state
    try {
      const existing = JSON.parse(localStorage.getItem('coding_vidya_inquiries') || '[]');
      existing.push({
        id: Date.now(),
        name,
        email,
        phone,
        subject,
        message,
        date: new Date().toISOString()
      });
      localStorage.setItem('coding_vidya_inquiries', JSON.stringify(existing));
    } catch {}

    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 400);
  };

  const faqs = [
    {
      q: 'Do I need prior coding knowledge to start?',
      a: 'Not at all! Our foundational tracks (Python, C Programming, HTML/CSS) start from ground zero. Intermediate tracks (React, Spring Boot, DSA) have clear prerequisites mentioned on their course page.'
    },
    {
      q: 'Are the certificates recognized by employers?',
      a: 'Yes, Coding Vidya certificates feature unique verifiable cryptographic IDs with verified course capstone project links that our 150+ hiring tech partners recognize.'
    },
    {
      q: 'What if I miss a live session or weekend workshop?',
      a: 'All live mentor sessions are recorded in pristine 4K video and uploaded to your Student Dashboard within 2 hours, accessible with lifetime rewatch privileges.'
    },
    {
      q: 'How does 1:1 mentorship work?',
      a: 'Enrolled students can schedule 1:1 mentorship slots weekly directly through their dashboard to review project code, resolve doubts, and practice mock interviews.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner Header */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden text-center max-w-4xl mx-auto">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>We are here to support you</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Contact & Support
            </h1>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-light max-w-xl mx-auto">
              Have questions about curriculums, fee structures, corporate training, or career counseling? Our academic advisors are ready to help.
            </p>
          </div>
        </div>

        {/* Contact Form and Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Office (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  Direct Inquiries
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Connect With Our Team
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Reach out to us via email, phone, or visit our Bengaluru headquarters for career counseling.
                </p>
              </div>

              {/* Info Items */}
              <div className="space-y-4 text-xs">
                
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wider">Email Us</span>
                    <a href="mailto:support@codingvidya.com" className="font-bold text-slate-900 hover:text-blue-600 transition-colors">
                      support@codingvidya.com
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5">admissions@codingvidya.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wider">Phone Support</span>
                    <a href="tel:+918049208800" className="font-bold text-slate-900 hover:text-emerald-600 transition-colors">
                      +91 80 4920 8800
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5">Mon - Sat: 9:00 AM - 8:00 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wider">Academy Campus</span>
                    <p className="font-bold text-slate-900 leading-snug">
                      Coding Vidya Learning Campus, Outer Ring Rd, Bellandur, Bengaluru, Karnataka 560103
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <span className="text-xs font-bold text-slate-700 block">
                  Follow Our Tech Channels & Community:
                </span>
                <div className="flex items-center gap-3">
                  <a href="#github" className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-900 text-slate-600 hover:text-white flex items-center justify-center transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="#linkedin" className="w-9 h-9 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white flex items-center justify-center transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#twitter" className="w-9 h-9 rounded-xl bg-sky-50 hover:bg-sky-500 text-sky-600 hover:text-white flex items-center justify-center transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#youtube" className="w-9 h-9 rounded-xl bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-white flex items-center justify-center transition-colors">
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
            
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Leave a Message
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Send Us an Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill out the form below and an academic advisor will get back to you within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in duration-200">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-emerald-950">
                  Message Dispatched Successfully!
                </h3>
                <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. A Coding Vidya career counselor will review your inquiry and reach out via email or phone call promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 bg-emerald-700 text-white rounded-xl text-xs font-bold cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Aarav Sharma"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Subject
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-slate-50/50"
                    >
                      <option>Course Counseling & Guidance</option>
                      <option>Fee Structure & Scholarships</option>
                      <option>Corporate Training for Teams</option>
                      <option>Hiring Partner Network</option>
                      <option>Technical Doubt / Platform Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Message / Question <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your learning goals or what course details you are looking for..."
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-slate-50/50 resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>

              </form>
            )}

          </div>

        </div>

        {/* Frequently Asked Questions */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-xs space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Quick Answers</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Everything you need to know about getting started at Coding Vidya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <h3 className="text-sm font-bold text-slate-900 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
