import React from 'react';
import ScrambleText from './ScrambleText';
import { Palette, Code2, Database, Terminal, Cpu, CheckCircle } from 'lucide-react';

export default function Capabilities() {
  const domains = [
    {
      id: 'design',
      title: 'Design Systems & UI Craft',
      category: 'DISCIPLINE 01',
      icon: Palette,
      summary: 'Mathematical precision meets tactile human emotion. Crafting interfaces that look effortless and scale reliably.',
      skills: [
        'Design Systems Architecture',
        'Figma Component Architecture & Variables',
        'Atomic Design & Token Standardization',
        'Tactile Micro-interactions & Physics',
        'Accessibility (WCAG 2.2 AAA Compliance)',
        'Responsive Layouts & Visual Hierarchy',
      ],
      tools: ['Figma', 'FigJam', 'Tokens Studio', 'Framer', 'Illustrator', 'CSS Shaders'],
    },
    {
      id: 'frontend',
      title: 'Frontend Engineering & Motion',
      category: 'DISCIPLINE 02',
      icon: Code2,
      summary: 'Bridging layout to code with pixel fidelity. Building fluid, compositor-driven web experiences.',
      skills: [
        'React 19 & Concurrent Features',
        'TypeScript Type Safety & Generics',
        'TailwindCSS Modern Layout & Utility Grids',
        'GSAP, ScrollTrigger & View Transitions',
        'WebGL Shaders & Three.js 3D Scenes',
        'Core Web Vitals & Bundle Optimization',
      ],
      tools: ['React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind', 'GSAP', 'HTML5/Canvas'],
    },
    {
      id: 'backend',
      title: 'Python Full-Stack & AI Tools',
      category: 'DISCIPLINE 03',
      icon: Cpu,
      summary: 'Python backend architectures paired with modern AI-accelerated workflows for rapid product building and iteration.',
      skills: [
        'Python & Django / FastAPI Services',
        'RESTful API Engineering & Endpoints',
        'PostgreSQL Database Modeling & Schemas',
        'AI-Assisted Development (Cursor, Claude, v0)',
        'Prompt Engineering & LLM Integration',
        'Full-Stack Git Pipelines & Deployment',
      ],
      tools: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'Cursor', 'Claude', 'ChatGPT', 'v0'],
    },
  ];

  return (
    <section id="skills" className="py-20 border-b border-[#e5e7eb] bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#e5e7eb] gap-6">
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#6b7280] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-[#0055ff] inline-block"></span>
              <span>CAPABILITIES MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal tracking-tight text-[#121316]">
              Dual-Discipline Mastery.{' '}
              <span className="block text-[#0055ff] font-medium">Design Taste + Technical Depth</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#4b5563] font-light leading-relaxed">
            The rare dual capability of envisioning high-tier aesthetics in design tools and 
            engineering them directly into production codebases with zero dilution.
          </p>
        </div>

        {/* 3 Large Discipline Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-l border-t border-[#e5e7eb]">
          {domains.map((domain, idx) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.id}
                className="border-r border-b border-[#e5e7eb] p-8 sm:p-10 bg-white hover:bg-[#fafafa] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  {/* Top Category tag */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#0055ff] font-semibold">{domain.category}</span>
                    <span className="text-[#9ca3af]">VERIFIED</span>
                  </div>

                  {/* Header & Icon */}
                  <div className="space-y-3">
                    <div className="w-12 h-12 border border-[#e5e7eb] bg-[#f9f9fb] group-hover:bg-[#0055ff] group-hover:text-white group-hover:border-[#0055ff] transition-all flex items-center justify-center text-[#121316]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-sans font-semibold text-[#121316] tracking-tight">
                      <ScrambleText text={domain.title} speed={20} duration={350} />
                    </h3>
                    <p className="text-sm text-[#4b5563] font-light leading-relaxed">
                      {domain.summary}
                    </p>
                  </div>

                  {/* Skills Checklist */}
                  <div className="space-y-2 pt-4 border-t border-[#f3f4f6]">
                    <div className="text-[11px] font-mono text-[#6b7280] uppercase tracking-wider mb-2">
                      Core Competencies
                    </div>
                    {domain.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5 text-xs text-[#374151]">
                        <span className="text-[#0055ff] mt-0.5">▪</span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tools Pill Box */}
                <div className="pt-8 border-t border-[#f3f4f6] mt-8">
                  <div className="text-[11px] font-mono text-[#6b7280] uppercase tracking-wider mb-2">
                    Primary Tools
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {domain.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 bg-white border border-[#e5e7eb] text-[#374151]"
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

      </div>
    </section>
  );
}
