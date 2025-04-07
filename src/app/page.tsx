import Footer from "./components/footer";
import GlobalExecutiveSearch from "./components/globalsearch";
import Hero from "./components/hero";
import KestriaHero from "./components/kestaria";
import LatestInsights from "./components/latest";
import Navbar from "./components/navbar";
import SecureTalent from "./components/securetalent";
import WhatWeDo from "./components/Whatwedo";



export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <KestriaHero />
      <WhatWeDo />
      <GlobalExecutiveSearch />
      {/* <LatestInsights /> */}
      <SecureTalent />
      <Footer />
    </main>
  )
}

