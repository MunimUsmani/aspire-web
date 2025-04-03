import AboutHero from "../components/about-hero";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Home: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
        <AboutHero />
        <Footer />
      </div>
    </>
  );
};

export default Home;