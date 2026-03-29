import Breadcrumb from "../../components/common/Breadcrumb";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import BlogListArea from "../../components/pages/blogListAndDetails/BlogListArea";

export default function BlogListPage() {
  return (
    <>
      <Header />
      <Breadcrumb title="Blog List" />
      <BlogListArea />
      <Footer />
    </>
  );
}
