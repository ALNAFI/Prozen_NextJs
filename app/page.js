"use client";

import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import RecentPosts from "./components/pages/home/RecentPosts";
import Preloader from "./components/ui/Preloader";
import TeamArea from "./components/pages/aboutUs/TeamArea";
import TestimonialsArea from "./components/pages/aboutUs/TestimonialsArea";
import AboutArea from "./components/pages/aboutUs/AboutArea";
import ProcessArea from "./components/pages/aboutUs/ProcessArea";
import StatsArea from "./components/pages/aboutUs/StatsArea";
import HeroArea from "./components/pages/home/HeroArea";
import ServicesArea from "./components/pages/home/ServicesArea";
import ProjectArea from "./components/pages/home/ProjectArea";
import { recentPostsData } from "./data/homeData";
export default function Home() {
  return (
    <>
      <Preloader />
      <Header />      
      <HeroArea />
      <ServicesArea />
      <AboutArea image="/images/about/1.jpg" />
      <StatsArea pad="pt-0" />
      <ProjectArea />
      <ProcessArea
        bgColor="ht-process-area "
        titleColor="text-white"
        subtitleColor=""
        descriptionColor="ht-process-item"
        shape="images/shape/3.1.svg"
      />
      <TeamArea />
      <TestimonialsArea />
      <RecentPosts data={recentPostsData} variant="v1" pad="pt-0" />
      <Footer />
    </>
  );
}
