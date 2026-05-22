import React, { useEffect, useRef } from 'react';

export default function ClickSpark({
  sparkColor = '#14b8a6', // accent-teal
  sparkSize = 3,
  sparkCount = 8,
  duration = 600,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let sparks = [];
    let animationFrameId;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Spark {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.size = Math.random() * sparkSize + 1;
        this.alpha = 1;
        this.decay = 1 / (duration / 16); // Decay rate based on duration (~60fps)
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.05; // slight gravity pull downwards
        this.alpha -= this.decay;
        if (this.size > 0.1) this.size -= 0.05;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.alpha);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = sparkColor;
        ctx.shadowBlur = 8;
        ctx.shadowColor = sparkColor;
        ctx.fill();
        ctx.restore();
      }
    }

    const handleClick = (e) => {
      const clickX = e.clientX;
      const clickY = e.clientY;
      for (let i = 0; i < sparkCount; i++) {
        sparks.push(new Spark(clickX, clickY));
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sparks = sparks.filter((s) => s.alpha > 0);
      sparks.forEach((s) => {
        s.update();
        s.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('click', handleClick);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [sparkColor, sparkSize, sparkCount, duration]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
    />
  );
}
