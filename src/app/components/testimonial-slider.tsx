"use client"

import { useState, useEffect, useRef } from "react"
import { Star, ChevronLeft, ChevronRight, Quote, User } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Hamza Zafar",
    position: "MoxEdge, CEO",
    rating: 5,
    text: "Abells HR Recruiters transformed our recruitment process. Their team understood our company culture perfectly and found candidates who not only had the right skills but also aligned with our values. The quality of candidates they presented was exceptional.",
  },
  {
    id: 2,
    name: "Hasan Tabish",
    position: "CEO, 360 Marketing Mentor",
    rating: 5,
    text: "Working with Abells HR has been a game-changer for our executive search needs. Their deep understanding of the regional market and local talent pool helped us secure top-tier leadership that has driven our company forward. I highly recommend their services.",
  },
  {
    id: 3,
    name: "Muhammad Talha",
    position: "CEO, TechFlex",
    rating: 4,
    text: "The LinkedIn outreach campaign designed by Abells HR generated impressive results for our talent acquisition efforts. Their strategic approach and attention to detail helped us connect with qualified professionals we wouldn&apos;t have reached otherwise.",
  },
  {
    id: 4,
    name: "Muhammad Humayun Sarfraz",
    position: "CEO, Growth Mind Technologies",
    rating: 5,
    text: "Abells HR Recruiters provided exceptional service in helping us build our regional team. Their understanding of cultural nuances and industry-specific requirements made the recruitment process smooth and effective. The candidates they presented were all high-caliber professionals.",
  },
  {
    id: 5,
    name: "Sameer Siddiqi",
    position: "CEO, EZY business Applications",
    rating: 5,
    text: "The team at Abells HR went above and beyond to understand our unique needs. Their CRM management and lead generation services have significantly improved our business development process. They&apos;re not just service providers; they&apos;re true partners in our growth.",
  },
]

const TestimonialsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Handle autoplay
  useEffect(() => {
    if (isAutoplay) {
      autoplayRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 6000) // Change slide every 6 seconds
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [isAutoplay])

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsAutoplay(false)
  const handleMouseLeave = () => setIsAutoplay(true)

  // Navigate to next/previous slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    resetAutoplay()
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
    resetAutoplay()
  }

  // Navigate to a specific slide
  const goToSlide = (index: number) => {
    setActiveIndex(index)
    resetAutoplay()
  }

  // Reset autoplay timer
  const resetAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      setIsAutoplay(true)
    }
  }

  // Render star rating
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
      ))
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div ref={sliderRef} className="relative overflow-hidden px-4 py-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-[#c19a6b]/20" />
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full flex-shrink-0 mr-4 bg-[#0055b8]/10 flex items-center justify-center">
                    <User className="w-8 h-8 text-[#0055b8]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0055b8]">{testimonials[activeIndex].name}</h3>
                    <p className="text-sm text-gray-600">{testimonials[activeIndex].position}</p>
                    <div className="flex mt-1">{renderStars(testimonials[activeIndex].rating)}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  &quot;{testimonials[activeIndex].text}&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSlider