'use client';

import { useEffect, RefObject } from 'react';
import confetti from 'canvas-confetti';

export default function Confetti({ isActive, buttonRef }: { isActive: boolean, buttonRef?: RefObject<HTMLElement> }) {
  // Trigger confetti when isActive becomes true
  useEffect(() => {
    if (isActive && buttonRef?.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      confetti({
        particleCount: 200,
        spread: 180,
        angle: 90,
        origin: { x, y },
        colors: [
          '#FFD700', '#FFA500', '#FF69B4', '#FF1493', '#FF4500', '#FF6347',
          '#00CFFF', '#00FF85', '#8A2BE2', '#00FFEA' // added more vibrant colors
        ],
        gravity: 2, 
        ticks: 1000, 
        startVelocity: 50, 
      });
    }
  }, [isActive, buttonRef]);

  return null;
}