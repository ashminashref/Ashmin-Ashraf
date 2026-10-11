import React from 'react';
import ScrambleText from './ScrambleText';
import { Palette, Code2, Server, CheckCircle } from 'lucide-react';

export default function Capabilities() {
  const domains = [
    {
      id: 'backend',
      title: 'Python & Backend APIs',
      category: '01: BACKEND & DATABASE',
      icon: Server,
      summary: 'Developing scalable RESTful APIs with Python and Django, backed by relational database architectures in MySQL.',
      skills: [
        'Python Programming & Object-Oriented Design',
        'Django Web Framework & RESTful APIs',
        'MySQL Database Modeling & Normalization',
        'API Authentication & Endpoint Integration',
        'NumPy Utilities for Data Manipulation',
        'Clean, Maintainable Server Architecture',
      ],
      tools: ['Python', 'Django', 'MySQL', 'REST API', 'Postman', 'Git'],
    },
    {
      id: 'frontend',
      title: 'Frontend & Web Development',
      category: '02: FRONTEND ARCHITECTURE',
      icon: Code2,
      summary: 'Crafting responsive client interfaces with React.js, React Hooks, React Router, and modern CSS frameworks.',
      skills: [
        'React.js, React Hooks & State Management',
        'React Router Client Navigation',
        'JavaScript (ES6+) & Dynamic Web Apps',
        'HTML5, CSS3, SASS/LESS Preprocessing',
        'Bootstrap, React-Bootstrap, Material UI',
        'Tailwind CSS & Mobile-First Layouts',
      ],
      tools: ['React.js', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3'],
    },
    {
      id: 'design',
      title: 'UI/UX Design & Tooling',
      category: '03: DESIGN & WORKFLOW',
      icon: Palette,
      summary: 'Designing intuitive user interfaces in Figma and maintaining smooth Git collaboration workflows.',
      skills: [
        'UI/UX Prototyping & Layouts in Figma',
        'Component Systems & Responsive Design',
        'Visual Hierarchy, Typography & Usability',
        'Git Branching & GitHub Collaboration',
        'Cross-Browser Testing & Debugging',
        'Clean Code Principles & Problem Solving',
      ],
      tools: ['Figma', 'Git', 'GitHub', 'VS Code', 'Chrome DevTools'],
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 border-b border-[#e5e7eb] bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 pb-5 border-b border-[#e5e7eb] gap-4">
          <div className="space-y-2">
            <div className="text-xs font-mono text-[#6b7280] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-[#0055ff] inline-block"></span>
              <span>TECHNICAL COMPETENCIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-normal tracking-tight text-[#121316]">
              Skills &amp; Tools.{' '}
              <span className="block text-[#0055ff] font-medium">Python Full Stack &amp; UI Design</span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#4b5563] font-light leading-relaxed">
            Core technical abilities spanning Python/Django backends, responsive React.js frontends, and Figma UI/UX design.
          </p>
        </div>

        {/* 3 Discipline Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-l border-t border-[#e5e7eb]">
          {domains.map((domain) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.id}
                className="border-r border-b border-[#e5e7eb] p-5 sm:p-6 lg:p-8 bg-white hover:bg-[#fafafa] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Category tag */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#0055ff] font-semibold">{domain.category}</span>
                    <span className="text-[#22c55e] font-semibold flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      <span>PROFICIENT</span>
                    </span>
                  </div>

                  {/* Header & Icon */}
                  <div className="space-y-2">
                    <div className="w-10 h-10 border border-[#e5e7eb] bg-[#f9f9fb] group-hover:bg-[#0055ff] group-hover:text-white group-hover:border-[#0055ff] transition-all flex items-center justify-center text-[#121316]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-sans font-semibold text-[#121316] tracking-tight">
                      <ScrambleText text={domain.title} speed={20} duration={350} />
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4b5563] font-light leading-relaxed">
                      {domain.summary}
                    </p>
                  </div>

                  {/* Skills Checklist */}
                  <div className="space-y-1.5 pt-3 border-t border-[#f3f4f6]">
                    <div className="text-[11px] font-mono text-[#6b7280] uppercase tracking-wider mb-1">
                      Core Skills
                    </div>
                    {domain.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-[#374151]">
                        <span className="text-[#0055ff] mt-0.5 shrink-0">▪</span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tools Pill Box */}
                <div className="pt-4 border-t border-[#f3f4f6] mt-4">
                  <div className="text-[11px] font-mono text-[#6b7280] uppercase tracking-wider mb-2">
                    Toolset
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {domain.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 bg-white border border-[#e5e7eb] text-[#374151]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Standards Summary Banner */}
        <div className="mt-6 p-3.5 bg-[#f9f9fb] border border-[#e5e7eb] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#4b5563]">
            <span className="w-2 h-2 rounded-full bg-[#0055ff]" />
            <span className="font-semibold text-black">STANDARDS:</span>
            <span>Clean Code &amp; Documentation</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-[#6b7280]">
            <span>Responsive Layouts</span>
            <span>•</span>
            <span>REST API Integration</span>
            <span>•</span>
            <span>Git Collaboration</span>
          </div>
        </div>

      </div>
    </section>
  );
}
