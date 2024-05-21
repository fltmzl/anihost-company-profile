import fetcher from "@/lib/fetcher";
import DiscoverMoreSection from "./sections/DiscoverMoreSection";
import HowItWorkSection from "./sections/HowItWorkSection";
import Jumbotron from "./sections/Jumbotron";
import OurServiceSection from "./sections/OurServiceSection";
import TestimonialSection from "./sections/TestimonialSection";
import WhatWeDoSection from "./sections/WhatWeDoSection";
import WhyChooseUsSection from "./sections/WhyChooseUsSection";
import OurTechnologiesSection from "./sections/OurTechnologiesSection";
import DomainSearch from "./sections/DomainSearch";
import HostingPricingPlanSection from "./services/hosting/sections/HostingPricingPlanSection";

const getData = async () => {
  return fetcher({ endpoint: "/pages/homepage" });
};

export default async function Home() {
  const data: Homepage = await getData();
  const { pageHero, serviceHero, hostingPackages, sellingPoints, workSteps, tools, services, whatWeDo, cta } = data;

  return (
    <main>
      <Jumbotron title={pageHero.title} text={pageHero.text} description={pageHero.description} image={pageHero.image} />
      <DomainSearch />
      <HostingPricingPlanSection items={hostingPackages} />

      <DiscoverMoreSection title={cta[0].title} description={cta[0].description} buttonLabel={cta[0].url} />

      <OurServiceSection pageHero={serviceHero} items={services} />
      <OurTechnologiesSection items={tools} />
      <WhyChooseUsSection items={sellingPoints} />
      <HowItWorkSection items={workSteps} />
      <DiscoverMoreSection title={cta[1].title} description={cta[1].description} buttonLabel={cta[1].url} />
      {/* <TestimonialSection /> */}
    </main>
  );
}
