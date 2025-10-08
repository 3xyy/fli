"use client";

export default function AboutUs() {
  // Team member data for easy editing
  const teamMembers = [
    { name: 'Yuvraj Dar', role: 'Vice President' },
    { name: 'Joshua Selvaraj', role: 'President' },
    { name: 'Karthik Pasupuleti', role: 'Vice President' },
    { name: 'Riley Wan', role: 'Marketing Secretary' },
    { name: 'Saaket Bapu', role: 'Research Secretary' },
    { name: 'Ojas Singh', role: 'Head Of Research' },
    { name: 'Aadiraj Mann', role: 'Head Of Research' },
    { name: 'Nishil Sanikommu', role: 'Research' },
    { name: 'Vihaan Sanghvi', role: 'Research' },
    { name: 'Arjan Sidhu', role: 'Recruitment & Marketing' },
    { name: 'Jordan Timoteo', role: 'Research' },
    { name: 'Ocean Joshi', role: 'In-Person Marketing' },
    { name: 'Amvi Maheshwari', role: 'In-Person Marketing' },
    { name: 'Emily Yu', role: 'In-Person Marketing' },
  ];

  return (
    <section id="about" className="py-16 bg-blue-50">
      <div className="flex overflow-x-auto w-full" style={{scrollSnapType: 'x mandatory'}}>
        {/* Left: About Us main content */}
        <div className="w-screen px-4 flex-shrink-0 relative bg-blue-50" style={{scrollSnapAlign: 'start'}}>
          {/* Modern animated button to scroll right to Meet Our Team */}
          <button
            className="absolute top-6 right-8 z-10 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-8 py-3 text-lg rounded-full shadow-xl hover:from-blue-600 hover:to-blue-900 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => {
              const teamSection = document.getElementById('team-section');
              if (teamSection) {
                teamSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
                setTimeout(() => {
                  const navbar = document.querySelector('nav');
                  let yOffset = 0;
                  if (navbar) {
                    yOffset = -navbar.offsetHeight;
                  } else {
                    yOffset = -80;
                  }
                  const y = teamSection.getBoundingClientRect().top + window.scrollY + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }, 400);
              }
            }}
            aria-label="Go to Meet Our Team"
          >
            <span className="transition-transform duration-300 group-hover:translate-x-1">Meet Our Team</span>
            <svg className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
          </button>

          <h2 className="text-3xl font-bold text-center mb-16 mt-8 text-blue-900">Who Are We</h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                We're dedicated to bridging the gap in business education by providing accessible,
                practical knowledge to help students become confident leaders and entrepreneurs.
              </p>
              <p className="text-gray-700">
                As a student-run organization based in the Bay Area, we understand the challenges
                that young people face in the business world, and we're here to help them succeed.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 mt-8"> {/* Changed back to bg-white as originally requested */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                The Future Leaders Initiative was built on the idea that business education is often
                overlooked in schools, leaving students unprepared for real-world challenges. We aim to
                fill this gap by providing accessible, practical business knowledge to help students
                become confident leaders and entrepreneurs.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                FLI is student-run and based in the Bay Area, with a dedicated team of over 10 individuals.
                The two key factors that distinguish us from other similar courses are our student-driven
                approach, where classes are designed by students, for students, and the opportunity for
                participants to develop their own startup and business model.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Join us in our mission to bridge the gap in business education. Whether you're a student
                aiming to expand your skills or a professional wanting to support our efforts, there are
                plenty of ways to get involved.
              </p>
              <div className="mt-16 flex justify-center"> {/* Increased margin-top to move up from scrollbar */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                  {/* Student-Driven Approach Card with animated button */}
                  <div
                    className="bg-blue-200 p-6 rounded-lg transition-transform duration-200 hover:scale-105 hover:bg-blue-300 cursor-pointer animate-pulse-scale"
                    onClick={() => {
                      const teamSection = document.getElementById('team-section');
                      if (teamSection) {
                        teamSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
                        setTimeout(() => {
                          // Get the y position of the navbar if fixed
                          const navbar = document.querySelector('nav');
                          let yOffset = 0;
                          if (navbar) {
                            yOffset = -navbar.offsetHeight;
                          } else {
                            yOffset = -80; // fallback offset
                          }
                          const y = teamSection.getBoundingClientRect().top + window.scrollY + yOffset;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }, 400);
                      }
                    }}
                  >
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Student-Driven Approach</h3>
                    <p className="text-blue-900">
                      Our classes are designed by students, for students, ensuring relevant and engaging content.
                    </p>
                  </div>
                  {/* Real Entrepreneurial Experience Card */}
                  <div className="bg-blue-200 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">Real Entrepreneurial Experience</h3>
                    <p className="text-blue-900">
                      Participants develop their own startup idea and complete business model throughout the course.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Team Section */}
        <div id="team-section" className="w-screen px-4 flex-shrink-0 relative bg-blue-50" style={{scrollSnapAlign: 'start'}}>
          {/* Modern animated button to scroll left to Who Are We */}
          <button
            className="absolute top-6 left-8 z-10 bg-gradient-to-l from-blue-500 to-blue-700 text-white font-semibold px-8 py-3 text-lg rounded-full shadow-xl hover:from-blue-600 hover:to-blue-900 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => {
              // Scroll horizontally to the left to the 'about' section
              const scrollContainer = document.querySelector('.overflow-x-auto');
              if (scrollContainer) {
                scrollContainer.scrollTo({
                  left: 0,
                  behavior: 'smooth',
                });
              }
            }}
            aria-label="Go to Who Are We"
          >
            <svg className="w-5 h-5 mr-1 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
            <span className="transition-transform duration-300 group-hover:-translate-x-1">Who Are We</span>
          </button>

          <h2 className="text-2xl font-bold text-center mb-12 mt-8 text-blue-900">Meet Our Team</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-x-20 mb-8 w-full">
              {/* Top row: 3 members */}
              {teamMembers.slice(0,3).map((member) => (
                <div key={member.name} className="flex flex-col items-center bg-white rounded-lg shadow-lg p-10 min-h-[220px] min-w-[200px] w-full transition-transform duration-200 hover:scale-105 hover:shadow-2xl relative">
                  <h4 className="text-4xl font-extrabold text-blue-800 mb-2 text-center break-words whitespace-nowrap w-full flex justify-center">{member.name}</h4>
                  <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-blue-600 text-center w-full">{member.role}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-6 bg-blue-50">
            <div className="grid grid-cols-5 gap-x-8 gap-y-14 w-full">
              {/* Second row: 5 members, including Nishil Sanikommu at the end */}
              {[
                teamMembers[3],
                teamMembers[4],
                teamMembers[5],
                teamMembers[6],
                teamMembers[7] //  
              ].map((member) => (
                <div key={member.name} className="flex flex-col items-center bg-white rounded-lg shadow-lg p-10 min-h-[200px] min-w-[160px] w-full transition-transform duration-200 hover:scale-105 hover:shadow-2xl relative">
                  <h4 className="text-3xl font-extrabold text-blue-800 mb-2 text-center break-words whitespace-nowrap w-full flex justify-center">{member.name}</h4>
                  <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-xl font-bold text-blue-600 text-center w-full">{member.role}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-16 bg-blue-50">
            <div className="grid grid-cols-6 gap-x-8 gap-y-14 w-full">
              {/* Third row: 6 members, resized cards to fit 6 */}
              {[
                teamMembers[8], // Vihaan Sanghvi
                teamMembers[9], // Arjan Sidhu
                teamMembers[10], // Jordan Psalms Timoteo
                teamMembers[11], // Ocean Joshi
                teamMembers[12], // Amvi Maheshwari
                teamMembers[13]  // Emily Yu
              ].map((member) => (
                <div key={member.name} className="flex flex-col items-center bg-white rounded-lg shadow-lg p-8 min-h-[170px] min-w-[130px] w-full transition-transform duration-200 hover:scale-105 hover:shadow-2xl relative">
                  <h4 className="text-2xl font-extrabold text-blue-800 mb-2 text-center break-words whitespace-nowrap w-full flex justify-center">{member.name}</h4>
                  <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-lg font-bold text-blue-600 text-center w-full">{member.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
