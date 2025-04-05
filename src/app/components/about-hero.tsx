import Link from "next/link"
import { ArrowRight } from "lucide-react"

const AboutHero = () => {
  return (
    <section className="relative bg-[#1a1e2e] text-white py-20 md:py-28 lg:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-white">About </span>
            <span className="text-[#c19a6b]">Us</span>
          </h1>

          <p className="text-lg md:text-xl max-w-3xl">
            We are a dedicated HR agency with in-depth knowledge of hiring trends and market compensation standards. Our
            mission is to identify and recruit exceptional talent that aligns with the specific needs of our clients.
          </p>

          <p className="text-lg md:text-xl max-w-3xl">
            We excel in working independently to source and onboard highly experienced professionals who contribute
            meaningfully to organizational success. Our approach is rooted in professionalism, efficiency, and a
            commitment to fostering long-term relationships with our clients and candidates.
          </p>

          <p className="text-lg md:text-xl max-w-3xl">
            Whether it's recruiting top-tier talent, offering strategic HR consulting, or assisting with employee
            onboarding, we are your trusted partners in achieving workforce excellence.
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

export default AboutHero

