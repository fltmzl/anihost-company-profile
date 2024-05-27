import React from "react";
import { FaLaptopCode } from "react-icons/fa6";
import ServiceCard from "../components/ServiceCard";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { useTranslations } from "next-intl";

type SoftwareServiceListProps = {
  items: ServiceProduct[];
};

export default function SoftwareServiceList({ items }: SoftwareServiceListProps) {
  const t = useTranslations("AllServicesPage");

  return (
    <section className="container py-10">
      <div>
        <div className="py-10">
          <h2 className="mb-3" data-aos="fade-right">
            {t("SoftwareServiceSection.title")}
          </h2>
          <p className="text-sm lg:text-base text-slate-400 max-w-2xl" data-aos="fade-right">
            {t("SoftwareServiceSection.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <ServiceCard key={item.id} title={item.name} description={item.description} iconElement={<FaLaptopCode />} animationDelay={index * 100} />
          ))}
        </div>

        <div className="max-w-xs my-9">
          <Link href="/contact-us#contactForm">
            <Button className="flex items-center justify-center gap-2 group">
              <span>{t("SoftwareServiceSection.button")}</span>
              <span className="inline-block duration-300 group-hover:translate-x-3">
                <FaArrowRightLong />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
