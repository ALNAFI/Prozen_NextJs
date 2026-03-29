import Header from "../../components/common/Header";
import Breadcrumb from "../../components/common/Breadcrumb";
import MapArea from "../../components/pages/contact/MapArea";
import Footer from "../../components/common/Footer";
import ContactForm from "../../components/pages/contact/ContactForm";
import ContactInfo from "../../components/pages/contact/ContactInfo";

export default function ContactPage() {
  return (
    <>
      <Header />
      <Breadcrumb title="Contact Us" />
      <ContactInfo />
      <ContactForm />
      <MapArea />
      <Footer />
    </>
  );
}
