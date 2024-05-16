import React from "react";
import { twMerge } from "tailwind-merge";

type MediumServiceCardProps = {
  iconElement: React.ReactElement;
  title: string;
  description: string;
  bgColor?: string;
  colSpanWhenSmScreen?: "2" | "3" | "4";
};

export default function MediumServiceCard({ title, description, iconElement, bgColor = "bg-blue-600", colSpanWhenSmScreen }: MediumServiceCardProps) {
  return (
    <div className={twMerge("rounded-2xl p-8 border-[1.5px] border-slate-700 duration-300 hover:border-blue-500", bgColor, `sm:col-span-${colSpanWhenSmScreen}`, colSpanWhenSmScreen && "lg:col-span-1")}>
      <div className="text-4xl mb-16">{iconElement}</div>
      <div>
        <span className="text-xl font-semibold mb-3 inline-block">{title}</span>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
