import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Facebook, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1e2e] text-gray-400 py-10">
      {/* Contact Info */}
      <div className="text-center mb-6">
        <div className="flex justify-center items-center gap-2 text-white">
          <a href="mailto:aspire@aspire-hr.com" className="hover:text-gray-300 transition-colors text-base">
            aspire@aspire-hr.com
          </a>
          <span className="text-blue-500 font-bold mx-2">|</span>
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
        <div className="grid grid-cols-4 gap-4">
          {/* About Us Column */}
          <div>
            <h3 className="text-white text-base font-medium mb-3">About Us</h3>
            <ul className="space-y-1.5">
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Why Work With Us</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Local Team</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Global Team</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">About Kestria</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Africa Desk</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Clients</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">News</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white text-base font-medium mb-3">Services</h3>
            <ul className="space-y-1.5">
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Executive Search</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Board Placement</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Talent Advisory</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Leadership Assessment</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Interim Executive Search</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">HR Consultancy</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Women Mentorship</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Training Experiences</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Digital HR Solutions</Link></li>
            </ul>
          </div>

          {/* Expertise Column */}
          <div>
            <h3 className="text-white text-base font-medium mb-3">Expertise</h3>
            <ul className="space-y-1.5">
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Overview</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Agribusiness & Agriscience</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Banking & Financial Services</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Consumer & Retail</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Industrial & Production</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">NGO & Not For Profit</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Technology</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Professional Services</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Education</Link></li>
            </ul>
          </div>

          {/* Insights & Contact Column */}
          <div>
            <ul className="space-y-2 pt-0.5">
              <li><Link href="#" className="text-white text-base font-medium hover:text-gray-300 transition-colors">Insights</Link></li>
              <li className="mt-3"><Link href="#" className="text-white text-base font-medium hover:text-gray-300 transition-colors">Contact</Link></li>
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
      <div className="text-center text-xs">
        <p>Copyright 2025 Kestria ry. All Rights Reserved. Created by <span className="font-medium">MMATIK</span></p>
      </div>
    </footer>
  );
};

export default Footer;