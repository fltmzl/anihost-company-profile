import React from "react";
import { twMerge } from "tailwind-merge";

type HostingPricingPlanCardProps = {
  headerTitle: string;
  headerDescription: string;
  price: number;
  pricingPeriod: string;
  features: string[];
  footerDescription: string;
  variant?: "primary" | "secondary";
  animationDelay?: number;
};

export default function HostingPricingPlanCard({ headerTitle, features, footerDescription, headerDescription, price, pricingPeriod, variant = "secondary", animationDelay }: HostingPricingPlanCardProps) {
  return (
    <div
      className="w-full md:max-w-sm rounded-2xl overflow-hidden bg-gradient-to-r from-blue-700 to-blue-500 border duration-300 border-slate-700 hover:border-blue-400 hover:scale-105 hover:shadow-2xl"
      data-aos="fade-up"
      data-aos-delay={animationDelay}
    >
      <div className="py-5 px-3 text-center">
        <h3 className="text-xl lg:text-2xl font-semibold mb-3">{headerTitle}</h3>
        <p className="text-xs lg:text-sm">{headerDescription}</p>
      </div>

      <div className={twMerge("text-center px-5 py-6", variant === "primary" ? "bg-gradient-to-br from-blue-700 to-blue-500" : "bg-slate-800 ")}>
        <h4 className={twMerge("text-3xl lg:text-4xl font-bold", variant === "primary" ? "text-white" : "text-blue-500")}>Rp{price.toLocaleString("id-ID")}</h4>
        <p className={twMerge("text-xs lg:text-sm uppercase font-semibold", variant === "primary" ? "text-white" : "text-slate-400")}>{pricingPeriod}</p>

        <div className="mt-5">
          <ul className={twMerge("text-center divide-y", variant === "primary" ? "divide-white/20" : "divide-slate-700")}>
            {features.map((feature) => (
              <li key={feature} className={twMerge("text-sm lg:text-base py-3", variant === "primary" ? "text-white" : "text-slate-400")}>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <button className={twMerge("button-ghost w-full my-5", variant === "primary" ? "bg-white text-blue-600" : "bg-blue-600")}>Get Started</button>

        <p className={twMerge("text-[10px] md:text-xs", variant === "primary" ? "text-white" : "text-slate-400")}>{footerDescription}</p>
      </div>
    </div>
  );
}
