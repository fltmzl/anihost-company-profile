import React from "react";
import HowItWorkCard from "../components/HowItWorkCard";

export default function HowItWorkSection() {
  return (
    <section className="container py-10">
      <div className="text-center space-y-5">
        <h2>How it works</h2>
        <p className="text-sm text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vero minus sequi voluptatem qui voluptatum et voluptates pariatur dicta quia.afa</p>
      </div>

      <div className="mt-10 grid md:gap-y-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-5 lg:py-16">
        <HowItWorkCard
          title="Discover the product"
          number={1}
          description="Leo himenaeos penatibus magnis platea nulla senectus adipiscing ad imperdiet quam facilisis"
          variant="secondary"
          className="rounded-t-2xl md:rounded-b-2xl md:rounded-tr-none"
        />

        <HowItWorkCard
          title="Free Consultations"
          number={2}
          description="Leo himenaeos penatibus magnis platea nulla senectus adipiscing ad imperdiet quam facilisis"
          className="md:rounded-t-2xl md:rounded-br-2xl md:relative md:-top-12 lg:rounded-br-none"
        />

        <HowItWorkCard
          title="Wireframe & Production"
          number={3}
          description="Leo himenaeos penatibus magnis platea nulla senectus adipiscing ad imperdiet quam facilisis"
          variant="secondary"
          className="md:rounded-b-2xl md:rounded-tl-2xl md:relative md:-bottom-12 lg:bottom-0 lg:rounded-tl-none"
        />

        <HowItWorkCard
          title="Prototype App"
          number={4}
          description="Leo himenaeos penatibus magnis platea nulla senectus adipiscing ad imperdiet quam facilisis"
          className="rounded-b-2xl md:rounded-t-2xl md:rounded-bl-none lg:relative lg:-top-12"
        />
      </div>
    </section>
  );
}
