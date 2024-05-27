import { useTranslations } from "next-intl";
import React from "react";
import OurProductItem from "../components/OurProductItem";

type OurProductsSectionProps = {
  items: SoftwareProduct[];
};

export default function OurProductsSection({ items }: OurProductsSectionProps) {
  const t = useTranslations("OurProductsSection");

  return (
    <section className="container py-10">
      <div className="text-center mt-10">
        <h2 className="text-3xl">{t("title")}</h2>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-16 px-0 lg:px-10 max-w-5xl mx-auto">
        {items.map((item, index) => (
          <OurProductItem key={item.id} title={item.title} icon={item.icon} animationDelay={index * 70} />
        ))}
      </div>
    </section>
  );
}
