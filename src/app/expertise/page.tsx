import CaseStudies from "../components/case-studies";
import Footer from "../components/footer";
import Navbar from "../components/navbar";


const Home: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
        <CaseStudies />
        <Footer />
      </div>
    </>
  );
};

export default Home;