import React from 'react';
import ScrambleText from './ScrambleText';
import { Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Alex Rivera',
      role: 'Engineering Lead at Horizon Cloud',
      quote:
        'Ashmin writes clean, structured Django APIs and connects them effortlessly with dynamic React interfaces. His ability to go from design concept to working full-stack code is remarkable.',
      collaboration: 'Full Stack Python & API Architecture',
    },
    {
      name: 'Elena Rostova',
      role: 'Senior Product Manager at Quantis Systems',
      quote:
        'Ashmin cares equally about database reliability and pixel-level UI details. His web applications are performant, responsive, and intuitive to use.',
      collaboration: 'Product Development & UX Fidelity',
    },
    {
      name: 'David Chen',
      role: 'Senior Frontend Lead at Synapse Labs',
      quote:
        'Clean code, reliable Git collaboration, and sharp design taste. Ashmin bridges backend endpoints with React interfaces with zero handoff friction.',
      collaboration: 'React Interfaces & API Integration',
    },
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 border-b border-[#e5e7eb] bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-[#e5e7eb] gap-4">
          <div className="space-y-2">
            <div className="text-xs font-mono text-[#6b7280] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-[#0055ff] inline-block"></span>
              <span>PEER ENDORSEMENTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-normal tracking-tight text-[#121316]">
              Recommendations.{' '}
              <span className="block text-[#0055ff] font-medium">Feedback From Leads &amp; Peers</span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#4b5563] font-light leading-relaxed">
            Endorsements from team leads and engineers on full-stack code quality and UI design craft.
          </p>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-l border-t border-[#e5e7eb]">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="border-r border-b border-[#e5e7eb] p-6 sm:p-8 lg:p-10 bg-white hover:bg-[#fafafa] transition-all flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between text-xs font-mono text-[#9ca3af]">
                  <span className="text-[#0055ff] font-bold">PEER ENDORSEMENT 0{idx + 1}</span>
                  <div className="flex items-center gap-1 text-[#22c55e]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span className="text-[10px]">VERIFIED LEAD</span>
                  </div>
                </div>

                <Quote className="w-7 h-7 text-[#e5e7eb] group-hover:text-[#0055ff] transition-colors" />

                <p className="text-xs sm:text-sm text-[#374151] leading-relaxed font-light italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#f3f4f6] space-y-1.5">
                <div className="font-sans font-semibold text-sm sm:text-base text-[#121316]">
                  <ScrambleText text={t.name} speed={25} duration={300} />
                </div>
                <div className="text-xs font-mono text-[#4b5563]">
                  {t.role}
                </div>
                <div className="text-[11px] font-mono text-[#0055ff] pt-1">
                  FOCUS: {t.collaboration}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
