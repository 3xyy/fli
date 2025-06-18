'use client';

import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function Confetti({ isActive }: { isActive: boolean }) {
  // Trigger confetti when isActive becomes true
  useEffect(() => {
    if (isActive) {
      confetti({
        particleCount: 200,
        spread: 180,
        angle:90,
        origin: { y: 0.6 },
        colors: [
          '#FFD700', '#FFA500', '#FF69B4', '#FF1493', '#FF4500', '#FF6347',
          '#00CFFF', '#00FF85', '#8A2BE2', '#00FFEA' // added more vibrant colors
        ],
        gravity: 0.9, 
        ticks: 1000, 
        startVelocity: 50, 
      });
    }
  }, [isActive]);

  return null;
}