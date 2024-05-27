import React from "react";
import PagesTitleHeader from "../../components/PagesTitleHeader";
import HostingServiceList from "./sections/HostingServiceList";
import DiscoverMoreSection from "../../sections/DiscoverMoreSection";
import SoftwareServiceList from "./sections/SoftwareServiceList";
import OurTechnologiesSection from "../../sections/OurTechnologiesSection";
import fetcher from "@/lib/fetcher";
import WhatWeDoSection from "@/app/sections/WhatWeDoSection";
import OurServiceSection from "@/app/sections/OurServiceSection";

const getData = async (locale: Locale) => {
  return fetcher({ endpoint: "/pages/services", locale });
};

type ServicesProps = Params;

export default async function Services({ params: { locale } }: ServicesProps) {
  const data: AllService = await getData(locale);
  const { pageInfo, cta, tools, hostingProducts, softwareProducts, serviceHero, services } = data;

  return (
    <main>
      <PagesTitleHeader title={pageInfo.title} description={pageInfo.description} />

      {/* <WhatWeDoSection items={whatWeDo} /> */}
      <OurServiceSection pageHero={serviceHero} items={services} />
      <HostingServiceList items={hostingProducts} />

      <DiscoverMoreSection title={cta[0]?.title} description={cta[0]?.description} buttonHrefLink={cta[0]?.url} />

      <SoftwareServiceList items={softwareProducts} />

      <OurTechnologiesSection items={tools} />

      <DiscoverMoreSection title={cta[1]?.title} description={cta[1]?.description} buttonHrefLink={cta[1]?.url} />
    </main>
  );
}
