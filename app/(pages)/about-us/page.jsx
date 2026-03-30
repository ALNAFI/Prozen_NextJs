import Breadcrumb from "../../components/common/Breadcrumb";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import AboutArea from "../../components/pages/aboutUs/AboutArea";
import ProcessArea from "../../components/pages/aboutUs/ProcessArea";
import StatsArea from "../../components/pages/aboutUs/StatsArea";
import ChooseArea from "../../components/pages/aboutUs/ChooseArea";
import TeamArea from "../../components/pages/aboutUs/TeamArea";
import TestimonialsArea from "../../components/pages/aboutUs/TestimonialsArea";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Prozen — our story, values, process, team, and what drives our client partnerships.",
};

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <Breadcrumb title="About Us" />
      <AboutArea image="/images/about/1.jpg" />
      <ProcessArea
        bgColor="ht-process-area inner-two"
        titleColor=""
        subtitleColor=""
        descriptionColor="ht-process-item two"
        shape="/images/shape/3.svg"
      />
      <StatsArea />
      <ChooseArea />
      <TeamArea />
      <TestimonialsArea />
      <Footer />
    </>
  );
}
