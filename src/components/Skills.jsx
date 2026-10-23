import React from 'react';
import {
  PythonIcon,
  DjangoIcon,
  ReactIcon,
  JavaScriptIcon,
  TailwindIcon,
  MySqlIcon,
  GsapIcon,
  FigmaIcon,
  PhotoshopIcon,
  IllustratorIcon,
  CanvaIcon,
  GitIcon,
  FastApiIcon,
  ChatGptIcon,
  ClaudeIcon,
  AntigravityIcon,
  CodexIcon,
  JevAiIcon,
  GeminiIcon,
  PremiereIcon,
  DavinciIcon,
  CameraIcon,
  FilmReelIcon,
} from './TechIcons';

export default function Skills({ onExploreArsenal }) {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  const devToolsList = [
    { name: 'Python', icon: PythonIcon },
    { name: 'Django', icon: DjangoIcon },
    { name: 'React.js', icon: ReactIcon },
    { name: 'Tailwind CSS', icon: TailwindIcon },
    { name: 'FastAPI', icon: FastApiIcon },
    { name: 'MySQL', icon: MySqlIcon },
  ];

  const designToolsList = [
    { name: 'Figma', icon: FigmaIcon },
    { name: 'Photoshop', icon: PhotoshopIcon },
    { name: 'Illustrator', icon: IllustratorIcon },
    { name: 'Canva', icon: CanvaIcon },
  ];

  const videoToolsList = [
    { name: 'Premiere Pro', icon: PremiereIcon },
    { name: 'DaVinci Resolve', icon: DavinciIcon },
    { name: '4K Videography', icon: CameraIcon },
    { name: 'Color Grading', icon: FilmReelIcon },
  ];

  const aiToolsList = [
    { name: 'ChatGPT', icon: ChatGptIcon },
    { name: 'Claude IDE', icon: ClaudeIcon },
    { name: 'Antigravity IDE', icon: AntigravityIcon },
    { name: 'Codex', icon: CodexIcon },
    { name: 'Jev AI', icon: JevAiIcon },
    { name: 'Gemini API', icon: GeminiIcon },
  ];

  return (
    <section className="skills" id="skills" aria-label="Technical Skills and Craft">
      {/* Section Title */}
      <h2 className="sec">
        One person, <em>three crafts</em>
        <br />
        and a unified <em>workflow</em>
      </h2>
      <p className="sec-sub">
        The same eye for detail spans the code terminal, the Figma canvas, and the video editing timeline.
      </p>

      {/* Three Column Side-by-Side Cards */}
      <div className="tri">
        {/* Developer Glass Card */}
        <div
          className="glass side dev"
          onMouseMove={handleMouseMove}
        >
          <div>
            <h3>Developer</h3>
            <p>
              Full-stack systems in Python &amp; Django, relational SQL data models, and fluid React interfaces with GSAP motion.
            </p>
          </div>

          {/* Code Editor Mockup */}
          <div className="vis">
            <code>
              <span className="c">// systems &amp; interfaces</span>{'\n'}
              <span className="k">const</span> <span className="f">stack</span> = {'{'}{'\n'}
              {'  '}back:  [<span className="s">'Python'</span>, <span className="s">'Django'</span>],{'\n'}
              {'  '}front: [<span className="s">'React'</span>, <span className="s">'Tailwind'</span>],{'\n'}
              {'}'};{'\n'}
              <span className="k">export default</span> <span className="f">ship</span>;
            </code>
          </div>

          {/* Dev Tech Chips */}
          <div className="chips">
            {devToolsList.map((tool) => {
              const Icon = tool.icon;
              return (
                <span className="chip flex items-center gap-1.5 py-1 px-2.5 text-xs" key={tool.name}>
                  <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{tool.name}</span>
                </span>
              );
            })}
          </div>
        </div>

        {/* Designer Glass Card */}
        <div
          className="glass side des"
          onMouseMove={handleMouseMove}
        >
          <div>
            <h3>Designer</h3>
            <p>
              Pixel-precise UI/UX in Figma, scalable vector identity in Illustrator, and editorial graphics in Photoshop.
            </p>
          </div>

          {/* Palette Swatches & Bezier Curve SVG */}
          <div className="vis flex flex-col justify-between">
            <div className="sw">
              {['#e8803d', '#f4dd88', '#5fbf86', '#4aa3e0', '#9a82f0'].map((color) => (
                <i key={color} style={{ background: color }} />
              ))}
            </div>
            <svg viewBox="0 0 300 70" width="100%" height="70" fill="none" aria-hidden="true">
              <path
                d="M8 58C70 58 70 12 150 12S230 58 292 58"
                stroke="var(--ink)"
                strokeOpacity="0.75"
                strokeWidth="1.5"
              />
              <path
                d="M8 58L70 20M292 58L230 20"
                stroke="var(--ink)"
                strokeOpacity="0.3"
                strokeWidth="1"
              />
              <circle cx="8" cy="58" r="4" fill="var(--bg)" stroke="var(--ink)" />
              <circle cx="292" cy="58" r="4" fill="var(--bg)" stroke="var(--ink)" />
              <rect x="66" y="16" width="8" height="8" fill="#9a82f0" />
              <rect x="226" y="16" width="8" height="8" fill="#9a82f0" />
            </svg>
          </div>

          {/* Designer Tech Chips */}
          <div className="chips">
            {designToolsList.map((tool) => {
              const Icon = tool.icon;
              return (
                <span className="chip flex items-center gap-1.5 py-1 px-2.5 text-xs" key={tool.name}>
                  <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{tool.name}</span>
                </span>
              );
            })}
          </div>
        </div>

        {/* Video Editor Glass Card */}
        <div
          className="glass side vid"
          onMouseMove={handleMouseMove}
        >
          <div>
            <h3>Video Editor</h3>
            <p>
              4K camera shoots, dynamic pacing, cinematic LUT color grading, and crisp sound design in Premiere Pro &amp; DaVinci Resolve.
            </p>
          </div>

          {/* NLE Timeline Mockup */}
          <div className="vis p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[10px] font-mono text-[var(--faint)] border-b border-[var(--line)] pb-1 mb-2">
              <span className="text-cyan-400 font-semibold">● 4K 60FPS</span>
              <span>REC 00:02:14:18</span>
            </div>
            <div className="space-y-1.5 font-mono text-[10px]">
              <div className="flex items-center gap-1.5">
                <span className="w-4 text-[var(--faint)]">V2</span>
                <div className="flex-1 h-5 rounded bg-blue-500/20 border border-blue-400/40 px-2 flex items-center text-blue-300 truncate">
                  [Cutdown B-Roll 4K]
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 text-[var(--faint)]">V1</span>
                <div className="flex-1 h-5 rounded bg-purple-500/20 border border-purple-400/40 px-2 flex items-center text-purple-300 truncate">
                  [Cam A Cine Master]
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 text-[var(--faint)]">A1</span>
                <div className="flex-1 h-5 rounded bg-emerald-500/20 border border-emerald-400/40 px-2 flex items-center text-emerald-300 truncate">
                  [Audio Foley &amp; Score]
                </div>
              </div>
            </div>
          </div>

          {/* Video Tech Chips */}
          <div className="chips">
            {videoToolsList.map((tool) => {
              const Icon = tool.icon;
              return (
                <span className="chip flex items-center gap-1.5 py-1 px-2.5 text-xs" key={tool.name}>
                  <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{tool.name}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* AI banner glass card */}
      <div
        className="glass ai"
        onMouseMove={handleMouseMove}
      >
        <div>
          Augmented development: I leverage <em>AI tools &amp; intelligent IDEs</em> (ChatGPT, Claude, Antigravity, Codex, Jev AI &amp; Gemini API) to accelerate testing and code velocity.
        </div>
        <div className="chips items-center flex-wrap gap-2">
          {aiToolsList.map((ai) => {
            const Icon = ai.icon;
            return (
              <span className="chip flex items-center gap-1.5 py-1 px-2.5" key={ai.name}>
                <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{ai.name}</span>
              </span>
            );
          })}
          {onExploreArsenal && (
            <button
              type="button"
              onClick={onExploreArsenal}
              className="pill on text-[11px] py-1.5 px-3 ml-auto hover:opacity-90 transition-opacity"
            >
              Explore Full Tech Arsenal →
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
