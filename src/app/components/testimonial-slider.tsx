"use client"

import { useState, useEffect, useRef } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "HR Director, Global Tech Inc.",
    rating: 5,
    text: "Aspire HR Consultants transformed our recruitment process. Their team understood our company culture perfectly and found candidates who not only had the right skills but also aligned with our values. The quality of candidates they presented was exceptional.",
    image: "/rania.webp",
  },
  {
    id: 2,
    name: "Mohammed Al-Farsi",
    position: "CEO, Emirates Solutions",
    rating: 5,
    text: "Working with Aspire HR has been a game-changer for our executive search needs. Their deep understanding of the regional market and global talent pool helped us secure top-tier leadership that has driven our company forward. I highly recommend their services.",
    image: "/tara.webp",
  },
  {
    id: 3,
    name: "Priya Mehta",
    position: "Operations Manager, Sunrise Group",
    rating: 4,
    text: "The LinkedIn outreach campaign designed by Aspire HR generated impressive results for our talent acquisition efforts. Their strategic approach and attention to detail helped us connect with qualified professionals we wouldn't have reached otherwise.",
    image: "/steven.webp",
  },
  {
    id: 4,
    name: "David Chen",
    position: "Talent Acquisition Lead, Innovate Partners",
    rating: 5,
    text: "Aspire HR Consultants provided exceptional service in helping us build our regional team. Their understanding of cultural nuances and industry-specific requirements made the recruitment process smooth and effective. The candidates they presented were all high-caliber professionals.",
    image: "/travis.webp",
  },
  {
    id: 5,
    name: "Layla Mahmoud",
    position: "Marketing Director, Creative Solutions",
    rating: 5,
    text: "The team at Aspire HR went above and beyond to understand our unique needs. Their CRM management and lead generation services have significantly improved our business development process. They're not just service providers; they're true partners in our growth.",
    image: "/lince.webp",
  },
  {
    id: 6,
    name: "Robert Williams",
    position: "Managing Partner, Global Ventures",
    rating: 4,
    text: "Aspire HR's cold calling campaign was remarkably effective. Their team was professional, persistent, and represented our brand perfectly. We saw a significant increase in qualified leads and eventually closed several major deals as a result of their work.",
    image: "/mohammed.webp",
  },
]

const TestimonialsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

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

  // Calculate visible testimonials (current, previous, next)
  const getVisibleTestimonials = () => {
    const prev = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1
    const next = (activeIndex + 1) % testimonials.length

    return {
      prev,
      current: activeIndex,
      next,
    }
  }

  const { prev, current, next } = getVisibleTestimonials()

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Testimonials carousel */}
          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {/* Carousel container */}
            <div ref={sliderRef} className="relative overflow-hidden px-4 py-8">
              {/* Desktop carousel (3 visible cards) */}
              <div className="hidden md:block">
                <div className="flex transition-all duration-700 ease-out">
                  {/* Previous testimonial (partially visible) */}
                  <div
                    className="w-1/4 px-4 opacity-40 transform scale-90 transition-all duration-500"
                    style={{ transform: "translateX(10%) scale(0.9)" }}
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6 h-full border border-gray-100">
                      <div className="flex items-center mb-4">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 flex-shrink-0 border-2 border-[#0055b8]">
                          <Image
                            src={testimonials[prev].image || "/placeholder.svg"}
                            alt={testimonials[prev].name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#0055b8]">{testimonials[prev].name}</h3>
                          <p className="text-sm text-gray-600">{testimonials[prev].position}</p>
                        </div>
                      </div>
                      <div className="flex mb-3">{renderStars(testimonials[prev].rating)}</div>
                    </div>
                  </div>

                  {/* Current testimonial (fully visible) */}
                  <div
                    className="w-1/2 px-4 z-10 transition-all duration-500"
                    style={{ transform: "translateY(-20px)" }}
                  >
                    <div className="bg-white rounded-xl shadow-xl p-8 h-full border border-gray-100 relative">
                      <Quote className="absolute top-6 right-6 w-10 h-10 text-[#c19a6b]/20" />
                      <div className="flex items-center mb-6">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden mr-5 flex-shrink-0 border-2 border-[#0055b8]">
                          <Image
                            src={testimonials[current].image || "/placeholder.svg"}
                            alt={testimonials[current].name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-[#0055b8]">{testimonials[current].name}</h3>
                          <p className="text-gray-600">{testimonials[current].position}</p>
                          <div className="flex mt-2">{renderStars(testimonials[current].rating)}</div>
                        </div>
                      </div>
                      <p className="text-gray-700 italic text-lg leading-relaxed">"{testimonials[current].text}"</p>
                    </div>
                  </div>

                  {/* Next testimonial (partially visible) */}
                  <div
                    className="w-1/4 px-4 opacity-40 transform scale-90 transition-all duration-500"
                    style={{ transform: "translateX(-10%) scale(0.9)" }}
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6 h-full border border-gray-100">
                      <div className="flex items-center mb-4">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 flex-shrink-0 border-2 border-[#0055b8]">
                          <Image
                            src={testimonials[next].image || "/placeholder.svg"}
                            alt={testimonials[next].name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#0055b8]">{testimonials[next].name}</h3>
                          <p className="text-sm text-gray-600">{testimonials[next].position}</p>
                        </div>
                      </div>
                      <div className="flex mb-3">{renderStars(testimonials[next].rating)}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile carousel (single card) */}
              <div className="md:hidden">
                <div className="transition-all duration-500 ease-out">
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 relative">
                    <Quote className="absolute top-4 right-4 w-8 h-8 text-[#c19a6b]/20" />
                    <div className="flex items-center mb-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0 border-2 border-[#0055b8]">
                        <Image
                          src={testimonials[current].image || "/placeholder.svg"}
                          alt={testimonials[current].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#0055b8]">{testimonials[current].name}</h3>
                        <p className="text-sm text-gray-600">{testimonials[current].position}</p>
                        <div className="flex mt-1">{renderStars(testimonials[current].rating)}</div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">{testimonials[current].text}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevSlide}
                className="bg-white text-[#0055b8] p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0055b8] focus:ring-opacity-50"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Pagination indicators */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 ${
                      activeIndex === index ? "w-8 h-2 bg-[#0055b8]" : "w-2 h-2 bg-gray-300"
                    } rounded-full`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="bg-white text-[#0055b8] p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0055b8] focus:ring-opacity-50"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSlider

