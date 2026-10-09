import React, { useState } from 'react';
import ScrambleText from './ScrambleText';
import { Plus, Minus } from 'lucide-react';

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0);

  const history = [
    {
      period: '2025 — PRESENT',
      role: 'Freelance Designer & Web Developer',
      entity: 'Client Projects & Independent Works',
      location: 'Kozhikode, Kerala • Remote',
      summary:
        'Continuing freelance design and web development work—crafting user experiences in Figma and building responsive web applications with modern frontend and Python backend workflows.',
      highlights: [
        'Delivering end-to-end design and web development solutions for client projects.',
        'Bridging Figma design prototypes into clean, responsive web code with TailwindCSS and GSAP.',
        'Leveraging modern AI developer tools to accelerate prototyping, code quality, and delivery.',
      ],
      stack: ['Figma', 'React', 'TailwindCSS', 'Python', 'AI Tools', 'GSAP'],
    },
    {
      period: '2025',
      role: 'Python Full-Stack Development Course',
      entity: 'Full-Stack Specialization Coursework',
      location: 'Kerala, India',
      summary:
        'Completed comprehensive training in Python full-stack development, mastering backend logic, RESTful APIs, database modeling, and end-to-end web architecture.',
      highlights: [
        'Built server-side architectures, API endpoints, and database models using Python.',
        'Integrated modern frontend interfaces with backend databases and services.',
        'Mastered git workflows, clean code architecture, and deployment pipelines.',
      ],
      stack: ['Python', 'Django / FastAPI', 'PostgreSQL', 'REST APIs', 'Git'],
    },
    {
      period: '2022 — 2025',
      role: 'BCA Degree & Freelance Design / Web Projects',
      entity: 'BCA University Studies & Freelance Practice',
      location: 'Kozhikode, Kerala',
      summary:
        'Completed Bachelor of Computer Applications (BCA) degree while actively designing and developing freelance web projects and UI/UX assets for clients.',
      highlights: [
        'Earned BCA degree building solid foundations in computer science and programming.',
        'Self-taught modern UI/UX design in Figma and executed freelance client projects in parallel.',
        'Delivered brand identities, responsive web layouts, and interactive digital interfaces.',
      ],
      stack: ['BCA Degree', 'Figma', 'UI/UX Design', 'JavaScript', 'React', 'HTML5/CSS3'],
    },
  ];

  return (
    <section id="experience" className="py-20 border-b border-[#e5e7eb] bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#e5e7eb] gap-6">
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#6b7280] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-[#0055ff] inline-block"></span>
              <span>CAREER CHRONOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal tracking-tight text-[#121316]">
              The Journey.{' '}
              <span className="block text-[#0055ff] font-medium">Experience & Milestones</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#4b5563] font-light leading-relaxed">
            From self-taught curiosity in Kozhikode to building full-scale design systems and production web applications.
          </p>
        </div>

        {/* Clean Accordion List */}
        <div className="border border-[#e5e7eb] divide-y divide-[#e5e7eb]">
          {history.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="bg-white transition-colors">
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-6 sm:p-8 flex items-center justify-between hover:bg-[#fafafa] transition-colors gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-center flex-1">
                    <span className="md:col-span-3 text-xs font-mono text-[#0055ff] font-semibold">
                      {item.period}
                    </span>
                    <span className="md:col-span-5 text-lg font-sans font-semibold text-[#121316]">
                      <ScrambleText text={item.role} speed={20} duration={300} />
                    </span>
                    <span className="md:col-span-4 text-xs font-mono text-[#6b7280] flex items-center justify-between">
                      <span>{item.entity}</span>
                      <span className="hidden sm:inline text-[#9ca3af]">{item.location}</span>
                    </span>
                  </div>

                  <div className="w-8 h-8 border border-[#e5e7eb] flex items-center justify-center shrink-0">
                    {isOpen ? <Minus className="w-4 h-4 text-[#0055ff]" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Accordion Content Body */}
                {isOpen && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 bg-[#fcfcfd] border-t border-[#f3f4f6] space-y-5 animate-in fade-in duration-200">
                    <p className="text-sm text-[#4b5563] leading-relaxed max-w-3xl">
                      {item.summary}
                    </p>

                    <div className="space-y-2">
                      <div className="text-[11px] font-mono text-[#6b7280] uppercase tracking-wider">
                        Key Deliverables & Highlights:
                      </div>
                      <div className="space-y-1.5">
                        {item.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="text-xs text-[#374151] flex items-start gap-2">
                            <span className="text-[#0055ff] font-bold">›</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 pt-2">
                      <span className="text-[10px] font-mono text-[#9ca3af] uppercase mr-2">
                        STACK:
                      </span>
                      {item.stack.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 text-[10px] font-mono bg-white border border-[#e5e7eb] text-[#374151]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
