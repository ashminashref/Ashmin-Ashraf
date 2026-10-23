import React, { useState } from 'react';
import { ME, TOOLS_ARSENAL, EXPERIENCE_DATA } from '../data/portfolioData';
import { TECH_BADGES } from '../data/techBadges';

export default function AboutPage({ onOpenContact }) {
  const [activeCategoryTab, setActiveCategoryTab] = useState(0);

  return (
    <div className="w-full min-h-screen py-10 px-4 max-w-[1240px] mx-auto animate-fadeIn">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto pt-6 pb-12">
        <span className="pill mb-4 text-[10px] uppercase tracking-wider text-[var(--accent)] border-[var(--accent-border)]">
          Biography &amp; Philosophy
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[var(--ink)] leading-[1.08] mb-5">
          Developer by training, designer by instinct, <br />
          <em className="font-serif italic text-[var(--em-color)] text-[1.04em]">video editor in motion.</em>
        </h1>
        <p className="text-sm md:text-base text-[var(--mute)] leading-relaxed max-w-xl mx-auto">
          I bridge technical backend architectures with refined visual design and cinematic video editing — creating cohesive digital experiences that move seamlessly.
        </p>
      </div>

      {/* Main Narrative Card */}
      <div className="glass border border-[var(--line)] p-6 md:p-10 mb-12 flex flex-col md:flex-row gap-8 items-start">
        {/* Left Monogram / Profile Element */}
        <div className="w-full md:w-1/3 flex flex-col items-center text-center p-6 bg-[var(--vis-bg)] border border-[var(--line)]">
          <div className="w-24 h-24 rounded-full border-2 border-[var(--line)] bg-gradient-to-tr from-[#1b4d34] to-[#5fbf86] flex items-center justify-center font-serif italic text-4xl text-white shadow-2xl mb-4 select-none">
            am
          </div>
          <h2 className="text-xl font-medium text-[var(--ink)]">{ME.fullName}</h2>
          <span className="text-xs text-[var(--accent)] font-mono mt-0.5">{ME.role}</span>
          <p className="text-xs text-[var(--mute)] mt-2">{ME.location}</p>

          <div className="mt-5 pt-4 border-t border-[var(--line)] w-full flex flex-col gap-2">
            <a
              href={ME.resumeUrl}
              download
              className="nav-box-item active justify-center py-2 text-xs w-full text-center"
            >
              📄 Download Resume (PDF)
            </a>
            <button
              type="button"
              onClick={onOpenContact}
              className="nav-box-item justify-center py-2 text-xs w-full text-[var(--ink)] border border-[var(--line)]"
            >
              ✉ Send Direct Inquiry
            </button>
          </div>
        </div>

        {/* Right Extended Bio */}
        <div className="w-full md:w-2/3 space-y-4 text-xs md:text-sm text-[var(--ink)] leading-relaxed">
          <h3 className="text-xl md:text-2xl font-normal text-[var(--ink)]">
            The Story Behind the Tri-Craft
          </h3>
          <p className="text-[var(--mute)]">
            Most digital projects suffer from disjointed handoffs: designers build mockups that engineers compromise during development, while promotional video teams struggle to capture the product's actual aesthetic soul.
          </p>
          <p className="text-[var(--mute)]">
            My practice was deliberately shaped to unite all three crafts. With a foundation in computer applications and relational database modeling, I build reliable, structured backends using Python and Django. Simultaneously, my visual instinct drives me to obsess over kerning, spatial rhythm, and responsive viewport ergonomics in Figma.
          </p>
          <p className="text-[var(--mute)]">
            When a project requires visual promotion, I pick up the camera, cut 4K footage in Premiere Pro, and color grade in DaVinci Resolve. One creator, one standard, zero handoff loss.
          </p>

          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3 bg-[var(--glass)] border border-[var(--line)]">
              <span className="text-xl font-medium text-[var(--ink)] block">2+</span>
              <span className="text-[10px] text-[var(--faint)] uppercase font-mono">Years Building</span>
            </div>
            <div className="p-3 bg-[var(--glass)] border border-[var(--line)]">
              <span className="text-xl font-medium text-[var(--accent)] block">9+</span>
              <span className="text-[10px] text-[var(--faint)] uppercase font-mono">Shipped Projects</span>
            </div>
            <div className="p-3 bg-[var(--glass)] border border-[var(--line)]">
              <span className="text-xl font-medium text-[var(--ink)] block">10+</span>
              <span className="text-[10px] text-[var(--faint)] uppercase font-mono">Core Tools</span>
            </div>
            <div className="p-3 bg-[var(--glass)] border border-[var(--line)]">
              <span className="text-xl font-medium text-[var(--accent)] block">100%</span>
              <span className="text-[10px] text-[var(--faint)] uppercase font-mono">Handoff Fidelity</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tools & Languages Arsenal with Icons */}
      <div className="mb-14" id="arsenal">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="pill mb-3 text-[10px] uppercase tracking-wider text-[var(--accent)] border-[var(--accent-border)]">
            Technical Arsenal &amp; Design Suite
          </span>
          <h2 className="text-3xl md:text-4xl font-normal text-[var(--ink)]">
            Languages, Frameworks &amp; <em>Design Tools</em>
          </h2>
          <p className="text-xs text-[var(--mute)] mt-2">
            The dedicated software stack and vector design tools powering every deployed product.
          </p>
        </div>

        {/* Category Tabs (Rounded Pills) */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {TOOLS_ARSENAL.map((group, idx) => (
            <button
              key={group.category}
              type="button"
              onClick={() => setActiveCategoryTab(idx)}
              className={`rounded-full text-xs font-medium py-2 px-4 transition-all duration-200 cursor-pointer ${
                activeCategoryTab === idx
                  ? 'bg-[var(--accent)] text-black shadow-sm font-semibold'
                  : 'bg-[var(--glass)] border border-[var(--line)] text-[var(--mute)] hover:text-[var(--ink)] hover:border-[var(--accent-border)] hover:bg-[var(--glass-hover)]'
              }`}
            >
              {group.category}
            </button>
          ))}
        </div>

        {/* Selected Arsenal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TOOLS_ARSENAL[activeCategoryTab].items.map((tool) => {
            const badge = TECH_BADGES[tool.key];
            const IconComp = badge ? badge.icon : null;

            return (
              <div
                key={tool.name}
                className="glass rounded-2xl p-5 border border-[var(--line)] hover:border-[var(--accent-border)] transition-all duration-200 flex items-start gap-4 hover:-translate-y-0.5"
              >
                {/* Authentic Colored SVG Brand Icon */}
                <div className="w-12 h-12 rounded-xl bg-[var(--vis-bg)] border border-[var(--line)] flex items-center justify-center flex-shrink-0 shadow-sm">
                  {IconComp ? (
                    <IconComp className="w-6 h-6" />
                  ) : (
                    <span className="text-xs font-mono text-[var(--faint)]">#</span>
                  )}
                </div>

                {/* Tool Description & Proficiency */}
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-base font-medium text-[var(--ink)] tracking-tight">
                      {tool.name}
                    </h3>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[var(--glass)] text-[var(--accent)] border border-[var(--accent-border)]">
                      {tool.level}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--mute)] leading-relaxed">
                    {tool.use}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Core Engineering & Design Principles */}
      <div className="mb-14">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="pill mb-3 text-[10px] uppercase tracking-wider text-[var(--accent)] border-[var(--accent-border)]">
            Working Ethos
          </span>
          <h2 className="text-3xl md:text-4xl font-normal text-[var(--ink)]">
            Four Core <em>Principles</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              num: '01',
              title: 'Pixel Fidelity',
              desc: 'What is drawn in Figma is translated 1:1 into the browser. Zero compromises on kerning, responsive layout grids, or contrast.',
            },
            {
              num: '02',
              title: 'Solid Backend API',
              desc: 'Relational data normalized properly with atomic transactions, authenticated access, and predictable JSON response structures.',
            },
            {
              num: '03',
              title: 'Purposeful Motion',
              desc: 'Animations via GSAP are engineered to orient the user and add tactile feedback, never to slow down navigation.',
            },
            {
              num: '04',
              title: 'Performance First',
              desc: 'Asset prefetching, lightweight responsive images, and optimized CSS ensuring sub-second First Contentful Paint times.',
            },
          ].map((p) => (
            <div
              key={p.num}
              className="glass p-6 border border-[var(--line)] flex flex-col justify-between"
            >
              <div className="font-mono text-sm text-[var(--accent)] mb-4">{p.num}</div>
              <div>
                <h3 className="text-base font-medium text-[var(--ink)] mb-2">{p.title}</h3>
                <p className="text-xs text-[var(--mute)] leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Credentials */}
      <div className="mb-14">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="pill mb-3 text-[10px] uppercase tracking-wider text-[var(--accent)] border-[var(--accent-border)]">
            Background &amp; Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-normal text-[var(--ink)]">
            Academic &amp; Professional <em>Milestones</em>
          </h2>
        </div>

        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {EXPERIENCE_DATA.map((item, idx) => (
            <div
              key={idx}
              className="glass p-6 border border-[var(--line)] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <span className="text-[10px] font-mono text-[var(--accent)]">
                  {item.period}
                </span>
                <h3 className="text-lg font-medium text-[var(--ink)] mt-1">
                  {item.role}
                </h3>
                <span className="text-xs text-[var(--mute)] block mt-0.5">
                  {item.entity} • {item.location}
                </span>
                <p className="text-xs text-[var(--mute)] mt-2 max-w-xl leading-relaxed">
                  {item.summary}
                </p>
                {item.driveLink && (
                  <div className="mt-3">
                    <a
                      href={item.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[var(--accent-faint)] text-[var(--accent)] border border-[var(--accent-border)] hover:bg-[var(--accent)] hover:text-black transition-all"
                    >
                      <span>Open 4K Master Reel (Google Drive)</span>
                      <span>↗</span>
                    </a>
                  </div>
                )}
              </div>

              <div className="chips sm:flex-col sm:items-end">
                {item.stack.slice(0, 3).map((st) => (
                  <span className="chip text-[10px] py-0.5 px-2" key={st}>
                    {st}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Action Card */}
      <div className="text-center glass p-10 border border-[var(--line)] max-w-2xl mx-auto">
        <h3 className="text-2xl font-normal text-[var(--ink)]">
          Looking for a Developer &amp; Designer?
        </h3>
        <p className="mt-2 text-xs text-[var(--mute)] max-w-md mx-auto">
          Whether you need a full-stack engineer, interactive web presence, or UI/UX prototype, let's connect.
        </p>
        <div className="flex justify-center gap-3 mt-6">
          <button
            type="button"
            onClick={onOpenContact}
            className="nav-box-item active text-xs py-2.5 px-6 font-medium"
          >
            Get In Touch →
          </button>
          <a
            href={ME.resumeUrl}
            download
            className="nav-box-item border border-[var(--line)] text-xs py-2.5 px-5"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
