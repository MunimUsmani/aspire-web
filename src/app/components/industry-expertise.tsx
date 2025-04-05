import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const industries = [
  {
    id: 1,
    name: "Financial Services",
    description:
      "We connect financial institutions with top-tier talent across banking, investment, insurance, and fintech sectors, understanding the unique regulatory and compliance requirements.",
    image: "/placeholder.svg?height=400&width=600",
    color: "bg-[#0055b8]",
    positions: ["Chief Financial Officer", "Risk Management Director", "Compliance Manager", "Investment Analyst"],
  },
  {
    id: 2,
    name: "Technology & IT",
    description:
      "Our expertise in the rapidly evolving tech landscape helps companies secure innovative leaders and specialized technical talent to drive digital transformation initiatives.",
    image: "/placeholder.svg?height=400&width=600",
    color: "bg-[#c19a6b]",
    positions: [
      "Chief Technology Officer",
      "Software Development Manager",
      "Cybersecurity Expert",
      "Data Science Lead",
    ],
  },
  {
    id: 3,
    name: "Healthcare & Pharmaceuticals",
    description:
      "We understand the complex needs of healthcare organizations and help them find qualified professionals who can navigate the unique challenges of this highly regulated industry.",
    image: "/placeholder.svg?height=400&width=600",
    color: "bg-[#0055b8]",
    positions: [
      "Medical Director",
      "Clinical Research Manager",
      "Regulatory Affairs Specialist",
      "Healthcare Administrator",
    ],
  },
  {
    id: 4,
    name: "Energy & Utilities",
    description:
      "Our deep knowledge of the energy sector allows us to identify leaders who can drive innovation and sustainability in traditional and renewable energy companies.",
    image: "/placeholder.svg?height=400&width=600",
    color: "bg-[#c19a6b]",
    positions: [
      "Energy Operations Director",
      "Sustainability Manager",
      "Petroleum Engineer",
      "Renewable Energy Specialist",
    ],
  },
  {
    id: 5,
    name: "Retail & Consumer Goods",
    description:
      "We help retail and consumer goods companies find talent that can navigate changing consumer behaviors and drive growth in competitive markets.",
    image: "/placeholder.svg?height=400&width=600",
    color: "bg-[#0055b8]",
    positions: ["Retail Operations Director", "Brand Manager", "E-commerce Lead", "Supply Chain Specialist"],
  },
  {
    id: 6,
    name: "Manufacturing & Industrial",
    description:
      "Our expertise in manufacturing helps companies find leaders who can optimize operations, implement new technologies, and drive efficiency improvements.",
    image: "/placeholder.svg?height=400&width=600",
    color: "bg-[#c19a6b]",
    positions: ["Plant Manager", "Production Director", "Quality Assurance Lead", "Industrial Engineer"],
  },
]

const IndustryExpertise = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1e2e] mb-6">Our Industry Specializations</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We've developed deep expertise across key industries, allowing us to understand the unique talent
              requirements and challenges specific to each sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={industry.image || "/placeholder.svg"} alt={industry.name} fill className="object-cover" />
                  <div className={`absolute bottom-0 left-0 right-0 ${industry.color} py-2 px-4`}>
                    <h3 className="text-white text-xl font-bold">{industry.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-4">{industry.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">KEY POSITIONS WE FILL:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1">
                      {industry.positions.map((position, index) => (
                        <li key={index} className="text-[#0055b8] text-sm flex items-start">
                          <span className="mr-1">•</span> {position}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/expertise/${industry.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center text-[#0055b8] hover:text-[#0044a0] transition-colors group text-sm font-medium"
                  >
                    Learn more about our {industry.name} expertise
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustryExpertise

