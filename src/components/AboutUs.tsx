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
    <section id="about" className="py-20 md:py-24 bg-transparent">
      <div className="flex overflow-x-auto w-full" style={{scrollSnapType: 'x mandatory'}}>
        {/* Left: About Us main content */}
        <div className="w-screen px-6 lg:px-8 flex-shrink-0 relative bg-transparent" style={{scrollSnapAlign: 'start'}}>
          {/* Modern animated button to scroll right to Meet Our Team */}
          <button
            className="absolute top-6 right-8 z-10 bg-gray-900 text-white font-medium px-6 py-2.5 text-sm rounded-md hover:bg-gray-800 transition-colors flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
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
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
          </button>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 mt-8 text-gray-900">Who Are We</h2>

            <div className="mb-12 glass-card rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                We're dedicated to bridging the gap in business education by providing accessible,
                practical knowledge to help students become confident leaders and entrepreneurs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                As a student-run organization based in the Bay Area, we understand the challenges
                that young people face in the business world, and we're here to help them succeed.
              </p>
            </div>

            <div className="mb-12 glass-card rounded-2xl p-8 md:p-10">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Future Leaders Initiative was built on the idea that business education is often
                overlooked in schools, leaving students unprepared for real-world challenges. We aim to
                fill this gap by providing accessible, practical business knowledge to help students
                become confident leaders and entrepreneurs.
              </p>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                FLI is student-run and based in the Bay Area, with a dedicated team of over 10 individuals.
                The two key factors that distinguish us from other similar courses are our student-driven
                approach, where classes are designed by students, for students, and the opportunity for
                participants to develop their own startup and business model.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                Join us in our mission to bridge the gap in business education. Whether you're a student
                aiming to expand your skills or a professional wanting to support our efforts, there are
                plenty of ways to get involved.
              </p>
              <div className="mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Student-Driven Approach Card with animated button */}
                  <div
                    className="glass-card p-8 rounded-xl transition-all duration-200 hover:scale-[1.02] cursor-pointer"
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
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Student-Driven Approach</h3>
                    <p className="text-gray-600">
                      Our classes are designed by students, for students, ensuring relevant and engaging content.
                    </p>
                  </div>
                  {/* Real Entrepreneurial Experience Card */}
                  <div className="glass-card p-8 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Real Entrepreneurial Experience</h3>
                    <p className="text-gray-600">
                      Participants develop their own startup idea and complete business model throughout the course.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Team Section */}
        <div id="team-section" className="w-screen px-6 lg:px-8 flex-shrink-0 relative bg-transparent" style={{scrollSnapAlign: 'start'}}>
          {/* Modern animated button to scroll left to Who Are We */}
          <button
            className="absolute top-6 left-8 z-10 bg-gray-900 text-white font-medium px-6 py-2.5 text-sm rounded-md hover:bg-gray-800 transition-colors flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            onClick={() => {
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
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
            <span className="transition-transform duration-300 group-hover:-translate-x-1">Who Are We</span>
          </button>

          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 mt-8 text-gray-900">Meet Our Team</h2>
            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-6 mb-8 w-full">
                {/* Top row: 3 members */}
                {teamMembers.slice(0,3).map((member) => (
                  <div key={member.name} className="flex flex-col items-center glass-card rounded-xl p-8 min-h-[200px] w-full transition-all duration-200 hover:scale-[1.02] relative">
                    <h4 className="text-2xl font-semibold text-gray-900 mb-2 text-center break-words w-full">{member.name}</h4>
                    <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-base font-medium text-gray-600 text-center w-full">{member.role}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <div className="grid grid-cols-5 gap-4 w-full">
                {/* Second row: 5 members */}
                {[
                  teamMembers[3],
                  teamMembers[4],
                  teamMembers[5],
                  teamMembers[6],
                  teamMembers[7]
                ].map((member) => (
                  <div key={member.name} className="flex flex-col items-center glass-card rounded-xl p-6 min-h-[180px] w-full transition-all duration-200 hover:scale-[1.02] relative">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2 text-center break-words w-full">{member.name}</h4>
                    <span className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-600 text-center w-full">{member.role}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <div className="grid grid-cols-6 gap-4 w-full">
                {/* Third row: 6 members */}
                {[
                  teamMembers[8],
                  teamMembers[9],
                  teamMembers[10],
                  teamMembers[11],
                  teamMembers[12],
                  teamMembers[13]
                ].map((member) => (
                  <div key={member.name} className="flex flex-col items-center glass-card rounded-xl p-6 min-h-[160px] w-full transition-all duration-200 hover:scale-[1.02] relative">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 text-center break-words w-full">{member.name}</h4>
                    <span className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-600 text-center w-full">{member.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
