import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Executive Search",
    description:
      "We blend personalized strategy with a clear, informed process, ensuring each executive search is uniquely tailored to align with your company's specific goals, culture, and values.",
    imageUrl: "/executivesearch.webp",
  },
  {
    title: "Board Placement",
    description:
      "We actively support you in strategically placing your board of directors based on skills that are future-ready, ensuring a diverse range of innovative ideas and expertise.",
    imageUrl: "/boardplacement.webp",
  },
  {
    title: "Talent Advisory",
    description:
      "We offer market mapping and personality assessments to enhance leadership abilities and navigate competitive landscapes, positioning your team for success.",
    imageUrl: "/talentadvisory.webp",
  },
  {
    title: "Leadership Assessments",
    description:
      "We design customized programs to nurture leadership potential, helping your executives develop the skills needed to drive organizational transformation and growth.",
    imageUrl: "/leadership.webp",
  },
  {
    title: "Interim",
    description:
      "We help organizations prepare for the future by identifying and developing internal talent to ensure leadership continuity and minimize disruption during transitions.",
    imageUrl: "/interim.webp",
  },
  {
    title: "HR Consultancy",
    description:
      "We provide one-on-one guidance to executives, helping them maximize their potential, overcome challenges, and develop strategies for personal and professional growth.",
    imageUrl: "/consultancy.webp",
  },
  {
    title: "Women Mentorship ",
    description:
      "We collaborate with organizations to develop inclusive hiring practices and build diverse leadership teams that drive innovation and reflect the global marketplace.",
    imageUrl: "/womenmentorship.webp",
  },
  {
    title: "Training Experiences",
    description:
      "We assist companies in structuring their leadership teams to align with strategic objectives, optimize performance, and adapt to changing market conditions.",
    imageUrl: "/trainingexperiences.webp",
  },
  {
    title: "Digital HR Solutions",
    description:
      "Enhance your employer branding, recruitment, and performance with innovative, integrated solutions for today’s HR needs.",
    imageUrl: "/hrsolutions.webp",
  },
]

const WhatWeDo = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#c19a6b] mb-12 md:mb-16">What we do</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-sm shadow-sm overflow-hidden flex flex-col">
              <div className="h-[200px] relative">
                <Image src={service.imageUrl || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl text-[#c19a6b] mb-4 font-bold">{service.title}</h3>
                <p className="text-gray-700 mb-6 flex-grow">{service.description}</p>
                <Link
                  href="#"
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