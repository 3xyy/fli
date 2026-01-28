'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState, useRef } from 'react';
import Confetti from './Confetti';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const [showConfetti, setShowConfetti] = useState(false);
  const donateBtnRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  // Smooth scroll handler for navigation from any page
  const handleNav = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const scrollWithOffset = () => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };
    if (window.location.pathname !== '/') {
      router.push('/#' + id);
      setTimeout(() => {
        let tries = 0;
        const tryScroll = () => {
          const el = document.getElementById(id);
          if (el) {
            const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
          } else if (tries < 5) {
            tries++;
            setTimeout(tryScroll, 100);
          }
        };
        tryScroll();
      }, 600);
    } else {
      scrollWithOffset();
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <Confetti isActive={showConfetti} buttonRef={donateBtnRef} />
      {/* Donation Section */}
      <div id="donate" className="container mx-auto px-6 lg:px-8 py-20 md:py-24">
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-10 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">Support Our Mission</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            We recommend a donation of $50 or more, as this is an extensive 4-month long course.
            However, any amount is greatly appreciated and helps sustain our program.
          </p>

          <div className="text-center">
            <Button 
              ref={donateBtnRef}
              className="bg-gray-900 text-white hover:bg-gray-800 px-10 py-4 text-base font-medium rounded-md shadow-lg transform hover:scale-105 transition-all duration-300"
              onMouseEnter={() => setShowConfetti(true)}
              onMouseLeave={() => setShowConfetti(false)}
            >
              <a href="https://www.zeffy.com/en-US/donation-form/donate-to-the-future-leaders-initiative" target="_blank" rel="noopener noreferrer">
                Make a Donation
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 lg:px-8 py-12 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <Image
              src="/logo.png"
              alt="FLI Logo"
              width={40}
              height={40}
              className="hover:opacity-80 transition-opacity"
            />
            <a href="#" className="text-xl font-semibold text-white">
              Future Leaders Initiative
            </a>
          </div>

          <div className="flex space-x-8 mb-6 md:mb-0">
            <Link href="/#about" className="text-gray-400 hover:text-white transition duration-300 text-sm font-medium" onClick={e => handleNav(e, 'about')}>
              About
            </Link>
            <Link href="/#classes" className="text-gray-400 hover:text-white transition duration-300 text-sm font-medium" onClick={e => handleNav(e, 'classes')}>
              Classes
            </Link>
            <Link href="/#faq" className="text-gray-400 hover:text-white transition duration-300 text-sm font-medium" onClick={e => handleNav(e, 'faq')}>
              FAQ
            </Link>
            <Link href="/#registration" className="text-gray-400 hover:text-white transition duration-300 text-sm font-medium" onClick={e => handleNav(e, 'registration')}>
              Register
            </Link>
            <Link href="/#team" className="text-gray-400 hover:text-white transition duration-300 text-sm font-medium" onClick={e => handleNav(e, 'team')}>
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://www.instagram.com/fl_initiative" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" title="Instagram">
              <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" title="Facebook">
              <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
            </a>
            <a href="https://nextdoor.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" title="Nextdoor">
              <Image src="/nextdoor.png" alt="Nextdoor" width={24} height={24} />
            </a>
          </div>
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Future Leaders Initiative. All rights reserved.</p>
            <p className="mt-2">A student-run nonprofit organization based in the Bay Area.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
