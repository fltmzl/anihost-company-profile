import Image from "next/image";
import React from "react";

type LargeServiceCard = {
  title: string;
  description: string;
  imageSrc: string;
};

export default function LargeServiceCard({ description, imageSrc, title }: LargeServiceCard) {
  return (
    <div className="flex flex-col gap-5 justify-between bg-slate-800 rounded-2xl border-2 border-slate-700 hover:border-blue-400 transition-all duration-300 px-9 pt-9 w-full" data-aos="fade-up" data-aos-delay="300">
      <div>
        <h3 className="text-blue-500 text-2xl mb-3">{title}</h3>
        <p className="text-sm text-slate-300">{description}</p>
      </div>

      <div className="w-full">
        <Image src={imageSrc} alt={title} width={500} height={500} className="object-contain" />
      </div>
    </div>
  );
}
