import Image from "next/image"
import { Clock, Handshake, Users, RefreshCw, FileText, Search } from "lucide-react"

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Clock,
      title: "Time management",
      description: "We value your time and ensure efficient recruitment processes",
    },
    {
      icon: Handshake,
      title: "Commitment and integrity",
      description: "We operate with the highest standards of professionalism and ethics",
    },
    {
      icon: Users,
      title: "Professional Recruiters",
      description: "Our team consists of experienced HR specialists with industry knowledge",
    },
    {
      icon: RefreshCw,
      title: "Replacement 85%",
      description: "We offer replacement guarantees to ensure your satisfaction",
    },
    {
      icon: FileText,
      title: "Transparent Hiring",
      description: "Our recruitment process is clear and straightforward at every stage",
    },
    {
      icon: Search,
      title: "Head hunting",
      description: "We actively seek out top talent for specialized and executive positions",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0055b8] mb-6">Why Choose Us?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We offer a range of benefits that set us apart from other recruitment agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-[#0055b8]/5 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="bg-[#0055b8] p-3 rounded-full mr-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0055b8] mb-2">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

