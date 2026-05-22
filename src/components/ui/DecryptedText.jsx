import React, { useState, useEffect, useRef } from 'react';

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = true,
  revealDirection = 'start',
  animateOn = 'hover',
  className = '',
  ...props
}) {
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);
  const originalText = text || '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*()';

  const startAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    let currentIteration = 0;
    const textLength = originalText.length;
    
    // Start with scrambled text of same length
    let state = originalText.split('').map((char) => {
      if (char === ' ') return ' ';
      return chars[Math.floor(Math.random() * chars.length)];
    });
    setDisplayText(state.join(''));

    intervalRef.current = setInterval(() => {
      currentIteration++;
      
      if (sequential) {
        // Sequential reveal based on direction
        const progress = currentIteration / maxIterations; // 0 to 1
        const revealCount = Math.min(textLength, Math.floor(progress * textLength));
        
        state = originalText.split('').map((char, index) => {
          let isRevealed = false;
          if (revealDirection === 'start') {
            isRevealed = index < revealCount;
          } else if (revealDirection === 'end') {
            isRevealed = index >= textLength - revealCount;
          } else { // center
            const mid = Math.floor(textLength / 2);
            isRevealed = Math.abs(index - mid) < revealCount / 2;
          }
          
          if (isRevealed) return char;
          return char === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)];
        });
      } else {
        // Non-sequential scramble settling individually
        state = originalText.split('').map((char) => {
          if (char === ' ') return ' ';
          if (currentIteration >= maxIterations) return char;
          if (Math.random() < currentIteration / maxIterations) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        });
      }

      setDisplayText(state.join(''));

      const allDone = state.join('') === originalText || currentIteration >= maxIterations * 2;
      if (allDone) {
        setDisplayText(originalText);
        setIsAnimating(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, speed);
  };

  useEffect(() => {
    // Run initially on mount if required, otherwise show static text
    if (animateOn === 'mount') {
      startAnimation();
    } else {
      setDisplayText(originalText);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]);

  const handleMouseEnter = () => {
    if (animateOn === 'hover') {
      startAnimation();
    }
  };

  const handleClick = () => {
    if (animateOn === 'click') {
      startAnimation();
    }
  };

  return (
    <span 
      className={className} 
      onMouseEnter={handleMouseEnter} 
      onClick={handleClick} 
      {...props}
    >
      {displayText}
    </span>
  );
}
