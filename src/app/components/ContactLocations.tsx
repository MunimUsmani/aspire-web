import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactLocations = () => {
  return (
    <section className="bg-gray-100 py-10 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
           
            <div className="bg-white rounded-md overflow-hidden shadow-sm max-w-md mx-auto w-full">
              <div className="relative h-48 sm:h-56">
                <Image
                  src="/mazar.jpg"
                  alt="Dubai skyline at night"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 p-3 sm:p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
                  <h2 className="text-white text-xl sm:text-2xl font-bold">Karachi</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-gray-500 text-sm sm:text-base mb-2">Your point of contact</p>
                <h3 className="text-blue-600 text-lg sm:text-xl font-bold mb-3 sm:mb-4">Balach Ali</h3>
                
                <div className="flex items-start mb-3">
                  <Phone className="text-[#c19a6b] mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-800 text-sm sm:text-base break-words">0336-3243993</p>
                </div>
                
                <div className="flex items-start mb-4 sm:mb-6">
                  <Mail className="text-[#c19a6b] mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                  <Link href="mailto:balachkubs@gmail.com" className="text-gray-800 text-sm sm:text-base hover:text-blue-600">
                    E-mail Contact
                  </Link>
                </div>
                
                <p className="text-gray-500 text-sm sm:text-base mb-2">Address</p>
                <div className="flex items-start">
                  <MapPin className="text-[#c19a6b] mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-800 text-sm sm:text-base">
                    Karachi, Pakistan<br />
                  </p>
                </div>
              </div>
            </div>
            
            
            <div className="bg-white rounded-md overflow-hidden shadow-sm max-w-md mx-auto w-full">
              <div className="relative h-48 sm:h-56">
                <Image
                  src="/mazar.jpg"
                  alt="Cairo skyline with Nile river"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 p-3 sm:p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
                  <h2 className="text-white text-xl sm:text-2xl font-bold">Karachi</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-gray-500 text-sm sm:text-base mb-2">Your point of contact</p>
                <h3 className="text-blue-600 text-lg sm:text-xl font-bold mb-3 sm:mb-4">Abbas Kareem</h3>
                
                <div className="flex items-start mb-3">
                  <Phone className="text-[#c19a6b] mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-800 text-sm sm:text-base break-words">0316-2740179</p>
                </div>
                
                <div className="flex items-start mb-4 sm:mb-6">
                  <Mail className="text-[#c19a6b] mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                  <Link href="mailto:Abbasrizvi0124@gmail.com" className="text-gray-800 text-sm sm:text-base hover:text-blue-600">
                    E-mail Contact
                  </Link>
                </div> 
                
                <p className="text-gray-500 text-sm sm:text-base mb-2">Address</p>
                <div className="flex items-start">
                  <MapPin className="text-[#c19a6b] mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-800 text-sm sm:text-base">
                    Karachi, Pakistan<br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center mt-8 sm:mt-12 space-x-4 sm:space-x-6">
          <Link href="https://www.linkedin.com/company/abells-solution/" aria-label="LinkedIn" className="bg-white p-2 sm:p-3 rounded-full hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 sm:w-6 sm:h-6 w-5 h-5">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </Link>
          <Link href="https://www.facebook.com/share/18uoHVdCDt/" aria-label="Facebook" className="bg-white p-2 sm:p-3 rounded-full hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 sm:w-6 sm:h-6 w-5 h-5">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </Link>
          <Link href="https://www.instagram.com/abellssolutions02?igsh=MXU2aXF3NXE3aWs2ZA==" aria-label="Instagram" className="bg-white p-2 sm:p-3 rounded-full hover:bg-gray-100 transition-colors">
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