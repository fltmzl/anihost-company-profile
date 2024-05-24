import React from "react";
import { FaLaptopCode } from "react-icons/fa6";
import ServiceCard from "../components/ServiceCard";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

type SoftwareServiceListProps = {
  items: ServiceProduct[];
};

export default function SoftwareServiceList({ items }: SoftwareServiceListProps) {
  return (
    <section className="container py-10">
      <div>
        <div className="py-10">
          <h2 className="mb-3" data-aos="fade-right">
            Software house services
          </h2>
          <p className="text-sm lg:text-base text-slate-400 max-w-2xl" data-aos="fade-right">
            Discover our comprehensive software house services, tailored to transform your ideas into innovative solutions. From development to deployment, we deliver high-quality software to meet your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <ServiceCard key={item.id} title={item.name} description={item.description} iconElement={<FaLaptopCode />} animationDelay={index * 100} />
          ))}
        </div>

        <div className="max-w-xs my-9">
          <Button className="flex items-center gap-2 group">
            Discuss your software needs{" "}
            <span className="inline-block duration-300 group-hover:translate-x-3">
              <FaArrowRightLong />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
