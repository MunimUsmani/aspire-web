import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#0055b8]"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 rounded-full bg-[#c19a6b]"></div>
      </div>
      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-28 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#0055b8]">
              Transforming <span className="text-[#c19a6b]">Recruitment</span> in the Middle East
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
              Since 2015, Aspire HR Consultants has been at the forefront of connecting exceptional talent
              with forward-thinking organizations across the MENA region. Our deep understanding of local
              markets, combined with global expertise, enables us to deliver unparalleled recruitment solutions.
            </p>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/about.webp" alt="Aspire HR Consultants team" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0055b8]/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 left-0 sm:-left-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-[#c19a6b] font-bold text-lg">Trusted by</p>
              <p className="text-[#0055b8] font-bold text-3xl">200+ Companies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}