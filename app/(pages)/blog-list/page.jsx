import Breadcrumb from "../../components/common/Breadcrumb";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import BlogListArea from "../../components/pages/blogListAndDetails/BlogListArea";

export const metadata = {
  title: "Blog List",
  description:
    "Browse all blog posts — filters, categories, and recent stories from Prozen.",
};

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
