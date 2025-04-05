import { Quote } from "lucide-react"

export default function LeadershipTeam() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1e2e] mb-4">Our Leadership</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Meet the experienced professionals leading our team and driving our mission forward.
          </p>
        </div>

        <div className="space-y-12">
          {/* CEO */}
          <div className="flex flex-col md:flex-row gap-8 py-12 md:py-16 border-b border-gray-200">
            <div className="md:w-1/3 flex justify-center md:justify-start">
              <div className="bg-[#0055b8] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="text-white w-12 h-12" />
              </div>
            </div>

            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-[#1a1e2e] mb-2">Message from CEO</h2>
              <h3 className="text-2xl font-bold text-[#c19a6b] mb-4">ABBAS KAREEM</h3>
              <p className="text-gray-700 mb-6 text-lg">
                I am M. Abbas Kareem, an experienced HR Executive with over 2 years of expertise in streamlining HR
                operations. My skills include head-hunting, time management, payroll processing, recruitment,
                documentation, and attendance management.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                I specialize in hiring top talent across platforms like Indeed and LinkedIn, focusing on roles such as
                sales professionals, designers, cold callers, email marketers, CMS developers, and social media
                specialists for Discord and Twitter.
              </p>
            </div>
          </div>

          {/* COO */}
          <div className="flex flex-col md:flex-row-reverse gap-8 py-12 md:py-16 border-b border-gray-200">
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <div className="bg-[#c19a6b] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="text-white w-12 h-12" />
              </div>
            </div>

            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-[#1a1e2e] mb-2">Message from COO</h2>
              <h3 className="text-2xl font-bold text-[#c19a6b] mb-4">BALACH ALI</h3>
              <p className="text-gray-700 mb-6 text-lg">
                I bring a wealth of expertise and vision to Abells Solutions. With over 2 years of experience in the HR
                and IT industries, I developed a strong acumen for identifying top talent and aligning them with
                organizational goals. The strategic approach to recruitment and deep understanding of market dynamics
                have been instrumental in achieving high success rates for our clients.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                My commitment to excellence and integrity sets the foundation for Abell Solutions' operations. My
                ability to foster meaningful client relationships and deliver tailored HR solutions makes me a driving
                force behind the agency's success. Passionate about building impactful teams to helping businesses
                thrive through effective talent acquisition strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

