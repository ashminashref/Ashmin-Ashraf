import React, { useState, useMemo } from 'react';
import { PROJECTS_DETAILED } from '../data/portfolioData';
import { TECH_BADGES } from '../data/techBadges';
import { GoogleDriveIcon } from './TechIcons';

export default function ProjectsPage({ onSelectProject, onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Full-Stack & Backend',
    'AI & Creative Tech',
    'UI/UX & Brand Design',
    'Client & Agency Work',
    'Videography & Motion',
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DETAILED.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.headline.toLowerCase().includes(q) ||
        project.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full min-h-screen py-10 px-4 max-w-[1240px] mx-auto animate-fadeIn">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto pt-6 pb-12">
        <span className="pill mb-4 text-[10px] uppercase tracking-wider text-[var(--accent)] border-[var(--accent-border)]">
          Selected Works &amp; Case Studies
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[var(--ink)] leading-[1.08] mb-5">
          Crafted for performance, <br />
          <em className="font-serif italic text-[var(--em-color)] text-[1.04em]">engineered to scale.</em>
        </h1>
        <p className="text-sm md:text-base text-[var(--mute)] leading-relaxed max-w-xl mx-auto">
          A comprehensive breakdown of technical architectures, relational database integrity, generative AI pipelines, and pixel-precise Figma design systems.
        </p>
      </div>

      {/* Interactive Controls: Categories & Search */}
      <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4 p-3 border border-[var(--line)] bg-[var(--glass)] backdrop-blur-md rounded-2xl">
        {/* Category Buttons (Rounded Pills) */}
        <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full text-xs font-medium py-1.5 px-3.5 transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[var(--accent)] text-black shadow-sm font-semibold'
                  : 'bg-[var(--glass)] border border-[var(--line)] text-[var(--mute)] hover:text-[var(--ink)] hover:border-[var(--accent-border)] hover:bg-[var(--glass-hover)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="w-full md:w-72 relative">
          <input
            type="text"
            placeholder="Search by tech, keyword, title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[var(--field-bg)] border border-[var(--line)] px-4 py-2 rounded-full text-xs text-[var(--ink)] placeholder-[var(--faint)] focus:outline-none focus:border-[var(--accent)] transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-2.5 text-xs text-[var(--faint)] hover:text-[var(--ink)] cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-20 glass p-8 border border-[var(--line)]">
          <p className="text-sm text-[var(--faint)]">No projects match your filter query.</p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
            className="pill on mt-4 text-xs"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="glass border border-[var(--line)] overflow-hidden transition-all duration-300 hover:border-[var(--accent-border)] p-6 md:p-8 flex flex-col lg:flex-row gap-8"
            >
              {/* Left / Media Showcase */}
              <div className="lg:w-5/12 flex flex-col justify-between">
                <div className="relative overflow-hidden border border-[var(--line)] bg-[var(--vis-bg)] group aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="pill text-[10px] py-0.5 px-2.5 bg-[var(--bg)] border-[var(--line)] text-[var(--ink)]">
                      {project.typeTag}
                    </span>
                    <span className="pill text-[10px] py-0.5 px-2 bg-[var(--bg)] border-[var(--line)] text-[var(--mute)]">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Prominent Tools & Languages SVG Icons Row */}
                <div className="mt-5 pt-4 border-t border-[var(--line)]">
                  <span className="block text-[10px] font-mono text-[var(--faint)] uppercase tracking-wider mb-2.5">
                    Technologies &amp; Design Stack
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {project.techIcons.map((iconKey) => {
                      const badge = TECH_BADGES[iconKey];
                      if (!badge) return null;
                      const IconComp = badge.icon;
                      return (
                        <div
                          key={iconKey}
                          className="flex items-center gap-1.5 px-2.5 py-1 bg-[var(--glass)] border border-[var(--line)] text-[11px] text-[var(--ink)]"
                          title={badge.name}
                        >
                          <IconComp className="w-3.5 h-3.5" />
                          <span>{badge.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right / Architectural Narrative & Specifications */}
              <div className="lg:w-7/12 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] mb-2">
                    <span>CASE STUDY 0{idx + 1}</span>
                    <span>•</span>
                    <span className="text-[var(--faint)]">{project.category}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-medium text-[var(--ink)] tracking-tight leading-tight">
                    {project.title}
                  </h2>

                  <p className="mt-2 text-sm text-[var(--ink)] leading-relaxed font-normal">
                    {project.headline}
                  </p>

                  <p className="mt-3 text-xs sm:text-[13px] text-[var(--mute)] leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Problem & Solution Architecture Block */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-5 p-4 bg-[var(--vis-bg)] border border-[var(--line)]">
                    <div>
                      <span className="text-[10px] font-mono text-[var(--faint)] uppercase tracking-wider block mb-1">
                        Challenge
                      </span>
                      <p className="text-xs text-[var(--ink)] leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[var(--accent)] uppercase tracking-wider block mb-1">
                        Architecture Solution
                      </span>
                      <p className="text-xs text-[var(--ink)] leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Metrics & Impact */}
                  {project.metrics && (
                    <div className="mt-4 flex flex-col gap-1.5">
                      {project.metrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="flex items-center gap-2 text-xs text-[var(--ink)]"
                        >
                          <span className="text-[var(--accent)]">✓</span>
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Specifications Table */}
                  <div className="mt-5 pt-4 border-t border-[var(--line)] grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                    {project.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex flex-col">
                        <span className="text-[var(--faint)] font-mono text-[10px]">
                          {spec.label}:
                        </span>
                        <span className="text-[var(--ink)] font-medium">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="pt-4 border-t border-[var(--line)] flex flex-wrap items-center gap-3">
                  {project.driveUrl ? (
                    <a
                      href={project.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-box-item active text-xs py-2 px-4 flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium border-0 shadow-md shadow-blue-500/20"
                    >
                      <GoogleDriveIcon className="w-3.5 h-3.5" />
                      <span>Watch on Google Drive</span>
                      <span>↗</span>
                    </a>
                  ) : (
                    project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-box-item active text-xs py-2 px-4 flex items-center gap-1.5"
                      >
                        <span>Live Demonstration</span>
                        <span>↗</span>
                      </a>
                    )
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-box-item text-xs py-2 px-4 flex items-center gap-1.5 border border-[var(--line)]"
                    >
                      <span>View GitHub Code</span>
                      <span>↗</span>
                    </a>
                  )}
                  {project.behanceUrl && (
                    <a
                      href={project.behanceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-box-item text-xs py-2 px-4 flex items-center gap-1.5 border border-[var(--line)]"
                    >
                      <span>Behance Study</span>
                      <span>↗</span>
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() =>
                      onSelectProject &&
                      onSelectProject({
                        t: project.title,
                        k: project.typeTag,
                        img: project.image,
                        desc: project.summary,
                        tags: project.tags,
                        live: project.liveUrl,
                        github: project.githubUrl,
                        behance: project.behanceUrl,
                        drive: project.driveUrl,
                      })
                    }
                    className="nav-box-item text-xs py-2 px-3 text-[var(--faint)] hover:text-[var(--ink)] ml-auto"
                  >
                    Quick View
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Bottom CTA Banner */}
      <div className="mt-16 text-center glass p-10 border border-[var(--line)] max-w-2xl mx-auto">
        <h3 className="text-2xl font-normal text-[var(--ink)]">
          Have an ambitious project in mind?
        </h3>
        <p className="mt-2 text-xs text-[var(--mute)] max-w-md mx-auto">
          Let's discuss how we can engineer your next product from design tokens to production APIs.
        </p>
        <button
          type="button"
          onClick={onOpenContact}
          className="nav-box-item active mt-5 text-xs py-2.5 px-6 font-medium"
        >
          Initiate a Conversation →
        </button>
      </div>
    </div>
  );
}
