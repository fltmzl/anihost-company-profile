import React from "react";
import LargeServiceCard from "../components/LargeServiceCard";

export default function WhatWeDoSection() {
  return (
    <section className="container py-28 px-5">
      <div className="flex flex-col items-center mb-10">
        <h6 className="mb-6">WHAT WE DO</h6>
        <h2 className="max-w-lg text-center">Let us change the way you think about technology.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <LargeServiceCard
          title="Mobile Application Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dignissimos earum iusto qui atque ad optio, assumenda quaerat. Ipsum, velit?"
          imageSrc="/images/mobile-app.png"
        />
        <LargeServiceCard
          title="Web Application Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dignissimos earum iusto qui atque ad optio, assumenda quaerat. Ipsum, velit?"
          imageSrc="/images/mobile-app.png"
        />
        <LargeServiceCard
          title="Digital Marketing & Branding"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dignissimos earum iusto qui atque ad optio, assumenda quaerat. Ipsum, velit?"
          imageSrc="/images/mobile-app.png"
        />
      </div>
    </section>
  );
}
