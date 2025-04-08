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
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto relative hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Image
              src="/logo.png"
              alt="Future Leaders Initiative Logo"
              width={192}
              height={192}
              className="animate-float"
            />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-blue-900 mb-6">Future Leaders Initiative</h1>
        <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
          Empowering the next generation with practical business education and entrepreneurial skills
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="#registration" 
            onClick={(e) => scrollToSection(e, 'registration')}
            className="w-full sm:w-auto"
          >
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg h-auto w-full"
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
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-6 text-lg h-auto w-full"
            >
              Donate
            </Button>
          </a>
        </div>
        <div className="mt-16 p-4 bg-blue-100 rounded-lg inline-block">
          <p className="text-blue-800 font-medium">
            Classes start April 26th | Every Saturday 9-10 AM
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-8">
          <a href="https://www.instagram.com/fl_initiative" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title="Instagram">
            <Image src="/instagram.png" alt="Instagram" width={40} height={40} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title="Facebook">
            <Image src="/facebook.png" alt="Facebook" width={40} height={40} />
          </a>
          <a href="https://nextdoor.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title="Nextdoor">
            <Image src="/nextdoor.png" alt="Nextdoor" width={40} height={40} />
          </a>
        </div>
      </div>
    </section>
  );
}
