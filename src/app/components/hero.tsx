import Link from "next/link"
import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/Egypt-home-loop-03.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content */}
      <div className="relative h-full w-full flex flex-col">
        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-12 flex-1 flex flex-col justify-center">
          <div className="max-w-4xl pt-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 pl-6">Abells HR Recruiters</h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 pl-6">Fluent in finding leaders</h2>
            <Link
              href="/why-us"
              className="inline-flex items-center text-white text-2xl md:text-3xl lg:text-4xl group pl-6"
            >
              Why work with us
              <ArrowRight className="ml-4 transition-transform" size={50} />
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="container mx-auto px-6 md:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Contact Info */}
            <div className="text-grey/80 mb-4 md:mb-0 text-base">
              <span className="mr-2">+92 334 7371131</span>
              <span className="mx-2">|</span>
              <span className="ml-2">abells.hrsolutions@gmail.com</span>
            </div>

            {/* Social Media */}
            <div className="flex space-x-6">
              <Link href="https://www.linkedin.com/company/abells-solution/" className="text-white/80 hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://www.facebook.com/share/18uoHVdCDt/" className="text-white/80 hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.instagram.com/abellssolutions02?igsh=MXU2aXF3NXE3aWs2ZA==" className="text-white/80 hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

