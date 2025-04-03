import { Users, Building, Award, ThumbsUp } from "lucide-react"

const stats = [
  {
    value: "500+",
    label: "Successful Placements",
    icon: Users,
    color: "bg-[#0055b8]",
  },
  {
    value: "150+",
    label: "Client Companies",
    icon: Building,
    color: "bg-[#c19a6b]",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: ThumbsUp,
    color: "bg-[#0055b8]",
  },
  {
    value: "15+",
    label: "Industry Awards",
    icon: Award,
    color: "bg-[#c19a6b]",
  },
]

const TestimonialsStats = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                  <stat.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#1a1e2e] mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsStats

