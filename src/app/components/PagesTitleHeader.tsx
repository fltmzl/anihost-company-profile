import React from "react";

type PagesTitleHeaderProps = {
  title: string;
  description: string;
};

export default function PagesTitleHeader({ title, description }: PagesTitleHeaderProps) {
  return (
    <div className="flex justify-center min-h-[200px] md:min-h-[430px] bg-[url('/images/bg-page-info.webp')] bg-cover bg-bottom bg-blue-950">
      <div className="container space-y-4 text-center max-w-6xl pt-28 md:pt-52 pb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-aos="fade-up">
          {title}
        </h1>
        <p className="text-sm lg:text-base" data-aos="fade-up" data-aos-delay="150">
          {description}
        </p>
      </div>
    </div>
  );
}
