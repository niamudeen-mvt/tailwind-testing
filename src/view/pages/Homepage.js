import React from "react";
import HeroSection from "../../components/HeroSection";
import ReviewSection from "../../components/ReviewSection";
import ServiceSection from "../../components/ServiceSection";
import TaskSection from "../../components/TaskSection";
import PriceSection from "../../components/PriceSection";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <TaskSection />
      <ReviewSection />
      <PriceSection />
    </>
  );
};

export default Homepage;
