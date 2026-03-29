import Header from "../../components/common/Header";
import Breadcrumb from "../../components/common/Breadcrumb";
import TeamArea from "../../components/pages/TeamAndDetails/TeamArea";
import Footer from "../../components/common/Footer";

export const metadata = {
  title: "Our Team",
  description:
    "Meet the Prozen team — leadership, advisors, and specialists behind our work.",
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <Breadcrumb title="Our Team" />
      <TeamArea />
      <Footer />
    </>
  );
}
