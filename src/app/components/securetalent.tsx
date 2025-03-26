import Link from "next/link";
import { ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="bg-[#0055b8] py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className=" md:text-5xl lg:text-5xl font-bold text-[#e6b980] mb-8">
            Secure the best <br />
            talent today
          </h2>
          
          <p className="text-white text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Reach out to us for a personalized consultation and discover the ways we
            can support your talent search efforts or your HR needs.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-white text-[#0055b8] font-bold px-4 py-3 rounded hover:bg-gray-100 transition-colors"
          >
            Contact us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;