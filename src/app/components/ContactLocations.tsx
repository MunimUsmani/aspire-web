import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactLocations = () => {
  return (
    <section className="bg-gray-100 py-10 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Dubai Card */}
            <div className="bg-white rounded-md overflow-hidden shadow-sm max-w-md mx-auto w-full">
              <div className="relative h-48 sm:h-56">
                <Image
                  src="/uae-dubai.jpg"
                  alt="Dubai skyline at night"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 p-3 sm:p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
                  <h2 className="text-white text-xl sm:text-2xl font-bold">Dubai (Headquarters)</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-gray-500 text-sm sm:text-base mb-2">Your point of contact</p>
                <h3 className="text-blue-600 text-lg sm:text-xl font-bold mb-3 sm:mb-4">Rania Abdalla</h3>
                
                <div className="flex items-start mb-3">
                  <Phone className="text-[#c19a6b] mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-800 text-sm sm:text-base break-words">+971 50 196 1652</p>
                </div>
                
                <div className="flex items-start mb-4 sm:mb-6">
                  <Mail className="text-[#c19a6b] mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                  <Link href="#" className="text-gray-800 text-sm sm:text-base hover:text-blue-600">
                    E-mail Contact
                  </Link>
                </div>
                
                <p className="text-gray-500 text-sm sm:text-base mb-2">Address</p>
                <div className="flex items-start">
                  <MapPin className="text-[#c19a6b] mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-800 text-sm sm:text-base">
                    Sharjah Media City<br />
                    334069 Sharjah<br />
                    UAE
                  </p>
                </div>
              </div>
            </div>
            
            {/* Cairo Card */}
            <div className="bg-white rounded-md overflow-hidden shadow-sm max-w-md mx-auto w-full">
              <div className="relative h-48 sm:h-56">
                <Image
                  src="/egypt-cairo.jpg"
                  alt="Cairo skyline with Nile river"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 p-3 sm:p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
                  <h2 className="text-white text-xl sm:text-2xl font-bold">Cairo</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-gray-500 text-sm sm:text-base mb-2">Your point of contact</p>
                <h3 className="text-blue-600 text-lg sm:text-xl font-bold mb-3 sm:mb-4">Ahmed Raouf</h3>
                
                <div className="flex items-start mb-3">
                  <Phone className="text-[#c19a6b] mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-800 text-sm sm:text-base break-words">+20 100 069 6450</p>
                </div>
                
                <div className="flex items-start mb-4 sm:mb-6">
                  <Mail className="text-[#c19a6b] mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                  <Link href="#" className="text-gray-800 text-sm sm:text-base hover:text-blue-600">
                    E-mail Contact
                  </Link>
                </div>
                
                <p className="text-gray-500 text-sm sm:text-base mb-2">Address</p>
                <div className="flex items-start">
                  <MapPin className="text-[#c19a6b] mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-800 text-sm sm:text-base">
                    Silver Stars Businness Building Akhnatone Street<br />
                    11835 Cairo<br />
                    Egypt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center mt-8 sm:mt-12 space-x-4 sm:space-x-6">
          <Link href="#" aria-label="LinkedIn" className="bg-white p-2 sm:p-3 rounded-full hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 sm:w-6 sm:h-6 w-5 h-5">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </Link>
          <Link href="#" aria-label="Twitter" className="bg-white p-2 sm:p-3 rounded-full hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 sm:w-6 sm:h-6 w-5 h-5">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </Link>
          <Link href="#" aria-label="Facebook" className="bg-white p-2 sm:p-3 rounded-full hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 sm:w-6 sm:h-6 w-5 h-5">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </Link>
          <Link href="#" aria-label="YouTube" className="bg-white p-2 sm:p-3 rounded-full hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 sm:w-6 sm:h-6 w-5 h-5">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </Link>
          <Link href="#" aria-label="Instagram" className="bg-white p-2 sm:p-3 rounded-full hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600 sm:w-6 sm:h-6 w-5 h-5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactLocations;