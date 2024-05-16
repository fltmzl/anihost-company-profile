import Image from "next/image";
import React from "react";

type LargeServiceCard = {
  title: string;
  description: string;
  imageSrc: string;
};

export default function LargeServiceCard({ description, imageSrc, title }: LargeServiceCard) {
  return (
    <div className="flex flex-col justify-between bg-slate-800 rounded-2xl border-2 border-slate-700 hover:border-blue-400 duration-300 px-9 pt-9 w-full md:max-w-lg">
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
