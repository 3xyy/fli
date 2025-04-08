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
    <section id="classes" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">How The Classes Work</h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
            <div className="flex flex-col md:flex-row items-center mb-6">
              <div className="bg-blue-600 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                ⏱️
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Class Schedule</h3>
                <p className="text-gray-700">
                  1 hour class every Saturday from 9-10 AM, starting 4/26 and ending 8/16
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center mb-6">
              <div className="bg-blue-600 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                📚
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Class Structure</h3>
                <p className="text-gray-700">
                  40 minutes will be spent going through a lesson, with small embedded activities and real life examples
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center mb-6">
              <div className="bg-blue-600 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                💼
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Business Planning</h3>
                <p className="text-gray-700">
                  The final 20 minutes of class will be spent planning your own startup and creating a business model for it
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="bg-blue-600 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                🏆
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Final Presentation</h3>
                <p className="text-gray-700">
                  Students will present their business ideas at the end of the course to a panel of judges for the possibility to win prizes or even turn your business into a reality.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white text-center">
            <h3 className="text-xl font-bold mb-4">Ready to develop your business skills?</h3>
            <p className="mb-6">
              Join our program and learn from student entrepreneurs who understand what it takes to succeed.
            </p>
            <a
              href="#registration"
              className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition duration-300"
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
