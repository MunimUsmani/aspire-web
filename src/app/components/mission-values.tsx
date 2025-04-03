import { Target, Users, Lightbulb, Award, Globe, Clock } from "lucide-react"

export default function MissionValues() {
  const values = [
    {
      icon: <Target className="w-10 h-10 text-[#0055b8]" />,
      title: "Precision",
      description:
        "We take a targeted approach to recruitment, focusing on quality matches rather than quantity of candidates.",
    },
    {
      icon: <Users className="w-10 h-10 text-[#0055b8]" />,
      title: "Partnership",
      description:
        "We build lasting relationships with both clients and candidates, serving as trusted advisors throughout the journey.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-[#0055b8]" />,
      title: "Innovation",
      description:
        "We leverage cutting-edge technologies and methodologies to stay ahead in a rapidly evolving recruitment landscape.",
    },
    {
      icon: <Award className="w-10 h-10 text-[#0055b8]" />,
      title: "Excellence",
      description:
        "We maintain the highest standards in every aspect of our service, from candidate screening to client communication.",
    },
    {
      icon: <Globe className="w-10 h-10 text-[#0055b8]" />,
      title: "Cultural Intelligence",
      description:
        "We understand the unique cultural dynamics of the MENA region and how they impact workplace success.",
    },
    {
      icon: <Clock className="w-10 h-10 text-[#0055b8]" />,
      title: "Efficiency",
      description:
        "We respect our clients' time by streamlining processes and delivering results within agreed timeframes.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-[#0055b8]">Our Mission</span> & <span className="text-[#c19a6b]">Values</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Our mission is to transform the recruitment landscape in the Middle East by connecting exceptional talent
            with forward-thinking organizations, fostering growth and innovation across the region.
          </p>
          <div className="h-1 w-20 bg-[#c19a6b] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#0055b8]"
            >
              <div className="mb-4 p-3 inline-block rounded-full bg-[#0055b8]/10">{value.icon}</div>
              <h3 className="text-xl font-bold text-[#0055b8] mb-3">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-[#0055b8] to-[#0066cc] rounded-xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Recruitment Strategy?
              </h3>
              <p className="text-white/90 mb-6">
                Partner with Aspire HR Consultants and discover how our tailored approach can help you find the perfect
                talent for your organization's unique needs.
              </p>
              <button className="bg-white text-[#0055b8] hover:bg-[#c19a6b] hover:text-white transition-colors px-8 py-3 rounded-lg font-semibold shadow-md">
                Contact Us Today
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-3xl font-bold text-white">95%</p>
                <p className="text-white/80 text-sm">Client Satisfaction Rate</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-3xl font-bold text-white">48hrs</p>
                <p className="text-white/80 text-sm">Average Response Time</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-3xl font-bold text-white">12</p>
                <p className="text-white/80 text-sm">Industries Served</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-3xl font-bold text-white">8+</p>
                <p className="text-white/80 text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

