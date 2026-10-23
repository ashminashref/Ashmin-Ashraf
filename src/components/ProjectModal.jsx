import React, { useEffect } from 'react';
import { GoogleDriveIcon } from './TechIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const projectImg = project.img || project.image;
  const projectTitle = project.t || project.title;
  const projectDesc = project.desc || project.summary || project.headline;
  const projectLive = project.live || project.liveUrl;
  const projectGithub = project.github || project.githubUrl;
  const projectBehance = project.behance || project.behanceUrl;
  const projectDrive = project.drive || project.driveUrl;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[var(--line)] bg-[var(--bg)] p-6 md:p-8 shadow-2xl"
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

        {/* Media Preview if real image exists */}
        {projectImg && (
          <div className="w-full h-56 md:h-72 rounded-2xl overflow-hidden mb-6 border border-[var(--line)] bg-[var(--vis-bg)]">
            <img
              src={projectImg}
              alt={projectTitle}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Header Information */}
        <div className="flex items-center gap-2 mb-2">
          <span className="pill text-[10px] py-0.5 px-2.5">
            {project.k === 'Dev'
              ? 'Engineering'
              : project.k === 'Motion'
              ? 'Videography & Motion'
              : project.category || 'Design & Identity'}
          </span>
          {project.txt && (
            <span className="text-xs font-serif italic text-[var(--mute)]">
              Style: {project.txt}
            </span>
          )}
        </div>

        <h3
          id="modal-title"
          className="text-2xl md:text-3xl font-medium text-[var(--ink)] tracking-tight"
        >
          {projectTitle}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-[var(--mute)]">
          {projectDesc ||
            'Crafted with attention to typography, interaction smoothness, and engineering robustness.'}
        </p>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="mt-5">
            <h4 className="text-[11px] font-mono text-[var(--faint)] uppercase tracking-wider mb-2">
              Tech &amp; Tools
            </h4>
            <div className="chips">
              {project.tags.map((tag) => (
                <span className="chip text-[11px]" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-6 pt-5 border-t border-[var(--line)] flex flex-wrap gap-3 items-center">
          {projectDrive && (
            <a
              href={projectDrive}
              target="_blank"
              rel="noopener noreferrer"
              className="pill on text-xs py-2 px-4 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium shadow-md shadow-blue-500/20"
            >
              <GoogleDriveIcon className="w-3.5 h-3.5" />
              <span>Watch on Google Drive</span>
              <span>↗</span>
            </a>
          )}
          {projectLive && !projectDrive && (
            <a
              href={projectLive}
              target="_blank"
              rel="noopener noreferrer"
              className="pill on text-xs py-2 px-4 flex items-center gap-2"
            >
              <span>Live Demonstration</span>
              <span>↗</span>
            </a>
          )}
          {projectGithub && (
            <a
              href={projectGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="pill text-xs py-2 px-4 flex items-center gap-2"
            >
              <span>GitHub Repository</span>
              <span>↗</span>
            </a>
          )}
          {projectBehance && (
            <a
              href={projectBehance}
              target="_blank"
              rel="noopener noreferrer"
              className="pill text-xs py-2 px-4 flex items-center gap-2"
            >
              <span>Behance Case Study</span>
              <span>↗</span>
            </a>
          )}
          <button
            type="button"
            onClick={onClose}
            className="pill text-xs py-2 px-4 ml-auto"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
