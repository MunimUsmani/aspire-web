import Link from "next/link"

const services = [
  {
    title: "Recruitment",
    description:
      "We provide comprehensive recruitment services to help you find the perfect talent for your organization. Our specialized team uses advanced sourcing techniques to identify, attract, and secure top candidates who align with your company culture and requirements.",
  },
  {
    title: "Reward Management",
    description:
      "Our reward management services help you design and implement competitive compensation and benefits packages that attract and retain top talent. We analyze market trends and develop strategies that recognize employee contributions while maintaining cost efficiency.",
  },
  {
    title: "Documentation",
    description:
      "We streamline your HR documentation processes, ensuring all employee records, policies, and procedures are properly maintained and compliant with relevant regulations. Our systematic approach reduces administrative burden while improving data accuracy and accessibility.",
  },
  {
    title: "Attendance Record",
    description:
      "Our attendance management solutions help you track and optimize employee attendance with precision. We implement efficient systems that reduce time theft, improve scheduling, and provide valuable insights into attendance patterns to enhance workforce productivity.",
  },
  {
    title: "HR Functions",
    description:
      "We offer comprehensive support across all HR functions, from onboarding to offboarding and everything in between. Our services ensure your HR operations run smoothly, allowing you to focus on strategic initiatives while we handle the day-to-day HR responsibilities.",
  },
  {
    title: "Performance Management",
    description:
      "Our performance management services help you establish effective systems for evaluating, developing, and maximizing employee potential. We design customized frameworks that align individual goals with organizational objectives to drive continuous improvement.",
  },
]

const WhatWeDo = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#c19a6b] mb-12 md:mb-16">What we do</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-sm shadow-sm overflow-hidden flex flex-col h-full">
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl text-[#c19a6b] mb-4 font-bold">{service.title}</h3>
                <p className="text-gray-700 mb-6 flex-grow">{service.description}</p>
                <Link
                  href="/services"
                  className="text-blue-600 flex items-center mt-auto w-fit border border-blue-600 rounded px-4 py-2 hover:bg-blue-50 transition-colors"
                >
                  Find out more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo

