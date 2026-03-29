import Breadcrumb from "../../components/common/Breadcrumb";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import ServicesArea from "../../components/pages/ServiceAndDetails/ServicesArea";

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
