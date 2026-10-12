import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WORK } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const CODE_COLORS = ['#9fe3b4', '#9bbcf5', '#e7c98a', '#f2a2c0', '#ffffff'];

function Art({ tile, idx }) {
  const artType = tile.art;

  if (artType === 'ui') {
    return (
      <div className="a a-ui">
        <span className="bar" />
        <span className="r" style={{ top: '30%' }} />
        <span className="r" style={{ top: '44%', right: '34%' }} />
        <div className="ch">
          {[38, 64, 46, 86, 58, 72].map((height, k) => (
            <i key={k} style={{ height: `${height}%`, opacity: 0.45 + k * 0.09 }} />
          ))}
        </div>
      </div>
    );
  }

  if (artType === 'code') {
    const lines = [
      [44, 0, 0],
      [70, 1, 10],
      [56, 2, 10],
      [34, 3, 22],
      [62, 1, 22],
      [40, 4, 10],
      [28, 0, 0],
    ];
    return (
      <div className="a a-code">
        {lines.map(([width, colorIdx, margin], k) => (
          <i
            key={k}
            style={{
              width: `${width}%`,
              marginLeft: `${margin}%`,
              background: CODE_COLORS[(colorIdx + idx) % 5],
              opacity: 0.55 + 0.07 * k,
            }}
          />
        ))}
        <span className="tag">&#123; &#125;</span>
      </div>
    );
  }

  if (artType === 'brand') {
    return (
      <div className="a a-brand">
        <i style={{ width: '62%', height: '62%', left: '8%', top: '10%', background: 'rgba(255,255,255,.55)' }} />
        <i style={{ width: '52%', height: '52%', left: '38%', top: '36%', background: 'rgba(255,214,150,.65)' }} />
        <i style={{ width: '28%', height: '28%', left: '20%', top: '58%', background: 'rgba(255,255,255,.7)' }} />
      </div>
    );
  }

  if (artType === 'poster') {
    return (
      <div className="a a-poster">
        <small>Poster / {tile.t}</small>
        <div className="big">{tile.txt || 'Aa'}</div>
      </div>
    );
  }

  if (artType === 'icons') {
    return (
      <div className="a a-icons">
        {Array.from({ length: 9 }).map((_, k) => (
          <i
            key={k}
            style={{
              opacity: 0.35 + ((k * 37) % 60) / 100,
              borderRadius: k % 2 ? '50%' : '30%',
            }}
          />
        ))}
      </div>
    );
  }

  if (artType === 'screen') {
    return (
      <div className="a a-screen">
        <div className="ph">
          <i />
          <i />
          <i style={{ width: '70%' }} />
          <i />
        </div>
      </div>
    );
  }

  if (artType === 'mark') {
    return (
      <div className="a a-mark">
        <div className="ring">{tile.txt || 'a'}</div>
      </div>
    );
  }

  return null;
}

function Tile({ tile, idx, onSelect }) {
  const style = { background: tile.bg || '#111' };
  if (tile.fg) style['--fg'] = tile.fg;

  return (
    <div
      className="tile"
      style={style}
      onClick={() => onSelect && onSelect(tile)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && onSelect) {
          onSelect(tile);
        }
      }}
      aria-label={`${tile.t} - ${tile.k}`}
    >
      {tile.img ? (
        <img src={tile.img} alt={tile.t} loading="lazy" />
      ) : (
        <Art tile={tile} idx={idx} />
      )}
      <div className="cap">
        <b>{tile.t}</b>
        <span>{tile.k}</span>
      </div>
    </div>
  );
}

function Row({ items, dir, speed, onSelect }) {
  const wrapRef = useRef(null);
  const innerRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !innerRef.current || !wrapRef.current) return;

    // Wait slightly for DOM measurement
    const width = innerRef.current.scrollWidth / 2;

    tweenRef.current =
      dir < 0
        ? gsap.fromTo(
            innerRef.current,
            { x: 0 },
            { x: -width, duration: speed, ease: 'none', repeat: -1 }
          )
        : gsap.fromTo(
            innerRef.current,
            { x: -width },
            { x: 0, duration: speed, ease: 'none', repeat: -1 }
          );

    const parallaxTween = gsap.to(wrapRef.current, {
      x: dir * -90,
      ease: 'none',
      scrollTrigger: {
        trigger: wrapRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.6,
      },
    });

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
      if (parallaxTween.scrollTrigger) parallaxTween.scrollTrigger.kill();
      parallaxTween.kill();
    };
  }, [dir, speed]);

  const slow = (scale) => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, { timeScale: scale, duration: 0.8, overwrite: true });
    }
  };

  const loop = [...items, ...items];

  return (
    <div
      className="row-wrap"
      ref={wrapRef}
      onPointerEnter={() => slow(0.2)}
      onPointerLeave={() => slow(1)}
    >
      <div className="row-in" ref={innerRef}>
        {[0, 1].map((setIdx) =>
          loop.map((item, k) => (
            <Tile
              key={`${setIdx}-${k}-${item.t}`}
              tile={item}
              idx={k}
              onSelect={onSelect}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default function Work({ onSelectTile }) {
  const directions = [-1, 1, -1];
  const speeds = [90, 110, 100];

  return (
    <section className="work" id="work" aria-label="Selected Work Showcase">
      {WORK.map((rowItems, idx) => (
        <Row
          key={idx}
          items={rowItems}
          dir={directions[idx]}
          speed={speeds[idx]}
          onSelect={onSelectTile}
        />
      ))}
    </section>
  );
}
