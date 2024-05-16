import { Be_Vietnam_Pro } from "next/font/google";
import Image from "next/image";
const beVitenamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function CompanyClients() {
  const clients = [
    {
      name: "this is my client",
      logo: "/logo_decyber_1.png",
    },
    {
      name: "this is my client",
      logo: "/logo_decyber_1.png",
    },
    {
      name: "this is my client",
      logo: "/logo_decyber_1.png",
    },
    {
      name: "this is my client",
      logo: "/logo_decyber_1.png",
    },
    {
      name: "this is my client",
      logo: "/logo_decyber_1.png",
    },
    {
      name: "this is my client",
      logo: "/logo_decyber_1.png",
    },
    {
      name: "this is my client",
      logo: "/logo_decyber_1.png",
    },
    {
      name: "this is my client",
      logo: "/logo_decyber_1.png",
    },
    {
      name: "this is my client",
      logo: "/logo_decyber_1.png",
    },
    {
      name: "this is my client",
      logo: "/logo_decyber_1.png",
    },
  ];
  return (
    <section
      className={
        beVitenamPro.className +
        " bg-[#1B293B] text-white p-6 rounded-2xl border border-[#253950] xl:p-10"
      }
    >
      <div className="flex gap text-2xl font-semibold justify-center md:text-3xl lg:text-4xl">
        <span className="text-center">
          Join our <span className="text-[#33A9FF]">3,000+</span> happy
          customers
        </span>
      </div>
      <div className="flex flex-wrap justify-around gap-4 mt-10">
        {clients.map((item, index) => (
          <Image
            src={item.logo}
            alt={item.name}
            width={200}
            height={200}
            key={index}
            className="w-1/4 md:w-1/6"
          />
        ))}
      </div>
    </section>
  );
}
