import Header from "../../components/common/Header";
import Breadcrumb from "../../components/common/Breadcrumb";
import TeamDetailsArea from "../../components/pages/TeamAndDetails/TeamDetailsArea";
import Footer from "../../components/common/Footer";

export const metadata = {
  title: "Team Details",
  description:
    "Team member profile — role, experience, and focus areas at Prozen.",
};

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
