import { Clock, Handshake, Users, RefreshCw, FileText, Search } from "lucide-react"
import Link from "next/link"

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Clock,
      title: "Time management",
      description: "We value your time and ensure efficient recruitment processes",
      color: "bg-[#0055b8]",
    },
    {
      icon: Handshake,
      title: "Commitment and integrity",
      description: "We operate with the highest standards of professionalism and ethics",
      color: "bg-[#c19a6b]",
    },
    {
      icon: Users,
      title: "Professional Recruiters",
      description: "Our team consists of experienced HR specialists with industry knowledge",
      color: "bg-[#0055b8]",
    },
    {
      icon: RefreshCw,
      title: "Replacement 85%",
      description: "We offer replacement guarantees to ensure your satisfaction",
      color: "bg-[#c19a6b]",
    },
    {
      icon: FileText,
      title: "Transparent Hiring",
      description: "Our recruitment process is clear and straightforward at every stage",
      color: "bg-[#0055b8]",
    },
    {
      icon: Search,
      title: "Head hunting",
      description: "We actively seek out top talent for specialized and executive positions",
      color: "bg-[#c19a6b]",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1e2e] mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of benefits that set us apart from other recruitment agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Link
              key={index}
              href="#"
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col h-full border border-gray-100"
            >
              <div className={`${benefit.color} w-14 h-14 rounded-full flex items-center justify-center mb-4`}>
                <benefit.icon className="text-white w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1e2e] mb-2">{benefit.title}</h3>
              <p className="text-gray-600 flex-grow">{benefit.description}</p>
              <div className="mt-4 text-[#0055b8] font-medium">Learn more →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

