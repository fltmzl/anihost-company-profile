import React from "react";
import { twMerge } from "tailwind-merge";

type HowItWorkCardProps = {
  title: string;
  description: string;
  variant?: "primary" | "secondary";
  number?: number;
  className?: string;
  animationDelay?: number;
};

export default function HowItWorkCard({ title, variant = "primary", description, number = 1, animationDelay, className }: HowItWorkCardProps) {
  return (
    <div className={twMerge("p-7", variant === "primary" ? "bg-gradient-to-br from-blue-700 to-blue-500" : "bg-slate-800 ", className)} data-aos="fade-up" data-aos-delay={animationDelay}>
      <div className="pb-10">
        <div
          className={twMerge(
            "inline-block px-[10px] py-1 text-[11px] font-semibold border-2 border-blue-500 rounded-md relative after:content-[''] after:absolute after:bg-slate-300 after:w-full after:h-full after:top-1.5 after:-left-1.5 after:-z-10 after:rounded-sm",
            variant === "primary" ? "bg-white text-blue-600" : "bg-blue-600"
          )}
        >
          {number}
        </div>
      </div>

      <div className="space-y-3">
        <span className="font-semibold lg:text-xl">{title}</span>
        <p className={twMerge("text-sm", variant === "primary" ? "text-white" : "text-slate-400")}>{description}</p>
      </div>
    </div>
  );
}
