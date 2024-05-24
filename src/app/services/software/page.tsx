import PagesTitleHeader from "@/app/components/PagesTitleHeader";
import React from "react";
import DiscoverMoreSection from "@/app/sections/DiscoverMoreSection";
import OurServiceSection from "@/app/sections/OurServiceSection";
import FaqSection from "../sections/FaqSection";
import WhyChooseUsSection from "@/app/sections/WhyChooseUsSection";
import fetcher from "@/lib/fetcher";

const getData = async () => {
  return fetcher({ endpoint: "/pages/serviceSoftware" });
};

export default async function HostingService() {
  const data: ServiceSoftware = await getData();
  const { pageInfo, serviceHero, services, sellingPoints, cta, faqs } = data;

  return (
    <main>
      <PagesTitleHeader title={pageInfo.title} description={pageInfo.description} />

      <OurServiceSection pageHero={serviceHero} items={services} />
      <WhyChooseUsSection items={sellingPoints} />

      <FaqSection items={faqs} />
      <DiscoverMoreSection title={cta.title} description={cta.description} buttonLabel={cta.url} />
    </main>
  );
}
