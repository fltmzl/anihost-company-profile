import React from "react";
import WhoWeAreSection from "./sections/WhoWeAreSection";
import WhatWeDoSection from "../sections/WhatWeDoSection";
import DiscoverMoreSection from "../sections/DiscoverMoreSection";
import EmployeeSection from "./sections/EmployeeSection";
import PagesTitleHeader from "../components/PagesTitleHeader";

export default function AboutUs() {
  return (
    <main>
      <PagesTitleHeader title="About us" description="Our mission is to make your business better through technology" />

      <WhoWeAreSection />
      <WhatWeDoSection />
      <EmployeeSection />
      <DiscoverMoreSection
        title="Delivering IT solutions that enable you to work smarter"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti placeat tenetur dolore est dolores alias aliquid corrupti veniam itaque exercitationem!"
      />
    </main>
  );
}
