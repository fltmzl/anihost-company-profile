import PagesTitleHeader from "@/app/components/PagesTitleHeader";
import React from "react";
import HostingPricingPlanSection from "./sections/HostingPricingPlanSection";
import FaqSection from "../sections/FaqSection";
import DiscoverMoreSection from "@/app/sections/DiscoverMoreSection";
import fetcher from "@/lib/fetcher";

const getData = async (locale: Locale) => {
  return fetcher({ endpoint: "/pages/serviceHosting", locale });
};

type HostingServiceProps = Params;

export default async function HostingService({ params: { locale } }: HostingServiceProps) {
  const data: ServiceHosting = await getData(locale);
  const { pageInfo, cta, faqs, hostingPackages } = data;

  return (
    <main>
      <PagesTitleHeader title={pageInfo.title} description={pageInfo.description} />

      <HostingPricingPlanSection items={hostingPackages} />
      <FaqSection items={faqs} />
      <DiscoverMoreSection title={cta.title} description={cta.description} buttonHrefLink={cta.url} />
    </main>
  );
}
