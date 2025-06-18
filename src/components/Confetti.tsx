'use client';

import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function Confetti({ isActive }: { isActive: boolean }) {
  // Trigger confetti when isActive becomes true
  useEffect(() => {
    if (isActive) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFD700', '#FFA500', '#FF69B4', '#FF1493', '#FF4500', '#FF6347'],
      });
    }
  }, [isActive]);

  return null;
}