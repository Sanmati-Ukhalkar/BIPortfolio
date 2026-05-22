import React, { useState } from 'react';
import { useLenis } from 'lenis/react';

export default function Dock({
  items = [],
  className = '',
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  useLenis(({ scroll, direction, velocity }) => {
    // Hide dock when scrolling down with momentum, show when scrolling up or near top
    if (scroll < 100) {
      setIsVisible(true);
    } else if (direction === 1 && velocity > 0.5) {
      setIsVisible(false);
    } else if (direction === -1) {
      setIsVisible(true);
    }
  });

  const getScale = (index) => {
    if (hoveredIndex === null) return 1;
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 0) return 1.4;
    if (distance === 1) return 1.2;
    return 1;
  };

  return (
    <div 
      className={`fixed bottom-6 left-1/2 z-50 flex items-end gap-3 px-5 py-3 rounded-2xl glass-panel border border-white/10 shadow-2xl backdrop-blur-md transition-all duration-500 ease-in-out ${className}`}
      style={{
        transform: `translateX(-50%) translateY(${isVisible ? '0' : '96px'})`,
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      {items.map((item, idx) => {
        const Icon = item.icon;
        const scale = getScale(idx);
        return (
          <a
            key={idx}
            href={item.href}
            download={item.download}
            target={item.href.startsWith('#') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="relative group flex items-center justify-center rounded-xl bg-white/5 border border-white/5 p-3 text-text-secondary hover:text-accent-blue hover:bg-white/10 transition-colors duration-200"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: 'bottom center',
              transition: 'transform 0.2s ease, background-color 0.2s ease',
            }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Icon className="w-5 h-5" />
            {/* Tooltip */}
            <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-150 text-[10px] font-bold text-white bg-bg-dark border border-white/10 px-2 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap">
              {item.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}
