import Image from "next/image";
import React from "react";
import { constants } from "../utils/constants";

type FrameworkCardProps = {
  title: string;
  iconImage: string;
  animationDelay?: number;
};

export default function FrameworkCard({ title, iconImage, animationDelay }: FrameworkCardProps) {
  return (
    <div className="space-y-2 text-center w-full" data-aos="fade-up" data-aos-delay={animationDelay}>
      <div className="bg-slate-700 rounded-full mx-auto size-14 md:size-20 grid place-content-center">
        <Image src={`${constants.IMAGE_BASE_URL}/${iconImage}`} alt={title} width={36} height={36} quality={100} />
      </div>
      <div className="uppercase font-semibold text-xs md:text-base">{title}</div>
    </div>
  );
}
