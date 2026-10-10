import React from 'react';
import ScrambleText from './ScrambleText';
import { Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Marcus Vance',
      role: 'Founder & CEO, Horizon AI',
      quote:
        'Finding an engineer who can write production-grade concurrent backend code while possessing the visual taste of an elite design lead is essentially a unicorn. Ashmin took our rough wireframes and shipped a product that stunned our seed investors.',
      metric: '0 to $1.2M ARR in 6 Months',
    },
    {
      name: 'Elena Rostova',
      role: 'VP of Product, Quantis Systems',
      quote:
        'Handoff friction completely vanished. Ashmin didn’t ask for design specs—he authored the Figma token system and then directly wrote the React components with GSAP animations that felt buttery smooth and locked to 60 FPS.',
      metric: '60% Faster Sprint Cycles',
    },
    {
      name: 'David Chen',
      role: 'Principal Engineer, Synapse Protocol',
      quote:
        'Being self-taught gives Ashmin an incredible edge: he is not dogmatic, he solves problems end-to-end. His understanding of database indexing is as sharp as his eye for kerning and micro-interactions.',
      metric: 'Lighthouse 100/100 Verified',
    },
  ];

  return (
    <section id="testimonials" className="py-24 border-b border-[#e5e7eb] bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#e5e7eb] gap-6">
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#6b7280] uppercase tracking-wider flex items-center gap-2">
              <span className="text-[#0055ff] font-bold">/////////</span>
              <span>VERIFIED ENDORSEMENTS // 009</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal tracking-tight text-[#121316]">
              / What Founders & Tech Leads Say.{' '}
              <span className="block text-[#0055ff] font-medium">Peer Validations /</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#4b5563] font-light leading-relaxed">
            Direct feedback from engineering leaders and startup founders who value high-speed execution and uncompromising craft.
          </p>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-l border-t border-[#e5e7eb]">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="border-r border-b border-[#e5e7eb] p-8 sm:p-10 bg-white hover:bg-[#fafafa] transition-all flex flex-col justify-between group space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between text-xs font-mono text-[#9ca3af]">
                  <span className="text-[#0055ff] font-bold">ENDORSEMENT // 0{idx + 1}</span>
                  <div className="flex items-center gap-1 text-[#22c55e]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span className="text-[10px]">VERIFIED</span>
                  </div>
                </div>

                <Quote className="w-8 h-8 text-[#e5e7eb] group-hover:text-[#0055ff] transition-colors" />

                <p className="text-sm text-[#374151] leading-relaxed font-light italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#f3f4f6] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-sans font-semibold text-base text-[#121316]">
                    <ScrambleText text={t.name} speed={25} duration={300} />
                  </div>
                </div>
                <div className="text-xs font-mono text-[#6b7280]">
                  {t.role}
                </div>
                <div className="text-[11px] font-mono text-[#0055ff] font-semibold pt-1">
                  RESULT: {t.metric}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
