import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import { constants } from "../utils/constants";
import AnimationImage from "../components/AnimationImage";

type JumbotronProps = { title: string; description: string; text: string; image: string };

export default function Jumbotron({
  title = "SECTION TITLE",
  text = "Page Hero Tagline",
  description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, distinctio atque? Dolorem enim, voluptate, asperiores maxime esse dicta praesentium officia nostrum iusto numquam at. Minima.",
  image = "/images/imac.png",
}: JumbotronProps) {
  return (
    <section className={`px-5 py-10 relative after:content-[''] after:absolute after:inset-0 after:bg-blue-200 after:-z-10 after:bg-[url('/images/bg-jumbotron-3.jpg')] after:brightness-[0.25] after:bg-cover after:bg-center`}>
      <div className="lg:flex lg:gap-10 min-h-[650px] lg:h-screen lg:max-h-[800px] container items-center">
        <div className="lg:basis-5/12 text-center lg:text-start space-y-8 pt-20 pb-10 lg:pb-20">
          <h6 data-aos="fade-up" data-aos-delay="0">
            {title}
          </h6>
          <h1 data-aos="fade-up" data-aos-delay="200" className="text-4xl lg:text-5xl font-bold leading-[1.4]">
            {text}
          </h1>
          <p data-aos="fade-up" data-aos-delay="300" className="text-sm">
            {description}
          </p>

          <div data-aos="fade-up">
            <a href="#">
              <Button className="lg:w-fit">Get Started</Button>
            </a>
          </div>
        </div>

        <div className="lg:basis-7/12 grid place-content-center relative min-h-96">
          <AnimationImage jsonUrl="/animations/jumbotron-anim.json" />
        </div>
      </div>
    </section>
  );
}
