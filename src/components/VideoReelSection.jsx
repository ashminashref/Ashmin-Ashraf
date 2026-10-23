import React, { useState } from 'react';
import { CameraIcon, FilmReelIcon, GoogleDriveIcon, PremiereIcon, DavinciIcon } from './TechIcons';
import { ME } from '../data/portfolioData';

const REEL_CATEGORIES = [
  {
    id: 'commercial',
    title: 'Commercial & Brand Ads',
    badge: '15s - 60s Cutdowns',
    description: 'High-energy storytelling, punchy pacing, kinetic typography, and product cinematography designed to capture attention in the first 2 seconds.',
    specs: ['4K UHD 60fps', 'Rec.709 Color Grade', 'Sound Design & Foley'],
    tools: ['Premiere Pro', 'DaVinci Resolve'],
  },
  {
    id: 'automotive',
    title: 'Automotive & High-Speed',
    badge: 'Dynamic Tracking',
    description: 'Car-to-car roller tracking, dynamic speed ramps, precision rev-matching sound edits, and sleek cinematic grade emphasizing paint and metallic lines.',
    specs: ['4K 120fps Slow-Mo', 'Log to Film LUT Grade', 'Binaural Engine Audio'],
    tools: ['Premiere Pro', 'DaVinci Resolve'],
  },
  {
    id: 'realestate',
    title: 'Real Estate & Architecture',
    badge: 'Gimbal Walkthroughs',
    description: 'Ultra-smooth motorized gimbal tracking, wide-angle interior composition, HDR shadow balancing, and ambient lifestyle pacing.',
    specs: ['4K Wide 60fps', 'High Dynamic Range', 'Spatial Ambient Audio'],
    tools: ['Premiere Pro', 'DJI Ronin'],
  },
  {
    id: 'corporate',
    title: 'Corporate & Business',
    badge: 'Interviews & Events',
    description: 'Multi-cam interview setups, clean lavalier audio processing, lower-third animated titles, and crisp company storytelling.',
    specs: ['Multi-Cam 1080p/4K', 'De-noised 48kHz Audio', 'Branded Vector Titles'],
    tools: ['Premiere Pro', 'DaVinci Resolve'],
  },
  {
    id: 'lifestyle',
    title: 'Fashion & Post-Production',
    badge: 'Color Science & VFX',
    description: 'Stylized cinematic looks, mood grading, beat-synced rhythm editing, visual effects transitions, and social media vertical reels.',
    specs: ['9:16 & 16:9 Formats', 'Custom 35mm Grain', 'Rhythmic Beat Sync'],
    tools: ['Premiere Pro', 'DaVinci Resolve', 'Photoshop'],
  },
];

