import AboutHero from "../components/about-hero";
import Footer from "../components/footer";
import MissionValues from "../components/mission-values";
import Navbar from "../components/navbar";

const Home: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
        <AboutHero />
        <MissionValues />
        <Footer />
      </div>
    </>
  );
};

export default Home;