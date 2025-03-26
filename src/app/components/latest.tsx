import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';

const insights = [
  {
    date: "March 24, 2025",
    title: "The cultivated leader: unlocking potential with executive coaching",
    image: "/cultivated.webp",
    authors: [
      "/leader.webp",
    ],
  },
  {
    date: "March 20, 2025",
    title: "The role of Digital Innovation in water-intensive industry",
    image: "/water.webp",
    authors: [
      "/intensive.webp",
    ],
  },
  {
    date: "March 17, 2025",
    title: "Navigating new norms: How leaders can meet shifting employee demands",
    image: "/newnorms.webp",
    authors: [
      "/demands.webp",
      "/shifting.webp",
      "/rania.webp",
      "/steven.webp",
    ],
  },
  {
    date: "March 15, 2025",
    title: "Strategies to improve organisational climate",
    image: "/strategies.webp",
    authors: [
      "/lince.webp",
    ],
  },
  {
    date: "March 10, 2025",
    title: "The emerging trends in education leaders should know about",
    image: "/emergingtrends.webp",
    authors: [
      "/tara.webp",
      "/travis.webp",
    ],
  },
  {
    date: "March 5, 2025",
    title: "Sustainable production: Minimizing environmental impact",
    image: "/sustainableproduction.webp",
    authors: [
      "/environmental.webp",
    ],
  },
];

const LatestInsights = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#c19a6b] mb-12 md:mb-16">
          Latest insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div 
              key={index} 
              className="group cursor-pointer transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="mb-4 text-gray-500">{insight.date}</div>
              <div className="relative mb-4 overflow-hidden rounded">
                <div className="transition-transform duration-300 group-hover:-translate-y-2">
                  <Image
                    src={insight.image || "/placeholder.svg"}
                    alt={insight.title}
                    width={500}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute bottom-4 right-4 flex -space-x-3 transition-transform group-hover:-translate-y-2 duration-300">
                  {insight.authors.map((author, authorIndex) => (
                    <div
                      key={authorIndex}
                      className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
                    >
                      <Image
                        src={author || "/placeholder.svg"}
                        alt="Author"
                        width={60}
                        height={60}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0055b8] group-hover:text-[#003b80] group-hover:underline transition-colors">
                {insight.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link 
            href="/insights" 
            className="inline-flex items-center bg-[#0055b8] text-white px-4 py-3 rounded hover:bg-[#003b80] transition-colors font-bold"
          >
            Read more insights
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;