import B2BBusinessDevelopment from "../components/b2b-business-development";
import ColdCalling from "../components/cold-calling";
import CRMManaging from "../components/crm-managing";
import EmailMarketing from "../components/email-marketing";
import Footer from "../components/footer";
import HRRecruitment from "../components/hr-recruitment";
import LeadGeneration from "../components/lead-generation";
import LinkedinOutrage from "../components/linkedin-outrage";
import Navbar from "../components/navbar";
import ServicesCTA from "../components/services-cta";
import ServicesHero from "../components/services-hero";


const Home: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
        <ServicesHero />
        <HRRecruitment />
        <LinkedinOutrage />
        <EmailMarketing />
        <CRMManaging />
        <B2BBusinessDevelopment />
        <LeadGeneration />
        <ColdCalling />
        <ServicesCTA />
        <Footer />
      </div>
    </>
  );
};

export default Home;