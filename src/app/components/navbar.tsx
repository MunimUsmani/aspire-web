"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Home, X, Menu } from "lucide-react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMobileMenuOpen && !target.closest(".mobile-menu") && !target.closest(".menu-button")) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 md:px-6 py-4 flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-32 mb-6">
            <Image src="/logo/logo.png" alt="logo" width={128} height={70} className="object-contain" />
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white menu-button z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 lg:text-md">
          <Link href="/" className="text-white hover:text-gray-300 transition-colors">
            <Home size={20} />
          </Link>
          <div className="relative group">
            <button className="flex items-center text-white hover:text-gray-300 transition-colors">
              About Us <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-1">
                <Link href="/team" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Our Team
                </Link>
                <Link href="/about" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  About
                </Link>
                <Link href="/testimonials" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Testimonials
                </Link>
              </div>
            </div>
          </div>
          <Link href="/services" className="text-white hover:text-gray-300 transition-colors">
            Services
          </Link>
          <Link href="/expertise" className="text-white hover:text-gray-300 transition-colors">
            Expertise
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Navigation Sidebar */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`mobile-menu fixed top-0 right-0 h-full w-[280px] bg-gradient-to-b from-gray-900 to-black shadow-xl transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full overflow-y-auto">
              {/* Mobile Menu Header */}
              <div className="p-6 border-b border-gray-800">
                <div className="relative h-10 w-32 mx-auto">
                  <Image
                    src="/logo/logo.png"
                    alt="logo"
                    width={128}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Mobile Menu Items */}
              <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                <Link
                  href="/"
                  className="flex items-center text-white hover:text-gray-300 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Home size={20} className="mr-3" /> Home
                </Link>

                <div className="space-y-3">
                  <div className="border-b border-gray-800 pb-2">
                    <button
                      className="flex items-center justify-between w-full text-white hover:text-gray-300 transition-colors py-2"
                      onClick={(e) => {
                        const target = e.currentTarget.nextElementSibling
                        if (target) {
                          target.classList.toggle("hidden")
                        }
                      }}
                    >
                      About Us <ChevronDown size={16} />
                    </button>
                    <div className="pl-6 mt-2 space-y-2 hidden">
                      <Link
                        href="team"
                        className="block text-gray-300 hover:text-white transition-colors py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Our Team
                      </Link>
                      <Link
                        href="/about"
                        className="block text-gray-300 hover:text-white transition-colors py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        About
                      </Link>
                      <Link
                        href="/testimonials"
                        className="block text-gray-300 hover:text-white transition-colors py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Testimonials
                      </Link>
                    </div>
                  </div>
                </div>

                <Link
                  href="/services"
                  className="block text-white hover:text-gray-300 transition-colors py-2 border-b border-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>

                <Link
                  href="/expertise"
                  className="block text-white hover:text-gray-300 transition-colors py-2 border-b border-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Expertise
                </Link>

                <Link
                  href="/contact"
                  className="block text-white hover:text-gray-300 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>

              {/* Mobile Menu Footer */}
              <div className="p-6 border-t border-gray-800 mt-auto">
                <div className="text-sm text-gray-400 text-center">
                  © {new Date().getFullYear()} Abells HR Recruiters
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
