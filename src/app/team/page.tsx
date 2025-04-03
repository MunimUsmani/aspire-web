import Footer from "../components/footer";
import Navbar from "../components/navbar";
import OurTeam from "../components/our-team";
import FocusBuilding from "../components/focusbuilding";
import MeetOurTeam from "../components/meetourteam";


const Home: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
        <OurTeam />
        <FocusBuilding />
        <MeetOurTeam />
        <Footer />
      </div>
    </>
  );
};

export default Home;