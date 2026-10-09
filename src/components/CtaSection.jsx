import React, { useState } from 'react';
import ScrambleText from './ScrambleText';
import { ArrowUpRight, Copy, Check, Calendar, Mail } from 'lucide-react';

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
    <section className="py-20 sm:py-28 bg-[#121316] text-white relative overflow-hidden border-b border-[#26282e]">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-40 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Aeye Boxed Technical Frame with Corner Marks */}
        <div className="border border-[#2a2c33] bg-[#0e1014] p-8 sm:p-14 lg:p-20 relative">
          
          {/* Corner Marks (Aeye signature [ ] framing squares) */}
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white" />
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white" />
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white" />
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white" />

          <div className="max-w-3xl mx-auto text-center space-y-8">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono bg-[#16181e] border border-[#2a2c33] text-[#0055ff]">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              <span>STATUS: ACCEPTING NEW VENTURES FOR 2026 – 2027</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-normal tracking-tight leading-[1.08]">
                Vision, <span className="text-[#0055ff] font-semibold">[Engineered]</span>
                <br />
                Ready to build something iconic?
              </h2>

              <p className="text-base sm:text-lg text-[#9ca3af] font-light max-w-xl mx-auto leading-relaxed">
                Whether you need a complete 0-to-1 MVP, a scalable design system, or a dedicated full-stack design technologist—let's discuss your roadmap.
              </p>
            </div>

            {/* Actions: Direct Cal.com Connect Button & Copy Email */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href={calLink}
                target="_blank"
                rel="noreferrer"
                className="group px-8 py-4 bg-white text-black hover:bg-[#0055ff] hover:text-white transition-all text-xs font-mono uppercase tracking-wider font-semibold border border-white flex items-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4 text-[#0055ff] group-hover:text-white transition-colors" />
                <ScrambleText text="LET'S CONNECT (CAL.COM)" speed={20} duration={350} />
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={copyEmail}
                className="px-6 py-4 bg-[#16181e] text-white border border-[#2a2c33] hover:border-[#0055ff] transition-all text-xs font-mono uppercase tracking-wider flex items-center gap-2 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#22c55e]" />
                    <span className="text-[#22c55e]">EMAIL COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#9ca3af]" />
                    <ScrambleText text="COPY DIRECT EMAIL" speed={20} duration={350} />
                  </>
                )}
              </button>
            </div>

            {/* Direct Email & Location Display */}
            <div className="text-xs font-mono text-[#9ca3af] pt-2 space-y-1">
              <div>
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
