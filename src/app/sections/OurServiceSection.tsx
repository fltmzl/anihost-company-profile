import Image from "next/image";
import React from "react";
import SmallServiceCard from "../components/SmallServiceCard";
import { PiGlobeBold } from "react-icons/pi";
import { FaLightbulb } from "react-icons/fa6";
import { FaLaptopCode, FaPencilRuler } from "react-icons/fa";
import MediumServiceCard from "../components/MediumServiceCard";
import { MdLeaderboard, MdSecurity } from "react-icons/md";

export default function OurServiceSection() {
  return (
    <section className="container py-11">
      <div className="px-0 flex flex-col lg:flex-row">
        <div className="lg:basis-1/2 p-5">
          <div className="space-y-5">
            <h6>OUR SERVICE</h6>
            <h2>Let us do the work, so you can focus on what matters.</h2>
            <p className="text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>

          <div className="space-y-6 mt-10">
            <SmallServiceCard title="Creative Solutions" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." iconElement={<FaLightbulb />} />

            <SmallServiceCard title="Creative Solutions" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." iconElement={<PiGlobeBold />} />

            <SmallServiceCard title="Creative Solutions" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." iconElement={<FaLaptopCode />} />
          </div>
        </div>
        <div className="lg:basis-1/2 aspect-square relative">
          <Image src="/images/imac.png" alt="Our Services" className="object-contain" fill={true} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-6 sm:grid-rows-3 lg:grid-rows-2 gap-5">
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
      </div>
    </section>
  );
}
