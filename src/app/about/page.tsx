
import AboutIntro from "../components/about-intro";
import CompanyHistory from "../components/company-history";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import TrustedBy from "../components/trustedby";
import WhyChooseUs from "../components/whychooseus";


const Home: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
        <AboutIntro />
        <CompanyHistory />
       <WhyChooseUs />
       <TrustedBy />
        <Footer />
      </div>
    </>
  );
};

export default Home;