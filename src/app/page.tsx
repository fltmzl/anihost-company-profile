import DiscoverMoreSection from "./sections/DiscoverMoreSection";
import HowItWorkSection from "./sections/HowItWorkSection";
import Jumbotron from "./sections/Jumbotron";
import OurServiceSection from "./sections/OurServiceSection";
import TestimonialSection from "./sections/TestimonialSection";
import WhatWeDoSection from "./sections/WhatWeDoSection";

export default function Home() {
  return (
    <main className="">
      <Jumbotron />
      <WhatWeDoSection />
      <DiscoverMoreSection
        title="Delivering IT solutions that enable you to work smarter"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti placeat tenetur dolore est dolores alias aliquid corrupti veniam itaque exercitationem!"
      />
      <OurServiceSection />
      <HowItWorkSection />
      <TestimonialSection />
      <DiscoverMoreSection
        title="Our performance is your success. Our passion is innovation. Our expertise is unmatched. We get you more"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
    </main>
  );
}
