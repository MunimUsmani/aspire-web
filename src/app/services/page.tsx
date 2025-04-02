import B2BBusinessDevelopment from "../components/b2b-business-development";
import ColdCalling from "../components/cold-calling";
import CRMManaging from "../components/crm-managing";
import EmailMarketing from "../components/email-marketing";
import Footer from "../components/footer";
import HRRecruitment from "../components/hr-recruitment";
import Navbar from "../components/navbar";


const Home: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
        <HRRecruitment />
        <EmailMarketing />
        <CRMManaging />
        <B2BBusinessDevelopment />
        <ColdCalling />
        <Footer />
      </div>
    </>
  );
};

export default Home;