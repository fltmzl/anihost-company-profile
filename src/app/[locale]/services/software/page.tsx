import React from "react";
import FaqSection from "../sections/FaqSection";
import fetcher from "@/lib/fetcher";
import PagesTitleHeader from "@/app/components/PagesTitleHeader";
import OurServiceSection from "@/app/sections/OurServiceSection";
import WhyChooseUsSection from "@/app/sections/WhyChooseUsSection";
import DiscoverMoreSection from "@/app/sections/DiscoverMoreSection";
import OurProductsSection from "./sections/OurProductsSection";

const getData = async (locale: Locale) => {
  return fetcher({ endpoint: "/pages/serviceSoftware", locale });
};

type HostingServiceProps = Params;

export default async function SoftwareService({ params: { locale } }: HostingServiceProps) {
  const data: ServiceSoftware = await getData(locale);
  const { pageInfo, softwareServices, sellingPoints, cta, faqs } = data;

  return (
    <main>
      <PagesTitleHeader title={pageInfo.title} description={pageInfo.description} />

      <OurProductsSection items={softwareServices} />
      <WhyChooseUsSection items={sellingPoints} />

      <FaqSection items={faqs} />
      <DiscoverMoreSection title={cta.title} description={cta.description} buttonHrefLink={cta.url} />
    </main>
  );
}
