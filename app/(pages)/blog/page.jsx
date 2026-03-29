import Breadcrumb from "../../components/common/Breadcrumb";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import BlogArea from "../../components/pages/blog/BlogArea";

export const metadata = {
  title: "Blog",
  description:
    "Articles and insights on business, strategy, insurance, and industry trends from Prozen.",
};

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
