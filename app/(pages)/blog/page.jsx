import Breadcrumb from "../../components/common/Breadcrumb";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import BlogArea from "../../components/pages/blog/BlogArea";

export default function BlogPage() {
  return (
    <>
      <Header />
      <Breadcrumb title="Our Blog" />
      <BlogArea />
      <Footer />
    </>
  );
}
