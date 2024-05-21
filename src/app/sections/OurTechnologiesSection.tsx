import React from "react";
import { TbBrandLaravel } from "react-icons/tb";
import FrameworkCard from "../components/FrameworkCard";

const frameworks = [
  {
    title: "laravel",
    iconElement: <TbBrandLaravel />,
  },
  {
    title: "next js",
    iconElement: <TbBrandLaravel />,
  },
  {
    title: "react js",
    iconElement: <TbBrandLaravel />,
  },
  {
    title: "flask",
    iconElement: <TbBrandLaravel />,
  },
  {
    title: "php",
    iconElement: <TbBrandLaravel />,
  },
  {
    title: "javascript",
    iconElement: <TbBrandLaravel />,
  },
  {
    title: "express js",
    iconElement: <TbBrandLaravel />,
  },
  {
    title: "nest js",
    iconElement: <TbBrandLaravel />,
  },
  {
    title: "hapi js",
    iconElement: <TbBrandLaravel />,
  },
  {
    title: "laravel",
    iconElement: <TbBrandLaravel />,
  },
];

type OurTechnologiesSectionProps = {
  items: Tool[];
};

export default function OurTechnologiesSection({ items }: OurTechnologiesSectionProps) {
  return (
    <section className="container">
      <div className="py-10">
        <div className="text-center">
          <h6 className="uppercase mb-5" data-aos="fade-up">
            Technologies
          </h6>
          <h2 data-aos="fade-up" data-aos-delay="100">
            Our Technologies & Frameworks
          </h2>
        </div>

        <div className="mb-5 mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-10">
          {items.map((framework, index) => (
            <FrameworkCard key={framework.id} title={framework.name} iconImage={framework.image} animationDelay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
