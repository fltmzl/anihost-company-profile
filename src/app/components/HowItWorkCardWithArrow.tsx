import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

type HowItWorkCardProps = {
  title: string;
  description: string;
  variant?: "primary" | "secondary";
  number?: number;
  className?: string;
  animationDelay?: number;
  arrowPosition?: "bottomToRight" | "right" | "left" | "bottomToLeft" | "none";
  imageIconUrl: string;
};

export default function HowItWorkCardWithArrow({ title, variant = "primary", description, number = 1, animationDelay, className, arrowPosition = "bottomToRight", imageIconUrl }: HowItWorkCardProps) {
  return (
    <div className={twMerge(arrowPosition === "right" && "flex items-end -mb-24", arrowPosition === "left" && "flex items-end", arrowPosition === "bottomToLeft" && "flex flex-col items-start -mt-24")}>
      <div className={twMerge("-rotate-[20deg] xl:rotate-0", arrowPosition !== "left" && "hidden")} data-aos="fade-up">
        <Image src="/images/arrow-top-right-down.svg" alt="arrow" width={140} height={30} />
      </div>

      <div className={twMerge("p-7 lg:w-[400px] xl:w-[450px] flex gap-5", className)} data-aos="fade-up" data-aos-delay={animationDelay}>
        <div className="pb-10">
          {/* <div
            className={twMerge(
              "inline-block px-[10px] py-1 text-[11px] font-semibold border-2 border-blue-500 rounded-md relative after:content-[''] after:absolute after:bg-slate-300 after:w-full after:h-full after:top-1.5 after:-left-1.5 after:-z-10 after:rounded-sm",
              variant === "primary" ? "bg-white text-blue-600" : "bg-blue-600"
            )}
          >
            {number}
          </div> */}
          <Image src={imageIconUrl} alt="test" width={250} height={250} />
        </div>

        <div className="space-y-3">
          <span className="font-semibold lg:text-lg">{title}</span>
          <p className={twMerge("text-xs text-slate-400")}>{description}</p>
        </div>
      </div>

      <div className={twMerge("flex justify-end", arrowPosition !== "bottomToRight" && "hidden")} data-aos="fade-up">
        <Image src="/images/arrow-top-right.svg" alt="arrow" width={140} height={30} />
      </div>

      <div className={twMerge("flex justify-end", arrowPosition !== "bottomToLeft" && "hidden")} data-aos="fade-up">
        <Image src="/images/arrow-right-left.svg" alt="arrow" width={140} height={30} />
      </div>

      <div className={twMerge("", arrowPosition !== "right" && "hidden")} data-aos="fade-up">
        <Image src="/images/arrow-top-down.svg" alt="arrow" width={140} height={30} />
      </div>
    </div>
  );
}
