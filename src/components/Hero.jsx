import React, { useState } from 'react';
import PixelGrid from './PixelGrid';
import ScrambleText from './ScrambleText';
import { ArrowDown, ArrowUpRight, Copy, Check, MapPin, Mail, Calendar } from 'lucide-react';
import { GithubIcon, BehanceIcon } from './Icons';

export default function Hero({ onExploreWork }) {
  const [copied, setCopied] = useState(false);
  const email = 'ashminashraf07@gmail.com';
  const calLink = 'https://cal.com/ashmin-ashraf/schedule-meeting?user=ashmin-ashraf';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const coreStack = [
    { name: 'UI / UX Design', tag: 'FIGMA' },
    { name: 'React & Next.js', tag: 'FRONTEND' },
    { name: 'TailwindCSS', tag: 'STYLING' },
    { name: 'GSAP Animation', tag: 'MOTION' },
    { name: 'Python Full-Stack', tag: 'BACKEND' },
    { name: 'AI Developer Tools', tag: 'AI TOOLS' },
  ];

  return (
    <section id="home" className="relative pt-16 border-b border-[#e5e7eb] bg-white">
      {/* Top Banner with Interactive Pixel Grid from Aeye */}
      <div className="bg-[#121316] text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between text-[11px] font-mono tracking-wider">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#0055ff] inline-block" />
            <span className="text-white font-semibold">ASHMIN ASHRAF</span>
            <span className="text-[#9ca3af] hidden sm:inline">• KOZHIKODE, KERALA</span>
          </div>
          <div
            onClick={onExploreWork}
            className="flex items-center gap-1.5 text-[#9ca3af] hover:text-white transition-colors cursor-pointer"
          >
            <span>SCROLL DOWN</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Signature Interactive Pixel Grid Canvas */}
        <PixelGrid rows={4} cols={32} theme="dark" />
      </div>

      {/* Main Hero Content Area */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Big Editorial Headline (STABLE — NO LAYOUT SHIFTS) */}
          <div className="lg:col-span-8 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 text-[11px] sm:text-xs font-mono border border-[#e5e7eb] bg-[#fafafa] max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#0055ff] shrink-0"></span>
              <span className="truncate">
                <ScrambleText text="TOP SOFTWARE DEVELOPER & DESIGNER • KOZHIKODE, KERALA" speed={20} duration={400} />
              </span>
            </div>

            {/* Stable Headline: perfectly sized across all viewport ranges */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-sans font-normal tracking-tight leading-[1.12] sm:leading-[1.08] text-[#121316] break-words">
              Best Software{' '}
              <span className="text-[#0055ff] font-medium group cursor-default inline-block">
                <span>[</span>
                <ScrambleText text="Developer & Designer" speed={25} duration={400} />
                <span>]</span>
              </span>
              <br className="hidden sm:inline" />
              {' '}in Kozhikode, Kerala.
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#4b5563] max-w-2xl font-light leading-relaxed">
              Hi, I'm <strong className="font-semibold text-[#121316]">Ashmin Ashraf</strong>. Based in <strong className="font-medium text-[#121316]">Kozhikode, Kerala</strong>, I engineer high-performance full-stack web applications and craft intuitive, conversion-focused UI/UX design systems in Figma, React, Next.js, and Python.
            </p>

            {/* Action Buttons with responsive stacking for mobile */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
              <button
                onClick={onExploreWork}
                className="w-full sm:w-auto group relative flex items-center justify-center gap-3 px-6 py-3.5 bg-black text-white text-xs font-mono uppercase tracking-wider font-semibold border border-black hover:bg-[#0055ff] hover:border-[#0055ff] transition-all cursor-pointer shadow-xs"
              >
                <ScrambleText text="VIEW PROJECTS" speed={20} duration={350} />
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <a
                href={calLink}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-white text-black text-xs font-mono uppercase tracking-wider font-semibold border border-[#d1d5db] hover:border-black hover:bg-[#fafafa] transition-all flex items-center justify-center gap-2 shadow-xs group"
              >
                <Calendar className="w-3.5 h-3.5 text-[#0055ff]" />
                <ScrambleText text="LET'S CONNECT" speed={20} duration={350} />
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6b7280] group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Direct Quick Copy Email */}
              <button
                onClick={copyEmail}
                className="w-full sm:w-auto px-4 py-3.5 bg-[#f9f9fb] text-[#374151] hover:text-black border border-[#e5e7eb] hover:border-black text-xs font-mono flex items-center justify-center gap-2 transition-all cursor-pointer truncate"
                title="Click to copy email"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#22c55e]" />
                    <span className="text-[#22c55e]">EMAIL COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#9ca3af] shrink-0" />
                    <span className="truncate">{email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Clean Personal Meta Card */}
          <div className="lg:col-span-4 border border-[#e5e7eb] bg-[#f9f9fb] p-5 sm:p-6 space-y-5 sm:space-y-6 relative">
            <div className="flex items-center justify-between border-b border-[#e5e7eb] pb-3 text-xs font-mono text-[#6b7280]">
              <span>PROFILE SPEC</span>
              <span className="text-[#22c55e] font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                AVAILABLE
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-[11px] font-mono text-[#6b7280] uppercase">Name</div>
                <div className="text-base font-semibold text-black">Ashmin Ashraf</div>
              </div>

              <div>
                <div className="text-[11px] font-mono text-[#6b7280] uppercase">Location</div>
                <div className="text-sm text-[#374151] flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0055ff] shrink-0" />
                  <span>Kozhikode, Kerala, India</span>
                </div>
              </div>

              <div>
                <div className="text-[11px] font-mono text-[#6b7280] uppercase">Focus</div>
                <div className="text-sm text-[#374151] mt-0.5 leading-relaxed">
                  Full-Stack Software Engineering, UI/UX Design, Next.js / Python Web Apps, Design Systems
                </div>
              </div>

              <div className="pt-2 border-t border-[#e5e7eb]">
                <div className="text-[11px] font-mono text-[#6b7280] uppercase">Direct Schedule</div>
                <a
                  href={calLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-[#0055ff] hover:underline flex items-center gap-1 mt-0.5 font-medium"
                >
                  <span>Book Call via Cal.com ↗</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-[#e5e7eb] flex flex-wrap gap-2 text-xs font-mono">
              <a
                href="https://github.com/ashminashref/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none justify-center px-2.5 py-2 border border-[#e5e7eb] bg-white text-[#374151] hover:text-black hover:border-black flex items-center gap-1.5 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GITHUB</span>
              </a>

              <a
                href="https://www.behance.net/ashminashraf"
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none justify-center px-2.5 py-2 border border-[#e5e7eb] bg-white text-[#374151] hover:text-black hover:border-black flex items-center gap-1.5 transition-colors"
              >
                <BehanceIcon className="w-3.5 h-3.5" />
                <span>BEHANCE</span>
              </a>

              <a
                href={`mailto:${email}`}
                className="flex-1 sm:flex-none justify-center px-2.5 py-2 border border-[#e5e7eb] bg-white text-[#374151] hover:text-black hover:border-black flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#0055ff]" />
                <span>EMAIL</span>
              </a>
            </div>
          </div>
        </div>

        {/* Streamlined Core Stack Strip */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-[#e5e7eb]">
          <div className="text-xs font-mono text-[#6b7280] mb-4 uppercase tracking-wider flex items-center justify-between">
            <span>TECHNICAL CAPABILITIES</span>
            <span className="hidden sm:inline">FIGMA ⇄ PRODUCTION CODE</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-l border-t border-[#e5e7eb]">
            {coreStack.map((item, i) => (
              <div
                key={i}
                className="border-r border-b border-[#e5e7eb] p-3 sm:p-4 bg-white hover:bg-[#fafafa] transition-colors flex flex-col justify-between min-h-[4.75rem] sm:min-h-[5rem] group"
              >
                <span className="text-[10px] font-mono text-[#9ca3af] group-hover:text-[#0055ff] transition-colors">
                  0{i + 1} • {item.tag}
                </span>
                <span className="text-xs sm:text-sm font-mono font-medium text-[#121316] leading-snug">
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
