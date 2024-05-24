import Image from "next/image";
import React from "react";

type SmallServiceCardProps = {
  title: string;
  description: string;
  iconElement: React.ReactNode | string | any;
  animationDelay?: number;
};

export default function SmallServiceCard({ title, description, iconElement, animationDelay }: SmallServiceCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-5 md:items-center" data-aos="fade-right" data-aos-delay={animationDelay}>
      <div>
        <div className="size-14 md:size-[80px] grid place-content-center bg-transparent rounded-full text-4xl relative">
          <div className="size-20">{iconElement}</div>
          {/* <Image src={iconElement} alt={title} fill /> */}
          {/* <Image src="/icons/home-rocket.svg" alt={title} fill /> */}
        </div>
      </div>
      <div>
        <span className="text-lg font-bold mb-2 inline-block">{title}</span>
        <p className="text-sm text-slate-400">{description}</p>
      </div>
    </div>
  );
}
