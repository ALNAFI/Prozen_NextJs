import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Breadcrumb from "../../components/common/Breadcrumb";
import ProjectCards from "../../components/pages/project/ProjectCards";

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
