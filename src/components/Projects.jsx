import React, { useState } from 'react';
import ScrambleText from './ScrambleText';
import { ArrowUpRight, ExternalLink, ArrowDown, X, Code2, Palette } from 'lucide-react';
import { GithubIcon, BehanceIcon } from './Icons';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'dev' | 'design'
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 'prj-01',
      code: '01',
      type: 'dev',
      typeLabel: 'Full-Stack',
      title: 'VOTte',
      category: 'Digital Voting Platform',
      year: '2025',
      role: 'Full-Stack Developer & UI Designer',
      liveUrl: 'https://github.com/ashminashref/votte-digital',
      githubUrl: 'https://github.com/ashminashref/votte-digital',
      behanceUrl: 'https://www.behance.net/ashminashraf',
      image: '/projects/votte.png',
      description:
        'Democracy, Delivered. A secure, transparent digital voting platform for educational institutions and organizations, replacing paper-based processes with authenticated voting.',
      tech: ['Python', 'Django', 'MySQL', 'JavaScript', 'NumPy'],
      impact:
        'Engineered authenticated voter access in Django, protected database integrity in MySQL, and streamlined admin tallying with Python NumPy utilities.',
      specs: [
        { label: 'Platform Headline', value: 'VOTte • Democracy, Delivered.' },
        { label: 'Backend Framework', value: 'Python 3 & Django Framework' },
        { label: 'Database', value: 'MySQL Relational Schema' },
        { label: 'Data Processing', value: 'NumPy for vote aggregation & tallying' },
        { label: 'Frontend', value: 'HTML5, CSS3, JavaScript, Responsive UI' },
      ],
    },
    {
      id: 'prj-02',
      code: '02',
      type: 'dev',
      typeLabel: 'AI & Frontend',
      title: 'Weaver AI',
      category: 'AI CSS Code Generator',
      year: '2025',
      role: 'Frontend Developer & AI Integration',
      liveUrl: 'https://github.com/ashminashref/weaver-ai',
      githubUrl: 'https://github.com/ashminashref/weaver-ai',
      behanceUrl: 'https://www.behance.net/ashminashraf',
      image: '/projects/weaver.jpg',
      description:
        'AI-powered CSS generation platform transforming natural language prompts into responsive, production-ready code.',
      tech: ['React.js', 'Gemini AI API', 'JavaScript', 'Tailwind CSS'],
      impact:
        'Integrated Gemini AI API for natural language prompt analysis and code generation, paired with real-time UI preview and one-click copy.',
      specs: [
        { label: 'AI Integration', value: 'Google Gemini AI API' },
        { label: 'Frontend Core', value: 'React.js with Hooks & State Management' },
        { label: 'Styling Engine', value: 'Tailwind CSS' },
        { label: 'Source Repo', value: 'github.com/ashminashref/weaver-ai' },
      ],
    },
    {
      id: 'prj-03',
      code: '03',
      type: 'dev',
      typeLabel: 'Development',
      title: 'Dotbey Media',
      category: 'Agency Web Platform',
      year: '2026',
      role: 'Frontend Engineer & UI Designer',
      liveUrl: 'https://dotbeymedia.netlify.app/',
      githubUrl: 'https://github.com/ashminashref/Dotbey',
      behanceUrl: 'https://www.behance.net/ashminashraf',
      image: '/projects/dotbey.png',
      description:
        'High-performance marketing platform built with modern React, custom visual showcases, and conversion-optimized funnels.',
      tech: ['React', 'Next.js 15', 'JavaScript', 'Tailwind CSS', 'Netlify Edge'],
      impact:
        'Engineered edge streaming and CSS purging, achieving a 99/100 Lighthouse score and sub-0.8s First Contentful Paint.',
      specs: [
        { label: 'Platform Core', value: 'Next.js 15 App Router & React' },
        { label: 'Performance Metric', value: 'Sub-second LCP (0.78s) & 99/100 Lighthouse' },
        { label: 'Architecture', value: 'Edge-Rendered SSR' },
        { label: 'Deployment', value: 'Netlify Edge CI/CD' },
      ],
    },
    {
      id: 'prj-04',
      code: '04',
      type: 'dev',
      typeLabel: 'Development',
      title: 'Megwedd Studios',
      category: 'Editorial Visuals & Motion',
      year: '2025',
      role: 'Frontend Engineer & Motion Designer',
      liveUrl: 'https://megwedd.vercel.app/',
      githubUrl: 'https://github.com/ashminashref/megwedd',
      behanceUrl: 'https://www.behance.net/ashminashraf',
      image: '/projects/megwedd.png',
      description:
        'Cinematic editorial portfolio and visual inquiry platform featuring custom GSAP scroll physics and darkroom noir styling.',
      tech: ['React', 'Vite', 'GSAP ScrollTrigger', 'Tailwind CSS', 'Vercel'],
      impact:
        'Optimized GPU-composited animation timelines, locking playback to a steady 60 FPS on mobile and desktop devices.',
      specs: [
        { label: 'Animation Engine', value: 'GSAP ScrollTrigger Timelines' },
        { label: 'Performance Metric', value: 'Consistent 60 FPS with zero layout reflows' },
        { label: 'Deployment', value: 'Vercel Production Edge' },
        { label: 'Source Repo', value: 'github.com/ashminashref/megwedd' },
      ],
    },
    {
      id: 'prj-05',
      code: '05',
      type: 'dev',
      typeLabel: 'PWA',
      title: 'Mahal Connect',
      category: 'Community Administration PWA',
      year: '2025',
      role: 'Full-Stack Developer & UI Designer',
      liveUrl: 'https://thalayadmahal.netlify.app/',
      githubUrl: 'https://github.com/ashminashref/thalayad_mahal',
      behanceUrl: 'https://www.behance.net/ashminashraf',
      image: '/projects/mahal.png',
      description:
        'Installable Progressive Web App for local community record administration, member registries, and announcements.',
      tech: ['React', 'Vite', 'PWA / Service Worker', 'Tailwind CSS', 'REST APIs'],
      impact:
        'Engineered offline-first state synchronization with Service Worker caching for reliable access in constrained network environments.',
      specs: [
        { label: 'Architecture', value: 'Progressive Web App (Offline-Ready)' },
        { label: 'State & Caching', value: 'IndexedDB + Service Worker' },
        { label: 'Deployment', value: 'Netlify Edge' },
        { label: 'Source Repo', value: 'github.com/ashminashref/thalayad_mahal' },
      ],
    },
    {
      id: 'prj-06',
      code: '06',
      type: 'design',
      typeLabel: 'Design System',
      title: 'Dotbey Design System',
      category: 'Brand Tokens & Component Library',
      year: '2026',
      role: 'Product Designer & Systems Lead',
      liveUrl: 'https://www.behance.net/gallery/256815173/Dotbey/modules/1498582289',
      githubUrl: 'https://github.com/ashminashref/Dotbey',
      behanceUrl: 'https://www.behance.net/gallery/256815173/Dotbey/modules/1498582289',
      image: '/projects/dotbey_design.png',
      description:
        'End-to-end design token architecture and modular component library bridging Figma variables directly into Tailwind CSS.',
      tech: ['Figma Variables', 'Design Tokens', 'Tailwind Config', 'Atomic Design'],
      impact:
        'Standardized 1:1 token mappings between Figma collections and Tailwind theme tokens, reducing UI turnaround by 60%.',
      specs: [
        { label: 'Platform Spec', value: 'Behance Case Study & GitHub System' },
        { label: 'Design System', value: 'Figma Variables mapped to CSS Tokens' },
        { label: 'Source Repo', value: 'github.com/ashminashref/Dotbey' },
      ],
    },
  ];

  const devCount = projects.filter((p) => p.type === 'dev').length;
  const designCount = projects.filter((p) => p.type === 'design').length;

  const filteredProjects =
    activeTab === 'all'
      ? projects
      : projects.filter((p) => p.type === activeTab);

  // Show only 2 projects initially, expand when showAll is true
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 2);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowAll(false);
  };

  return (
    <section id="projects" className="py-14 sm:py-20 border-b border-[#e5e7eb] bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 sm:pb-6 border-b border-[#e5e7eb] gap-4 sm:gap-6">
          <div className="space-y-2 sm:space-y-3">
            <div className="text-xs font-mono text-[#6b7280] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-[#0055ff] inline-block"></span>
              <span>INDEXED WORKS • CASE STUDIES &amp; SOURCE REPOSITORIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-normal tracking-tight text-[#121316]">
              Selected Projects.{' '}
              <span className="block text-[#0055ff] font-medium">Production Systems &amp; Case Studies</span>
            </h2>
          </div>

          <div className="space-y-2 max-w-md">
            <p className="text-xs sm:text-sm md:text-base text-[#4b5563] font-light leading-relaxed">
              Real software and design systems built end-to-end. Every card includes technical hurdles solved, stack badges, live links, and GitHub code inspection.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <a
                href="https://github.com/ashminashref/"
                target="_blank"
                rel="noreferrer"
                className="text-[#0055ff] hover:underline flex items-center gap-1 font-semibold"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GITHUB PROFILE ↗</span>
              </a>
              <span className="text-[#d1d5db] hidden xs:inline">|</span>
              <a
                href="https://www.behance.net/ashminashraf"
                target="_blank"
                rel="noreferrer"
                className="text-[#0055ff] hover:underline flex items-center gap-1 font-semibold"
              >
                <BehanceIcon className="w-3.5 h-3.5" />
                <span>BEHANCE PROFILE ↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Dedicated Filter Buttons */}
        <div className="flex items-center gap-2 mb-8 sm:mb-10 overflow-x-auto pb-2 border-b border-[#f3f4f6] -mx-4 px-4 sm:mx-0 sm:px-0 flex-nowrap">
          <button
            onClick={() => handleTabChange('all')}
            className={`shrink-0 px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'all'
                ? 'bg-black text-white font-semibold shadow-xs'
                : 'bg-[#f9f9fb] text-[#4b5563] hover:text-black hover:bg-[#e5e7eb] border border-[#e5e7eb]'
            }`}
          >
            <span>ALL CASE STUDIES</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-xs font-mono ${
                activeTab === 'all' ? 'bg-white/20 text-white' : 'bg-[#e5e7eb] text-[#374151]'
              }`}
            >
              {projects.length}
            </span>
          </button>

          <button
            onClick={() => handleTabChange('dev')}
            className={`shrink-0 px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'dev'
                ? 'bg-black text-white font-semibold shadow-xs'
                : 'bg-[#f9f9fb] text-[#4b5563] hover:text-black hover:bg-[#e5e7eb] border border-[#e5e7eb]'
            }`}
          >
            <Code2 className="w-3.5 h-3.5 text-[#0055ff]" />
            <span>DEVELOPMENT &amp; APPS</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-xs font-mono ${
                activeTab === 'dev' ? 'bg-white/20 text-white' : 'bg-[#e5e7eb] text-[#374151]'
              }`}
            >
              {devCount}
            </span>
          </button>

          <button
            onClick={() => handleTabChange('design')}
            className={`shrink-0 px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'design'
                ? 'bg-black text-white font-semibold shadow-xs'
                : 'bg-[#f9f9fb] text-[#4b5563] hover:text-black hover:bg-[#e5e7eb] border border-[#e5e7eb]'
            }`}
          >
            <Palette className="w-3.5 h-3.5 text-[#0055ff]" />
            <span>DESIGN SYSTEMS &amp; UI</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-xs font-mono ${
                activeTab === 'design' ? 'bg-white/20 text-white' : 'bg-[#e5e7eb] text-[#374151]'
              }`}
            >
              {designCount}
            </span>
          </button>
        </div>

        {/* 2-Column Grid of Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="border border-[#e5e7eb] bg-white hover:border-black transition-all group flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              {/* Project Top Meta */}
              <div className="p-3.5 sm:p-5 border-b border-[#e5e7eb] bg-[#fafafa] flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                  <span className="text-xs font-mono font-bold text-[#0055ff] px-2 py-0.5 bg-[#f0f4ff] border border-[#d6e4ff] shrink-0">
                    {project.code}
                  </span>
                  <span className="text-xs font-mono text-[#4b5563] uppercase truncate max-w-[130px] xs:max-w-[190px] sm:max-w-none">
                    {project.category}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <span className="text-[10px] sm:text-[11px] font-mono px-1.5 sm:px-2 py-0.5 bg-white border border-[#e5e7eb] text-[#374151]">
                    {project.typeLabel}
                  </span>
                  <span className="text-[11px] sm:text-xs font-mono text-[#9ca3af]">{project.year}</span>
                </div>
              </div>

              {/* Realistic Browser Window Frame with Real Screenshot */}
              <div className="bg-[#0f1117] border-b border-[#e5e7eb] overflow-hidden">
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-[#161822] border-b border-[#252836] text-[11px] font-mono text-[#8b949e]">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80 shrink-0 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80 shrink-0 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80 shrink-0 inline-block" />
                    <span className="ml-1 sm:ml-2 text-[10px] text-[#9ca3af] truncate max-w-[110px] xs:max-w-[180px] sm:max-w-[260px]">
                      {project.type === 'design' 
                        ? (project.title.includes('Dotbey') ? 'behance.net/gallery/256815173/Dotbey' : 'behance.net/gallery/224876661/Spotify-Redesign')
                        : project.liveUrl.replace('https://', '')}
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#388bfd] bg-[#388bfd]/10 px-1.5 sm:px-2 py-0.5 shrink-0">
                    {project.type === 'dev' ? 'PRODUCTION DEPLOYMENT' : 'CASE STUDY SPEC'}
                  </span>
                </div>

                {/* Screenshot Image View */}
                <div className="relative h-48 xs:h-56 sm:h-64 overflow-hidden bg-[#0d1117] flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.category} engineered by Design Engineer Ashmin Ashraf`}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Case Study Structured Card Body */}
              <div className="p-5 sm:p-7 space-y-4 bg-white flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-sans font-semibold text-[#121316] tracking-tight group-hover:text-[#0055ff] transition-colors">
                      {project.title}
                    </h3>

                    {/* Structured Metadata: Role / Contribution */}
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#0055ff] font-medium">
                      <span className="text-[#6b7280] uppercase">Role:</span>
                      <span>{project.role}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Structured Metadata: Key Impact / Challenge Solved */}
                  <div className="p-3 bg-[#f9f9fb] border-l-2 border-[#0055ff] border-y border-r border-[#e5e7eb] space-y-1">
                    <div className="text-[10px] font-mono text-[#6b7280] uppercase tracking-wider font-semibold">
                      Key Technical Challenge &amp; Impact:
                    </div>
                    <p className="text-xs text-[#1f2937] leading-relaxed font-sans">
                      {project.impact}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Structured Metadata: Tech Stack Badges */}
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-mono text-[#6b7280] uppercase tracking-wider">
                      Tech Stack:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 bg-[#f3f4f6] text-[#374151] border border-[#e5e7eb] font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Primary Action Buttons: Both Live Demo AND GitHub / Source Code on Every Card */}
                  <div className="pt-3 sm:pt-4 border-t border-[#f3f4f6] flex flex-wrap items-center justify-between gap-2.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 bg-black text-white hover:bg-[#0055ff] transition-colors text-xs font-mono uppercase font-semibold border border-black shadow-xs"
                      >
                        <span>{project.type === 'design' ? 'VIEW CASE STUDY' : 'LIVE DEMO'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-all text-xs font-mono uppercase font-semibold"
                          title="Inspect GitHub Source Code"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>SOURCE CODE</span>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-mono font-semibold uppercase tracking-wider text-black hover:text-[#0055ff] flex items-center gap-1 transition-colors cursor-pointer py-1 ml-auto"
                    >
                      <ScrambleText text="SPECS" speed={20} duration={300} />
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More / Show Less Button */}
        {filteredProjects.length > 2 && (
          <div className="mt-10 sm:mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 bg-black text-white hover:bg-[#0055ff] transition-all text-xs font-mono uppercase tracking-wider font-semibold border border-black cursor-pointer shadow-xs hover:shadow-md"
            >
              <span>
                {showAll
                  ? 'SHOW FEWER PROJECTS'
                  : `VIEW MORE PROJECTS (${filteredProjects.length - 2} MORE)`}
              </span>
              <ArrowDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  showAll ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
        )}

        {/* Project Detail Modal Drawer */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
            <div className="bg-white border border-black max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 flex flex-col">
              
              {/* Modal Header */}
              <div className="border-b border-[#e5e7eb] p-4 sm:p-6 bg-[#fafafa] flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <span className="px-2 py-0.5 text-xs font-mono bg-[#0055ff] text-white shrink-0">
                    {selectedProject.code}
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-semibold uppercase text-black truncate max-w-[180px] xs:max-w-sm">
                    {selectedProject.title}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 hover:bg-[#e5e7eb] border border-[#d1d5db] transition-colors cursor-pointer shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Screenshot Frame */}
              <div className="border-b border-[#e5e7eb] bg-[#0d1117] h-48 xs:h-56 sm:h-64 overflow-hidden shrink-0">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} - ${selectedProject.category} engineered by Design Engineer Ashmin Ashraf`}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-8 space-y-5 sm:space-y-6">
                <div>
                  <div className="text-xs font-mono text-[#6b7280] uppercase mb-1">Overview & Role</div>
                  <p className="text-xs sm:text-sm text-[#374151] leading-relaxed">
                    {selectedProject.description}
                  </p>
                  <div className="mt-2 text-xs font-mono text-[#0055ff]">
                    ROLE: {selectedProject.role} ({selectedProject.year})
                  </div>
                </div>

                {/* Technical Specifications Table */}
                <div className="space-y-2">
                  <div className="text-xs font-mono text-[#6b7280] uppercase">Technical Specs & Architecture</div>
                  <div className="border border-[#e5e7eb] divide-y divide-[#e5e7eb]">
                    {selectedProject.specs.map((s, i) => (
                      <div key={i} className="flex flex-col xs:flex-row xs:justify-between p-2.5 sm:p-3 text-xs font-mono bg-white gap-1">
                        <span className="text-[#6b7280] shrink-0">{s.label}</span>
                        <span className="font-semibold text-black xs:text-right break-words">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack List */}
                <div className="space-y-2">
                  <div className="text-xs font-mono text-[#6b7280] uppercase">Technology Stack</div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-mono bg-[#f3f4f6] text-black border border-[#d1d5db]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Links in Modal */}
                <div className="p-4 bg-[#f9f9fb] border border-[#e5e7eb] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="text-xs font-mono font-semibold text-black">EXPLORE LIVE ASSET</div>
                    <div className="text-[11px] font-mono text-[#6b7280]">Direct link to production deployment</div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-none justify-center px-4 py-2 bg-[#0055ff] hover:bg-blue-700 text-white text-xs font-mono uppercase font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <span>{selectedProject.type === 'design' ? 'OPEN BEHANCE' : 'OPEN SITE'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 sm:flex-none justify-center px-4 py-2 bg-black hover:bg-gray-800 text-white text-xs font-mono uppercase font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <span>GITHUB</span>
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="pt-4 border-t border-[#e5e7eb] flex justify-end gap-3">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-full sm:w-auto px-5 py-2.5 border border-black text-xs font-mono uppercase tracking-wider text-black hover:bg-[#f3f4f6] cursor-pointer text-center"
                  >
                    CLOSE WINDOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
