import React, { useState, useEffect } from 'react';
import ScrambleText from './ScrambleText';
import { ArrowUpRight, Mail, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon, BehanceIcon } from './Icons';

export default function Footer({ onOpenContact }) {
  const [time, setTime] = useState('');
  const resumeLink = '/resume.pdf';
  const email = 'ashminashraf07@gmail.com';

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
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const connects = [
    { label: 'Email', href: `mailto:${email}`, icon: Mail, highlight: true },
    { label: 'Resume (PDF)', href: resumeLink, icon: Download, download: 'Ashmin_Ashraf_Resume.pdf' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ashmin-ashraf/', icon: LinkedinIcon },
    { label: 'GitHub', href: 'https://github.com/ashminashref/', icon: GithubIcon },
    { label: 'Behance', href: 'https://www.behance.net/ashminashraf', icon: BehanceIcon },
  ];

  return (
    <footer className="bg-white border-t border-[#e5e7eb] pt-10 sm:pt-12 pb-10 text-[#121316]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* 3 Tight Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10">
          
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-black text-white flex items-center justify-center border border-black shrink-0">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3.5L4.5 19.5H8.5L10.5 15H13.5L15.5 19.5H19.5L12 3.5Z" fill="currentColor" />
                  <path d="M11.2 12.5L12 9.5L12.8 12.5H11.2Z" fill="#121316" />
                  <rect x="18" y="3.5" width="2.5" height="2.5" fill="#0055ff" />
                </svg>
              </div>
              <span className="font-mono text-base font-bold tracking-tight text-black uppercase">
                ASHMIN ASHRAF
              </span>
              <span className="text-[#9ca3af] font-mono text-xs">/</span>
              <span className="text-xs font-mono text-[#6b7280] uppercase tracking-wider">
                PORTFOLIO
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#4b5563] font-light leading-relaxed max-w-md">
              Full Stack Python Developer with design knowledge. Building robust web apps with Python, Django, React.js, and clean UI design.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenContact}
                className="px-4 py-2 bg-black text-white hover:bg-[#0055ff] text-xs font-mono uppercase tracking-wider font-semibold transition-colors cursor-pointer"
              >
                CONNECT NOW
              </button>

              <a
                href={`mailto:${email}`}
                className="px-4 py-2 border border-[#d1d5db] bg-[#fafafa] hover:bg-white hover:border-black text-xs font-mono uppercase tracking-wider text-black font-semibold transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#0055ff]" />
                <span>EMAIL</span>
              </a>
            </div>

            <div className="text-xs font-mono text-[#6b7280] pt-1">
              SYSTEM TIME: <span className="text-black font-semibold">{time}</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono text-[#121316] font-semibold uppercase tracking-wider">
              NAVIGATION
            </div>
            <ul className="space-y-1.5 text-xs font-mono">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-[#4b5563] hover:text-[#0055ff] transition-colors block py-0.5"
                  >
                    <ScrambleText text={link.label} speed={25} duration={300} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect & Resume */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono text-[#121316] font-semibold uppercase tracking-wider">
              CONNECT
            </div>
            <ul className="space-y-1.5 text-xs font-mono">
              {connects.map((soc, i) => {
                const Icon = soc.icon;
                return (
                  <li key={i}>
                    <a
                      href={soc.href}
                      download={soc.download}
                      target={soc.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noreferrer"
                      className={`flex items-center justify-between group py-1 transition-colors ${
                        soc.highlight
                          ? 'text-[#0055ff] font-semibold hover:underline'
                          : 'text-[#4b5563] hover:text-black'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {Icon && <Icon className="w-3.5 h-3.5 text-[#9ca3af] group-hover:text-[#0055ff]" />}
                        <span>{soc.label}</span>
                      </div>
                      <ArrowUpRight className="w-3 h-3 text-[#9ca3af] group-hover:text-[#0055ff]" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#e5e7eb] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#6b7280]">
          <div>
            © 2026 ASHMIN ASHRAF. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] shrink-0" />
            <span>PYTHON FULL STACK DEVELOPER</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
