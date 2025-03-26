import Link from "next/link"
import { ArrowRight, Menu } from "lucide-react"

const KestriaHero = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-[#0055b8] text-white py-4 px-6 md:px-12 lg:px-20 flex justify-between items-center h-28">
        <div className="flex-1">
          <h2 className="text-base sm:text-lg md:text-xl font-bold ml-4">
            We are Kestria, the world&apos;s largest executive search alliance.
          </h2>
        </div>
        <div className="hidden md:block mr-64">
          <Link href="/learn-more" className="text-white font-bold">
            Learn more
          </Link>
        </div>
        <div className="flex items-center">
          <div className="mr-6">
            <Link href="/" className="text-white lg:text-4xl md:text-3xl font-bold">
              Kestria
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#1a1e2e] text-white md:py-24 px-6 md:px-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="md:text-5xl lg:text-5xl font-bold mb-8">
            <span className="text-white">Ideal </span>
            <span className="text-[#d9b38c]">local and global</span>
            <br className="hidden md:block" />
            <span className="text-[#d9b38c]">solution </span>
            <span className="text-white">for all your</span>
            <br className="hidden md:block" />
            <span className="text-[#d9b38c]">talent needs</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mb-4">
            We combine our local and global expertise providing our HR services that are tailored to your specific needs
            across 40+ countries. Our dedication to exclusive and tailored solutions distinguish us, guaranteeing
            outstanding results for our partners.
          </p>

          <Link
            href="/team"
            className="inline-flex items-center bg-[#0055b8] text-white px-6 py-3 rounded hover:bg-[#0044a0] transition-colors"
          >
            Meet Our Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default KestriaHero

