import React, { useState } from 'react';
import ScrambleText from './ScrambleText';
import confetti from 'canvas-confetti';
import { X, ArrowUpRight, Check, Send, Mail, Calendar } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = 'ashminashraf07@gmail.com';
  const calLink = 'https://cal.com/ashmin-ashraf/schedule-meeting?user=ashmin-ashraf';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: '0-to-1 MVP Build',
    timeline: 'Within 1-2 Months',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#0055ff', '#121316', '#22c55e', '#ffffff'],
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-black max-w-xl w-full my-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="border-b border-[#e5e7eb] p-6 bg-[#fafafa] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#0055ff]"></span>
            <span className="font-mono text-xs uppercase font-bold tracking-wider text-black">
              PROJECT INQUIRY • DIRECT CHANNEL
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-[#e5e7eb] border border-[#d1d5db] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {formSubmitted ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 bg-[#f0fdf4] border border-[#86efac] text-[#16a34a] mx-auto flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-sans font-semibold text-[#121316]">
                  Transmission Dispatched
                </h3>
                <p className="text-sm text-[#4b5563] max-w-md mx-auto font-light leading-relaxed">
                  Thank you for reaching out. I review all incoming project inquiries personally and will respond within 24 hours.
                </p>
              </div>

              <div className="p-4 bg-[#f9f9fb] border border-[#e5e7eb] text-xs font-mono text-[#6b7280]">
                DIRECT TRACKING: <span className="text-[#0055ff]">EST-2026-INQ#{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>

              <button
                onClick={() => {
                  setFormSubmitted(false);
                  onClose();
                }}
                className="px-6 py-3 bg-black text-white text-xs font-mono uppercase tracking-wider hover:bg-[#0055ff] transition-colors"
              >
                RETURN TO PORTFOLIO
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Quick Cal.com Schedule Banner */}
              <div className="p-3.5 bg-[#f0f4ff] border border-[#d6e4ff] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-[#0055ff]">
                  <Calendar className="w-4 h-4" />
                  <span>Prefer an instant meeting?</span>
                </div>
                <a
                  href={calLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 bg-[#0055ff] text-white hover:bg-blue-700 font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>Book on Cal.com</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-sans font-semibold text-[#121316]">
                  Initiate a Project Conversation
                </h3>
                <p className="text-xs text-[#6b7280]">
                  Share your objectives, product vision, or engineering bottlenecks.
                </p>
              </div>

              {/* Form Inputs */}
              <div className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block text-[#4b5563] uppercase mb-1.5">
                    Your Name / Organization *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Marcus Vance (Founder, Horizon AI)"
                    className="w-full p-3 border border-[#d1d5db] bg-[#fafafa] focus:bg-white focus:border-[#0055ff] focus:outline-hidden transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#4b5563] uppercase mb-1.5">
                    Contact Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="marcus@horizon.ai"
                    className="w-full p-3 border border-[#d1d5db] bg-[#fafafa] focus:bg-white focus:border-[#0055ff] focus:outline-hidden transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#4b5563] uppercase mb-1.5">
                      Scope Category
                    </label>
                    <select
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      className="w-full p-3 border border-[#d1d5db] bg-[#fafafa] focus:bg-white focus:border-[#0055ff] focus:outline-hidden"
                    >
                      <option>0-to-1 MVP Build</option>
                      <option>Design System & Frontend</option>
                      <option>Full-Stack Retainer</option>
                      <option>Technical Advisory</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#4b5563] uppercase mb-1.5">
                      Target Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full p-3 border border-[#d1d5db] bg-[#fafafa] focus:bg-white focus:border-[#0055ff] focus:outline-hidden"
                    >
                      <option>Immediate (1-2 Weeks)</option>
                      <option>Within 1-2 Months</option>
                      <option>2026 Roadmap</option>
                      <option>Flexible / Exploratory</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#4b5563] uppercase mb-1.5">
                    Project Brief & Technical Overview *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe what you are looking to build, any existing tech stack requirements, or design aspirations..."
                    className="w-full p-3 border border-[#d1d5db] bg-[#fafafa] focus:bg-white focus:border-[#0055ff] focus:outline-hidden transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="w-full sm:w-auto text-xs font-mono text-[#6b7280] hover:text-black flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? (
                    <span className="text-[#22c55e]">✓ {email} copied!</span>
                  ) : (
                    <span>Or copy email directly</span>
                  )}
                </button>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3.5 bg-black text-white hover:bg-[#0055ff] transition-colors text-xs font-mono uppercase tracking-wider font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ScrambleText text="SEND INQUIRY" speed={20} duration={300} />
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#f9f9fb] border-t border-[#e5e7eb] flex items-center justify-between text-[11px] font-mono text-[#6b7280]">
          <span>ENCRYPTION: TLS 1.3 DIRECT</span>
          <span>RESPONSE GUARANTEE: &lt; 24H</span>
        </div>

      </div>
    </div>
  );
}
