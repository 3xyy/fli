'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        // Try scrolling multiple times for reliability
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
    if (isMenuOpen) setIsMenuOpen(false);
  };

  // Smooth scroll to top handler
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <nav className={`sticky top-4 z-50 transition-all duration-500 ${
      scrolled 
        ? 'glass-nav rounded-2xl mx-4 md:mx-8 lg:mx-auto max-w-7xl' 
        : 'glass-nav rounded-2xl mx-4 md:mx-8 lg:mx-auto max-w-7xl'
    }`}>
      <div className="container mx-auto px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3 group" onClick={handleScrollToTop}>
              <Image
                src="/logo.png"
                alt="FLI Logo"
                width={40}
                height={40}
                className="transition-transform group-hover:scale-105"
              />
              <span className="text-xl font-semibold text-white transition-colors">
                Future Leaders Initiative
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#about"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              onClick={e => handleNav(e, 'about')}
            >
              Who We Are
            </Link>
            <Link
              href="/#classes"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              onClick={e => handleNav(e, 'classes')}
            >
              Classes
            </Link>
            <Link
              href="/#faq"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              onClick={e => handleNav(e, 'faq')}
            >
              FAQ
            </Link>
            <Button
              className="bg-white text-black hover:bg-gray-100 px-6 py-2.5 text-sm font-medium rounded-lg transition-all hover:scale-105 shadow-lg"
              onClick={e => handleNav(e, 'registration')}
              asChild={false}
            >
              Register Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden pb-4 space-y-4 border-t border-white/20 pt-4">
            <Link
              href="/#about"
              className="block text-sm font-medium text-gray-300 hover:text-white transition-colors"
              onClick={e => handleNav(e, 'about')}
            >
              Who We Are
            </Link>
            <Link
              href="/#classes"
              className="block text-sm font-medium text-gray-300 hover:text-white transition-colors"
              onClick={e => handleNav(e, 'classes')}
            >
              Classes
            </Link>
            <Link
              href="/#faq"
              className="block text-sm font-medium text-gray-300 hover:text-white transition-colors"
              onClick={e => handleNav(e, 'faq')}
            >
              FAQ
            </Link>
            <Button
              className="w-full bg-white text-black hover:bg-gray-100 px-6 py-2.5 text-sm font-medium rounded-lg transition-all hover:scale-105 shadow-lg"
              onClick={e => handleNav(e, 'registration')}
              asChild={false}
            >
              Register Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
