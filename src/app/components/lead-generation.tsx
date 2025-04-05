import Link from "next/link"
import { ArrowRight, Target } from "lucide-react"

const LeadGeneration = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row-reverse gap-8 border-b border-gray-200 pb-12">
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div className="bg-[#c19a6b] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
              <Target className="text-white w-12 h-12" />
            </div>
          </div>

          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-[#1a1e2e] mb-4">Lead Generation</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Our lead generation services help you identify and connect with potential clients who are most likely to
              benefit from your services. We implement multi-channel strategies to create a consistent pipeline of
              qualified leads.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-medium text-[#c19a6b] mb-4">What we offer:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <span className="text-[#0055b8] mr-2">•</span>
                  <span className="text-black">Ideal client profiling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0055b8] mr-2">•</span>
                  <span className="text-black">Multi-channel outreach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0055b8] mr-2">•</span>
                  <span className="text-black">Content marketing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0055b8] mr-2">•</span>
                  <span className="text-black">Landing page optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0055b8] mr-2">•</span>
                  <span className="text-black">Lead qualification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0055b8] mr-2">•</span>
                  <span className="text-black">Conversion strategy</span>
                </li>
              </ul>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center text-[#0055b8] hover:text-[#0044a0] transition-colors group"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeadGeneration

