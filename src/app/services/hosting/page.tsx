import PagesTitleHeader from "@/app/components/PagesTitleHeader";
import React from "react";
import HostingPricingPlanSection from "./sections/HostingPricingPlanSection";
import FaqSection from "../sections/FaqSection";
import DiscoverMoreSection from "@/app/sections/DiscoverMoreSection";
import fetcher from "@/lib/fetcher";

const getData = async () => {
  return fetcher({ endpoint: "/pages/serviceHosting" });
};

export default async function HostingService() {
  const data: ServiceHosting = await getData();
  const { pageInfo, cta, faqs, hostingPackages } = data;

  return (
    <main>
      <PagesTitleHeader title={pageInfo.title} description={pageInfo.description} />

      <HostingPricingPlanSection items={hostingPackages} />
      <FaqSection items={faqs} />
      <DiscoverMoreSection title={cta.title} description={cta.description} buttonLabel={cta.url} />
    </main>
  );
}
