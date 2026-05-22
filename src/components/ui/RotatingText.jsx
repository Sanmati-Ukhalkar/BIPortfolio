import React, { useState, useEffect } from 'react';

export default function RotatingText({
  texts = [],
  interval = 2500,
  className = '',
  ...props
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    if (texts.length <= 1) return;
    const timer = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setAnimate(true);
      }, 300); // Wait for transition fade out before swapping and fading back in
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval]);

  if (texts.length === 0) return null;

  return (
    <span
      className={`inline-block transition-all duration-300 transform ${
        animate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
      } ${className}`}
      {...props}
    >
      {texts[currentIndex]}
    </span>
  );
}
