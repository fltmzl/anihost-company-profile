import React from "react";
import PagesTitleHeader from "../components/PagesTitleHeader";
import HostingServiceList from "./sections/HostingServiceList";
import DiscoverMoreSection from "../sections/DiscoverMoreSection";
import SoftwareServiceList from "./sections/SoftwareServiceList";
import OurTechnologiesSection from "./sections/OurTechnologiesSection";

export default function Services() {
  return (
    <main>
      <PagesTitleHeader title="All Services" description="Lorem ipsum dolor sit amet consectetur adipisicing." />

      <HostingServiceList />

      <DiscoverMoreSection
        title="Our performance is your success. Our passion is innovation. Our expertise is unmatched. We get you more"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />

      <OurTechnologiesSection />

      <SoftwareServiceList />
    </main>
  );
}
