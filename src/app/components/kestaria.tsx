import Link from "next/link";
import { ArrowRight } from "lucide-react";

const KestriaHero = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-[#0055b8] text-white py-4 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center h-auto md:h-28 space-y-4 md:space-y-0">
        <div className="text-center md:text-left md:flex-1">
          <h2 className="text-base sm:text-lg md:text-xl font-bold ml-0 md:ml-4">
            We are Abells, dedicated to connecting talent with opportunities and empowering businesses to thrive.
          </h2>
        </div>
        <div className="hidden md:block md:mr-70">
          <Link href="/contact" className="text-white font-bold">
            Learn more
          </Link>
        </div>
        <div className="flex items-center">
          <div className="mr-0 md:mr-6">
            <Link href="/contact" className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
              Abells
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#1a1e2e] text-white py-12 md:py-24 px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            <span className="text-white">Ideal </span>
            <span className="text-[#d9b38c]">local and global </span>
            <br className="hidden md:block" />
            <span className="text-[#d9b38c]">solution </span>
            <span className="text-white">for all your</span>
            <br className="hidden md:block" />
            <span className="text-[#d9b38c]">talent needs</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-6 sm:mb-4">
            We combine our local and global expertise, providing HR services tailored to your specific needs across the country. Our dedication to exclusive and tailored solutions distinguishes us, guaranteeing outstanding results for our partners.
          </p>

          <Link
            href="/team"
            className="inline-flex items-center bg-[#0055b8] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded hover:bg-[#0044a0] transition-colors"
          >
            Meet Our Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default KestriaHero;
