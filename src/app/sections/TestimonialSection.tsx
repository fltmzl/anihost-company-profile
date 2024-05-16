import React from "react";
import TestimonialCard from "../components/TestimonialCard";

export default function TestimonialSection() {
  return (
    <section className="bg-slate-800 py-16">
      <div className="container">
        <div className="text-center space-y-5">
          <h6 className="tracking-widest">TESTIMONIAL</h6>
          <h2>What they say about us</h2>
          <p className="text-sm text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>

        <div className="w-12 mx-auto border-b-2 border-blue-400 my-10"></div>

        <div className="flex gap-5 overflow-x-scroll custom-scroll pb-5">
          <TestimonialCard name="John Doe" role="Bussiness Manager" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum atque eos reiciendis nostrum odit ipsam magni earum officia rem vero!" />
          <TestimonialCard name="John Doe" role="Bussiness Manager" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum atque eos reiciendis nostrum odit ipsam magni earum officia rem vero!" />
          <TestimonialCard name="John Doe" role="Bussiness Manager" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum atque eos reiciendis nostrum odit ipsam magni earum officia rem vero!" />
          <TestimonialCard name="John Doe" role="Bussiness Manager" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum atque eos reiciendis nostrum odit ipsam magni earum officia rem vero!" />
        </div>
      </div>
    </section>
  );
}
