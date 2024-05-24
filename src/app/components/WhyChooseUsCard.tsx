import React from "react";
import { twMerge } from "tailwind-merge";
import { MdOutlineSecurity } from "react-icons/md";
import Image from "next/image";
import { constants } from "../utils/constants";

type WhyChooseUsCardProps = {
  iconElement?: string | React.ReactElement | any;
  title: string;
  description: string;
  className?: string;
  animationDelay?: number;
};

export default function WhyChooseUsCard({ iconElement = <MdOutlineSecurity />, description, title, className, animationDelay }: WhyChooseUsCardProps) {
  return (
    <div className={twMerge("p-7 text-center bg-slate-700 rounded-2xl", className)} data-aos="zoom-out-down" data-aos-delay={animationDelay}>
      <div className="flex justify-center mb-5">
        <div className="text-3xl rounded-full p-4 bg-blue-500 mx-auto relative size-16">
          <Image src={`${constants.IMAGE_BASE_URL}/${iconElement}`} alt={title} fill className="text-white p-4" />
        </div>
      </div>
      <div>
        <h3 className="text-base md:text-lg mb-3 font-semibold">{title}</h3>
        <p className="text-slate-400 text-xs lg:text-sm">{description}</p>
      </div>
    </div>
  );
}
