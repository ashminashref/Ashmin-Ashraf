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
  Html5Icon,
  Css3Icon,
  NextJsIcon,
  BootstrapIcon,
  SqlIcon,
  FastApiIcon,
  RestApiIcon,
  ChatGptIcon,
  ClaudeIcon,
  AntigravityIcon,
  CodexIcon,
  JevAiIcon,
  GeminiIcon,
} from './TechIcons';

export default function Skills({ onExploreArsenal }) {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  const devToolsList = [
    { name: 'HTML5', icon: Html5Icon },
    { name: 'CSS3', icon: Css3Icon },
    { name: 'JavaScript', icon: JavaScriptIcon },
    { name: 'React.js', icon: ReactIcon },
    { name: 'Next.js (basics)', icon: NextJsIcon },
    { name: 'Tailwind CSS', icon: TailwindIcon },
    { name: 'Bootstrap', icon: BootstrapIcon },
    { name: 'GSAP Motion', icon: GsapIcon },
    { name: 'Python', icon: PythonIcon },
    { name: 'Django', icon: DjangoIcon },
    { name: 'REST API', icon: RestApiIcon },
    { name: 'FastAPI', icon: FastApiIcon },
    { name: 'SQL', icon: SqlIcon },
    { name: 'MySQL', icon: MySqlIcon },
    { name: 'Git & GitHub', icon: GitIcon },
  ];

  const designToolsList = [
    { name: 'Figma', icon: FigmaIcon },
    { name: 'Adobe Photoshop', icon: PhotoshopIcon },
    { name: 'Adobe Illustrator', icon: IllustratorIcon },
    { name: 'Canva', icon: CanvaIcon },
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
        One person, <em>two crafts</em>
        <br />
        and a shared <em>workflow</em>
      </h2>
      <p className="sec-sub">
        The same eye for detail goes into the Figma file and the production pull request.
      </p>

      {/* Two Column Side-by-Side Cards */}
      <div className="two">
        {/* Developer Glass Card */}
        <div
          className="glass side dev"
          onMouseMove={handleMouseMove}
        >
          <div>
            <h3>Developer</h3>
            <p>
              Full-stack builds with Python, Django, REST &amp; FastAPI backends, SQL data, and responsive React &amp; Next.js interfaces animated with GSAP.
            </p>
          </div>

          {/* Code Editor Mockup */}
          <div className="vis">
            <code>
              <span className="c">// full-stack architecture</span>{'\n'}
              <span className="k">const</span> <span className="f">stack</span> = {'{'}{'\n'}
              {'  '}front: [<span className="s">'React'</span>, <span className="s">'Tailwind'</span>, <span className="s">'GSAP'</span>],{'\n'}
              {'  '}back:  [<span className="s">'Python'</span>, <span className="s">'Django'</span>, <span className="s">'FastAPI'</span>, <span className="s">'SQL'</span>],{'\n'}
              {'}'};{'\n'}
              <span className="k">export default</span> () =&gt; <span className="f">ship</span>(stack);
            </code>
          </div>

          {/* Dev Tech Chips with Authentic SVG Icons */}
          <div className="chips">
            {devToolsList.map((tool) => {
              const Icon = tool.icon;
              return (
                <span className="chip flex items-center gap-1.5 py-1.5 px-3" key={tool.name}>
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
              Interface, brand and visual media design. Every product starts in Figma and every identity is crafted with precision.
            </p>
          </div>

          {/* Palette Swatches & Bezier Curve SVG */}
          <div className="vis">
            <div className="sw">
              {['#e8803d', '#f4dd88', '#5fbf86', '#4aa3e0', '#9a82f0'].map((color) => (
                <i key={color} style={{ background: color }} />
              ))}
            </div>
            <svg viewBox="0 0 300 74" width="100%" height="74" fill="none" aria-hidden="true">
              <path
                d="M8 62C70 62 70 12 150 12S230 62 292 62"
                stroke="var(--ink)"
                strokeOpacity="0.75"
                strokeWidth="1.5"
              />
              <path
                d="M8 62L70 24M292 62L230 24"
                stroke="var(--ink)"
                strokeOpacity="0.3"
                strokeWidth="1"
              />
              <circle cx="8" cy="62" r="4" fill="var(--bg)" stroke="var(--ink)" />
              <circle cx="292" cy="62" r="4" fill="var(--bg)" stroke="var(--ink)" />
              <rect x="66" y="20" width="8" height="8" fill="#9a82f0" />
              <rect x="226" y="20" width="8" height="8" fill="#9a82f0" />
            </svg>
          </div>

          {/* Designer Tech Chips with Authentic SVG Icons */}
          <div className="chips">
            {designToolsList.map((tool) => {
              const Icon = tool.icon;
              return (
                <span className="chip flex items-center gap-1.5 py-1.5 px-3" key={tool.name}>
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
