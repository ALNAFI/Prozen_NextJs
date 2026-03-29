import Footer from "../../components/common/Footer";
import ErrorContent from "../../components/pages/notFound/ErrorContent";
import Breadcrumb from "../../components/common/Breadcrumb";
import Header from "../../components/common/Header";

export const metadata = {
  title: "404 — Page Not Found",
  description:
    "The page you are looking for could not be found. Return to the Prozen homepage or explore the menu.",
};

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
