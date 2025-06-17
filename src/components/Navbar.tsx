'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle smooth scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = id === 'registration' ? -500 : 120; // Increased offset for registration section
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-blue-900 shadow-lg' : 'bg-white shadow-md'
    }`}>
      <div className="container mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          <div className={`flex items-center space-x-3 transition-all duration-300 ${
            scrolled ? 'flex-grow justify-center' : ''
          }`}>
            <Image
              src="/logo.png"
              alt="FLI Logo"
              width={48}
              height={48}
              className="hover:scale-105 transition-transform"
            />
            <Link href="/" className={`text-2xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-white' : 'text-blue-600'
            }`}>
              Future Leaders Initiative
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-6`}>
            <a
              href="#about"
              className={`transition duration-300 text-lg ${
                scrolled ? 'text-white hover:text-blue-200' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={(e) => scrollToSection(e, 'about')}
            >
              Who We Are
            </a>
            <a
              href="#classes"
              className={`transition duration-300 text-lg ${
                scrolled ? 'text-white hover:text-blue-200' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={(e) => scrollToSection(e, 'classes')}
            >
              Classes
            </a>
            <a
              href="#faq"
              className={`transition duration-300 text-lg ${
                scrolled ? 'text-white hover:text-blue-200' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={(e) => scrollToSection(e, 'faq')}
            >
              FAQ
            </a>
            <Button variant="outline" className={`text-lg py-6 ${
              scrolled ? 'border-white text-white hover:bg-white hover:text-blue-900' : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            }`}>
              <a href="#registration" onClick={(e) => scrollToSection(e, 'registration')} className={`${scrolled ? 'text-blue-900 hover:text-blue-900' : 'text-blue-600 hover:text-white'}`}>Register Now</a>
            </Button>
            <Button className={`text-lg py-6 ${
              scrolled ? 'bg-white text-blue-900 hover:bg-blue-50' : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}>
              <a href="#donate" onClick={(e) => scrollToSection(e, 'donate')} className="text-inherit">Donate</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`transition-colors duration-300 ${
                scrolled ? 'text-white hover:text-blue-200' : 'text-gray-500 hover:text-blue-600'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`mt-4 md:hidden pb-4 space-y-4 ${
            scrolled ? 'text-white' : ''
          }`}>
            <a
              href="#about"
              className={`block transition duration-300 text-lg ${
                scrolled ? 'text-white hover:text-blue-200' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={(e) => scrollToSection(e, 'about')}
            >
              Who We Are
            </a>
            <a
              href="#classes"
              className={`block transition duration-300 text-lg ${
                scrolled ? 'text-white hover:text-blue-200' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={(e) => scrollToSection(e, 'classes')}
            >
              Classes
            </a>
            <a
              href="#faq"
              className={`block transition duration-300 text-lg ${
                scrolled ? 'text-white hover:text-blue-200' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={(e) => scrollToSection(e, 'faq')}
            >
              FAQ
            </a>
            <div className="flex flex-col space-y-2">
              <Button variant="outline" className={`w-full text-lg py-6 ${
                scrolled ? 'border-white text-white hover:bg-white hover:text-blue-900' : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
              }`}>
                <a href="#registration" className="w-full" onClick={(e) => scrollToSection(e, 'registration')}>Register Now</a>
              </Button>
              <Button className={`w-full text-lg py-6 ${
                scrolled ? 'bg-white text-blue-900 hover:bg-blue-50' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                <a href="#donate" onClick={(e) => scrollToSection(e, 'donate')}>Donate</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