export default function VideoReelSection({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  // Default Google Drive folder link from portfolioData or fallback
  const driveUrl = ME?.links?.driveReel || 'https://drive.google.com/drive/folders/1w7j3dKx-sample-reels?usp=sharing';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(driveUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const currentReel = REEL_CATEGORIES[activeTab];

  return (
    <section
      className="relative w-full max-w-[1240px] mx-auto py-16 px-4 md:px-8 my-6"
      id="videography"
      aria-label="Videography and Cinematic Motion Editing Showcase"
    >
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-[var(--line)] bg-[var(--glass)] mb-4 text-[var(--accent)]">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span>Cinematic Videography &amp; Post-Production</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[var(--ink)] leading-[1.12]">
          Your story captured in <em>motion,</em> <br />
          <em className="font-serif italic text-[var(--em-color)] text-[1.04em]">
            edited with cinematic rhythm.
          </em>
        </h2>

        <p className="mt-4 text-sm md:text-base text-[var(--mute)] max-w-xl mx-auto leading-relaxed">
          From 4K multi-camera shoots and automotive tracking to commercial ad cutdowns. Because raw 4K master files are heavy to upload directly, explore the master cut library directly in Google Drive.
        </p>
      </div>

      {/* Master Showcase Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Viewfinder & Visual Banner */}
        <div className="lg:col-span-7 flex flex-col justify-between glass border border-[var(--line)] p-5 md:p-7 relative overflow-hidden group">
          {/* Cinema Viewfinder Header Overlay */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--line)] text-[11px] font-mono text-[var(--faint)]">
            <div className="flex items-center gap-2 text-red-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
              <span>REC</span>
              <span className="text-[var(--mute)]">● 00:04:28:14</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-[var(--vis-bg)] border border-[var(--line)]">4K UHD</span>
              <span className="px-2 py-0.5 rounded bg-[var(--vis-bg)] border border-[var(--line)]">60 FPS</span>
              <span className="px-2 py-0.5 rounded bg-[var(--vis-bg)] border border-[var(--line)] text-emerald-400">PRORES</span>
            </div>
          </div>

          {/* Main Visual Image with Camera & Studio Setup */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--vis-bg)]">
            <img
              src="/projects/dotbey-cinematic-motion.jpg"
              alt="Cinematic videography and camera setup for commercial post-production"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Viewfinder Crosshair & Corner Marks */}
            <div className="absolute inset-4 pointer-events-none border border-white/10 rounded">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-white/20 rounded-full" />
            </div>

            {/* Overlay Banner on Image Bottom */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between text-white">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-300 block">
                  Production Suite
                </span>
                <h4 className="text-sm sm:text-base font-medium">Multi-Camera Production &amp; Color Grading</h4>
              </div>

              <a
                href={driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-cyan-500 hover:bg-cyan-400 text-black transition-all duration-200 flex items-center gap-1.5 shadow-lg shadow-cyan-500/20"
              >
                <span>Watch on Drive</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Production Toolkit Footer */}
          <div className="mt-5 pt-4 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[var(--mute)]">
              <CameraIcon className="w-4 h-4 text-cyan-400" />
              <span>Full-Frame Cine • Primes • Gimbals</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-[var(--faint)]">Post-Production:</span>
              <span className="chip text-[11px] py-0.5 px-2 flex items-center gap-1">
                <PremiereIcon className="w-3.5 h-3.5" /> Premiere Pro
              </span>
              <span className="chip text-[11px] py-0.5 px-2 flex items-center gap-1">
                <DavinciIcon className="w-3.5 h-3.5" /> DaVinci Resolve
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Category Filmstrip & Drive Vault Portal */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          {/* Interactive Reel Selector */}
          <div className="glass border border-[var(--line)] p-5 md:p-6 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[var(--line)]">
                <h3 className="text-base font-medium text-[var(--ink)] flex items-center gap-2">
                  <FilmReelIcon className="w-4 h-4 text-[var(--accent)]" />
                  <span>Curated Reel Disciplines</span>
                </h3>
                <span className="text-[11px] font-mono text-[var(--faint)]">5 Categories</span>
              </div>

              {/* Category Selection Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2 mb-4">
                {REEL_CATEGORIES.map((cat, idx) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`text-left p-2.5 rounded-xl border text-xs transition-all duration-200 cursor-pointer ${
                      activeTab === idx
                        ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--ink)] font-semibold shadow-sm'
                        : 'border-[var(--line)] bg-[var(--glass)] text-[var(--mute)] hover:text-[var(--ink)] hover:border-[var(--line-heavy)]'
                    }`}
                  >
                    <span className="block truncate">{cat.title}</span>
                    <span className="text-[10px] text-[var(--faint)] font-mono block mt-0.5">
                      {cat.badge}
                    </span>
                  </button>
                ))}
              </div>

              {/* Active Category Breakdown */}
              <div className="p-4 rounded-xl bg-[var(--vis-bg)] border border-[var(--line)]">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-[var(--ink)]">{currentReel.title}</h4>
                  <span className="pill text-[10px] py-0.5 px-2 bg-[var(--glass)] border-[var(--line)]">
                    {currentReel.badge}
                  </span>
                </div>
                <p className="text-xs text-[var(--mute)] leading-relaxed mb-3">
                  {currentReel.description}
                </p>

                {/* Specs chips */}
                <div className="flex flex-wrap gap-1.5">
                  {currentReel.specs.map((spec) => (
                    <span
                      key={spec}
                      className="text-[10px] font-mono py-0.5 px-2 rounded bg-[var(--bg)] border border-[var(--line)] text-[var(--faint)]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Drive Master Vault Hub */}
            <div className="mt-6 pt-5 border-t border-[var(--line)]">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-950/30 via-slate-900/40 to-cyan-950/30 border border-blue-500/20 relative overflow-hidden">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <GoogleDriveIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-[var(--ink)] flex items-center gap-2">
                      <span>Google Drive Master Archive</span>
                      <span className="text-[10px] text-emerald-400 font-mono">● LIVE</span>
                    </h5>
                    <p className="text-[11px] text-[var(--mute)] mt-0.5">
                      Browse high-bitrate 4K files, raw client previews, and vertical reels without compression loss.
                    </p>
                  </div>
                </div>

                {/* Action Row */}
                <div className="flex flex-col sm:flex-row items-center gap-2 pt-2">
                  <a
                    href={driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
                  >
                    <GoogleDriveIcon className="w-4 h-4" />
                    <span>Launch Google Drive Vault</span>
                    <span>↗</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="w-full sm:w-auto py-2.5 px-3.5 rounded-xl text-xs border border-[var(--line)] bg-[var(--glass)] hover:bg-[var(--glass-hover)] text-[var(--ink)] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    title="Copy Google Drive URL"
                  >
                    <span>{copied ? '✓ Copied' : '📋 Copy Link'}</span>
                  </button>
                </div>
              </div>

              {/* Contact / Commission CTA */}
              <div className="mt-3 flex items-center justify-between px-1">
                <span className="text-[11px] text-[var(--faint)]">Planning a commercial or shoot?</span>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="text-xs text-[var(--accent)] hover:underline font-medium cursor-pointer"
                >
                  Request Video Quote →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
