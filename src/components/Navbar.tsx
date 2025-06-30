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
            <Link
              href="/#about"
              className={`transition duration-300 text-lg ${
                scrolled ? 'text-white hover:text-blue-200' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={e => handleNav(e, 'about')}
            >
              Who We Are
            </Link>
            <Link
              href="/#classes"
              className={`transition duration-300 text-lg ${
                scrolled ? 'text-white hover:text-blue-200' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={e => handleNav(e, 'classes')}
            >
              Classes
            </Link>
            <Link
              href="/#faq"
              className={`transition duration-300 text-lg ${
                scrolled ? 'text-white hover:text-blue-200' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={e => handleNav(e, 'faq')}
            >
              FAQ
            </Link>
            <Button
              variant="outline"
              className={`text-lg py-6 font-bold shadow-lg border-2 transition-colors duration-200 ${
                scrolled ? 'border-blue-400 bg-white text-blue-900 hover:bg-blue-100 hover:border-blue-500' : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-white'
              }`}
              style={scrolled ? { backgroundColor: '#fff', color: '#1e3a8a', borderColor: '#60a5fa', boxShadow: '0 2px 12px 0 rgba(59,130,246,0.10)' } : { color: '#2563eb', borderColor: '#2563eb' }}
              onClick={e => handleNav(e, 'registration')}
              asChild={false}
            >
              Register Now
            </Button>
            <Button
              className={`text-lg py-6 ${
                scrolled ? 'bg-white text-blue-900 hover:bg-blue-50' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
              onClick={e => handleNav(e, 'donate')}
              asChild={false}
            >
              Donate
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
            <Link
              href="/#about"
              className={`block transition duration-300 text-lg ${
                scrolled ? 'text-white hover:text-blue-200' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={e => handleNav(e, 'about')}
            >
              Who We Are
            </Link>
            <Link
              href="/#classes"
              className={`block transition duration-300 text-lg ${
                scrolled ? 'text-white hover:text-blue-200' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={e => handleNav(e, 'classes')}
            >
              Classes
            </Link>
            <Link
              href="/#faq"
              className={`block transition duration-300 text-lg ${
                scrolled ? 'text-white hover:text-blue-200' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={e => handleNav(e, 'faq')}
            >
              FAQ
            </Link>
            <div className="flex flex-col space-y-2">
              <Button variant="outline" className={`w-full text-lg py-6 font-bold shadow-lg border-2 transition-colors duration-200 ${
                scrolled ? 'border-blue-400 bg-white text-blue-900 hover:bg-blue-100 hover:border-blue-500' : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-white'
              }`} style={scrolled ? { backgroundColor: '#fff', color: '#1e3a8a', borderColor: '#60a5fa', boxShadow: '0 2px 12px 0 rgba(59,130,246,0.10)' } : { color: '#2563eb', borderColor: '#2563eb' }} onClick={e => handleNav(e, 'registration')} asChild={false}>
                Register Now
              </Button>
              <Button className={`w-full text-lg py-6 ${
                scrolled ? 'bg-white text-blue-900 hover:bg-blue-50' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`} onClick={e => handleNav(e, 'donate')} asChild={false}>
                Donate
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
