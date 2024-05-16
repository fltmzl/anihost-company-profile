import React from "react";

type PagesTitleHeaderProps = {
  title: string;
  description: string;
};

export default function PagesTitleHeader({ title, description }: PagesTitleHeaderProps) {
  return (
    <div className="flex justify-center min-h-[200px] md:min-h-[430px] bg-[url('/images/bg-img.png')] bg-cover bg-blue-950">
      <div className="container space-y-4 text-center max-w-xl pt-28 md:pt-52 pb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
        <p className="text-xl lg:text-2xl">{description}</p>
      </div>
    </div>
  );
}
