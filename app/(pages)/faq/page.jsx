import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Breadcrumb from "../../components/common/Breadcrumb";
import FaqAreas from "../../components/pages/faq/FaqAreas";
import Testimonials from "../../components/pages/faq/Testimonials";

export const metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Prozen services, coverage, and working with our team.",
};

export default function FaqPage() {
  return (
    <>
      <Header />
      <Breadcrumb title="FAQS" />
      <FaqAreas />
      <Testimonials />
      <Footer />
    </>
  );
}
