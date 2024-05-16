import PagesTitleHeader from "@/app/components/PagesTitleHeader";
import React from "react";
import DiscoverMoreSection from "@/app/sections/DiscoverMoreSection";
import OurServiceSection from "@/app/sections/OurServiceSection";
import FaqSection from "../sections/FaqSection";
import WhyChooseUsSection from "@/app/sections/WhyChooseUsSection";

export default function HostingService() {
  return (
    <main>
      <PagesTitleHeader title="Software" description="Lorem ipsum dolor sit amet consectetur adipisicing." />

      <OurServiceSection />
      <WhyChooseUsSection />
      <FaqSection />
      <DiscoverMoreSection
        title="Our performance is your success. Our passion is innovation. Our expertise is unmatched. We get you more"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
    </main>
  );
}
