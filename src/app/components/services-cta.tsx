import Link from "next/link"
import { ArrowRight } from "lucide-react"

const ServicesCTA = () => {
  return (
    <section className="bg-[#0055b8] text-white py-16 md:py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your HR operations?</h2>
            <p className="text-lg text-gray-300">
              Partner with us to elevate your recruitment process and business development strategies.
            </p>
          </div>

          <div className="md:w-1/3 flex justify-start md:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-[#0055b8] font-bold px-6 py-3 rounded hover:bg-[#a88a5b] transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesCTA

