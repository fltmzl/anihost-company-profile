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

export default function OurTechnologiesSection() {
  return (
    <section className="container">
      <div className="py-10">
        <div className="text-center">
          <h6 className="uppercase mb-5">Technologies</h6>
          <h2>Our Technologies & Frameworks</h2>
        </div>

        <div className="mb-5 mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-10">
          {frameworks.map((framework) => (
            <FrameworkCard key={framework.title} title={framework.title} iconElement={framework.iconElement} />
          ))}
        </div>
      </div>
    </section>
  );
}
