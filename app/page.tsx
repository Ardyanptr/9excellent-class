"use client"

// Core
import { useState } from "react";

// React Bits Component
import Aurora from "@/components/Aurora";

// Loader
import Loader from './function/Loader'

// Sections
import ScrollProgress from "./component/ScrollProgress";
import Navbar from "./sections/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import FeaturesSection from "./sections/FeaturesSection";
import ActivitiesSection from "./sections/ActivitiesSection";
import MemberSection from "./sections/MemberSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onLoaded={() => setLoaded(true)} />}
        {loaded && (
          <main className="relative overflow-x-hidden">

          <div className="fixed inset-0 -z-10">
            <Aurora
              colorStops={["#ccdbfd", "#ccdbfd", "#ccdbfd"]}
              blend={0.6}
              amplitude={0.5}
              speed={0.6}
            />
          </div>

          <ScrollProgress />
          
          <Navbar />
          <HeroSection />
          <AboutSection />
          <FeaturesSection />
          <ActivitiesSection />
          <MemberSection />
          <ContactSection />
          <Footer />
        </main>
      )}
    </>
  );
}
