import { Star } from "lucide-react"
import Image from "next/image"


const gridTestimonials = [
  {
    id: 7,
    name: "Fatima Al-Zahra",
    position: "Head of HR, Gulf Enterprises",
    rating: 5,
    text: "Aspire HR's email marketing campaigns have consistently delivered high engagement rates. Their understanding of our target audience and ability to craft compelling messages has been invaluable.",
    image: "/shifting.webp",
  },
  {
    id: 8,
    name: "John Mathews",
    position: "Regional Director, International Corp",
    rating: 5,
    text: "The business development strategies implemented by Aspire HR have opened new markets for us. Their team's expertise and dedication to our success have made them an essential partner.",
    image: "/steven.webp",
  },
  {
    id: 9,
    name: "Aisha Rahman",
    position: "CEO, Tech Innovators",
    rating: 4,
    text: "Working with Aspire HR has been a seamless experience. Their recruitment process is thorough, and they consistently deliver candidates who exceed our expectations.",
    image: "/rania.webp",
  },
  {
    id: 10,
    name: "Michael Zhang",
    position: "COO, Global Solutions",
    rating: 5,
    text: "Aspire HR's talent acquisition team has an exceptional ability to understand our technical requirements and find candidates with the perfect skill set. They've become our go-to recruitment partner.",
    image: "/tara.webp",
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
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
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

