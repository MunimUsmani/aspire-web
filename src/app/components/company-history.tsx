export default function CompanyHistory() {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-8 py-12 md:py-16 border-b border-gray-200">
              <div className="md:w-1/3 flex justify-center md:justify-start">
                <div className="bg-[#0055b8] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
  
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-[#1a1e2e] mb-4">Company History</h2>
                <p className="text-gray-700 mb-6 text-lg">
                  Abells Solutions was founded in 2022 by Balach Ali and Abbas Kareem. Since its inception, the agency has partnered with several prominent companies to deliver personalized recruitment services. Over the past two years, we have successfully facilitated over 50 hires, achieving an impressive success ratio of 85%.
                </p>
                <p className="text-gray-700 mb-6 text-lg">
                  Our primary goal is to enhance the reputation of the companies we work with by bringing in impactful professionals who demonstrate tremendous effort, integrity, and expertise. With over 4 years of combined experience in the HR domain, we have successfully collaborated with leading IT companies such as <span className="font-semibold text-[#0055b8]">TechXon</span>, <span className="font-semibold text-[#0055b8]">Pals Innovations</span>, <span className="font-semibold text-[#0055b8]">Ammani Traders</span>, and <span className="font-semibold text-[#0055b8]">FusionTech</span>, among others.
                </p>
                <p className="text-gray-700 text-lg">
                  At <span className="font-semibold text-[#0055b8]">Abell's Solutions</span>, we are passionate about contributing to our clients' growth by building teams that drive innovation and success.
                </p>
              </div>
            </div>
  
            <div className="flex flex-col md:flex-row-reverse gap-8 py-12 md:py-16 border-b border-gray-200">
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <div className="bg-[#c19a6b] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
  
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-[#1a1e2e] mb-4">Our Vision</h2>
                <p className="text-gray-700 mb-6 text-lg">
                  To be a trusted HR leader, connecting exceptional talent with opportunities and driving organizational growth through strategic HR practices.
                </p>
              </div>
            </div>
  
            <div className="flex flex-col md:flex-row gap-8 py-12 md:py-16">
              <div className="md:w-1/3 flex justify-center md:justify-start">
                <div className="bg-[#0055b8] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
              </div>
  
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-[#1a1e2e] mb-4">Our Mission</h2>
                <p className="text-gray-700 mb-6 text-lg">
                  To attract, develop, and retain skilled professionals while fostering innovation, excellence, and employee satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  