import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function WhoWeAreSection() {
  return (
    <section className="container flex flex-col md:flex-row pt-10 lg:pt-32 pb-20 gap-5 md:gap-0">
      <div className="md:basis-1/2 p-5 space-y-5">
        <h6>WHO WE ARE</h6>
        <h2 className="text-2xl md:text-3xl lg:text-4xl">Delivering IT solutions that enable you to work smarter.</h2>
        <p className="text-sm md:text-base text-slate-400">
          Parturient a tempor nam viverra luctus rhoncus taciti hac. Sapien mattis eu luctus montes volutpat nec odio. Posuere suspendisse commodo tempus molestie quis praesent curae sagittis placerat ridiculus tellus.
        </p>
        <Button className="w-fit">Learn More</Button>
      </div>

      <div className="md:basis-1/2 relative aspect-video">
        <Image src="/images/about-img1.jpg" alt="about-us" fill className="rounded-2xl object-cover" />
      </div>
    </section>
  );
}
