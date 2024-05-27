import React from "react";
import WhoWeAreSection from "./sections/WhoWeAreSection";
import PagesTitleHeader from "../../components/PagesTitleHeader";
import fetcher from "@/lib/fetcher";
import WhyChooseUsSection from "../../sections/WhyChooseUsSection";

const getData = async (locale: Locale) => {
  return fetcher({ endpoint: "/pages/about", locale });
};

type AboutUsProps = Params;

export default async function AboutUs({ params: { locale } }: AboutUsProps) {
  const data: About = await getData(locale);
  const { pageInfo, pageHero, sellingPoints } = data;

  return (
    <main>
      <PagesTitleHeader title={pageInfo.title} description={pageInfo.description} />

      <WhoWeAreSection text={pageHero.text} title={pageHero.title} description={pageHero.description} image={pageHero.image} />

      <WhyChooseUsSection items={sellingPoints} />
    </main>
  );
}
