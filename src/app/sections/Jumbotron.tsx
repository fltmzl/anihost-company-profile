import Image from "next/image";
import React from "react";

export default function Jumbotron() {
  return (
    <section className="px-5 py-10 relative after:content-[''] after:absolute after:inset-0 after:bg-blue-200 after:-z-10 after:bg-[url('/images/bg-jumbotron.jpg')] after:brightness-[0.35] after:bg-cover after:bg-center">
      <div className="lg:flex h-screen max-h-[800px] container items-center">
        <div className="lg:basis-5/12 text-center lg:text-start space-y-6 py-20">
          <h6>START YOUR DIGITAL BUSSINESS</h6>
          <h1 className="text-4xl lg:text-5xl font-bold leading-[1.4]">We make IT simple, faster, and less expensive</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente odio blanditiis dolorem, facere repellat quibusdam dolor excepturi maxime! Iusto quo, in sit fugiat odit placeat.</p>

          {/* <div>
            <button>Get Started</button>
            <button>Learn More</button>
          </div> */}
        </div>
        <div className="lg:basis-7/12 grid place-content-center relative min-h-96">
          <Image src={"/images/imac.png"} alt="imac image" fill={true} className="object-contain" />
        </div>
      </div>
    </section>
  );
}
