'use client';
const formsparkEndpoint = process.env.NEXT_PUBLIC_FORMSPARK_CON_ENDPOINT;
const SITE_KEY = process.env.NEXT_PUBLIC_SITE_KEY;
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import TurnstileInput from 'turnstile-next';
import Image from 'next/image';
import Script from 'next/script';
export default function Team() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const turnstileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;
    const renderTurnstile = () => {
      if (!isMounted) return;
      if (turnstileRef.current) {
        turnstileRef.current.innerHTML = '';
      }
      if (window.turnstile && turnstileRef.current) {
        window.turnstile.render(turnstileRef.current, {
          sitekey: SITE_KEY || '',
          callback: 'javascriptCallback',
        });
      }
    };
    if (typeof window !== 'undefined') {
      let tries = 0;
      const poll = () => {
        if (window.turnstile) {
          renderTurnstile();
        } else if (tries < 50) {
          tries++;
          setTimeout(poll, 100);
        }
      };
      poll();
    }
    return () => {
      isMounted = false;
      if (turnstileRef.current) turnstileRef.current.innerHTML = '';
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.target as HTMLFormElement;
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="team" className="py-20 md:py-24 bg-transparent">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">Contact Us</h2>

          <div className="glass-card rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">How to Contact Us</h3>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For all major inquiries please email: <a href="mailto:futureleadersinitiative0@gmail.com" className="text-gray-900 font-medium hover:underline">futureleadersinitiative0@gmail.com</a>
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Connect With Us!</h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Follow us on social media to stay updated with our latest events, success stories, and announcements! You can also reach out to us through these platforms for quick responses.
              </p>
              <div className="flex gap-6 justify-center">
                <a href="https://instagram.com/fl_initiative" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title="Instagram">
                  <Image src="/instagram.png" alt="Instagram" width={32} height={32} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title="Facebook">
                  <Image src="/facebook.png" alt="Facebook" width={32} height={32} />
                </a>
                <a href="https://nextdoor.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title="Nextdoor">
                  <Image src="/nextdoor.png" alt="Nextdoor" width={32} height={32} />
                </a>
              </div>
            </div>

            {!isSubmitted ? (
              <form 
                action={formsparkEndpoint}
                className="space-y-4"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Contact Form</h4>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">Name *</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">Email *</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-gray-900 mb-2">Topic *</label>
                  <Input
                    id="topic"
                    name="topic"
                    placeholder="Inquiry topic"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-900 mb-2">Organization (Optional)</label>
                  <Input
                    id="organization"
                    name="organization"
                    placeholder="Your organization"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">Message *</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={4}
                    required
                  />
                </div>
                {/* Turnstile widget */}
                <div
                  ref={turnstileRef}
                  className="cf-turnstile"
                ></div>
                <Button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            ) : (
              <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-900 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600 mb-4">We've received your message and will respond shortly.</p>
                <Button onClick={() => setIsSubmitted(false)} className="bg-gray-900 hover:bg-gray-800 text-white">
                  Send Another Message
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
