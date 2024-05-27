import { constants } from "@/app/utils/constants";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

type WhoWeAreSectionProps = {
  title: string;
  text: string;
  description: string;
  image: string;
};

export default function WhoWeAreSection({ title, text, description, image }: WhoWeAreSectionProps) {
  const t = useTranslations("WhoWeAreSection");

  return (
    <section className="container flex flex-col md:flex-row pt-10 lg:pt-32 pb-20 gap-5 md:gap-0">
      <div className="md:basis-1/2 p-5 lg:pr-10 space-y-5" data-aos="fade-right">
        <h6>{title}</h6>
        <h2 className="text-2xl md:text-3xl lg:text-4xl">{text}</h2>
        <p className="text-sm md:text-base text-slate-400">{description}</p>
        <Button className="w-fit">{t("button")}</Button>
      </div>

      <div className="md:basis-1/2 relative aspect-video" data-aos="fade-up">
        <Image src={`${constants.IMAGE_BASE_URL}/${image}`} alt="about-us" fill className="bg-slate-700 rounded-2xl object-cover object-left" />
      </div>
    </section>
  );
}
