import React from 'react';
import ScrambleText from './ScrambleText';
import { Check, ArrowUpRight, Zap, Shield, Sparkles } from 'lucide-react';

export default function Services({ onOpenContact }) {
  const tiers = [
    {
      id: 'sprint',
      code: 'TIER // 01',
      title: 'Full-Stack MVP Sprint',
      timeline: '2 — 3 WEEKS',
      badge: 'POPULAR FOR STARTUPS',
      summary: 'Go from concept or raw wireframe to a deployed, production-ready web application with design tokens and real database backends.',
      features: [
        'Complete UI/UX wireframes & Figma high-fidelity prototypes',
        'Responsive React 19 / Next.js client with TailwindCSS & GSAP',
        'PostgreSQL database models & REST/GraphQL API server',
        'Auth & user session handling (JWT / OAuth / Supabase)',
        'CI/CD automated pipeline on Vercel / Cloudflare / Docker',
        'Lighthouse performance & accessibility audit (95+ score)',
      ],
      idealFor: 'Founders needing to validate an idea and raise capital with high-polish software.',
    },
    {
      id: 'design-system',
      code: 'TIER // 02',
      title: 'Design System & Frontend Package',
      timeline: '3 — 4 WEEKS',
      badge: 'ENTERPRISE READY',
      highlighted: true,
      summary: 'A unified atomic design system bridging Figma directly into a tree-shakable React component library with micro-interactions.',
      features: [
        'Complete Figma token architecture (Colors, Typography, Spacing, Elevation)',
        '60+ production React components coded in TypeScript',
        'GSAP micro-interaction library & smooth page transitions',
        'Full Storybook documentation & interactive playground',
        'WCAG 2.2 AAA accessibility compliance across all components',
        'Detailed engineering migration & handoff documentation',
      ],
      idealFor: 'Engineering teams experiencing UI drift, slow handoffs, or technical visual debt.',
    },
    {
      id: 'retainer',
      code: 'TIER // 03',
      title: 'Dedicated Product Engineer',
      timeline: 'ONGOING / MONTHLY',
      badge: 'FULL-CYCLE OWNERSHIP',
      summary: 'Embedded senior design technologist owning product features end-to-end: from user research and design to architecture and deployment.',
      features: [
        'Continuous feature roadmap discovery, wireframing & prototyping',
        'Daily pull requests, code reviews, and architecture leadership',
        'Direct async Slack / Discord collaboration & sprint planning',
        'Performance profiling, bundle optimization & bug triaging',
        'Technical advisory on scaling, database indexing & cloud infra',
        'Flexible allocation tuned to your release cycles',
      ],
      idealFor: 'Fast-moving teams needing senior design and full-stack firepower without multiple hires.',
    },
  ];

  return (
    <section className="py-24 border-b border-[#e5e7eb] bg-[#fafafa]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#e5e7eb] gap-6">
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#6b7280] uppercase tracking-wider flex items-center gap-2">
              <span className="text-[#0055ff] font-bold">////////</span>
              <span>ENGAGEMENT SPECS // 008</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal tracking-tight text-[#121316]">
              / Collaboration Models.{' '}
              <span className="block text-[#0055ff] font-medium">Clear Scopes, Predictable Output /</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#4b5563] font-light leading-relaxed">
            Transparent, outcomes-based engagement structures. No vague agency billing; just senior execution.
          </p>
        </div>

        {/* 3 Pricing/Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`border p-8 sm:p-10 flex flex-col justify-between transition-all relative ${
                tier.highlighted
                  ? 'bg-white border-[#0055ff] shadow-lg ring-1 ring-[#0055ff]'
                  : 'bg-white border-[#e5e7eb] hover:border-black'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-8 px-3 py-0.5 bg-[#0055ff] text-white text-[10px] font-mono uppercase font-bold tracking-wider">
                  RECOMMENDED FOCUS
                </div>
              )}

              <div className="space-y-6">
                {/* Meta header */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#0055ff] font-bold">{tier.code}</span>
                  <span className="text-[#6b7280] px-2 py-0.5 bg-[#f3f4f6] border border-[#e5e7eb]">
                    {tier.timeline}
                  </span>
                </div>

                {/* Title & Summary */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-sans font-semibold text-[#121316] tracking-tight">
                    <ScrambleText text={tier.title} speed={25} duration={350} />
                  </h3>
                  <p className="text-sm text-[#4b5563] font-light leading-relaxed">
                    {tier.summary}
                  </p>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3 pt-4 border-t border-[#f3f4f6]">
                  <div className="text-[11px] font-mono text-[#6b7280] uppercase tracking-wider">
                    Scope Inclusions:
                  </div>
                  {tier.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#374151]">
                      <Check className="w-3.5 h-3.5 text-[#0055ff] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="pt-8 border-t border-[#f3f4f6] mt-8 space-y-3">
                <div className="text-[11px] font-mono text-[#6b7280]">
                  <span className="font-semibold text-black">BEST FOR: </span>
                  {tier.idealFor}
                </div>

                <button
                  onClick={onOpenContact}
                  className={`w-full py-3.5 px-4 text-xs font-mono uppercase tracking-wider font-semibold flex items-center justify-center gap-2 border transition-all ${
                    tier.highlighted
                      ? 'bg-[#0055ff] border-[#0055ff] text-white hover:bg-[#0044cc]'
                      : 'bg-black border-black text-white hover:bg-[#0055ff] hover:border-[#0055ff]'
                  }`}
                >
                  <ScrambleText text="INITIATE CONVERSATION" speed={25} duration={350} />
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
