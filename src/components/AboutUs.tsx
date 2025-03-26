export default function AboutUs() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Who Are We</h2>

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

          <div className="bg-white rounded-lg shadow-lg p-8">
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

            <p className="text-gray-700 leading-relaxed">
              Join us in our mission to bridge the gap in business education. Whether you're a student
              aiming to expand your skills or a professional wanting to support our efforts, there are
              plenty of ways to get involved.
            </p>

            <div className="mt-10 flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Student-Driven Approach</h3>
                  <p className="text-gray-700">
                    Our classes are designed by students, for students, ensuring relevant and engaging content.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Real Entrepreneurial Experience</h3>
                  <p className="text-gray-700">
                    Participants develop their own startup idea and complete business model throughout the course.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
