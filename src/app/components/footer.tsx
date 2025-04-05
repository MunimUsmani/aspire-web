import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Facebook, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1e2e] text-gray-400 py-10">
      {/* Contact Info */}
      <div className="text-center mb-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-white">
          <a href="mailto:aspire@aspire-hr.com" className="hover:text-gray-300 transition-colors text-base">
            aspire@aspire-hr.com
          </a>
          <span className="hidden sm:block text-blue-500 font-bold mx-2">|</span>
          <a href="tel:+201000696450" className="hover:text-gray-300 transition-colors text-base">
            +20 100 069 6450
          </a>
        </div>
      </div>

      {/* Social Media */}
      <div className="flex justify-center space-x-6 mb-8">
        <Link href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
          <Linkedin size={18} />
        </Link>
        <Link href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
          <Twitter size={18} />
        </Link>
        <Link href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
          <Facebook size={18} />
        </Link>
        <Link href="#" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors">
          <Youtube size={18} />
        </Link>
        <Link href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
          <Instagram size={18} />
        </Link>
      </div>

      {/* Footer Links - All in one div with mx-auto */}
      <div className="mx-auto max-w-3xl px-4 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-4">
          {/* About Us Column */}
          <div className="text-center sm:text-left">
            <h3 className="text-white text-base font-medium mb-3">About Us</h3>
            <ul className="space-y-1.5">
              <li><Link href="/team" className="text-sm hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/about" className="text-sm hover:text-white transition-colors">About</Link></li>
              <li><Link href="/testimonials" className="text-sm hover:text-white transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="text-center sm:text-left">
            <h3 className="text-white text-base font-medium mb-3">Services</h3>
            <ul className="space-y-1.5">
              <li><Link href="/services" className="text-sm hover:text-white transition-colors">HR Recruitment</Link></li>
              <li><Link href="/services" className="text-sm hover:text-white transition-colors">Linkedin Outrage</Link></li>
              <li><Link href="/services" className="text-sm hover:text-white transition-colors">Email Marketing</Link></li>
              <li><Link href="/services" className="text-sm hover:text-white transition-colors">CRM Managing</Link></li>
              <li><Link href="/services" className="text-sm hover:text-white transition-colors">B2B Business development </Link></li>
              <li><Link href="/services" className="text-sm hover:text-white transition-colors">Lead Generation</Link></li>
              <li><Link href="/services" className="text-sm hover:text-white transition-colors">Cold Calling</Link></li>
            </ul>
          </div>

          {/* Expertise Column */}
          <div className="text-center sm:text-left">
            <h3 className="text-white text-base font-medium mb-3">Expertise</h3>
            <ul className="space-y-1.5">
              <li><Link href="/expertise" className="text-sm hover:text-white transition-colors">Our Expertise</Link></li>
              <li><Link href="/expertise" className="text-sm hover:text-white transition-colors">Industry Approach</Link></li>
              <li><Link href="/expertise" className="text-sm hover:text-white transition-colors">Expertise CTA</Link></li>
            </ul>
          </div>

          {/* Insights & Contact Column */}
          <div className="text-center sm:text-left">
            <ul className="space-y-2 pt-0.5">
              <li><Link href="/contact" className="text-white text-base font-medium hover:text-gray-300 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-5">
        <Image 
          src="/Egypt-white.png" 
          alt="Aspire HR Consultants" 
          width={140} 
          height={50}
          className="h-10 w-auto"
        />
      </div>

      {/* Copyright */}
      <div className="text-center text-xs px-4">
        <p>Copyright 2025. All Rights Reserved. Created by <span className="font-medium">Abells</span></p>
      </div>
    </footer>
  );
};

export default Footer;