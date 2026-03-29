import Header from "../../components/common/Header";
import Breadcrumb from "../../components/common/Breadcrumb";
import TeamArea from "../../components/pages/TeamAndDetails/TeamArea";
import Footer from "../../components/common/Footer";

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
