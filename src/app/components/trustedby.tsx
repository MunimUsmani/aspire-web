import Image from "next/image"
import Link from "next/link"

export default function TrustedBy() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#0055b8] to-[#003b80] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Recruitment Process?</h3>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Partner with Abells Solutions and discover how our expertise can help you find the perfect talent for your
              organization.
            </p>
            <Link href="/contact">
              <button className="bg-white text-[#0055b8] hover:bg-[#c19a6b] hover:text-white transition-colors px-8 py-3 rounded-lg font-semibold shadow-md">
                Contact Us Today
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

