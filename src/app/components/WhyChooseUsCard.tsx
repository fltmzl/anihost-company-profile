import React from "react";
import { twMerge } from "tailwind-merge";

type WhyChooseUsCardProps = {
  iconElement: React.ReactElement;
  title: string;
  description: string;
  className?: string;
};

export default function WhyChooseUsCard({ iconElement, description, title, className }: WhyChooseUsCardProps) {
  return (
    <div className={twMerge("p-7 text-center bg-slate-700 rounded-2xl", className)}>
      <div className="flex justify-center mb-5">
        <div className="text-3xl rounded-full p-4 bg-blue-500 mx-auto">{iconElement}</div>
      </div>
      <div>
        <h3 className="text-base md:text-lg mb-3 font-semibold">{title}</h3>
        <p className="text-slate-400 text-xs lg:text-sm">{description}</p>
      </div>
    </div>
  );
}
