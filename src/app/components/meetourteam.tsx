import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, Smartphone } from "lucide-react"

const teamMembers = [
  {
    name: "Rania Abdalla",
    title: "Founder & Managing Director",
    image: "/raniaimg.webp",
    contacts: [
      { type: "mobile", value: "+971 50 196 1652", icon: Smartphone },
      { type: "phone", value: "+20 100 069 6450", icon: Phone },
      { type: "email", label: "E-mail Contact", icon: Mail },
    ],
  },
  {
    name: "Ahmed Raouf",
    title: "Partner",
    image: "/raoufimg.webp",
    contacts: [
      { type: "phone", value: "+20 100 069 6450", icon: Phone },
      { type: "email", label: "E-mail Contact", icon: Mail },
    ],
  },
]

const MeetOurTeam = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#c19a6b] mb-6">Meet Our Team</h2>

          <p className="text-center text-lg text-gray-800 mb-16 max-w-3xl mx-auto">
            Aspire HRC team comes with a wealth of experience from diverse multinational companies.
          </p>

        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {teamMembers.slice(0, 2).map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface TeamMemberProps {
  member: {
    name: string
    title: string
    image: string
    contacts: {
      type: string
      value?: string
      label?: string
      icon: any
    }[]
  }
}

const TeamMemberCard = ({ member }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-sm shadow-sm p-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="relative w-36 h-36 rounded-full overflow-hidden bg-gray-200">
            <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover grayscale" />
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col md:pt-2">
          <h3 className="text-xl font-bold text-[#0055b8] mb-1">{member.name}</h3>
          <p className="text-gray-600 mb-4">{member.title}</p>

          {/* Contact Information */}
          <div className="space-y-2">
            {member.contacts.map((contact, index) => (
              <div key={index} className="flex items-center">
                <contact.icon className="text-[#c19a6b] mr-2 h-5 w-5" />
                {contact.value ? (
                  <span className="text-gray-800">{contact.value}</span>
                ) : (
                  <Link href="#" className="text-gray-800 hover:text-[#0055b8]">
                    {contact.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeetOurTeam

