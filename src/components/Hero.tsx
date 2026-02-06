'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  // Function to handle smooth scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = id === 'registration' ? -500 : 80; // Added custom offset for registration
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen bg-transparent flex items-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="w-32 h-32 mx-auto relative mb-8">
              <Image
                src="/logo.png"
                alt="Future Leaders Initiative Logo"
                width={128}
                height={128}
                className="mx-auto"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Future Leaders Initiative
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join 300+ students as we empower the next generation with practical business education and entrepreneurial skills
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <a 
              href="#registration" 
              onClick={(e) => scrollToSection(e, 'registration')}
              className="w-full sm:w-auto"
            >
              <Button
                className="bg-white hover:bg-gray-100 text-black px-8 py-4 text-base font-medium rounded-md w-full sm:w-auto transition-colors"
              >
                Register Now
              </Button>
            </a>
            <a 
              href="#donate" 
              onClick={(e) => scrollToSection(e, 'donate')}
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-base font-medium rounded-md w-full sm:w-auto transition-colors"
              >
                Donate
              </Button>
            </a>
          </div>
          <div className="mt-16 p-6 glass-card rounded-xl inline-block">
            <p className="text-white font-medium text-lg">
              Classes start January 24th end May 9th | Every Saturday 9-10 AM
            </p>
          </div>
          <div className="mt-12 flex justify-center gap-6">
            <a href="https://www.instagram.com/fl_initiative" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" title="Instagram">
              <Image src="/instagram.png" alt="Instagram" width={32} height={32} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" title="Facebook">
              <Image src="/facebook.png" alt="Facebook" width={32} height={32} />
            </a>
            <a href="https://nextdoor.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" title="Nextdoor">
              <Image src="/nextdoor.png" alt="Nextdoor" width={32} height={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
