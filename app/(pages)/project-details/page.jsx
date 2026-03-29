import Breadcrumb from "../../components/common/Breadcrumb";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import ProjectContent from "../../components/pages/projectDetails/ProjectContent";

export const metadata = {
  title: "Project Details",
  description:
    "Project overview — scope, gallery, deliverables, and outcomes for this Prozen engagement.",
};

export default function ProjectDetailsPage() {
  return (
    <>
      <Header />
      <Breadcrumb title="Project Details" />
      <ProjectContent />
      <Footer />
    </>
  );
}
