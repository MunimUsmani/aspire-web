import React from "react"
import Link from "next/link"
import { ArrowRight, Briefcase, Users, Building, GraduationCap, HeartPulse, ShieldCheck } from 'lucide-react'

const hrSpecializations = [
  {
    id: 1,
    name: "Talent Acquisition",
    description: "We connect organizations with specialized HR professionals who excel in identifying, attracting, and securing top talent across industries.",
    icon: Users,
    color: "bg-[#0055b8]",
    areas: ["Executive Recruitment", "Technical Hiring", "Campus Recruitment", "Diversity Hiring"]
  },
  {
    id: 2,
    name: "HR Business Partners",
    description: "Our network includes strategic HR business partners who can align HR initiatives with organizational goals and drive business performance.",
    icon: Briefcase,
    color: "bg-[#c19a6b]",
    areas: ["Strategic Planning", "Change Management", "Performance Consulting", "Leadership Development"]
  },
  {
    id: 3,
    name: "Compensation & Benefits",
    description: "We provide access to specialists who can design competitive compensation structures and comprehensive benefits packages.",
    icon: Building,
    color: "bg-[#0055b8]",
    areas: ["Salary Benchmarking", "Incentive Design", "Benefits Administration", "Total Rewards Strategy"]
  },
  {
    id: 4,
    name: "Learning & Development",
    description: "Our L&D specialists help organizations build effective training programs and foster continuous professional growth.",
    icon: GraduationCap,
    color: "bg-[#c19a6b]",
    areas: ["Training Design", "Leadership Programs", "Skills Assessment", "E-Learning Implementation"]
  },
  {
    id: 5,
    name: "Employee Relations",
    description: "We connect you with HR professionals who excel at building positive workplace cultures and resolving complex employee issues.",
    icon: HeartPulse,
    color: "bg-[#0055b8]",
    areas: ["Conflict Resolution", "Employee Engagement", "Policy Development", "Culture Building"]
  },
  {
    id: 6,
    name: "Compliance & Legal",
    description: "Our network includes HR legal experts who ensure organizational compliance with employment laws and regulations.",
    icon: ShieldCheck,
    color: "bg-[#c19a6b]",
    areas: ["Labor Law Compliance", "Policy Development", "Risk Management", "Workplace Investigations"]
  }
]

const IndustryExpertise = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1e2e] mb-6">
              HR Specialization Areas
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We connect organizations with specialized HR talent and accept business proposals across these key human resources domains.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hrSpecializations.map((specialization) => (
              <div 
                key={specialization.id} 
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#0055b8]"
              >
                <div className="flex items-start mb-4">
                  <div className={`${specialization.color} p-3 rounded-md mr-4 flex-shrink-0`}>
                    <specialization.icon className="text-white w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1e2e]">{specialization.name}</h3>
                </div>
                
                <p className="text-gray-700 text-sm mb-4">{specialization.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-500 mb-2">EXPERTISE AREAS:</h4>
                  <div className="flex flex-wrap gap-2">
                    {specialization.areas.map((area, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-white px-2 py-1 rounded border border-gray-200 text-[#0055b8]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link 
                  href="/contact"
                  className="inline-flex items-center text-[#0055b8] hover:text-[#0044a0] transition-colors group text-sm font-medium"
                >
                  View opportunities
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-[#1a1e2e] rounded-lg p-6 md:p-8 text-white">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Submit Your HR Business Proposal</h3>
                <p className="text-white/80 mb-6">
                  Are you an HR professional or agency with innovative solutions? We're open to business proposals 
                  that can enhance our service offerings and deliver exceptional value to our clients.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center bg-[#c19a6b] text-white px-4 py-2 rounded hover:bg-[#b08a5b] transition-colors"
                >
                  Submit Your Proposal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-2xl font-bold text-[#c19a6b]">30+</p>
                  <p className="text-sm text-white/80">Happy Clients</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-2xl font-bold text-[#c19a6b]">4+ yrs</p>
                  <p className="text-sm text-white/80">Industry Expertise</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-2xl font-bold text-[#c19a6b]">85%</p>
                  <p className="text-sm text-white/80">Clients Satisfaction</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-2xl font-bold text-[#c19a6b]">5+</p>
                  <p className="text-sm text-white/80">Industries Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustryExpertise
