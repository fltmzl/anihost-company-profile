import React from "react";
import PagesTitleHeader from "../components/PagesTitleHeader";
import HostingServiceList from "./sections/HostingServiceList";
import DiscoverMoreSection from "../sections/DiscoverMoreSection";
import SoftwareServiceList from "./sections/SoftwareServiceList";
import OurTechnologiesSection from "../sections/OurTechnologiesSection";
import fetcher from "@/lib/fetcher";

const getData = async () => {
  return fetcher({ endpoint: "/pages/services" });
};

export default async function Services() {
  const data: AllService = await getData();
  const { pageInfo, cta, tools, hostingProducts, softwareProducts } = data;

  return (
    <main>
      <PagesTitleHeader title={pageInfo.title} description={pageInfo.description} />

      <HostingServiceList items={hostingProducts} />

      <DiscoverMoreSection title={cta[0].title} description={cta[0].description} buttonLabel={cta[0].url} />

      <SoftwareServiceList items={softwareProducts} />

      <OurTechnologiesSection items={tools} />

      <DiscoverMoreSection title={cta[1].title} description={cta[1].description} buttonLabel={cta[1].url} />
    </main>
  );
}
