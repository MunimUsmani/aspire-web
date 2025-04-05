import Image from "next/image"

export default function AboutIntro() {
  return (
    <section className="relative bg-gradient-to-b from-[#0055b8] to-[#003b80] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-full h-full bg-no-repeat bg-cover"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us:</h1>
            <div className="space-y-4">
              <p className="text-white/90">
                We are a dedicated HR agency with in-depth knowledge of hiring trends and market compensation standards.
                Our mission is to identify and recruit exceptional talent that aligns with the specific needs of our
                clients. We excel in working independently to source and onboard highly experienced professionals who
                contribute meaningfully to organizational success. Our approach is rooted in professionalism,
                efficiency, and a commitment to fostering long-term relationships with our clients and candidates.
              </p>
              <p className="text-white/90">
                Whether it's recruiting top-tier talent, offering strategic HR consulting, or assisting with employee
                onboarding, we are your trusted partners in achieving workforce excellence.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative max-w-md">
              <Image
                src="/aboutabells.png"
                alt="HR recruitment concept with magnifying glass"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

