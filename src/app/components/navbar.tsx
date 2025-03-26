"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Home } from "lucide-react"

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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-32">
            <Image
              src="/Egypt-white.png"
              alt="Aspire HR Consultants"
              width={128}
              height={40}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
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
                <Link href="/about/team" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Our Team
                </Link>
                <Link href="/about/mission" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Our Mission
                </Link>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center text-white hover:text-gray-300 transition-colors">
              Services <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-1">
                <Link href="/services/recruitment" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Recruitment
                </Link>
                <Link href="/services/consulting" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Consulting
                </Link>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center text-white hover:text-gray-300 transition-colors">
              Expertise <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-1">
                <Link href="/expertise/industries" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Industries
                </Link>
                <Link href="/expertise/case-studies" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Case Studies
                </Link>
              </div>
            </div>
          </div>
          <Link href="/insights" className="text-white hover:text-gray-300 transition-colors">
            Insights
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`absolute top-full left-0 w-full bg-black/90 transition-all duration-300 ${isMobileMenuOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"}`}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link href="/" className="text-white hover:text-gray-300 transition-colors flex items-center">
              <Home size={20} className="mr-2" /> Home
            </Link>
            <div className="flex flex-col space-y-2">
              <button
                className="flex items-center justify-between text-white hover:text-gray-300 transition-colors"
                onClick={() => {}}
              >
                About Us <ChevronDown size={16} />
              </button>
              <div className="pl-4 flex flex-col space-y-2">
                <Link href="/about/team" className="text-gray-300 hover:text-white transition-colors">
                  Our Team
                </Link>
                <Link href="/about/mission" className="text-gray-300 hover:text-white transition-colors">
                  Our Mission
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <button
                className="flex items-center justify-between text-white hover:text-gray-300 transition-colors"
                onClick={() => {}}
              >
                Services <ChevronDown size={16} />
              </button>
              <div className="pl-4 flex flex-col space-y-2">
                <Link href="/services/recruitment" className="text-gray-300 hover:text-white transition-colors">
                  Recruitment
                </Link>
                <Link href="/services/consulting" className="text-gray-300 hover:text-white transition-colors">
                  Consulting
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <button
                className="flex items-center justify-between text-white hover:text-gray-300 transition-colors"
                onClick={() => {}}
              >
                Expertise <ChevronDown size={16} />
              </button>
              <div className="pl-4 flex flex-col space-y-2">
                <Link href="/expertise/industries" className="text-gray-300 hover:text-white transition-colors">
                  Industries
                </Link>
                <Link href="/expertise/case-studies" className="text-gray-300 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </div>
            </div>
            <Link href="/insights" className="text-white hover:text-gray-300 transition-colors">
              Insights
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

