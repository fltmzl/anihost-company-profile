import React from "react";
import HostingPricingPlanCard from "../components/HostingPricingPlanCard";

const pricingPlans = [
  {
    headerTitle: "Basic Package",
    headerDescription: "Rutrum nulla sit scelerisque elit eu torquent porttitor elementum ullamcorper",
    features: ["Semper suscipit diam", "Enim torquent ridiculus hac", "Vulputate per dis cras", "Tempus letius posuere at", "Lobortis dignissim orci magnis"],
    price: 40,
    pricingPeriod: "Monthly",
    footerDescription: "*Letius eu feugiat ante placerat cursus si pharetra imperdiet potenti euismod in",
  },
  {
    headerTitle: "Basic Package",
    headerDescription: "Rutrum nulla sit scelerisque elit eu torquent porttitor elementum ullamcorper",
    features: ["Semper suscipit diam", "Enim torquent ridiculus hac", "Vulputate per dis cras", "Tempus letius posuere at", "Lobortis dignissim orci magnis"],
    price: 40,
    pricingPeriod: "Monthly",
    footerDescription: "*Letius eu feugiat ante placerat cursus si pharetra imperdiet potenti euismod in",
  },
  {
    headerTitle: "Basic Package",
    headerDescription: "Rutrum nulla sit scelerisque elit eu torquent porttitor elementum ullamcorper",
    features: ["Semper suscipit diam", "Enim torquent ridiculus hac", "Vulputate per dis cras", "Tempus letius posuere at", "Lobortis dignissim orci magnis"],
    price: 40,
    pricingPeriod: "Monthly",
    footerDescription: "*Letius eu feugiat ante placerat cursus si pharetra imperdiet potenti euismod in",
  },
];

export default function HostingPricingPlanSection() {
  return (
    <section className="container">
      <div className="flex flex-col md:flex-row py-14 gap-5 md:gap-20">
        <div className="md:basis-1/2">
          <h2>Delivering business solutions for the web and mobile world.</h2>
        </div>
        <div className="md:basis-1/2">
          <p className="text-xs md:text-sm text-slate-400">Sociosqu aenean facilisis fermentum aliquam velit sapien. Dictum conubia eget curae massa nunc. Mollis nascetur platea aenean curae mi ultrices primis torquent euismod.</p>
        </div>
      </div>

      <div className="mb-10 flex flex-col md:flex-row md:justify-center gap-5">
        {pricingPlans.map((plan, index) => (
          <HostingPricingPlanCard
            key={index}
            headerTitle={plan.headerTitle}
            headerDescription={plan.headerDescription}
            features={plan.features}
            footerDescription={plan.footerDescription}
            price={plan.price}
            pricingPeriod={plan.pricingPeriod}
            variant={index === 1 ? "primary" : "secondary"}
          />
        ))}
      </div>

      <div className="py-8 text-center">
        <p className="text-sm lg:text-base text-slate-400 max-w-lg mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>
    </section>
  );
}
