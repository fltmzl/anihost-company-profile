import React from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  iconElement: React.ReactElement;
  animationDelay?: number;
};

export default function ServiceCard({ title, description, iconElement, animationDelay }: ServiceCardProps) {
  return (
    <div className="p-8 rounded-2xl bg-slate-800 duration-300 group hover:bg-blue-700" data-aos="fade-up" data-aos-delay={animationDelay}>
      <div className="text-3xl w-fit mb-8 duration-300 group-hover:scale-150">{iconElement}</div>

      <div>
        <h3 className="font-semibold mb-3 uppercase">{title}</h3>
        <p className="text-slate-400 text-xs md:text-sm duration-300 group-hover:text-slate-200">{description}</p>
      </div>
    </div>
  );
}
