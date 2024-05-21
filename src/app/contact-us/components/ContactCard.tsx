import React from "react";
import { twMerge } from "tailwind-merge";

type ContactCardProps = {
  title: string;
  description: string;
  secondDescription?: string;
  iconElement: React.ReactElement;
  variant?: "primary" | "secondary";
  animationDelay?: number;
};

export default function ContactCard({ title, description, secondDescription, iconElement, variant = "primary", animationDelay }: ContactCardProps) {
  return (
    <div className={twMerge("w-full lg:max-w-sm rounded-2xl p-8", variant === "primary" ? "bg-gradient-to-br from-blue-500 to-blue-700" : "bg-slate-800")} data-aos="fade-up" data-aos-delay={animationDelay}>
      <div className={twMerge("text-4xl mb-7 md:mb-16", variant === "primary" ? "text-white" : "text-blue-500")}>{iconElement}</div>

      <div>
        <h3 className="text-base lg:text-xl font-semibold mb-2">{title}</h3>
        <p className={twMerge("text-sm", variant === "primary" ? "text-white" : "text-slate-400")}>{description}</p>
        <p className={twMerge("text-sm", variant === "primary" ? "text-white" : "text-slate-400")}>{secondDescription}</p>
      </div>
    </div>
  );
}
