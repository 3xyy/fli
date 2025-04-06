'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';

export default function Team() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    <section id="team" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Contact Us</h2>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">How to Contact Us</h3>

            <p className="text-gray-700 mb-6">
              For all major inquiries please email: <a href="mailto:futureleadersinitiative0@gmail.com" className="text-blue-600 font-medium">futureleadersinitiative0@gmail.com</a>
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-blue-800 mb-4">Connect With Us!</h4>
              <p className="text-gray-700 mb-4">
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
                action="https://formspree.io/f/mgvapadr" 
                method="POST" 
                onSubmit={handleSubmit} 
                className="space-y-4"
              >
                <h4 className="text-xl font-semibold text-blue-800 mb-3">Contact Form</h4>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">Topic *</label>
                  <Input
                    id="topic"
                    name="topic"
                    placeholder="Inquiry topic"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization (Optional)</label>
                  <Input
                    id="organization"
                    name="organization"
                    placeholder="Your organization"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={4}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            ) : (
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h4 className="text-xl font-bold text-green-600 mb-2">Message Sent!</h4>
                <p className="text-gray-700 mb-4">We've received your message and will respond shortly.</p>
                <Button onClick={() => setIsSubmitted(false)} className="bg-blue-600 hover:bg-blue-700">
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
