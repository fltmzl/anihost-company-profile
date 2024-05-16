import PagesTitleHeader from "@/app/components/PagesTitleHeader";
import React from "react";
import HostingPricingPlanSection from "./sections/HostingPricingPlanSection";
import FaqSection from "../sections/FaqSection";
import DiscoverMoreSection from "@/app/sections/DiscoverMoreSection";

export default function HostingService() {
  return (
    <main>
      <PagesTitleHeader title="Hosting" description="Lorem ipsum dolor sit amet consectetur adipisicing." />

      <HostingPricingPlanSection />
      <FaqSection />
      <DiscoverMoreSection
        title="Our performance is your success. Our passion is innovation. Our expertise is unmatched. We get you more"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
    </main>
  );
}
