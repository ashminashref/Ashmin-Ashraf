import React, { useState } from 'react';
import ScrambleText from './ScrambleText';
import confetti from 'canvas-confetti';
import { X, Check, Send, Mail } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = 'ashminashraf07@gmail.com';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Full-Time Python Developer',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 50,
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
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white border border-black max-w-lg w-full my-4 max-h-[94vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="border-b border-[#e5e7eb] p-4 bg-[#fafafa] flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#0055ff]" />
            <span className="font-mono text-xs uppercase font-bold tracking-wider text-black">
              CONNECT &amp; INQUIRY
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#e5e7eb] border border-[#d1d5db] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6">
          {formSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 bg-[#f0fdf4] border border-[#86efac] text-[#16a34a] mx-auto flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-sans font-semibold text-[#121316]">
                  Message Received
                </h3>
                <p className="text-xs text-[#4b5563] max-w-sm mx-auto font-light leading-relaxed">
                  Thank you for reaching out. I will respond to your message promptly.
                </p>
              </div>

              <button
                onClick={() => {
                  setFormSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-black text-white text-xs font-mono uppercase tracking-wider hover:bg-[#0055ff] transition-colors cursor-pointer"
              >
                RETURN TO PORTFOLIO
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Direct Email Shortcut */}
              <div className="p-3 bg-[#f0f4ff] border border-[#d6e4ff] flex items-center justify-between text-xs font-mono">
                <span className="text-[#0055ff] font-medium">Direct Email:</span>
                <a
                  href={`mailto:${email}`}
                  className="px-3 py-1 bg-[#0055ff] text-white hover:bg-blue-700 font-semibold flex items-center gap-1 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>EMAIL</span>
                </a>
              </div>

              {/* Form Inputs */}
              <div className="space-y-3 text-xs font-mono">
                <div>
                  <label className="block text-[#4b5563] uppercase mb-1">
                    Your Name / Company *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className="w-full p-2.5 text-xs border border-[#d1d5db] bg-[#fafafa] focus:bg-white focus:border-[#0055ff] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-[#4b5563] uppercase mb-1">
                    Your Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full p-2.5 text-xs border border-[#d1d5db] bg-[#fafafa] focus:bg-white focus:border-[#0055ff] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-[#4b5563] uppercase mb-1">
                    Role / Subject
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full p-2.5 text-xs border border-[#d1d5db] bg-[#fafafa] focus:bg-white focus:border-[#0055ff] focus:outline-hidden"
                  >
                    <option>Full-Time: Python Full Stack Developer</option>
                    <option>Full-Time: Frontend Developer</option>
                    <option>Full-Time: UI/UX Designer</option>
                    <option>Web Application Project</option>
                    <option>Other Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#4b5563] uppercase mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we collaborate?"
                    className="w-full p-2.5 text-xs border border-[#d1d5db] bg-[#fafafa] focus:bg-white focus:border-[#0055ff] focus:outline-hidden resize-none"
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="text-xs font-mono text-[#6b7280] hover:text-black cursor-pointer py-1"
                >
                  {copied ? (
                    <span className="text-[#22c55e]">✓ {email} copied!</span>
                  ) : (
                    <span>Copy email</span>
                  )}
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-black text-white hover:bg-[#0055ff] transition-colors text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>CONNECT NOW</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
