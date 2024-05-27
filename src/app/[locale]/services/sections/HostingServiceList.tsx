import React from "react";
import { HiServerStack } from "react-icons/hi2";
import ServiceCard from "../components/ServiceCard";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { useTranslations } from "next-intl";

type HostingServiceListProps = {
  items: ServiceProduct[];
};

export default function HostingServiceList({ items }: HostingServiceListProps) {
  const t = useTranslations("AllServicesPage");

  return (
    <section className="container py-10">
      <div>
        <div className="py-10">
          <h2 className="mb-3" data-aos="fade-right">
            {t("HostingServiceSection.title")}
          </h2>
          <p className="text-sm lg:text-base text-slate-400 max-w-2xl" data-aos="fade-right">
            {t("HostingServiceSection.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <ServiceCard key={item.id} title={item.name} description={item.description} iconElement={<HiServerStack />} animationDelay={index * 100} />
          ))}
        </div>

        <div className="max-w-xs my-9">
          <Link href="/contact-us#contactForm">
            <Button className="flex items-center justify-center gap-2 group">
              <span>{t("HostingServiceSection.button")}</span>
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
