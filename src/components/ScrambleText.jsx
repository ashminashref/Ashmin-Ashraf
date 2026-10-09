import React, { useState, useEffect, useRef } from 'react';

const SCRAMBLE_CHARS = '!<>-_\\/[]{}—=+*^?#______0101';

/**
 * ScrambleText component
 * Recreates the exact Webflow/GSAP ScrambleTextPlugin behavior seen in Aeye
 * Supports both on-hover scramble and initial/scroll reveal
 */
export default function ScrambleText({
  text,
  className = '',
  scrambleOnHover = true,
  autoScramble = false,
  speed = 40,
  duration = 600,
  as: Component = 'span',
  children,
}) {
  const targetText = text || (typeof children === 'string' ? children : '');
  const [displayText, setDisplayText] = useState(targetText);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const startScramble = () => {
    if (isScrambling || !targetText) return;
    setIsScrambling(true);

    const length = targetText.length;
    const startTime = Date.now();

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const revealedLength = Math.floor(progress * length);

      let result = '';
      for (let i = 0; i < length; i++) {
        if (targetText[i] === ' ') {
          result += ' ';
        } else if (i < revealedLength) {
          result += targetText[i];
        } else {
          result += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
      }

      setDisplayText(result);

      if (progress >= 1) {
        clearInterval(intervalRef.current);
        setDisplayText(targetText);
        setIsScrambling(false);
      }
    }, speed);
  };

  useEffect(() => {
    setDisplayText(targetText);
    if (autoScramble) {
      startScramble();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [targetText]);

  return (
    <Component
      className={`inline-block transition-colors ${className}`}
      onMouseEnter={scrambleOnHover ? startScramble : undefined}
    >
      {displayText}
    </Component>
  );
}
