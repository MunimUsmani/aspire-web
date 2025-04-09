import Link from "next/link"
import { ArrowRight } from "lucide-react"

const ExpertiseHero = () => {
  return (
    <section className="relative bg-[#1a1e2e] text-white py-20 md:py-28 lg:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col space-y-6 mt-12 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Industry </span>
            <span className="text-[#c19a6b]">Expertise</span>
            <span className="text-white"> That</span>
            <br className="hidden md:block" />
            <span className="text-[#c19a6b]">Drives Results</span>
          </h1>

          <p className="text-lg md:text-xl max-w-3xl leading-relaxed">
            Our specialized knowledge across key industries enables us to understand your unique talent needs and
            deliver exceptional HR solutions tailored to your sector&apos;s specific challenges.
          </p>

          <div className="pt-4 pb-6 md:pb-0">
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#0055b8] text-white px-6 py-3 rounded hover:bg-[#0044a0] transition-colors"
            >
              Discuss Your Industry Needs
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

export default ExpertiseHero