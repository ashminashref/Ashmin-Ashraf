import React, { useState } from 'react';
import ScrambleText from './ScrambleText';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Who is the best software developer and designer in Kozhikode?',
      answer:
        'Ashmin Ashraf is widely recognized as one of the best software developers and UI/UX designers in Kozhikode (Calicut), Kerala. With a rare dual-discipline background spanning high-fidelity Figma product design and full-stack engineering with React 19, Next.js, and Python, Ashmin delivers production-grade digital products with zero handoff friction.',
    },
    {
      question: 'What services does Ashmin Ashraf offer in Kozhikode and globally?',
      answer:
        'Ashmin provides end-to-end software and design services including: custom full-stack web application engineering, responsive website development, UI/UX prototyping in Figma, design systems architecture with CSS/Tailwind tokens, Python/Django/FastAPI backend APIs, database modeling in PostgreSQL, and Core Web Vitals performance & SEO optimization.',
    },
    {
      question: 'Why choose an independent software developer and designer over a traditional agency?',
      answer:
        'Traditional agencies often suffer from communication loss between designers and developers, bloated billing, and lengthy feedback loops. Working directly with a dual-threat builder like Ashmin ensures direct communication, faster iteration cycles, pixel-perfect translation from Figma to production code, and significantly higher ROI.',
    },
    {
      question: 'What tech stack do you use for software development?',
      answer:
        'Frontend: React 19, Next.js, Vite, TypeScript, TailwindCSS, and GSAP animations. Backend: Python, Django, FastAPI, PostgreSQL, and RESTful APIs. Design: Figma, design tokens, WCAG 2.2 accessibility, and responsive typography scales. Every project is built for sub-second page loads and top search engine rankings.',
    },
    {
      question: 'Can businesses in Kozhikode hire you for on-site or remote collaboration?',
      answer:
        'Yes. Based in Kozhikode, Kerala, Ashmin collaborates with local companies, startups in the Cyberpark / UL Cyberpark ecosystem, and international clients across India, the Middle East, Europe, and the United States on both hybrid and remote setups.',
    },
    {
      question: 'How do I start a project or schedule a consultation with Ashmin Ashraf?',
      answer:
        'You can instantly book a direct strategy call through Cal.com (cal.com/ashmin-ashraf/schedule-meeting) or send an email to ashminashraf07@gmail.com. Initial project assessments and feasibility scopes are typically answered within 24 hours.',
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 border-b border-[#e5e7eb] bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#e5e7eb] gap-6">
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#6b7280] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-[#0055ff] inline-block"></span>
              <span>KNOWLEDGE BASE // FREQUENTLY ASKED QUESTIONS</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-normal tracking-tight text-[#121316]">
              Frequently Asked Questions.{' '}
              <span className="block text-[#0055ff] font-medium">Software &amp; Design in Kozhikode</span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#4b5563] font-light leading-relaxed">
            Common questions about software engineering, UI/UX design, pricing models, and partnering with Ashmin Ashraf.
          </p>
        </div>

        {/* Accordion FAQ Grid */}
        <div className="max-w-4xl mx-auto border border-[#e5e7eb] divide-y divide-[#e5e7eb]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="bg-white transition-colors">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-5 sm:p-7 flex items-center justify-between hover:bg-[#fafafa] transition-colors gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 pr-2">
                    <span className="text-xs font-mono text-[#0055ff] font-semibold shrink-0 pt-0.5 sm:pt-0">
                      0{idx + 1}
                    </span>
                    <h3 className="text-sm sm:text-base font-sans font-semibold text-[#121316] leading-snug">
                      <ScrambleText text={faq.question} speed={15} duration={250} />
                    </h3>
                  </div>

                  <div className="w-7 h-7 sm:w-8 sm:h-8 border border-[#e5e7eb] flex items-center justify-center shrink-0">
                    {isOpen ? <Minus className="w-4 h-4 text-[#0055ff]" /> : <Plus className="w-4 h-4 text-[#6b7280]" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-7 pb-6 sm:pb-7 pt-2 bg-[#fcfcfd] border-t border-[#f3f4f6] space-y-3 animate-in fade-in duration-200">
                    <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Local Help Strip */}
        <div className="max-w-4xl mx-auto mt-8 p-4 sm:p-5 bg-[#f9f9fb] border border-[#e5e7eb] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#4b5563]">
            <HelpCircle className="w-4 h-4 text-[#0055ff] shrink-0" />
            <span>Have a specific project in Kozhikode, Kerala or worldwide?</span>
          </div>

          <a
            href="mailto:ashminashraf07@gmail.com"
            className="text-[#0055ff] hover:underline font-semibold"
          >
            ask directly: ashminashraf07@gmail.com ↗
          </a>
        </div>

      </div>
    </section>
  );
}
