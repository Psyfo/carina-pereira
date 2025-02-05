"use client";
import AboutSection from "./components/AboutSection/AboutSection";
import CTA from "./components/CTASection/CTASection";
import HeroSection from "./components/HeroSection/HeroSection";
import LearningSection from "./components/LearningSection/LearningSection";
import React from "react";

const HairstylingPage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <CTA />
      <LearningSection />
    </div>
  );
};

export default HairstylingPage;
