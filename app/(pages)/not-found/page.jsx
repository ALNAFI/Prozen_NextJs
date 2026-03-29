import Footer from "../../components/common/Footer";
import ErrorContent from "../../components/pages/notFound/ErrorContent";
import Breadcrumb from "../../components/common/Breadcrumb";
import Header from "../../components/common/Header";

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <Breadcrumb title="Error Page" />
      <ErrorContent />
      <Footer />
    </>
  );
}
