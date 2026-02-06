'use client';

import { useState, useEffect, useRef } from 'react';
import ScrollAnimation from './ScrollAnimation';

interface TimelineItem {
  icon: string;
  title: string;
  description: string;
}

const timelineItems: TimelineItem[] = [
  {
    icon: '⏱️',
    title: 'Class Schedule',
    description: '1 hour class every Saturday from 9-10 AM, starting 1/24/2026 and ending 5/9/2026'
  },
  {
    icon: '📚',
    title: 'Class Structure',
    description: '40 minutes will be spent going through a lesson, with small embedded activities and real life examples'
  },
  {
    icon: '💼',
    title: 'Business Planning',
    description: 'The final 20 minutes of class will be spent planning your own startup and creating a business model for it'
  },
  {
    icon: '📅',
    title: 'Office Hours',
    description: 'Office hours will be held after every class from 10-11 AM where students can ask questions and get help'
  },
  {
    icon: '🏆',
    title: 'Final Presentation',
    description: 'Students will present their business ideas at the end of the course to a panel of judges for the possibility to win prizes or even turn your business into a reality.'
  }
];

export default function HowClassesWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [timerKey, setTimerKey] = useState(0); // Force timer restart
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to handle smooth scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset by navbar height
        behavior: 'smooth'
      });
    }
  };

  // Auto-advance through timeline items - runs continuously regardless of viewport visibility
  // The timer starts immediately when the component mounts and continues cycling
  // even when the user scrolls away from this section
  useEffect(() => {
    // Clear any existing timer first
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Start timer immediately - runs continuously regardless of scroll position
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % timelineItems.length);
      }, 5000); // Change every 5 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPaused, timerKey]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    setIsPaused(false);
    // Force timer restart by updating timerKey
    setTimerKey((prev) => prev + 1);
  };

  return (
    <section id="classes" className="relative py-20 md:py-24 bg-transparent">
      <ScrollAnimation>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">How The Classes Work</h2>

            <div className="glass-card rounded-2xl p-8 md:p-12 mb-10 relative [&:hover]:bg-[rgba(255,255,255,0.05)] [&:hover]:shadow-[0_8px_32px_0_rgba(0,0,0,0.3),0_2px_8px_0_rgba(0,0,0,0.2)]">
              {/* Timeline items */}
              <div className="space-y-8">
                {timelineItems.map((item, index) => {
                  const isActive = activeIndex === index;
                  const isPast = activeIndex > index;
                  
                  return (
                    <div
                      key={index}
                      onClick={() => handleItemClick(index)}
                      className={`relative flex flex-col md:flex-row items-start cursor-pointer transition-all duration-500 ${
                        isActive ? 'md:scale-105' : 'md:scale-100'
                      }`}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                    >
                      {/* Timeline dot and connector */}
                      <div className="relative flex items-center mb-4 md:mb-0 md:mr-6">
                        {/* Vertical connector line (mobile) */}
                        {index < timelineItems.length - 1 && (
                          <div className="absolute left-6 top-12 w-0.5 h-8 bg-white/20 md:hidden"></div>
                        )}
                        
                        {/* Timeline dot */}
                        <div className="relative z-10">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-500 ${
                              isActive
                                ? 'bg-white/20 scale-110 shadow-lg shadow-white/20'
                                : isPast
                                ? 'bg-white/10 scale-100'
                                : 'bg-white/5 scale-100'
                            }`}
                          >
                            <span className="filter brightness-0 invert">{item.icon}</span>
                          </div>
                          
                          {/* Active indicator ring */}
                          {isActive && (
                            <div className="absolute inset-0 rounded-full border-2 border-white/40 animate-pulse"></div>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div
                        className={`flex-1 transition-all duration-500 ${
                          isActive
                            ? 'text-white opacity-100'
                            : isPast
                            ? 'text-gray-400 opacity-80'
                            : 'text-gray-500 opacity-60'
                        }`}
                      >
                        <h3
                          className={`text-xl font-semibold mb-2 transition-all duration-500 ${
                            isActive ? 'text-white scale-105' : 'text-gray-300'
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p
                          className={`leading-relaxed transition-all duration-500 ${
                            isActive
                              ? 'text-gray-200'
                              : isPast
                              ? 'text-gray-400'
                              : 'text-gray-500'
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="glass-dark rounded-2xl p-8 md:p-12 text-white text-center">
              <h3 className="text-2xl font-semibold mb-4">Ready to develop your business skills?</h3>
              <p className="mb-8 text-gray-300 text-lg">
                Join our program and learn from student entrepreneurs who understand what it takes to succeed.
              </p>
              <a
                href="#registration"
                className="inline-block bg-white text-black font-medium px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300"
                onClick={(e) => scrollToSection(e, 'registration')}
              >
                Register for Classes
              </a>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
