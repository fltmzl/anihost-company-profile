import { Button } from "@/components/ui/button";
import React from "react";

type DiscoverMoreSectionProps = {
  title: string;
  description: string;
};

export default function DiscoverMoreSection({ description, title }: DiscoverMoreSectionProps) {
  return (
    <section className="min-h-[510px] grid relative place-content-center after:bg-[url('/images/innovative-business-technology.jpg')] after:bg-cover after:content-[''] after:absolute after:inset-0 after:-z-10 after:brightness-[0.4]">
      <div className="space-y-7 text-center py-28 px-5 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl">{title}</h2>
        <p>{description}</p>

        <Button className="text-sm w-fit px-6 py-3">Discover More</Button>
      </div>
    </section>
  );
}
