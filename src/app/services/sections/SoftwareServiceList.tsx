import React from "react";
import { FaLaptopCode } from "react-icons/fa6";
import ServiceCard from "../components/ServiceCard";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

const services = [
  {
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ipsam non unde ratione assumenda, deleniti nesciunt laborum! Ipsa, alias illo nam ratione ab earum molestias itaque temporibus eos? Corrupti, ipsum?",
    iconElement: <FaLaptopCode />,
  },
  {
    title: "Technology Consulting & Audit",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ipsam non unde ratione assumenda, deleniti nesciunt laborum! Ipsa, alias illo nam ratione ab earum molestias itaque temporibus eos? Corrupti, ipsum?",
    iconElement: <FaLaptopCode />,
  },
  {
    title: "Software Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ipsam non unde ratione assumenda, deleniti nesciunt laborum! Ipsa, alias illo nam ratione ab earum molestias itaque temporibus eos? Corrupti, ipsum?",
    iconElement: <FaLaptopCode />,
  },
  {
    title: "Deployment & Maintenance",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ipsam non unde ratione assumenda, deleniti nesciunt laborum! Ipsa, alias illo nam ratione ab earum molestias itaque temporibus eos? Corrupti, ipsum?",
    iconElement: <FaLaptopCode />,
  },
];

export default function SoftwareServiceList() {
  return (
    <section className="container py-10">
      <div>
        <div className="py-10">
          <h2 className="mb-3">Software house services</h2>
          <p className="text-sm lg:text-base text-slate-400 max-w-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo iste architecto perferendis officia fugit animi quaerat quam, minima et dignissimos esse illum velit rerum tempore maiores error recusandae optio ipsam.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} iconElement={service.iconElement} />
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
