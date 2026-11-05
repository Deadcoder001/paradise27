import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function EmberParticles() {
  const shouldReduceMotion = useReducedMotion();

  // Pre-generate stable random particle positions
  const particles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: (i * 5.5 + (i % 3) * 3) % 96 + 2, // Distributed across 0-100%
      size: (i % 3) * 1.5 + 2, // 2px to 5px
      duration: 12 + (i % 5) * 4, // 12s to 28s
      delay: (i % 7) * 1.8,
      opacity: 0.15 + (i % 4) * 0.1,
      color: i % 3 === 0 ? '#BF2A2E' : '#FB6218',
    }));
  }, []);

  if (shouldReduceMotion) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full blur-[0.5px]"
          style={{
            left: `${p.x}%`,
            bottom: '-20px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
          }}
          animate={{
            y: ['0vh', '-110vh'],
            x: [0, (p.id % 2 === 0 ? 30 : -30), (p.id % 2 === 0 ? -20 : 20)],
            opacity: [0, p.opacity, p.opacity * 1.2, 0],
            scale: [0.8, 1.2, 0.6],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
