import ContactForm from "../components/ContactForm";
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
        <Footer />
      </div>
    </>
  );
};

export default Home;