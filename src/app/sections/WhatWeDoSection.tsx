import React from "react";
import LargeServiceCard from "../components/LargeServiceCard";
import { constants } from "../utils/constants";

type WhatWeDoSectionProps = {
  items: WhatWeDo[];
};

export default function WhatWeDoSection({ items }: WhatWeDoSectionProps) {
  return (
    <section className="container py-28">
      <div className="flex flex-col items-center mb-10">
        <h6 className="mb-6" data-aos="fade-up" data-aos-delay="150">
          WHAT WE DO
        </h6>
        <h2 className="max-w-lg text-center" data-aos="fade-up">
          Bring your ideas to life. Discover a New Perspective on Technology.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {items.map((item) => (
          <LargeServiceCard key={item.id} title={item.title} description={item.description} imageSrc={`${constants.IMAGE_BASE_URL}/${item.image}`} />
        ))}
      </div>
    </section>
  );
}
