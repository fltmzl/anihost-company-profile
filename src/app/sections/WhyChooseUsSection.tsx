import React from "react";
import { MdOutlineSecurity } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { IoHeadsetSharp } from "react-icons/io5";
import WhyChooseUsCard from "../components/WhyChooseUsCard";
import { isNumberOdd } from "@/lib/utils";

const items = [
  {
    title: "Smart & secure system",
    description: "Dui gravida integer commodo cursus ante vehicula lobortis quam dis at tristique.",
    iconElement: <MdOutlineSecurity />,
  },
  {
    title: "Professional team",
    description: "Dui gravida integer commodo cursus ante vehicula lobortis quam dis at tristique.",
    iconElement: <FaUsers />,
  },
  {
    title: "Certified Expert",
    description: "Dui gravida integer commodo cursus ante vehicula lobortis quam dis at tristique.",
    iconElement: <AiFillSafetyCertificate />,
  },
  {
    title: "24/7 Premium Support",
    description: "Dui gravida integer commodo cursus ante vehicula lobortis quam dis at tristique.",
    iconElement: <IoHeadsetSharp />,
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="container pt-20 pb-40 px-5">
      <div className="flex flex-col items-center mb-10">
        <h6 className="mb-6">WHY CHOOSE US</h6>
        <h2 className="max-w-lg text-center">Let us change the way you think about technology.</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <WhyChooseUsCard key={item.title} title={item.title} description={item.description} iconElement={item.iconElement} className={isNumberOdd(index) ? "lg:relative lg:-bottom-16" : ""} />
        ))}
      </div>
    </section>
  );
}
