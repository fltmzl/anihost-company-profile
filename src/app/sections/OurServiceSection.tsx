import Image from "next/image";
import React from "react";
import SmallServiceCard from "../components/SmallServiceCard";
import { PiGlobeBold } from "react-icons/pi";
import { FaLightbulb } from "react-icons/fa6";
import { FaLaptopCode, FaPencilRuler } from "react-icons/fa";
import MediumServiceCard from "../components/MediumServiceCard";
import { MdLeaderboard, MdSecurity } from "react-icons/md";
import HomeDiscoveryIcon from "@/assets/icons/HomeDiscoveryIcon";
import HomeAftercareIcon from "@/assets/icons/HomeAftercareIcon";
import HomeRocketIcon from "@/assets/icons/HomeRocketIcon";

type OurServiceSectionProps = {
  pageHero: PageHero;
  items: Service[];
};

export default function OurServiceSection({ items, pageHero }: OurServiceSectionProps) {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <HomeDiscoveryIcon />;
        return "/icons/home-discovery.svg";
      case 1:
        return <HomeAftercareIcon />;
        return "/icons/home-aftercare.svg";
      case 2:
        return <HomeRocketIcon />;
        return "/icons/home-rocket.svg";
      default:
        return <HomeDiscoveryIcon />;
        return "/icons/home-discovery.svg";
    }
  };

  return (
    <section className="container py-11">
      <div className="px-0 flex flex-col lg:flex-row">
        <div className="lg:basis-1/2 p-5">
          <div className="space-y-5" data-aos="fade-up">
            <h6>{pageHero.title}</h6>
            <h2>{pageHero.text}</h2>
            <p className="text-slate-400">{pageHero.description}</p>
          </div>

          <div className="space-y-10 mt-10">
            {items.map((item, index) => (
              <SmallServiceCard key={item.id} title={item.title} description={item.description} iconElement={getIcon(index)} animationDelay={index * 100} />
            ))}
          </div>
        </div>
        <div className="lg:basis-1/2 aspect-square relative">
          <Image src="/images/ani.webp" alt="Our Services" className="bg-contain p-10" fill={true} />
        </div>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-6 sm:grid-rows-3 lg:grid-rows-2 gap-5">
        <MediumServiceCard title="Graphic Design" description="Urna auctor sed dictum libero vestibulum orci a imperdiet quisque nullam nam." iconElement={<FaPencilRuler />} />

        <div className="w-full bg-blue-600 row-span-2 rounded-2xl px-8 pt-8 border-[1.5px] border-slate-700 duration-300 hover:border-blue-500 flex flex-col justify-between">
          <div>
            <span className="text-xl font-semibold mb-3 inline-block">Mobile development</span>
            <p className="text-sm">Urna auctor sed dictum libero vestibulum orci a imperdiet quisque nullam nam.</p>
          </div>
          <div className="h-full relative">
            <Image src="/images/mobile-app.png" alt="Mobile Development" fill className="object-contain object-bottom" />
          </div>
        </div>

        <MediumServiceCard title="Online Marketing" description="Urna auctor sed dictum libero vestibulum orci a imperdiet quisque nullam nam." iconElement={<MdLeaderboard />} bgColor="bg-purple-600" />

        <MediumServiceCard title="Cyber Security" description="Urna auctor sed dictum libero vestibulum orci a imperdiet quisque nullam nam." iconElement={<MdSecurity />} bgColor="bg-green-600" colSpanWhenSmScreen="2" />

        <MediumServiceCard
          title="Website Development"
          description="Urna auctor sed dictum libero vestibulum orci a imperdiet quisque nullam nam."
          iconElement={<FaLaptopCode />}
          bgColor="bg-gradient-to-r from-slate-800 to-slate-600"
          colSpanWhenSmScreen="2"
        />
      </div> */}
    </section>
  );
}
