import Header from "../../components/common/Header";
import Breadcrumb from "../../components/common/Breadcrumb";
import TeamDetailsArea from "../../components/pages/TeamAndDetails/TeamDetailsArea";
import Footer from "../../components/common/Footer";

export default function TeamDetailsPage() {
  return (
    <>
      <Header />
      <Breadcrumb title="Team Details" />
      <TeamDetailsArea />
      <Footer />
    </>
  );
}
