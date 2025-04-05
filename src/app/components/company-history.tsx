import Image from "next/image"
import { Building, Target, Compass } from "lucide-react"

export default function CompanyHistory() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-[#0055b8] rounded-full mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0055b8] mb-6">Company History</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Abells Solutions was founded in 2022 by Balach Ali and Abbas Kareem. Since its inception, the agency
                  has partnered with several prominent companies to deliver personalized recruitment services. Over the
                  past two years, we have successfully facilitated over 50 hires, achieving an impressive success ratio
                  of 85%.
                </p>
                <p className="text-gray-700">
                  Our primary goal is to enhance the reputation of the companies we work with by bringing in impactful
                  professionals who demonstrate tremendous effort, integrity, and expertise. With over 4 years of
                  combined experience in the HR domain, we have successfully collaborated with leading IT companies such
                  as <span className="font-semibold">TechXon</span>,{" "}
                  <span className="font-semibold">Pals Innovations</span>,{" "}
                  <span className="font-semibold">Ammani Traders</span>, and{" "}
                  <span className="font-semibold">FusionTech</span>, among others.
                </p>
                <p className="text-gray-700">
                  At <span className="font-semibold">Abell's Solutions</span>, we are passionate about contributing to
                  our clients' growth by building teams that drive innovation and success.
                </p>
              </div>
            </div>
            <div>
              <Image
                src=""
                alt="Company History"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center p-3 bg-[#0055b8] rounded-full mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0055b8] mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be a trusted HR leader, connecting exceptional talent with opportunities and driving organizational
                growth through strategic HR practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center p-3 bg-[#0055b8] rounded-full mb-6">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0055b8] mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To attract, develop, and retain skilled professionals while fostering innovation, excellence, and
                employee satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

