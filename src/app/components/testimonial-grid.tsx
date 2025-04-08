import { Star, User } from "lucide-react"

const gridTestimonials = [
  {
    id: 7,
    name: "Faseeh ur Rehman",
    position: "CEO, Pals Innovation",
    rating: 5,
    text: "Abells HR's email marketing campaigns have consistently delivered high engagement rates. Their understanding of our target audience and ability to craft compelling messages has been invaluable.",
  },
  {
    id: 8,
    name: "Rashid Aslam",
    position: "CEO, Ammani Traders",
    rating: 5,
    text: "The business development strategies implemented by Abells HR have opened new markets for us. Their team's expertise and dedication to our success have made them an essential partner.",
  },
  {
    id: 9,
    name: "Hunain Faisal",
    position: "CEO, TechXon",
    rating: 4,
    text: "Working with Abells HR has been a seamless experience. Their recruitment process is thorough, and they consistently deliver candidates who exceed our expectations.",
  },
  {
    id: 10,
    name: "Muhammad Khalid",
    position: "CEO, Fusion Tech",
    rating: 5,
    text: "Abells HR's talent acquisition team has an exceptional ability to understand our technical requirements and find candidates with the perfect skill set. They've become our go-to recruitment partner.",
  },
]

const renderStars = (rating: number) => {
  return Array(5)
    .fill(0)
    .map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
    ))
}

const TestimonialsGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a1e2e] mb-12">More Success Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gridTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-full mr-4 flex-shrink-0 bg-[#0055b8]/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-[#0055b8]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0055b8]">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <div className="flex mt-1">{renderStars(testimonial.rating)}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsGrid
