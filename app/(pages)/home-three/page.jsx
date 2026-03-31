import Header from "../../components/pages/homeThree/Hearder";
import Footer from "../../components/pages/homeThree/Footer";
import FaqAreas from "../../components/pages/faq/FaqAreas";
import RecentPosts from "../../components/pages/homeThree/RecentPosts";
import Testimonials from "../../components/pages/homeThree/Testimonials";
import PricingArea from "../../components/pages/pricing/PricingArea";
import HeroArea from "../../components/pages/homeThree/HeroArea";
import ServicesArea from "../../components/pages/homeThree/ServicesArea";
import AboutArea from "../../components/pages/aboutUs/AboutArea";
import ProcessArea from "../../components/pages/homeThree/ProcessArea";
import Preloader from "../../components/ui/Preloader";

export default function HomeThree() {
  return (
    <>
      <Preloader />
      <Header />
      <HeroArea />
      <ServicesArea />
      <AboutArea image="/images/about/3.jpg" />
      <ProcessArea />
      <PricingArea />
      <Testimonials />
      <FaqAreas />
      <RecentPosts />
      <Footer />
    </>
  );
}
