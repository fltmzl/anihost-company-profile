import { constants } from "@/app/utils/constants";
import Image from "next/image";
import React from "react";

type OurProductItemProps = {
  title: string;
  icon: string;
  animationDelay?: number;
};

export default function OurProductItem({ title, icon, animationDelay }: OurProductItemProps) {
  return (
    <div className="flex items-center justify-start gap-5 rounded-2xl" data-aos="fade-right" data-aos-delay={animationDelay}>
      <div className="basis-2/12">
        <Image src={`${constants.IMAGE_BASE_URL}/${icon}`} alt={title} width={60} height={60} />
      </div>
      <div className="basis-full">
        <p className="font-semibold text-slate-300">{title}</p>
      </div>
    </div>
  );
}
