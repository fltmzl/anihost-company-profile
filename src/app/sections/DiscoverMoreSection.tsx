import { Button } from "@/components/ui/button";
import React from "react";

type DiscoverMoreSectionProps = {
  title: string;
  description: string;
  buttonLabel?: string;
};

export default function DiscoverMoreSection({ description, title, buttonLabel = "Discover More" }: DiscoverMoreSectionProps) {
  return (
    <section className="min-h-[510px] grid relative place-content-center after:bg-[url('/images/bg-jumbotron-1.jpg')] after:bg-center after:bg-cover after:content-[''] after:absolute after:inset-0 after:-z-10 after:brightness-[0.3]">
      <div className="space-y-7 text-center py-28 px-5 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl" data-aos="zoom-in-up">
          {title}
        </h2>
        <p data-aos="zoom-in-down">{description}</p>

        <Button className="text-sm w-fit px-6 py-3" data-aos="fade-up">
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}
