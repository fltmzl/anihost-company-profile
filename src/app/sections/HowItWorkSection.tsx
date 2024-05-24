import React from "react";
import HowItWorkCard from "../components/HowItWorkCard";
import { isNumberOdd } from "@/lib/utils";
import HowItWorkCardWithArrow from "../components/HowItWorkCardWithArrow";
import AnimationImage from "../components/AnimationImage";

type HowItWorkSectionProps = {
  items: WorkStep[];
};

export default function HowItWorkSection({ items }: HowItWorkSectionProps) {
  const getArrowPosition = (index: number) => {
    switch (index) {
      case 0:
        return "bottomToRight";
      case 1:
        return "right";
      case 2:
        return "left";
      case 3:
        return "bottomToLeft";
      case 4:
        return "none";
      default:
        return "none";
    }
  };

  return (
    <section className="container py-10">
      <div className="text-center space-y-5">
        <h2 data-aos="fade-up">How it works</h2>
        <p className="text-sm text-slate-400 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="150">
          Experience a new perspective on technology with our approach. We&apos;ll guide you from your initial ideas to an amazing website, transforming your vision into reality with expert support every step of the way.
        </p>
      </div>

      <div className="lg:hidden mt-10 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 py-5 lg:py-16">
        {items.map((item, index) => (
          <HowItWorkCard key={item.id} title={item.title} number={item.order} description={item.description} variant={isNumberOdd(index) ? "secondary" : "primary"} animationDelay={index * 100} className="rounded-2xl" />
        ))}
      </div>

      <div className="space-y-16 my-20 hidden lg:block">
        <div className="flex flex-row gap-5">
          {items.map((item, index) => {
            if (index <= 1) {
              return (
                <HowItWorkCardWithArrow
                  key={item.id}
                  title={item.title}
                  number={item.order}
                  description={item.description}
                  variant={isNumberOdd(index) ? "secondary" : "primary"}
                  animationDelay={index * 100}
                  className="rounded-2xl"
                  arrowPosition={getArrowPosition(index)}
                />
              );
            }
          })}
        </div>

        <div className="flex justify-between items-center">
          <div className="size-80 pl-10">
            <AnimationImage jsonUrl="/animations/cat-anim.json" />
          </div>

          {items.map((item, index) => {
            if (index === 2) {
              return (
                <HowItWorkCardWithArrow
                  key={item.id}
                  title={item.title}
                  number={item.order}
                  description={item.description}
                  variant={isNumberOdd(index) ? "secondary" : "primary"}
                  animationDelay={index * 100}
                  className="rounded-2xl"
                  arrowPosition={getArrowPosition(index)}
                />
              );
            }
          })}
        </div>

        <div className="flex flex-row-reverse justify-end gap-5">
          {items.map((item, index) => {
            if (index > 2 && index <= 4) {
              return (
                <HowItWorkCardWithArrow
                  key={item.id}
                  title={item.title}
                  number={item.order}
                  description={item.description}
                  variant={isNumberOdd(index) ? "secondary" : "primary"}
                  animationDelay={index * 100}
                  className="rounded-2xl"
                  arrowPosition={getArrowPosition(index)}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
