import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Breadcrumb from "../../components/common/Breadcrumb";
import BlogDetailsArea from "../../components/pages/blogListAndDetails/BlogDetailsArea";

export const metadata = {
  title: "Blog Details",
  description:
    "Read the full article — tips, analysis, and expert commentary from the Prozen blog.",
};

export default function BlogDetailsPage() {
  return (
    <>
      <Header />
      <Breadcrumb title="Blog Details" />
      <BlogDetailsArea />
      <Footer />
    </>
  );
}
