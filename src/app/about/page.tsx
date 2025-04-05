
import AboutHero from "../components/about-hero";
import CompanyHistory from "../components/company-history";
import Footer from "../components/footer";
import LeadershipTeam from "../components/leadership-team";
import Navbar from "../components/navbar";
import TrustedBy from "../components/trustedby";
import WhyChooseUs from "../components/whychooseus";


const Home: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
        <AboutHero />
        <LeadershipTeam />
        <CompanyHistory />
       <WhyChooseUs />
       <TrustedBy />
        <Footer />
      </div>
    </>
  );
};

export default Home;