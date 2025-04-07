import { Search, Users, FileCheck, BarChart, Briefcase, Award } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Industry Analysis",
    description:
      "We conduct thorough research to understand industry-specific trends, challenges, and talent requirements.",
    icon: Search,
    color: "bg-[#0055b8]",
  },
  {
    id: 2,
    title: "Talent Mapping",
    description:
      "We identify and map top talent within your industry, creating a comprehensive overview of available expertise.",
    icon: Users,
    color: "bg-[#c19a6b]",
  },
  {
    id: 3,
    title: "Customized Strategy",
    description:
      "We develop a tailored recruitment approach that addresses your industry's unique needs and challenges.",
    icon: FileCheck,
    color: "bg-[#0055b8]",
  },
  {
    id: 4,
    title: "Market Insights",
    description: "We provide valuable industry-specific data and insights to inform your talent acquisition decisions.",
    icon: BarChart,
    color: "bg-[#c19a6b]",
  },
  {
    id: 5,
    title: "Specialized Placement",
    description: "We connect you with candidates who have the specific industry experience and expertise you need.",
    icon: Briefcase,
    color: "bg-[#0055b8]",
  },
  {
    id: 6,
    title: "Ongoing Support",
    description: "We continue to provide industry-specific guidance and support throughout the onboarding process.",
    icon: Award,
    color: "bg-[#c19a6b]",
  },
]

const ExpertiseApproach = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1e2e] mb-6">Our Industry-Focused Approach</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We apply our industry expertise through a structured methodology that ensures we deliver the right talent
              for your specific sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center">
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md`}>
                  <step.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1e2e] mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-white rounded-lg shadow-lg p-6 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0055b8] mb-4">Why Industry Expertise Matters</h3>
                <p className="text-gray-700 mb-6">
                  Each industry has its own unique challenges, terminology, and talent requirements. Our specialized
                  knowledge allows us to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#c19a6b] mr-2 text-xl">•</span>
                    <span className="text-black">Identify candidates with relevant industry experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c19a6b] mr-2 text-xl">•</span>
                    <span className="text-black">Understand industry-specific skills and qualifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c19a6b] mr-2 text-xl">•</span>
                    <span className="text-black">Navigate industry regulations and compliance requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#c19a6b] mr-2 text-xl">•</span>
                    <span className="text-black">Provide insights on industry trends and talent market conditions</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#1a1e2e] rounded-lg p-6 md:p-8 text-white">
                <h4 className="text-xl font-bold mb-4">Our Industry Expertise by the Numbers</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-[#c19a6b] break-words">5+</p>
                    <p className="text-sm whitespace-normal">Industries Served</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-[#c19a6b] break-words">85%</p>
                    <p className="text-sm whitespace-normal">Satisfied Clients</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-[#c19a6b] break-words">4+</p>
                    <p className="text-xs sm:text-sm whitespace-normal">yrs Industry Experience</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-[#c19a6b] break-words">30+</p>
                    <p className="text-sm whitespace-normal">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExpertiseApproach

