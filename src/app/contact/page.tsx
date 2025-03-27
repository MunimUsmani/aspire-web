import Footer from "../components/footer";
import HelpSection from "../components/helpsection";
import Navbar from "../components/navbar";


const Home: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
        <HelpSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;