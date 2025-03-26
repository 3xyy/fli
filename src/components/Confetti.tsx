'use client';

import { useEffect, useState } from 'react';
import './Confetti.css';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  velocity: {
    x: number;
    y: number;
  };
  rotation: number;
  rotationSpeed: number;
}

const colors = ['#FFD700', '#FFA500', '#FF69B4', '#FF1493', '#FF4500', '#FF6347'];

export default function Confetti({ isActive }: { isActive: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isActive && !isPlaying) {
      setIsPlaying(true);
      const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -20,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        velocity: {
          x: (Math.random() - 0.5) * 8,
          y: Math.random() * 4 + 2,
        },
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 20,
      }));

      setParticles(newParticles);
    }
  }, [isActive, isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setParticles(prev => {
          const updated = prev.map(particle => ({
            ...particle,
            x: particle.x + particle.velocity.x,
            y: particle.y + particle.velocity.y,
            rotation: particle.rotation + particle.rotationSpeed,
            velocity: {
              ...particle.velocity,
              y: particle.velocity.y + 0.1, // gravity
            },
          })).filter(particle => particle.y < window.innerHeight + 100);

          if (updated.length === 0) {
            setIsPlaying(false);
          }

          return updated;
        });
      }, 16);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  if (!isPlaying) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="confetti-particle"
          style={{
            left: particle.x,
            top: particle.y,
            transform: `rotate(${particle.rotation}deg)`,
          }}
        >
          <div
            className="confetti-dot"
            style={{
              backgroundColor: particle.color,
              width: particle.size,
              height: particle.size,
            }}
          />
        </div>
      ))}
    </div>
  );
}