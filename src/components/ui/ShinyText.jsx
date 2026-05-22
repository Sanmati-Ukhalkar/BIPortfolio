import React from 'react';

export default function ShinyText({ text, disabled = false, speed = 5, className = '' }) {
  const animationDuration = `${speed}s`;
  return (
    <span
      className={`inline-block bg-clip-text text-transparent bg-gradient-to-r from-neutral-400 via-white to-neutral-400 bg-[length:200%_auto] ${
        disabled ? '' : 'animate-shiny'
      } ${className}`}
      style={{ animationDuration }}
    >
      {text}
    </span>
  );
}
