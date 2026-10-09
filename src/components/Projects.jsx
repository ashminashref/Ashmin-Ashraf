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
      typeLabel: 'Development',
      title: 'Dotbey Media',
      category: 'Growth Marketing & Web Platform',
      year: '2026',
      role: 'Full-Stack Engineer & Digital Strategist',
      liveUrl: 'https://dotbeymedia.netlify.app/',
      githubUrl: 'https://github.com/ashminashref/Dotbey',
      behanceUrl: 'https://www.behance.net/ashminashraf',
      image: '/projects/dotbey.png',
      description:
        'High-performance agency platform with custom 4K showcases, interactive enquiry flows, and conversion-optimized funnel architecture.',
      tech: ['Next.js', 'React 19', 'TailwindCSS', 'Netlify Edge'],
      specs: [
        { label: 'Platform Core', value: 'Next.js Turbopack & React 19' },
        { label: 'Performance Metric', value: 'Sub-second First Contentful Paint' },
        { label: 'Core Offerings', value: 'Web Engineering, 4K Video, Meta Ads, SEO' },
        { label: 'Deployment', value: 'Netlify Edge' },
      ],
    },
    {
      id: 'prj-02',
      code: '02',
      type: 'dev',
      typeLabel: 'Development',
      title: 'Megwedd Studios',
      category: 'Luxury Wedding & Event Visuals',
      year: '2025',
      role: 'UI Designer & Frontend Engineer',
      liveUrl: 'https://megwedd.vercel.app/',
      githubUrl: 'https://github.com/ashminashref/megwedd',
      behanceUrl: 'https://www.behance.net/ashminashraf',
      image: '/projects/megwedd.png',
      description:
        'Cinematic portfolio and inquiry platform engineered with GSAP scroll-triggered physics, editorial typography, and grain aesthetics.',
      tech: ['React', 'Vite', 'GSAP', 'TailwindCSS'],
      specs: [
        { label: 'Animation Engine', value: 'GSAP ScrollTrigger Timeline' },
        { label: 'Aesthetic Palette', value: 'Darkroom Noir & Grain Textures' },
        { label: 'Typography Spec', value: 'Inter Tight & Editorial Serif' },
        { label: 'Deployment', value: 'Vercel' },
      ],
    },
    {
      id: 'prj-03',
      code: '03',
      type: 'dev',
      typeLabel: 'Development',
      title: 'Mahal Connect',
      category: 'Community Management PWA',
      year: '2025',
      role: 'Product Designer & Full-Stack Developer',
      liveUrl: 'https://thalayadmahal.netlify.app/',
      githubUrl: 'https://github.com/ashminashref/thalayad_mahal',
      behanceUrl: 'https://www.behance.net/ashminashraf',
      image: '/projects/mahal.png',
      description:
        'Progressive Web App (PWA) for community administration with member registries, daily announcements, and digital dues workflows.',
      tech: ['React', 'Vite', 'PWA', 'TailwindCSS'],
      specs: [
        { label: 'Architecture', value: 'Installable Progressive Web App (PWA)' },
        { label: 'Core Modules', value: 'Member ID, Family Registry, Announcements' },
        { label: 'Payment Channel', value: 'Dues & Charity Contribution Channel' },
        { label: 'Deployment', value: 'Netlify' },
      ],
    },
    {
      id: 'prj-04',
      code: '04',
      type: 'dev',
      typeLabel: 'Development',
      title: 'EchoBoard',
      category: 'Campus Grievance & Tracking Portal',
      year: '2025',
      role: 'Full-Stack Developer',
      liveUrl: 'https://techolasecho.netlify.app/',
      githubUrl: 'https://github.com/ashminashref/echoboard',
      behanceUrl: 'https://www.behance.net/ashminashraf',
      image: '/projects/echoboard.png',
      description:
        'Responsive web portal for campus students to submit and track concerns with role-based auth and status pipelines.',
      tech: ['React', 'Vite', 'TailwindCSS', 'REST APIs'],
      specs: [
        { label: 'Security Model', value: 'Separate Student / Admin Portals' },
        { label: 'Pipeline States', value: 'Submitted ➔ In Progress ➔ Resolved' },
        { label: 'Frontend Tooling', value: 'React with Vite & TailwindCSS' },
        { label: 'Deployment', value: 'Netlify' },
      ],
    },
    {
      id: 'prj-05',
      code: '05',
      type: 'design',
      typeLabel: 'Design',
      title: 'Dotbey',
      category: 'Brand Identity & UI/UX Case Study',
      year: '2026',
      role: 'Brand & Product Designer',
      liveUrl: 'https://www.behance.net/gallery/256815173/Dotbey/modules/1498582289',
      githubUrl: 'https://github.com/ashminashref/Dotbey',
      behanceUrl: 'https://www.behance.net/gallery/256815173/Dotbey/modules/1498582289',
      image: '/projects/dotbey_design.png',
      description:
        'Complete brand identity, typography scale, design tokens, and responsive digital interface system documented on Behance.',
      tech: ['Figma', 'UI/UX Design', 'Brand Identity', 'Design Tokens'],
      specs: [
        { label: 'Platform Spec', value: 'Behance Featured Case Study' },
        { label: 'Design System', value: 'Monogram, Typography & Component Tokens' },
        { label: 'Color Palette', value: 'Electric Blue & Dark Modernist Tones' },
        { label: 'Case Study URL', value: 'behance.net/gallery/256815173/Dotbey' },
      ],
    },
    {
      id: 'prj-06',
      code: '06',
      type: 'design',
      typeLabel: 'Design',
      title: 'Spotify Redesign',
      category: 'Mobile & Web Music Player UI/UX',
      year: '2025',
      role: 'UI/UX Designer',
      liveUrl: 'https://www.behance.net/gallery/224876661/Spotify-Redesign',
      githubUrl: null,
      behanceUrl: 'https://www.behance.net/gallery/224876661/Spotify-Redesign',
      image: '/projects/spotify_redesign.png',
      description:
        'Reimagined mobile and desktop listening experience featuring refined playback controls, glassmorphic elements, and user-centric discovery architecture.',
      tech: ['Figma', 'Mobile UI/UX', 'Glassmorphism', 'Design Systems'],
      specs: [
        { label: 'Platform Spec', value: 'Behance Featured Case Study' },
        { label: 'Interface Views', value: 'iPhone 15 Pro & MacBook Pro Web App' },
        { label: 'Visual Style', value: 'Darkroom Noir with Spotify Neon Green' },
        { label: 'Case Study URL', value: 'behance.net/gallery/224876661/Spotify-Redesign' },
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
    // When changing filters, keep initial 2 visible
    setShowAll(false);
  };

  return (
    <section id="projects" className="py-20 border-b border-[#e5e7eb] bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-[#e5e7eb] gap-6">
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#6b7280] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-[#0055ff] inline-block"></span>
              <span>INDEXED WORKS • PRODUCTION & DESIGN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal tracking-tight text-[#121316]">
              Selected Projects.{' '}
              <span className="block text-[#0055ff] font-medium">Web Apps & Design Studies</span>
            </h2>
          </div>

          <div className="space-y-2 max-w-md">
            <p className="text-sm sm:text-base text-[#4b5563] font-light leading-relaxed">
              Real software and design systems built end-to-end. Click live links to explore production sites or inspect code.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono">
              <a
                href="https://github.com/ashminashref/"
                target="_blank"
                rel="noreferrer"
                className="text-[#0055ff] hover:underline flex items-center gap-1 font-semibold"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GITHUB REPOSITORIES ↗</span>
              </a>
              <span className="text-[#d1d5db]">|</span>
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

        {/* Dedicated Filter Buttons: All, Development, Design */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 border-b border-[#f3f4f6]">
          <button
            onClick={() => handleTabChange('all')}
            className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'all'
                ? 'bg-black text-white font-semibold shadow-xs'
                : 'bg-[#f9f9fb] text-[#4b5563] hover:text-black hover:bg-[#e5e7eb] border border-[#e5e7eb]'
            }`}
          >
            <span>ALL PROJECTS</span>
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
            className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'dev'
                ? 'bg-black text-white font-semibold shadow-xs'
                : 'bg-[#f9f9fb] text-[#4b5563] hover:text-black hover:bg-[#e5e7eb] border border-[#e5e7eb]'
            }`}
          >
            <Code2 className="w-3.5 h-3.5 text-[#0055ff]" />
            <span>DEVELOPMENT</span>
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
            className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'design'
                ? 'bg-black text-white font-semibold shadow-xs'
                : 'bg-[#f9f9fb] text-[#4b5563] hover:text-black hover:bg-[#e5e7eb] border border-[#e5e7eb]'
            }`}
          >
            <Palette className="w-3.5 h-3.5 text-[#0055ff]" />
            <span>DESIGN</span>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="border border-[#e5e7eb] bg-white hover:border-black transition-all group flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              {/* Project Top Meta */}
              <div className="p-4 sm:p-5 border-b border-[#e5e7eb] bg-[#fafafa] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold text-[#0055ff] px-2 py-0.5 bg-[#f0f4ff] border border-[#d6e4ff]">
                    {project.code}
                  </span>
                  <span className="text-xs font-mono text-[#4b5563] uppercase truncate max-w-[180px] sm:max-w-none">
                    {project.category}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono px-2 py-0.5 bg-white border border-[#e5e7eb] text-[#374151]">
                    {project.typeLabel}
                  </span>
                  <span className="text-xs font-mono text-[#9ca3af]">{project.year}</span>
                </div>
              </div>

              {/* Realistic Browser Window Frame with Real Screenshot */}
              <div className="bg-[#0f1117] border-b border-[#e5e7eb] overflow-hidden">
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-[#161822] border-b border-[#252836] text-[11px] font-mono text-[#8b949e]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80 inline-block" />
                    <span className="ml-2 text-[10px] text-[#9ca3af] truncate max-w-[140px] sm:max-w-[260px]">
                      {project.type === 'design' 
                        ? (project.title === 'Dotbey' ? 'behance.net/gallery/256815173/Dotbey' : 'behance.net/gallery/224876661/Spotify-Redesign')
                        : project.liveUrl.replace('https://', '')}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#388bfd] bg-[#388bfd]/10 px-2 py-0.5">
                    {project.type === 'dev' ? 'LIVE DEPLOYMENT' : 'BEHANCE STUDY'}
                  </span>
                </div>

                {/* Screenshot Image View */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-[#0d1117] flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Clean, Streamlined Project Body */}
              <div className="p-6 sm:p-7 space-y-4 bg-white flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-2xl font-sans font-semibold text-[#121316] tracking-tight group-hover:text-[#0055ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#4b5563] leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-2 py-1 bg-[#f3f4f6] text-[#374151] border border-[#e5e7eb]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Primary Action Buttons */}
                  <div className="pt-4 border-t border-[#f3f4f6] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-black text-white hover:bg-[#0055ff] transition-colors text-xs font-mono uppercase font-semibold"
                      >
                        <span>{project.type === 'design' ? 'VIEW ON BEHANCE' : 'LIVE SITE'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#d1d5db] bg-white text-[#374151] hover:text-black hover:border-black transition-colors text-xs font-mono uppercase"
                          title="View GitHub Repository"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>CODE</span>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-mono font-semibold uppercase tracking-wider text-black hover:text-[#0055ff] flex items-center gap-1 transition-colors cursor-pointer"
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
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-black text-white hover:bg-[#0055ff] transition-all text-xs font-mono uppercase tracking-wider font-semibold border border-black cursor-pointer shadow-xs hover:shadow-md"
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
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white border border-black max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
              
              {/* Modal Header */}
              <div className="border-b border-[#e5e7eb] p-5 sm:p-6 bg-[#fafafa] flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 text-xs font-mono bg-[#0055ff] text-white">
                    {selectedProject.code}
                  </span>
                  <span className="font-mono text-sm font-semibold uppercase text-black truncate max-w-sm">
                    {selectedProject.title}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 hover:bg-[#e5e7eb] border border-[#d1d5db] transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Screenshot Frame */}
              <div className="border-b border-[#e5e7eb] bg-[#0d1117] h-64 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <div className="text-xs font-mono text-[#6b7280] uppercase mb-1">Overview & Role</div>
                  <p className="text-sm text-[#374151] leading-relaxed">
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
                      <div key={i} className="flex justify-between p-3 text-xs font-mono bg-white">
                        <span className="text-[#6b7280]">{s.label}</span>
                        <span className="font-semibold text-black text-right ml-4">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack List */}
                <div className="space-y-2">
                  <div className="text-xs font-mono text-[#6b7280] uppercase">Technology Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-mono bg-[#f3f4f6] text-black border border-[#d1d5db]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Links in Modal */}
                <div className="p-4 bg-[#f9f9fb] border border-[#e5e7eb] flex flex-wrap items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="text-xs font-mono font-semibold text-black">EXPLORE LIVE ASSET</div>
                    <div className="text-[11px] font-mono text-[#6b7280]">Direct link to production deployment</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-[#0055ff] hover:bg-blue-700 text-white text-xs font-mono uppercase font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <span>{selectedProject.type === 'design' ? 'OPEN BEHANCE' : 'OPEN SITE'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 bg-black hover:bg-gray-800 text-white text-xs font-mono uppercase font-semibold flex items-center gap-1.5 transition-colors"
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
                    className="px-5 py-2.5 border border-black text-xs font-mono uppercase tracking-wider text-black hover:bg-[#f3f4f6] cursor-pointer"
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
