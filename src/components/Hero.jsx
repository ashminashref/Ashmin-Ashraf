import React, { useState } from 'react';
import PixelGrid from './PixelGrid';
import ScrambleText from './ScrambleText';
import { ArrowDown, Mail, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon, BehanceIcon } from './Icons';

export default function Hero({ onExploreWork, onOpenContact }) {
  const email = 'ashminashraf07@gmail.com';
  const resumeLink = '/resume.pdf';
  const linkedinLink = 'https://www.linkedin.com/in/ashmin-ashraf/';
  const githubLink = 'https://github.com/ashminashref/';

  const coreStack = [
    { name: 'Python', tag: 'LANG' },
    { name: 'Django', tag: 'BACKEND' },
    { name: 'React.js', tag: 'FRONTEND' },
    { name: 'MySQL', tag: 'DATABASE' },
    { name: 'REST APIs', tag: 'SERVICES' },
    { name: 'UI / UX Design', tag: 'FIGMA' },
  ];

  const handleConnect = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-16 border-b border-[#e5e7eb] bg-white">
      {/* Top Banner with Interactive Pixel Grid */}
      <div className="bg-[#121316] text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between text-[11px] font-mono tracking-wider">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#0055ff] inline-block" />
            <span className="text-white font-semibold">ASHMIN ASHRAF</span>
            <span className="text-[#9ca3af] hidden sm:inline">• FULL STACK PYTHON DEVELOPER</span>
          </div>
          <div
            onClick={onExploreWork}
            className="flex items-center gap-1.5 text-[#9ca3af] hover:text-white transition-colors cursor-pointer"
          >
            <span>EXPLORE WORK</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Signature Interactive Pixel Grid Canvas */}
        <PixelGrid rows={4} cols={32} theme="dark" />
      </div>

      {/* Main Hero Content Area */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Headline, Role & Simple CTAs */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-5">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 text-[11px] sm:text-xs font-mono border border-[#bbf7d0] bg-[#f0fdf4] text-[#166534]">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse shrink-0"></span>
              <span className="font-semibold">
                OPEN TO OPPORTUNITIES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-normal tracking-tight leading-[1.12] sm:leading-[1.08] text-[#121316] break-words">
              Full Stack{' '}
              <span className="text-[#0055ff] font-medium inline-block">
                Python Developer
              </span>{' '}
              with Design Knowledge.
            </h1>

            {/* Explicit Role Tag */}
            <div className="pt-0.5">
              <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 bg-[#121316] text-white text-xs sm:text-sm font-mono tracking-wider uppercase font-medium border border-black shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#0055ff] shrink-0" />
                <span className="text-white font-semibold">Python Full Stack Developer</span>
                <span className="text-[#6b7280]">/</span>
                <span className="text-white font-semibold">UI/UX Designer</span>
              </div>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-[#4b5563] max-w-2xl font-light leading-relaxed">
              Building dynamic, reliable web applications using Python, Django, and React.js. Experienced in designing scalable RESTful APIs, integrating databases, and creating responsive user experiences with clean design aesthetics.
            </p>

            {/* Simple Primary Buttons: Email, Connect Now, Resume */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
              <button
                onClick={handleConnect}
                className="px-6 py-3 bg-black text-white text-xs font-mono uppercase tracking-wider font-semibold border-2 border-black hover:bg-[#0055ff] hover:border-[#0055ff] transition-all cursor-pointer shadow-xs"
              >
                CONNECT NOW
              </button>

              <a
                href={`mailto:${email}`}
                className="px-6 py-3 bg-[#0055ff] text-white text-xs font-mono uppercase tracking-wider font-semibold border-2 border-[#0055ff] hover:bg-[#0044cc] hover:border-[#0044cc] transition-all flex items-center gap-2 shadow-xs"
              >
                <Mail className="w-3.5 h-3.5 text-white" />
                <span>EMAIL</span>
              </a>

              <a
                href={resumeLink}
                download="Ashmin_Ashraf_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 border border-[#d1d5db] bg-[#fafafa] hover:bg-white hover:border-black text-black text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-[#0055ff]" />
                <span>RESUME (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Profile Card */}
          <div className="lg:col-span-4 border border-[#e5e7eb] bg-[#f9f9fb] p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-[#e5e7eb] pb-3 text-xs font-mono text-[#6b7280]">
              <span>PROFILE OVERVIEW</span>
              <span className="text-[#16a34a] font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                AVAILABLE
              </span>
            </div>

            <div className="space-y-3.5 text-xs font-mono">
              <div>
                <div className="text-[10px] text-[#6b7280] uppercase">Candidate Full Name</div>
                <div className="text-base font-sans font-bold text-black mt-0.5 tracking-tight">
                  Ashmin Ashraf
                </div>
              </div>

              <div>
                <div className="text-[10px] text-[#6b7280] uppercase">Core Technologies</div>
                <div className="text-sm font-sans font-medium text-black mt-0.5">
                  Python, Django, React.js, JavaScript, MySQL, HTML5/CSS3
                </div>
              </div>

              <div>
                <div className="text-[10px] text-[#6b7280] uppercase">Design Competencies</div>
                <div className="text-sm font-sans font-medium text-black mt-0.5">
                  UI/UX Design, Figma, Responsive Layouts, Bootstrap
                </div>
              </div>

              <div>
                <div className="text-[10px] text-[#6b7280] uppercase">Experience</div>
                <div className="text-sm font-sans font-medium text-black mt-0.5">
                  Freelance Full Stack Developer &amp; Python Intern (Techolas)
                </div>
              </div>

              <div>
                <div className="text-[10px] text-[#6b7280] uppercase">Education</div>
                <div className="text-sm font-sans font-medium text-black mt-0.5">
                  BCA, University of Calicut (2022 – 2025)
                </div>
              </div>
            </div>

            {/* Social Shortcuts */}
            <div className="pt-3 border-t border-[#e5e7eb] grid grid-cols-3 gap-2 text-xs font-mono">
              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                className="justify-center py-1.5 border border-[#e5e7eb] bg-white text-[#374151] hover:text-black hover:border-black flex items-center gap-1 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GITHUB</span>
              </a>

              <a
                href={linkedinLink}
                target="_blank"
                rel="noreferrer"
                className="justify-center py-1.5 border border-[#e5e7eb] bg-white text-[#374151] hover:text-[#0055ff] hover:border-[#0055ff] flex items-center gap-1 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#0055ff]" />
                <span>LINKEDIN</span>
              </a>

              <a
                href="https://www.behance.net/ashminashraf"
                target="_blank"
                rel="noreferrer"
                className="justify-center py-1.5 border border-[#e5e7eb] bg-white text-[#374151] hover:text-black hover:border-black flex items-center gap-1 transition-colors"
              >
                <BehanceIcon className="w-3.5 h-3.5" />
                <span>BEHANCE</span>
              </a>
            </div>
          </div>
        </div>

        {/* Core Stack Strip */}
        <div className="mt-8 sm:mt-12 pt-6 border-t border-[#e5e7eb]">
          <div className="text-xs font-mono text-[#6b7280] mb-3 uppercase tracking-wider">
            CORE TECHNICAL SKILLS
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-l border-t border-[#e5e7eb]">
            {coreStack.map((item, i) => (
              <div
                key={i}
                className="border-r border-b border-[#e5e7eb] p-3 sm:p-3.5 bg-white hover:bg-[#fafafa] transition-colors flex flex-col justify-between min-h-[4.25rem] group"
              >
                <span className="text-[10px] font-mono text-[#9ca3af] group-hover:text-[#0055ff] transition-colors">
                  0{i + 1} • {item.tag}
                </span>
                <span className="text-xs sm:text-sm font-mono font-medium text-[#121316]">
                  <ScrambleText text={item.name} speed={20} duration={300} />
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
