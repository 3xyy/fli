'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';
import Confetti from './Confetti';

export default function Footer() {
  const [showConfetti, setShowConfetti] = useState(false);

  // Function to handle smooth scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = id === 'registration' ? -500 : 100; // Updated to match navbar offset
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-blue-900 text-white">
      <Confetti isActive={showConfetti} />
      {/* Donation Section */}
      <div id="donate" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-blue-800 rounded-xl p-10 shadow-2xl shadow-blue-900/30 transform hover:scale-[1.02] transition-all duration-300 animate-float-bounce hover:shadow-blue-900/50 hover:bg-blue-700 group">
          <h2 className="text-3xl font-bold text-center mb-6 group-hover:text-white transition-colors duration-300">Support Our Mission</h2>
          <p className="text-center text-blue-100 mb-8 max-w-2xl mx-auto text-lg group-hover:text-blue-50 transition-colors duration-300">
            We recommend a donation of $50 or more, as this is an extensive 4-month long course.
            However, any amount is greatly appreciated and helps sustain our program.
          </p>

          <div className="text-center">
            <Button 
              className="bg-white text-blue-800 hover:bg-blue-50 px-10 py-6 text-lg h-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
              onMouseEnter={() => setShowConfetti(true)}
              onMouseLeave={() => setShowConfetti(false)}
            >
              <a href="https://example.com/donate" target="_blank" rel="noopener noreferrer">
                Make a Donation
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 py-12 border-t border-blue-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <Image
              src="/logo.png"
              alt="FLI Logo"
              width={48}
              height={48}
              className="hover:scale-105 transition-transform"
            />
            <a href="#" className="text-2xl font-bold text-white">
              Future Leaders Initiative
            </a>
          </div>

          <div className="flex space-x-8 mb-6 md:mb-0">
            <a href="#about" className="text-blue-200 hover:text-white transition duration-300" onClick={(e) => scrollToSection(e, 'about')}>
              About
            </a>
            <a href="#classes" className="text-blue-200 hover:text-white transition duration-300" onClick={(e) => scrollToSection(e, 'classes')}>
              Classes
            </a>
            <a href="#faq" className="text-blue-200 hover:text-white transition duration-300" onClick={(e) => scrollToSection(e, 'faq')}>
              FAQ
            </a>
            <a href="#registration" className="text-blue-200 hover:text-white transition duration-300" onClick={(e) => scrollToSection(e, 'registration')}>
              Register
            </a>
            <a href="#team" className="text-blue-200 hover:text-white transition duration-300" onClick={(e) => scrollToSection(e, 'team')}>
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <div className="flex justify-center gap-8 mb-8">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title="Instagram">
              <Image src="/instagram.png" alt="Instagram" width={32} height={32} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title="Facebook">
              <Image src="/facebook.png" alt="Facebook" width={32} height={32} />
            </a>
            <a href="https://nextdoor.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title="Nextdoor">
              <Image src="/nextdoor.png" alt="Nextdoor" width={32} height={32} />
            </a>
          </div>
          <div className="text-center text-blue-300 text-sm">
            <p>&copy; {new Date().getFullYear()} Future Leaders Initiative. All rights reserved.</p>
            <p className="mt-2">A student-run nonprofit organization based in the Bay Area.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
