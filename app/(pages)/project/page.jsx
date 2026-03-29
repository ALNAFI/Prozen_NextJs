import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Breadcrumb from "../../components/common/Breadcrumb";
import ProjectCards from "../../components/pages/project/ProjectCards";

export const metadata = {
  title: "Our Projects",
  description:
    "Explore our portfolio — selected case studies and projects across industries and services.",
};

export default function ProjectPage() {
  return (
    <>
      <Header />
      <Breadcrumb title="Our Projects" />
      <ProjectCards />
      <Footer />
    </>
  );
}
