import React, { useState } from 'react';
import ScrambleText from './ScrambleText';
import { ArrowUpRight, Copy, Check, Calendar } from 'lucide-react';

export default function CtaSection({ onOpenContact }) {
  const [copied, setCopied] = useState(false);
  const email = 'ashminashraf07@gmail.com';
  const calLink = 'https://cal.com/ashmin-ashraf/schedule-meeting?user=ashmin-ashraf';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-14 sm:py-24 bg-[#121316] text-white relative overflow-hidden border-b border-[#26282e]">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-40 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Aeye Boxed Technical Frame with Corner Marks */}
        <div className="border border-[#2a2c33] bg-[#0e1014] p-5 sm:p-10 lg:p-20 relative">
          
          {/* Corner Marks (Aeye signature [ ] framing squares) */}
          <div className="absolute -top-1 -left-1 sm:-top-1.5 sm:-left-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white" />
          <div className="absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white" />
          <div className="absolute -bottom-1 -left-1 sm:-bottom-1.5 sm:-left-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white" />
          <div className="absolute -bottom-1 -right-1 sm:-bottom-1.5 sm:-right-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white" />

          <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
            
            <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-mono bg-[#16181e] border border-[#2a2c33] text-[#0055ff] max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse shrink-0" />
              <span className="truncate">STATUS: ACCEPTING VENTURES FOR 2026 – 2027</span>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-normal tracking-tight leading-[1.12] sm:leading-[1.08] break-words">
                Vision, <span className="text-[#0055ff] font-semibold">[Engineered]</span>
                <br />
                Ready to build something iconic?
              </h2>

              <p className="text-xs sm:text-base lg:text-lg text-[#9ca3af] font-light max-w-xl mx-auto leading-relaxed">
                Whether you need a complete 0-to-1 MVP, a scalable design system, or a dedicated full-stack design technologist—let's discuss your roadmap.
              </p>
            </div>

            {/* Actions: Direct Cal.com Connect Button & Copy Email */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a
                href={calLink}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto justify-center group px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-black hover:bg-[#0055ff] hover:text-white transition-all text-xs font-mono uppercase tracking-wider font-semibold border border-white flex items-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4 text-[#0055ff] group-hover:text-white transition-colors shrink-0" />
                <ScrambleText text="LET'S CONNECT (CAL.COM)" speed={20} duration={350} />
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>

              <button
                onClick={copyEmail}
                className="w-full sm:w-auto justify-center px-6 py-3.5 sm:py-4 bg-[#16181e] text-white border border-[#2a2c33] hover:border-[#0055ff] transition-all text-xs font-mono uppercase tracking-wider flex items-center gap-2 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#22c55e] shrink-0" />
                    <span className="text-[#22c55e]">EMAIL COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#9ca3af] shrink-0" />
                    <ScrambleText text="COPY DIRECT EMAIL" speed={20} duration={350} />
                  </>
                )}
              </button>

              {onOpenContact && (
                <button
                  onClick={onOpenContact}
                  className="w-full sm:w-auto justify-center px-6 py-3.5 sm:py-4 bg-transparent text-white border border-[#2a2c33] hover:border-white transition-all text-xs font-mono uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                >
                  <ScrambleText text="SEND INQUIRY" speed={20} duration={350} />
                </button>
              )}
            </div>

            {/* Direct Email & Location Display */}
            <div className="text-xs font-mono text-[#9ca3af] pt-2 space-y-1">
              <div className="break-all sm:break-normal">
                DIRECT INBOX: <a href={`mailto:${email}`} className="text-white hover:text-[#0055ff] underline ml-1">{email}</a>
              </div>
              <div className="text-[#6b7280]">
                LOCATION: <span className="text-white">KOZHIKODE, KERALA</span> • REMOTE GLOBAL
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
