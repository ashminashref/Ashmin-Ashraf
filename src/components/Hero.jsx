import React from 'react';

const Sparkle = ({ style, size = 14 }) => (
  <svg
    className="spark"
    style={style}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0c.6 6.6 5.4 11.4 12 12-6.6.6-11.4 5.4-12 12-.6-6.6-5.4-11.4-12-12C6.6 11.4 11.4 6.6 12 0z" />
  </svg>
);

function Word({ w, isItalic }) {
  return (
    <>
      <span className={`hw ${isItalic ? 'it' : ''}`}>
        <span>{w}</span>
      </span>{' '}
    </>
  );
}

export default function Hero() {
  const L1 = [
    { w: 'I', it: false },
    { w: 'design', it: false },
    { w: 'what', it: true },
    { w: 'you', it: true },
    { w: 'see,', it: true },
  ];

  const L2 = [
    { w: 'code', it: false },
    { w: 'what', it: true },
    { w: 'it', it: true },
    { w: 'does,', it: true },
  ];

  const L3 = [
    { w: 'and', it: false },
    { w: 'edit', it: false },
    { w: 'what', it: true },
    { w: 'moves.', it: true },
  ];

  return (
    <section className="hero" id="home" aria-label="Hero Overview">
      {/* Decorative Twinkling Sparkles */}
      <Sparkle style={{ left: '19%', top: '26%' }} size={15} />
      <Sparkle style={{ right: '17%', top: '20%', animationDelay: '1.4s' }} size={12} />
      <Sparkle style={{ right: '12%', top: '52%', animationDelay: '2.6s' }} size={10} />
      <Sparkle style={{ left: '10%', top: '60%', animationDelay: '3.4s' }} size={9} />

      {/* Pill Badge */}
      <div>
        <span className="pill badge">Developer • Designer • Video Editor</span>
      </div>

      {/* Main Display Headline with Staggered Word Masking */}
      <h1 className="display">
        <span className="hl">
          {L1.map((item, idx) => (
            <Word key={`l1-${idx}`} w={item.w} isItalic={item.it} />
          ))}
        </span>
        <span className="hl">
          {L2.map((item, idx) => (
            <Word key={`l2-${idx}`} w={item.w} isItalic={item.it} />
          ))}
        </span>
        <span className="hl">
          {L3.map((item, idx) => (
            <Word key={`l3-${idx}`} w={item.w} isItalic={item.it} />
          ))}
        </span>
      </h1>

      {/* Hero Subtitle */}
      <p className="hero-sub">
        Three disciplines, one person. Engineering clean code, crafting distinct visuals, and editing cinematic video — cohesive from concept to cut.
      </p>
    </section>
  );
}
