"use client";

import React from "react";
import { TbBrandLaravel } from "react-icons/tb";
import FrameworkCard from "../components/FrameworkCard";
import { useTranslations } from "next-intl";
import Slider from "react-slick";
import useResponsive from "@/app/hooks/useResponsive";

type OurTechnologiesSectionProps = {
  items: Tool[];
};

export default function OurTechnologiesSection({ items }: OurTechnologiesSectionProps) {
  const t = useTranslations("TechnologiesSection");
  const { isMobile } = useResponsive();

  return (
    <section className="container">
      <div className="py-10">
        <div className="text-center">
          <h6 className="uppercase mb-5" data-aos="fade-up">
            {t("title")}
          </h6>
          <h2 data-aos="fade-up" data-aos-delay="100">
            {t("description")}
          </h2>
        </div>

        {/* <div className="mb-5 mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-10"> */}
        <div className="mb-14 mt-20">
          <Slider infinite arrows={false} speed={500} slidesToShow={isMobile ? 3 : 5} slidesToScroll={1} autoplay autoplaySpeed={2000}>
            {items.map((framework, index) => (
              <FrameworkCard key={framework.id} title={framework.name} iconImage={framework.image} animationDelay={index * 100} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
