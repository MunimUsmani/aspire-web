import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    title: "Building a Tech Leadership Team for a Fintech Startup",
    industry: "Financial Technology",
    challenge:
      "A rapidly growing fintech startup needed to build a leadership team that could drive innovation while navigating complex financial regulations.",
    solution:
      "We leveraged our dual expertise in technology and financial services to identify candidates with the perfect blend of technical innovation and regulatory knowledge.",
    results:
      "The client successfully built a leadership team that helped them secure Series B funding and expand into three new markets within 18 months.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Healthcare Expansion During Global Pandemic",
    industry: "Healthcare",
    challenge:
      "A regional healthcare provider needed to rapidly expand their team of medical professionals during the COVID-19 pandemic.",
    solution:
      "We implemented an accelerated recruitment process focused on identifying qualified healthcare professionals who could be onboarded quickly without compromising quality.",
    results:
      "The client was able to increase their medical staff by 35% in three months, enabling them to effectively respond to the increased demand for healthcare services.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Digital Transformation for Traditional Manufacturer",
    industry: "Manufacturing",
    challenge:
      "A traditional manufacturing company needed to build a digital team to lead their Industry 4.0 transformation initiatives.",
    solution:
      "We identified professionals with both digital expertise and manufacturing experience who could bridge the gap between traditional operations and new technologies.",
    results:
      "The client successfully implemented IoT solutions that improved operational efficiency by 28% and reduced downtime by 45% within the first year.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const CaseStudies = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1e2e] mb-4">Our Expertise in Action</h2>
              <p className="text-lg text-gray-700 max-w-2xl">
                Explore how our industry expertise has helped organizations overcome their unique talent challenges and
                achieve their strategic objectives.
              </p>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center text-[#0055b8] hover:text-[#0044a0] transition-colors group mt-4 md:mt-0"
            >
              View all case studies
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[#c19a6b] text-sm font-medium mb-1">{study.industry}</span>
                    <h3 className="text-white text-xl font-bold">{study.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#0055b8] mb-2">THE CHALLENGE</h4>
                    <p className="text-gray-700 text-sm">{study.challenge}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#0055b8] mb-2">OUR SOLUTION</h4>
                    <p className="text-gray-700 text-sm">{study.solution}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#0055b8] mb-2">THE RESULTS</h4>
                    <p className="text-gray-700 text-sm">{study.results}</p>
                  </div>

                  <Link
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-[#0055b8] hover:text-[#0044a0] transition-colors group text-sm font-medium"
                  >
                    Read full case study
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

export default CaseStudies

