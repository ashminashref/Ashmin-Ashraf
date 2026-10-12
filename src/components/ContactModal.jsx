import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { ME } from '../data/portfolioData';

export default function ContactModal({ isOpen, onClose }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web Development',
    message: '',
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#9fe3b4', '#ffffff', '#4aa3e0', '#9a82f0'],
    });

    const subject = encodeURIComponent(`Inquiry from ${formData.name} [${formData.projectType}]`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${ME.email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(ME.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="relative w-full max-w-lg rounded-3xl border border-[var(--line)] bg-[var(--bg)] p-6 md:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full border border-[var(--line)] bg-[var(--glass)] hover:bg-[var(--glass-hover)] flex items-center justify-center text-[var(--ink)] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="mb-5">
          <span className="pill text-[10px] py-0.5 px-2.5 mb-2">
            Let's Collaborate
          </span>
          <h3
            id="contact-modal-title"
            className="text-2xl font-medium text-[var(--ink)] tracking-tight"
          >
            Start a project with <em className="text-[var(--accent)] font-serif not-italic">Ashmin</em>
          </h3>
          <p className="mt-1 text-xs text-[var(--mute)]">
            Open for full-time engineering roles, freelance builds, and design partnerships.
          </p>
        </div>

        {formSubmitted ? (
          <div className="py-8 text-center flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-[var(--accent-border)] bg-[var(--accent-faint)] text-[var(--accent)] flex items-center justify-center text-xl">
              ✓
            </div>
            <h4 className="text-lg font-medium text-[var(--ink)]">Opening Mail Client</h4>
            <p className="text-xs text-[var(--mute)] max-w-[280px]">
              Thank you! Your email client has been launched with your drafted message.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="pill on mt-3 text-xs py-2 px-5"
            >
              Back to Portfolio
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            <div>
              <label className="block text-[11px] font-mono text-[var(--mute)] mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="Jane Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[var(--field-bg)] border border-[var(--line)] rounded-xl px-3.5 py-2 text-xs text-[var(--ink)] placeholder-[var(--faint)] focus:outline-none focus:border-[var(--accent)] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[var(--mute)] mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="jane@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[var(--field-bg)] border border-[var(--line)] rounded-xl px-3.5 py-2 text-xs text-[var(--ink)] placeholder-[var(--faint)] focus:outline-none focus:border-[var(--accent)] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[var(--mute)] mb-1">
                Focus Area
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full bg-[var(--bg)] border border-[var(--line)] rounded-xl px-3.5 py-2 text-xs text-[var(--ink)] focus:outline-none focus:border-[var(--accent)] transition-colors"
              >
                <option value="Full-Stack Web Development">Full-Stack Web Development (Python / Django / React)</option>
                <option value="Frontend Development">Frontend Interface &amp; GSAP Motion</option>
                <option value="UI/UX & Brand Design">UI/UX Prototype &amp; Brand Identity</option>
                <option value="Full-Time Employment">Full-Time Software Engineer Role</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[var(--mute)] mb-1">
                Message / Brief
              </label>
              <textarea
                rows="3"
                required
                placeholder="Tell me a bit about what you have in mind..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[var(--field-bg)] border border-[var(--line)] rounded-xl px-3.5 py-2 text-xs text-[var(--ink)] placeholder-[var(--faint)] focus:outline-none focus:border-[var(--accent)] resize-none transition-colors"
              />
            </div>

            <div className="flex items-center gap-3 mt-2">
              <button
                type="submit"
                className="pill on text-xs py-2 px-5 flex items-center gap-2"
              >
                <span>Send Message</span>
                <span>→</span>
              </button>

              <button
                type="button"
                onClick={copyEmail}
                className="pill text-xs py-2 px-3 text-[var(--ink)]"
              >
                {copied ? '✓ Email Copied' : '📋 Copy Email'}
              </button>

              <a
                href={ME.resumeUrl}
                download
                className="pill text-xs py-2 px-3 ml-auto text-[var(--ink)]"
              >
                📄 Resume
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
