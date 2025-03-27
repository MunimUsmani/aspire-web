import ContactForm from "../components/ContactForm";
import ContactLocations from "../components/ContactLocations";
import Footer from "../components/footer";
import HelpSection from "../components/helpsection";
import Navbar from "../components/navbar";


const Home: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
        <HelpSection />
        <ContactForm />
        <ContactLocations /> 
        <Footer />
      </div>
    </>
  );
};

export default Home;