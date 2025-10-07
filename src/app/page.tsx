import Features from "@/components/home/features/Features";
import Hero from "@/components/hero/Hero";
import React from "react";
import TopCategories from "@/components/home/top-categories/TopCategories";
import NewArrivals from "@/components/home/new-arrivals/NewArrivals";

const Home = () => {
  return (
    <div className="space-y-16">
      <Hero />
      <Features />
      <TopCategories />
      <NewArrivals />
    </div>
  );
};

export default Home;
