import Breadcrumb from "../../components/common/Breadcrumb";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import ServicesArea from "../../components/pages/ServiceAndDetails/ServicesArea";

export const metadata = {
  title: "Our Services",
  description:
    "Services and solutions — planning, consulting, insurance, and support tailored to your goals.",
};

export default function ServicePage() {
  return (
    <>
      <Header />
      <Breadcrumb title="Our Services" />
      <ServicesArea />
      <Footer />
    </>
  );
}
