import React from "react";
import { HiServerStack } from "react-icons/hi2";
import ServiceCard from "../components/ServiceCard";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

type HostingServiceListProps = {
  items: ServiceProduct[];
};

export default function HostingServiceList({ items }: HostingServiceListProps) {
  return (
    <section className="container py-10">
      <div>
        <div className="py-10">
          <h2 className="mb-3" data-aos="fade-right">
            Hosting services
          </h2>
          <p className="text-sm lg:text-base text-slate-400 max-w-2xl" data-aos="fade-right">
            Explore our reliable and affordable hosting services designed to meet your website&apos;s needs. From shared hosting to dedicated servers, we provide the perfect solution for every stage of your online journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <ServiceCard key={item.id} title={item.name} description={item.description} iconElement={<HiServerStack />} animationDelay={index * 100} />
          ))}
        </div>

        <div className="max-w-xs my-9">
          <Button className="flex items-center gap-2 group">
            Discuss your hosting needs{" "}
            <span className="inline-block duration-300 group-hover:translate-x-3">
              <FaArrowRightLong />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
