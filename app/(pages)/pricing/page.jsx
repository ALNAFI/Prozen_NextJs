import Breadcrumb from "../../components/common/Breadcrumb";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import FaqAreas from "../../components/pages/faq/FaqAreas";
import PricingArea from "../../components/pages/pricing/PricingArea";

export default function PricingPage() {
  return (
    <>
      <Header />
      <Breadcrumb title="Pricing Plan" />
      <PricingArea pad="pb-0" />
      <FaqAreas />
      <Footer />
    </>
  );
}
