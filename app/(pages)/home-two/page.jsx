"use client";

import { useState } from "react";
import Footer from "../../components/pages/homeTwo/Footer";
import Testimonial from "../../components/pages/faq/Testimonials";
import { recentPostsPage2Data } from "../../data/homeTwoData";
import RecentPosts from "../../components/pages/home/RecentPosts";
import ChooseArea from "../../components/pages/aboutUs/ChooseArea";
import Search from "../../components/ui/Search";
import Header from "../../components/pages/homeTwo/Header";
import HeroArea from "../../components/pages/homeTwo/HeroArea";
import StatsArea from "../../components/pages/homeTwo/StatsArea";
import ServicesArea from "../../components/pages/homeTwo/ServicesArea";
import AboutArea from "../../components/pages/homeTwo/AboutArea";
import ProjectArea from "../../components/pages/homeTwo/ProjectArea";
import TeamArea from "../../components/pages/homeTwo/TeamArea";
import Preloader from "../../components/ui/Preloader";

export default function HomeTwo() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <Preloader />
      <Header onSearchClick={() => setSearchOpen(true)} />
      <Search isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <HeroArea />
      <StatsArea />
      <ServicesArea />
      <AboutArea />
      <ProjectArea />
      <ChooseArea />
      <TeamArea />
      <Testimonial />
      <RecentPosts data={recentPostsPage2Data} variant="v2" />
      <Footer />
    </>
  );
}
