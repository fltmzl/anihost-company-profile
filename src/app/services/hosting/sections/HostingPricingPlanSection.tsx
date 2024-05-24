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

type HostingPricingPlanSectionProps = {
  items: HostingPackage[];
};

export default function HostingPricingPlanSection({ items }: HostingPricingPlanSectionProps) {
  return (
    <section className="container pb-20">
      <div className="flex flex-col md:flex-row py-14 gap-5 md:gap-20">
        <div className="md:basis-1/2" data-aos="fade-right">
          <h2>Delivering business solutions for the web and mobile world.</h2>
        </div>
        <div className="md:basis-1/2" data-aos="fade-up">
          <p className="text-xs md:text-sm text-slate-400">
            Explore our reliable and affordable hosting services designed to meet your website&apos;s needs. From shared hosting to dedicated servers, we provide the perfect solution for every stage of your online journey.
          </p>
        </div>
      </div>

      <div className="mb-10 flex flex-col md:flex-row md:justify-center gap-5">
        {items.map((item, index) => (
          <HostingPricingPlanCard
            key={item.id}
            headerTitle={item.name}
            headerDescription="Rutrum nulla sit scelerisque elit eu torquent porttitor elementum ullamcorper"
            features={["Semper suscipit diam", "Enim torquent ridiculus hac", "Vulputate per dis cras", "Tempus letius posuere at", "Lobortis dignissim orci magnis"]}
            footerDescription="*Letius eu feugiat ante placerat cursus si pharetra imperdiet potenti euismod in"
            price={item.price}
            pricingPeriod="Monthly"
            variant={index === 1 ? "primary" : "secondary"}
            animationDelay={index * 100}
          />
        ))}
      </div>

      {/* <div className="py-8 text-center">
        <p className="text-sm lg:text-base text-slate-400 max-w-lg mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div> */}
    </section>
  );
}
