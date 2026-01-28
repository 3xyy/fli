'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What happens if I miss a class?",
      answer: "Classes are recorded and will be uploaded to YouTube so anyone can watch at a later time. Students are still expected to complete their homework before attending the next class."
    },
    {
      question: "How much is the recommended donation?",
      answer: "We recommend a donation of $50 or more as this is an extensive 4-month long course. However, any amount of money is greatly appreciated and would help our operation."
    },
    {
      question: "Can I still join after the start date?",
      answer: "Yes! Students can still join up to 4 weeks after the start date but please make sure you have completed all required homework."
    },
    {
      question: "Where can I see my assignments and what homework should I be expecting?",
      answer: "A Google Classroom code will be given at the start of the course where all assignments and due dates will be posted. All assignments will be based on the development of your business models and will be set to pace your development so you are ready for the final presentation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

  return (
    <section id="faq" className="py-20 md:py-24 bg-transparent">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <Card key={index} className="mb-4 glass-card rounded-xl">
                  <div
                    className="p-6 cursor-pointer flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    <div className="text-gray-600 flex-shrink-0">
                      {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div
                    style={{
                      maxHeight: isOpen ? '500px' : '0px',
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
                      overflow: 'hidden',
                      transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease, transform 0.5s cubic-bezier(0.4,0,0.2,1)'
                    }}
                  >
                    <CardContent className="pt-0 pb-6 px-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Still have questions? Feel free to <a href="#team" className="text-gray-900 font-medium hover:underline" onClick={(e) => scrollToSection(e, 'team')}>contact us</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
