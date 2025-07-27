export default function ImportantInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Other Important Information</h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-lg p-6 shadow-md transition-all duration-500 ease-in-out hover:-translate-y-3 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 rounded-full p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800">Homework Expectations</h3>
            </div>
            <p className="text-gray-700">
              Students may be given small amounts of homework to complete before the next class and are expected to work on their business models outside of class.
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 shadow-md transition-all duration-500 ease-in-out hover:-translate-y-3 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 rounded-full p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800">Zoom Verification</h3>
            </div>
            <p className="text-gray-700">
              Upon signing up, students may be asked to join a zoom call to verify their identity in order to prevent "zoom bombers".
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 shadow-md transition-all duration-500 ease-in-out hover:-translate-y-3 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 rounded-full p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800">Free Classes</h3>
            </div>
            <p className="text-gray-700">
              Classes are 100% free and we rely completely on donations to support our program.
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 shadow-md transition-all duration-500 ease-in-out hover:-translate-y-3 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 rounded-full p-2 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800">Project Expectations</h3>
            </div>
            <p className="text-gray-700">
              Students are not expected to create a physical prototype of their product or start selling the product at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
