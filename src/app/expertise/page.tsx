import CaseStudies from "../components/case-studies";
import ExpertiseApproach from "../components/expertise-approach";
import ExpertiseCTA from "../components/expertise-cta";
import Footer from "../components/footer";
import Navbar from "../components/navbar";


const Home: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
        <CaseStudies />
        <ExpertiseApproach />
        <ExpertiseCTA />
        <Footer />
      </div>
    </>
  );
};

export default Home;