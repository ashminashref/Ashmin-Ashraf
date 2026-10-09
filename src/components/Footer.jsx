import React, { useState, useEffect } from 'react';
import ScrambleText from './ScrambleText';
import { ArrowUpRight, Calendar, Mail } from 'lucide-react';
import { GithubIcon, FigmaIcon, LinkedinIcon, TwitterIcon, BehanceIcon } from './Icons';

export default function Footer({ onOpenContact }) {
  const [time, setTime] = useState('');
  const calLink = 'https://cal.com/ashmin-ashraf/schedule-meeting?user=ashmin-ashraf';

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }) + ' UTC'
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { label: 'Top of Page', href: '#home' },
    { label: 'About & Approach', href: '#about' },
    { label: 'Selected Projects', href: '#projects' },
    { label: 'Technical Stack', href: '#skills' },
    { label: 'Journey & Experience', href: '#experience' },
  ];

  const systems = [
    'UI/UX Design Systems (Figma)',
    'React & Next.js Architecture',
    'Python Full-Stack Engineering',
    'AI-Accelerated Workflows',
    'GSAP Scroll Physics & Motion',
    'Responsive Mobile-First Grids',
  ];

  const socials = [
    { label: 'Schedule Meeting', href: calLink, icon: Calendar, highlight: true },
    { label: 'GitHub Profile', href: 'https://github.com/ashminashref/', icon: GithubIcon },
    { label: 'Behance Portfolio', href: 'https://www.behance.net/ashminashraf', icon: BehanceIcon },
    { label: 'Direct Email', href: 'mailto:ashminashraf07@gmail.com', icon: Mail },
    { label: 'X / Twitter', href: 'https://x.com/ashminashref', icon: TwitterIcon },
  ];

  return (
    <footer className="bg-white border-t border-[#e5e7eb] pt-14 pb-12 text-[#121316]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 4 Clean Editorial Footer Columns (Unwanted newsletter removed) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-black text-white flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M11 2h2v7h7v2h-7v7h-2v-7H4v-2h7V2z" />
                  <circle cx="12" cy="12" r="1.5" fill="#0055ff" />
                </svg>
              </div>
              <div>
                <div className="font-mono text-base font-bold tracking-tight">
                  ASHMIN ASHRAF
                </div>
                <div className="text-[11px] font-mono text-[#6b7280]">
                  PRODUCT DESIGNER • FULL-STACK DEVELOPER
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#4b5563] font-light leading-relaxed max-w-sm">
              Self-taught designer with full-stack development knowledge based in Kozhikode, Kerala. 
              Engineering web software where performance is tactile and aesthetics are bulletproof.
            </p>

            <div className="text-xs font-mono text-[#6b7280] space-y-1 pt-1">
              <div>LOCATION: <span className="text-black font-semibold">KOZHIKODE, KERALA • AVAILABLE WORLDWIDE</span></div>
              <div>EMAIL: <a href="mailto:ashminashraf07@gmail.com" className="text-black font-semibold hover:text-[#0055ff]">ashminashraf07@gmail.com</a></div>
              <div>SYSTEM TIME: <span className="text-black font-semibold">{time}</span></div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-mono text-[#121316] font-semibold uppercase tracking-wider">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-xs font-mono">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-[#4b5563] hover:text-[#0055ff] transition-colors block"
                  >
                    <ScrambleText text={link.label} speed={25} duration={300} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Disciplines */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono text-[#121316] font-semibold uppercase tracking-wider">
              CORE DISCIPLINES
            </div>
            <ul className="space-y-2 text-xs font-mono text-[#4b5563]">
              {systems.map((sys, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[#0055ff]">•</span>
                  <span>{sys}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-mono text-[#121316] font-semibold uppercase tracking-wider">
              CONNECT
            </div>
            <ul className="space-y-2 text-xs font-mono">
              {socials.map((soc, i) => {
                const Icon = soc.icon;
                return (
                  <li key={i}>
                    <a
                      href={soc.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center justify-between group transition-colors py-0.5 ${
                        soc.highlight
                          ? 'text-[#0055ff] font-semibold hover:text-blue-700'
                          : 'text-[#4b5563] hover:text-black'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {Icon && (
                          <Icon
                            className={`w-3.5 h-3.5 ${
                              soc.highlight
                                ? 'text-[#0055ff]'
                                : 'text-[#9ca3af] group-hover:text-[#0055ff]'
                            } transition-colors`}
                          />
                        )}
                        <ScrambleText text={soc.label} speed={25} duration={300} />
                      </div>
                      <ArrowUpRight className="w-3 h-3 text-[#9ca3af] group-hover:text-[#0055ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Clean Copyright & Status */}
        <div className="pt-8 border-t border-[#e5e7eb] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6b7280]">
          <div>
            © 2026 ASHMIN ASHRAF. KOZHIKODE, KERALA. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-2 px-3 py-1 bg-[#f0fdf4] border border-[#bbf7d0] text-[#166534]">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span>AVAILABLE FOR PROJECTS & FULL-TIME ROLES</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
