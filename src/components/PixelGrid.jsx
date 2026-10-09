import React, { useState, useEffect, useRef } from 'react';

export default function PixelGrid({ rows = 6, cols = 32, theme = 'dark' }) {
  // 2D grid of active states with decay
  const [activePixels, setActivePixels] = useState({});
  const gridRef = useRef(null);

  const handleCellHover = (index) => {
    setActivePixels((prev) => ({
      ...prev,
      [index]: 1.0,
    }));
  };

  // Decay timer for fading lit pixels
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePixels((prev) => {
        const next = {};
        let hasKeys = false;
        for (const [key, val] of Object.entries(prev)) {
          const newVal = val - 0.12;
          if (newVal > 0.05) {
            next[key] = newVal;
            hasKeys = true;
          }
        }
        return hasKeys ? next : {};
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Ambient subtle pulse across random squares
  useEffect(() => {
    const ambientInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * (rows * cols));
      setActivePixels((prev) => ({
        ...prev,
        [randomIndex]: 0.85,
      }));
    }, 400);

    return () => clearInterval(ambientInterval);
  }, [rows, cols]);

  const totalCells = rows * cols;
  const isDark = theme === 'dark';

  return (
    <div
      ref={gridRef}
      className={`w-full overflow-hidden border-y select-none touch-pan-y ${
        isDark ? 'bg-[#121316] border-[#26282e]' : 'bg-[#fafafa] border-[#e5e7eb]'
      }`}
    >
      <div
        className="grid w-full h-full"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          aspectRatio: `${cols} / ${rows}`,
        }}
        onTouchMove={(e) => {
          const touch = e.touches[0];
          if (!touch || !gridRef.current) return;
          const rect = gridRef.current.getBoundingClientRect();
          const x = touch.clientX - rect.left;
          const y = touch.clientY - rect.top;
          if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            const colIdx = Math.floor((x / rect.width) * cols);
            const rowIdx = Math.floor((y / rect.height) * rows);
            const cellIdx = rowIdx * cols + colIdx;
            if (cellIdx >= 0 && cellIdx < totalCells) {
              handleCellHover(cellIdx);
            }
          }
        }}
      >
        {Array.from({ length: totalCells }).map((_, idx) => {
          const intensity = activePixels[idx] || 0;
          return (
            <div
              key={idx}
              onMouseEnter={() => handleCellHover(idx)}
              onTouchStart={() => handleCellHover(idx)}
              className={`border-[0.5px] transition-all duration-300 relative cursor-crosshair flex items-center justify-center ${
                isDark ? 'border-[#1f2127]' : 'border-[#ededed]'
              }`}
            >
              <div
                className="w-full h-full transition-opacity duration-300 pointer-events-none"
                style={{
                  backgroundColor: intensity > 0.5 ? '#0055ff' : isDark ? '#ffffff' : '#0055ff',
                  opacity: intensity,
                  boxShadow: intensity > 0.5 ? '0 0 10px rgba(0, 85, 255, 0.7)' : 'none',
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
