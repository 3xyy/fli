'use client';

export default function HowClassesWork() {
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
    <section id="classes" className="py-20 md:py-24 bg-transparent">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">How The Classes Work</h2>

          <div className="glass-card rounded-2xl p-8 md:p-12 mb-10">
            <div className="flex flex-col md:flex-row items-start mb-8">
              <div className="text-3xl mb-4 md:mb-0 md:mr-6">
                ⏱️
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Class Schedule</h3>
                <p className="text-gray-600 leading-relaxed">
                  1 hour class every Saturday from 9-10 AM, starting 1/24/2026 and ending 5/9/2026
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start mb-8">
              <div className="text-3xl mb-4 md:mb-0 md:mr-6">
                📚
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Class Structure</h3>
                <p className="text-gray-600 leading-relaxed">
                  40 minutes will be spent going through a lesson, with small embedded activities and real life examples
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start mb-8">
              <div className="text-3xl mb-4 md:mb-0 md:mr-6">
                💼
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Planning</h3>
                <p className="text-gray-600 leading-relaxed">
                  The final 20 minutes of class will be spent planning your own startup and creating a business model for it
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start mb-8">
              <div className="text-3xl mb-4 md:mb-0 md:mr-6">
                📅
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Hours</h3>
                <p className="text-gray-600 leading-relaxed">
                  Office hours will be held after every class from 10-11 AM where students can ask questions and get help
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start">
              <div className="text-3xl mb-4 md:mb-0 md:mr-6">
                🏆
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Final Presentation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Students will present their business ideas at the end of the course to a panel of judges for the possibility to win prizes or even turn your business into a reality.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-dark rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to develop your business skills?</h3>
            <p className="mb-8 text-gray-300 text-lg">
              Join our program and learn from student entrepreneurs who understand what it takes to succeed.
            </p>
            <a
              href="#registration"
              className="inline-block bg-white text-gray-900 font-medium px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300"
              onClick={(e) => scrollToSection(e, 'registration')}
            >
              Register for Classes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
