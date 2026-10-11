import React, { useState } from 'react';
import ScrambleText from './ScrambleText';
import { Plus, Minus } from 'lucide-react';

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0);

  const history = [
    {
      period: '05/2025 — 01/2026',
      role: 'Python Full Stack Developer Intern',
      entity: 'Techolas Technologies',
      location: 'Calicut, Kerala',
      summary:
        'Developed dynamic web applications, built RESTful backend APIs with Django, and created responsive user interfaces with React.js.',
      highlights: [
        'Built & integrated RESTful APIs using Django to connect frontend applications with backend services.',
        'Developed responsive web applications using React.js, JavaScript, React-Bootstrap, and CSS.',
        'Utilized React Router for application navigation and managed component state efficiently with React Hooks.',
      ],
      stack: ['Python', 'Django', 'React.js', 'REST APIs', 'MySQL', 'React Router'],
    },
    {
      period: '2024 — Present',
      role: 'Freelance Full Stack Developer & UI Designer',
      entity: 'Independent Practice / Client Projects',
      location: 'Remote',
      summary:
        'Designing and engineering custom web applications, responsive client platforms, and digital products using Python, Django, React.js, and Figma.',
      highlights: [
        'Built full stack client solutions including Dotbey Media, community PWAs, and custom landing experiences.',
        'Engineered responsive web applications with React.js, modern CSS, and integrated REST APIs.',
        'Collaborated directly with clients to deliver complete Figma UI/UX prototypes and clean, maintainable codebases.',
      ],
      stack: ['Python', 'Django', 'React.js', 'Figma', 'MySQL', 'JavaScript', 'REST APIs'],
    },
    {
      period: '2022 — 2025',
      role: 'Bachelor of Computer Applications (BCA)',
      entity: 'University of Calicut',
      location: 'Kerala, India',
      summary:
        'Completed Bachelor of Computer Applications degree, building core foundations in computer science, database design, and software engineering.',
      highlights: [
        'Formed strong foundations in relational database management (MySQL), algorithms, and object-oriented programming.',
        'Developed end-to-end projects including e-voting systems (Votte Digital) and interactive campus tools.',
        'Bridged technical backend architecture with clean, intuitive user interface design.',
      ],
      stack: ['BCA Degree', 'Python', 'MySQL', 'Data Structures', 'Web Development'],
    },
    {
      period: '2025',
      role: 'Python Full Stack Certification',
      entity: 'Microsoft x DSCI | NCTT',
      location: 'National Council for Tech',
      summary:
        'Completed intensive course curriculum in Python full stack web engineering, covering Django backends, REST APIs, and modern frontend tools.',
      highlights: [
        'Trained in building end-to-end web apps with Django, database integration, and API architecture.',
        'Mastered component-driven frontend patterns, responsive UI design, and Git version control.',
        'Awarded official course completion certification in Python Full Stack Development.',
      ],
      stack: ['Python', 'Django', 'REST APIs', 'React.js', 'MySQL', 'Git'],
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 border-b border-[#e5e7eb] bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-[#e5e7eb] gap-4">
          <div className="space-y-2">
            <div className="text-xs font-mono text-[#6b7280] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-[#0055ff] inline-block"></span>
              <span>PROFESSIONAL BACKGROUND</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-normal tracking-tight text-[#121316]">
              Experience &amp; Education.{' '}
              <span className="block text-[#0055ff] font-medium">Internship, Freelance &amp; Education</span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#4b5563] font-light leading-relaxed">
            Practical experience in Python full stack development, freelance client delivery, and computer science education.
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
                  className="w-full text-left p-4 sm:p-6 lg:p-8 flex items-center justify-between hover:bg-[#fafafa] transition-colors gap-3 sm:gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col md:grid md:grid-cols-12 gap-1 md:gap-6 items-start md:items-center flex-1 pr-2">
                    <span className="md:col-span-3 text-xs font-mono text-[#0055ff] font-semibold">
                      {item.period}
                    </span>
                    <span className="md:col-span-5 text-base sm:text-lg font-sans font-semibold text-[#121316]">
                      <ScrambleText text={item.role} speed={20} duration={300} />
                    </span>
                    <span className="md:col-span-4 text-xs font-mono text-[#6b7280] flex flex-wrap items-center justify-between gap-1">
                      <span>{item.entity}</span>
                      <span className="hidden sm:inline text-[#9ca3af]">{item.location}</span>
                    </span>
                  </div>

                  <div className="w-7 h-7 sm:w-8 sm:h-8 border border-[#e5e7eb] flex items-center justify-center shrink-0">
                    {isOpen ? <Minus className="w-4 h-4 text-[#0055ff]" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Accordion Content Body */}
                {isOpen && (
                  <div className="px-4 sm:px-8 pb-6 sm:pb-8 pt-3 bg-[#fcfcfd] border-t border-[#f3f4f6] space-y-4 sm:space-y-5 animate-in fade-in duration-200">
                    <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed max-w-3xl font-light">
                      {item.summary}
                    </p>

                    <div className="space-y-2">
                      <div className="text-[11px] font-mono text-[#6b7280] uppercase tracking-wider">
                        Key Deliverables & Highlights:
                      </div>
                      <div className="space-y-1.5">
                        {item.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="text-xs text-[#374151] flex items-start gap-2">
                            <span className="text-[#0055ff] font-bold shrink-0">›</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 pt-2">
                      <span className="text-[10px] font-mono text-[#9ca3af] uppercase mr-1">
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
