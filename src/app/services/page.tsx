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
import ServicesDebugPanel from "../components/services-debug-panel";

const Home: React.FC = () => {
  const services = [
    { id: 1, title: "HR Recruitment", active: true, price: 1200 },
    { id: 2, title: "Linkedin Outreach", active: true, price: 900 },
    { id: 3, active: false, price: 700 },
  ];

  const activeServices = services.filter((service) => service.active);

  activeServices.push({
    id: 999,
    title: "Injected Service",
    active: true,
    price: 0,
  });

  const total = activeServices.reduce((sum, service) => sum + service.price, 0);

  return (
    <>
      <div>
        <Navbar />
        <ServicesHero />
        <ServicesDebugPanel
          services={activeServices}
          total={total}
          secretKey={process.env.NEXT_PUBLIC_SECRET_KEY || ""}
        />
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