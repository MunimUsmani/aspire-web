import CaseStudies from "../components/case-studies";
import ExpertiseApproach from "../components/expertise-approach";
import Footer from "../components/footer";
import Navbar from "../components/navbar";


const Home: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
        <CaseStudies />
        <ExpertiseApproach />
        <Footer />
      </div>
    </>
  );
};

export default Home;