import TestimonialsHeading from "../components/client-say";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import TestimonialsCTA from "../components/testimonial-cta";
import TestimonialsGrid from "../components/testimonial-grid";
import TestimonialsSlider from "../components/testimonial-slider";
import TestimonialsStats from "../components/testimonial-stats";


const Home: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
        <TestimonialsHeading />
        <TestimonialsSlider />
        <TestimonialsStats />
        <TestimonialsGrid />
        <TestimonialsCTA />
        <Footer />
      </div>
    </>
  );
};

export default Home;