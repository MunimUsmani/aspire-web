import Link from "next/link"
import { ArrowRight } from "lucide-react"

const ServicesHero = () => {
  return (
    <section className="relative bg-[#1a1e2e] text-white py-20 md:py-28 lg:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Our </span>
            <span className="text-[#c19a6b]">HR Services</span>
          </h1>

          <p className="text-lg md:text-xl max-w-3xl leading-relaxed">
            We provide comprehensive HR solutions tailored to your business needs. Our team of experts delivers
            exceptional service across recruitment, talent management, and business development.
          </p>

          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#0055b8] text-white px-6 py-3 rounded hover:bg-[#0044a0] transition-colors"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white/5 to-transparent"></div>
    </section>
  )
}

export default ServicesHero

