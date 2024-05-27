import React from "react";
import WhyChooseUsCard from "../components/WhyChooseUsCard";
import { isNumberOdd } from "@/lib/utils";
import { useTranslations } from "next-intl";

type WhyChooseUsSectionProps = {
  items: SellingPoint[];
};

export default function WhyChooseUsSection({ items }: WhyChooseUsSectionProps) {
  const t = useTranslations("WhyChooseUsSection");

  return (
    <section className="container pt-20 pb-40">
      <div className="flex flex-col items-center mb-20">
        <h6 className="mb-6" data-aos="fade-up">
          {t("title")}
        </h6>
        <h2 className="max-w-xl text-center" data-aos="fade-up" data-aos-delay="150">
          {t("description")}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <WhyChooseUsCard key={item.id} title={item.title} description={item.description} className={isNumberOdd(index) ? "lg:relative lg:-bottom-16" : ""} animationDelay={index * 150} iconElement={item.image} />
        ))}
      </div>
    </section>
  );
}
