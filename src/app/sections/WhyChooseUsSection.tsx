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

type WhyChooseUsSectionProps = {
  items: SellingPoint[];
};

export default function WhyChooseUsSection({ items }: WhyChooseUsSectionProps) {
  return (
    <section className="container pt-20 pb-40">
      <div className="flex flex-col items-center mb-20">
        <h6 className="mb-6" data-aos="fade-up">
          WHY CHOOSE US
        </h6>
        <h2 className="max-w-lg text-center" data-aos="fade-up" data-aos-delay="150">
          Revolutionize your perspective on technology with us.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <WhyChooseUsCard key={item.id} title={item.title} description={item.description} className={isNumberOdd(index) ? "lg:relative lg:-bottom-16" : ""} animationDelay={index * 150} iconElement={item.image} />
        ))}
      </div>
    </section>
  );
}
