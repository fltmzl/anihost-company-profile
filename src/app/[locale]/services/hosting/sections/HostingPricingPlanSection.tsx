import React from "react";
import HostingPricingPlanCard from "../components/HostingPricingPlanCard";
import { useTranslations } from "next-intl";

type HostingPricingPlanSectionProps = {
  items: HostingPackage[];
};

export default function HostingPricingPlanSection({ items }: HostingPricingPlanSectionProps) {
  const t = useTranslations("HostingSection");

  return (
    <section className="container pb-20">
      <div className="flex flex-col md:flex-row py-14 gap-5 md:gap-20">
        <div className="md:basis-1/2" data-aos="fade-right">
          <h2>{t("title")}</h2>
        </div>
        <div className="md:basis-1/2" data-aos="fade-up">
          <p className="text-xs md:text-sm text-slate-400">{t("description")}</p>
        </div>
      </div>

      <div className="mb-10 flex flex-col md:flex-row md:justify-center gap-5">
        {items.map((item, index) => (
          <HostingPricingPlanCard
            key={item.id}
            headerTitle={item.name}
            headerDescription={item.description}
            items={item.items}
            footerDescription={item.note}
            price={item.price}
            pricingPeriod={item.pricingPeriod}
            variant={index === 1 ? "primary" : "secondary"}
            animationDelay={index * 100}
          />
        ))}
      </div>

      {/* <div className="py-8 text-center">
        <p className="text-sm lg:text-base text-slate-400 max-w-lg mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div> */}
    </section>
  );
}
