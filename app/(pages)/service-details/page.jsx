import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Breadcrumb from "../../components/common/Breadcrumb";
import ServiceDetailsArea from "../../components/pages/ServiceAndDetails/ServiceDetailsArea";

export const metadata = {
  title: "Service Details",
  description:
    "In-depth service details — what’s included, deliverables, and how Prozen can help.",
};

export default function ServiceDetailsPage() {
  return (
    <>
      <Header />
      <Breadcrumb title="Service Details" />
      <ServiceDetailsArea />
      <Footer />
    </>
  );
}
