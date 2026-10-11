import React, { useState } from 'react';
import ScrambleText from './ScrambleText';
import { Mail, Download } from 'lucide-react';

export default function CtaSection({ onOpenContact }) {
  const email = 'ashminashraf07@gmail.com';
  const resumeLink = '/resume.pdf';

  return (
    <section className="py-12 sm:py-20 bg-[#121316] text-white relative overflow-hidden border-b border-[#26282e]">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-40 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Boxed Technical Frame with Corner Marks */}
        <div className="border border-[#2a2c33] bg-[#0e1014] p-6 sm:p-10 lg:p-16 relative">
          
          {/* Corner Marks */}
          <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-white" />
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white" />
          <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-white" />
          <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-white" />

          <div className="max-w-2xl mx-auto text-center space-y-5 sm:space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] sm:text-xs font-mono bg-[#16181e] border border-[#2a2c33] text-[#22c55e]">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse shrink-0" />
              <span>STATUS: OPEN TO FULL-TIME ROLES</span>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-sans font-normal tracking-tight leading-tight">
                Let's build{' '}
                <span className="text-[#0055ff] font-semibold">something together</span>.
              </h2>

              <p className="text-xs sm:text-base text-[#9ca3af] font-light max-w-lg mx-auto leading-relaxed">
                Full Stack Python Developer with design knowledge. Available for full-time frontend, backend, and product engineering opportunities.
              </p>
            </div>

            {/* Simple Buttons: Connect Now, Email, Resume */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 bg-white text-black hover:bg-[#0055ff] hover:text-white transition-all text-xs font-mono uppercase tracking-wider font-semibold border border-white cursor-pointer shadow-md"
              >
                CONNECT NOW
              </button>

              <a
                href={`mailto:${email}`}
                className="px-6 py-3.5 bg-[#0055ff] text-white hover:bg-[#0044cc] transition-all text-xs font-mono uppercase tracking-wider font-semibold border border-[#0055ff] flex items-center gap-2 shadow-md"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>EMAIL</span>
              </a>

              <a
                href={resumeLink}
                download="Ashmin_Ashraf_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 bg-[#16181e] text-white hover:bg-white hover:text-black transition-all text-xs font-mono uppercase tracking-wider font-semibold border border-[#2a2c33] flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-[#0055ff] shrink-0" />
                <span>RESUME (PDF)</span>
              </a>
            </div>

            {/* Direct Email Line */}
            <div className="pt-4 border-t border-[#1f2229] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#9ca3af] gap-2">
              <div className="flex items-center gap-1.5">
                <span>EMAIL:</span>
                <a
                  href={`mailto:${email}`}
                  className="text-white hover:text-[#0055ff] underline font-medium"
                >
                  {email}
                </a>
              </div>

              <div>
                <span>LOCATION: </span>
                <span className="text-white">REMOTE &amp; RELOCATION</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
