import Hero from "./components/hero";
import KestriaHero from "./components/kestaria";
import Navbar from "./components/navbar";
import WhatWeDo from "./components/Whatwedo";



export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <KestriaHero />
      <WhatWeDo />
      
    </main>
  )
}

