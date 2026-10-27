import React from 'react';
import { Certificate } from '../../types';
import { 
  X, 
  Download, 
  Printer, 
  CheckCircle2, 
  ShieldCheck, 
  Award,
  Code2,
  Share2
} from 'lucide-react';

interface CertificateModalProps {
  certificate: Certificate | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  isOpen,
  onClose
}) => {
  if (!isOpen || !certificate) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate a printable download view or simulated trigger
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-bold text-slate-800">
              Verified Certificate of Completion
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 rounded-xl transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title="Print Certificate"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors flex items-center gap-1.5 text-xs font-bold shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-xl transition-colors ml-2"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Canvas Area */}
        <div className="p-8 sm:p-12 bg-gradient-to-b from-amber-50/20 via-white to-slate-50">
          <div className="relative border-8 border-double border-amber-600/40 rounded-2xl p-8 sm:p-12 text-center bg-white shadow-inner">
            
            {/* Corner Decorative Ornaments */}
            <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-amber-600" />
            <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-amber-600" />
            <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-amber-600" />
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-amber-600" />

            {/* Header: Logo and Title */}
            <div className="flex justify-center items-center gap-2.5 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md">
                <Code2 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
                  Coding <span className="text-blue-600">Vidya</span>
                </h3>
                <p className="text-[10px] tracking-widest text-slate-500 uppercase font-semibold mt-0.5">
                  Academy of Software Engineering & Technology
                </p>
              </div>
            </div>

            <p className="text-xs uppercase tracking-[0.25em] text-amber-700 font-bold mb-2">
              Certificate of Completion & Professional Excellence
            </p>

            <h1 className="text-lg sm:text-xl font-medium text-slate-600 mb-6">
              This document officially certifies that
            </h1>

            {/* Student Name */}
            <div className="mb-6">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif border-b-2 border-amber-400/60 pb-2 px-6 inline-block">
                {certificate.studentName}
              </span>
            </div>

            <p className="text-sm text-slate-600 max-w-xl mx-auto mb-6 leading-relaxed">
              has successfully fulfilled all curriculum requirements, passed coding examinations, and built industry capstone projects in the accredited program:
            </p>

            {/* Course Name */}
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-700 max-w-2xl mx-auto">
                {certificate.courseName}
              </h2>
              <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{certificate.grade}</span>
              </div>
            </div>

            {/* Signatures & Seal Grid */}
            <div className="pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6 items-end mt-8">
              
              {/* Instructor Signature */}
              <div className="text-center sm:text-left">
                <div className="h-10 flex items-end justify-center sm:justify-start">
                  <span className="font-serif italic text-lg text-slate-800 tracking-wider">
                    {certificate.mentorName}
                  </span>
                </div>
                <div className="w-40 border-t border-slate-400 mt-1 mx-auto sm:mx-0" />
                <p className="text-xs font-bold text-slate-900 mt-1">{certificate.mentorName}</p>
                <p className="text-[11px] text-slate-500">Lead Faculty & Mentor</p>
              </div>

              {/* Official Seal */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full border-4 border-amber-600/60 flex items-center justify-center bg-amber-50/50 shadow-inner">
                  <div className="w-16 h-16 rounded-full border border-dashed border-amber-700 flex flex-col items-center justify-center text-amber-800">
                    <ShieldCheck className="w-6 h-6 stroke-[2]" />
                    <span className="text-[8px] font-black uppercase tracking-wider mt-0.5">VERIFIED</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 font-mono mt-2">
                  ID: {certificate.certificateId}
                </p>
              </div>

              {/* Director Signature & Date */}
              <div className="text-center sm:text-right">
                <div className="h-10 flex items-end justify-center sm:justify-end">
                  <span className="font-serif italic text-lg text-slate-800 tracking-wider">
                    Rohan Mehta
                  </span>
                </div>
                <div className="w-40 border-t border-slate-400 mt-1 mx-auto sm:ml-auto sm:mr-0" />
                <p className="text-xs font-bold text-slate-900 mt-1">Academic Director</p>
                <p className="text-[11px] text-slate-500">Date: {certificate.issueDate}</p>
              </div>

            </div>

          </div>
        </div>

        {/* Modal Footer Info */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Cryptographically verifiable on Coding Vidya public ledger</span>
          </div>
          <button
            onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText(`https://codingvidya.com/verify/${certificate.certificateId}`);
                alert('Certificate verification link copied to clipboard!');
              }
            }}
            className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Copy Verification URL</span>
          </button>
        </div>

      </div>
    </div>
  );
};
