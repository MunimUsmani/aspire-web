import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"

const EmailMarketing = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 border-b border-gray-200 pb-12">
          <div className="md:w-1/3 flex justify-center md:justify-start">
            <div className="bg-[#c19a6b] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
              <Mail className="text-white w-12 h-12" />
            </div>
          </div>

          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-[#1a1e2e] mb-4">Email Marketing</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Our email marketing services help you nurture relationships with candidates and clients. We create
              personalized, engaging campaigns that deliver results and keep your audience informed about your
              offerings.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-medium text-[#c19a6b] mb-4">What we offer:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <span className="text-[#0055b8] mr-2">•</span>
                  <span className="text-black">Campaign strategy and planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0055b8] mr-2">•</span>
                  <span className="text-black">Email template design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0055b8] mr-2">•</span>
                  <span className="text-black">Segmentation and personalization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0055b8] mr-2">•</span>
                  <span className="text-black">A/B testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0055b8] mr-2">•</span>
                  <span className="text-black">Performance analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0055b8] mr-2">•</span>
                  <span className="text-black">Automation workflows</span>
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

export default EmailMarketing

