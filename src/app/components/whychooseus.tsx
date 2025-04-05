import { Clock, Handshake, Users, RefreshCw, FileText, Search } from "lucide-react"

export default function WhyChooseUs() {
  const hrSpecializations = [
    {
      id: 1,
      name: "Time Management",
      description: "We value your time and ensure efficient recruitment processes",
      icon: Clock,
      color: "bg-[#0055b8]",
    },
    {
      id: 2,
      name: "Commitment and Integrity",
      description: "We operate with the highest standards of professionalism and ethics",
      icon: Handshake,
      color: "bg-[#c19a6b]",
    },
    {
      id: 3,
      name: "Professional Recruiters",
      description: "Our team consists of experienced HR specialists with industry knowledge",
      icon: Users,
      color: "bg-[#0055b8]",
    },
    {
      id: 4,
      name: "Replacement 85%",
      description: "We offer replacement guarantees to ensure your satisfaction",
      icon: RefreshCw,
      color: "bg-[#c19a6b]",
    },
    {
      id: 5,
      name: "Transparent Hiring",
      description: "Our recruitment process is clear and straightforward at every stage",
      icon: FileText,
      color: "bg-[#0055b8]",
    },
    {
      id: 6,
      name: "Head Hunting",
      description: "We actively seek out top talent for specialized and executive positions",
      icon: Search,
      color: "bg-[#c19a6b]",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1e2e] mb-6">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of benefits that set us apart from other recruitment agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {hrSpecializations.map((specialization) => (
            <div
              key={specialization.id}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#0055b8]"
            >
              <div className="flex items-start mb-4">
                <div className={`${specialization.color} p-3 rounded-md mr-4 flex-shrink-0`}>
                  <specialization.icon className="text-white w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1e2e]">{specialization.name}</h3>
              </div>

              <p className="text-gray-700 text-sm mb-4">{specialization.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

