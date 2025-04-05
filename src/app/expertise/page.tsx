import CaseStudies from "../components/case-studies";
import ExpertiseApproach from "../components/expertise-approach";
import ExpertiseCTA from "../components/expertise-cta";
import ExpertiseHero from "../components/expertise-hero";
import Footer from "../components/footer";
import IndustryExpertise from "../components/industry-expertise";
import Navbar from "../components/navbar";


const Home: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
        <ExpertiseHero />
        <IndustryExpertise />
        <ExpertiseApproach />
        <CaseStudies />
        <ExpertiseCTA />
        <Footer />
      </div>
    </>
  );
};

export default Home;