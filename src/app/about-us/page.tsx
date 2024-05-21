import React from "react";
import WhoWeAreSection from "./sections/WhoWeAreSection";
import WhatWeDoSection from "../sections/WhatWeDoSection";
import DiscoverMoreSection from "../sections/DiscoverMoreSection";
import EmployeeSection from "./sections/EmployeeSection";
import PagesTitleHeader from "../components/PagesTitleHeader";
import fetcher from "@/lib/fetcher";
import WhyChooseUsSection from "../sections/WhyChooseUsSection";

const getData = async () => {
  return fetcher({ endpoint: "/pages/about" });
};

export default async function AboutUs() {
  const data: About = await getData();
  const { pageInfo, pageHero, whatWeDo, employees, sellingPoints } = data;

  return (
    <main>
      <PagesTitleHeader title={pageInfo.title} description={pageInfo.description} />

      <WhoWeAreSection text={pageHero.text} title={pageHero.title} description={pageHero.description} image={pageHero.image} />

      <WhatWeDoSection items={whatWeDo} />
      <WhyChooseUsSection items={sellingPoints} />
      <EmployeeSection items={employees} />
      <DiscoverMoreSection
        title="Delivering IT solutions that enable you to work smarter"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti placeat tenetur dolore est dolores alias aliquid corrupti veniam itaque exercitationem!"
      />
    </main>
  );
}
