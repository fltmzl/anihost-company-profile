import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const DomainItem = ({ imageUrl, price }: { imageUrl: string; price: number }) => {
  return (
    <div className="flex items-center gap-2 mx-auto">
      <Image src={imageUrl} alt="dotcom" width={30} height={30} className="object-contain" />
      <div className="text-xs md:text-sm">Rp{price.toLocaleString("id-ID")}</div>
    </div>
  );
};

const domains = [
  {
    imageUrl: "/images/dot-com.webp",
    price: 129000,
  },
  {
    imageUrl: "/images/dot-id.webp",
    price: 219000,
  },
  {
    imageUrl: "/images/dot-xyz.webp",
    price: 29900,
  },
  {
    imageUrl: "/images/dot-online.webp",
    price: 25000,
  },
  {
    imageUrl: "/images/dot-store.webp",
    price: 45000,
  },
];

export default function DomainSearch() {
  return (
    // <div className="bg-[#0d9975] pb-10 px-10 py-8 lg:max-w-6xl lg:relative lg:-top-20 mx-auto md:rounded-2xl">
    <div className="bg-gradient-to-br from-sky-500/90 from-10% via-teal-500 to-teal-600 pb-10 px-10 py-8 lg:max-w-6xl lg:relative lg:-top-20 mx-auto md:rounded-2xl">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="font-semibold text-xl">
          <p>Start your journey to an amazing website with the perfect domain</p>
        </div>
        <div className="basis-full">
          <div className="relative w-full">
            <Input placeholder="Check your domain here" className="bg-white py-7 px-5" />
            <Button className="bg-blue-500 shadow-2xl w-fit px-4 py-2 text-xs absolute right-3 -translate-y-1/2 border-0 top-1/2">Search Domain</Button>
          </div>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
        {domains.map((domain) => (
          <DomainItem key={domain.imageUrl} imageUrl={domain.imageUrl} price={domain.price} />
        ))}
      </div>
    </div>
  );
}
