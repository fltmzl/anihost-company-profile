import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const services = [
    {
      label: "Cyber Security",
      href: "#",
    },
    {
      label: "Database",
      href: "#",
    },
    {
      label: "Cloud Service",
      href: "#",
    },
    {
      label: "Mobile App",
      href: "#",
    },
    {
      label: "Web Design",
      href: "#",
    },
    {
      label: "Online Marketing",
      href: "#",
    },
  ];

  const support = [
    {
      label: "Help Center",
      href: "#",
    },
    {
      label: "Ticket Support",
      href: "#",
    },
    {
      label: "FAQ",
      href: "#",
    },
    {
      label: "Contact us",
      href: "#",
    },
  ];

  const company = [
    {
      label: "About us",
      href: "#",
    },
    {
      label: "Leadership",
      href: "#",
    },
    {
      label: "Careers",
      href: "#",
    },
    {
      label: "Articles & News",
      href: "#",
    },
    {
      label: "Legal Notice",
      href: "#",
    },
  ];

  const currentYear = new Date().getFullYear();

  const links = [
    {
      label: "Term of use",
      href: "#",
    },
    {
      label: "Cookie Policy",
      href: "#",
    },
    {
      label: "Privacy Policy",
      href: "#",
    },
  ];
  return (
    <footer className="text-white">
      <div className="bg-[#1B293B] p-5 md:flex md:gap-12 md:pt-10 md:pb-14 xl:px-12 xl:gap-28 min-[1440px]:px-[7%]">
        <div className="pt-4 md:w-1/3">
          <Image
            src="/logo.svg"
            alt="Anihost logo"
            width={120}
            height={120}
            loading="lazy"
          />
          <p className="mt-4 text-sm">
            Mollis duis conubia phasellus iaculis hendrerit taciti. Ligula morbi
            velit facilisis imperdiet si suscipit tristique netus cursus.
          </p>
          <div className="flex gap-1.5 mt-4">
            <Link
              href="/"
              className="bg-[#2B64F8] w-8 h-8 flex items-center justify-center rounded-sm hover:bg-[#0494FC] hover:scale-[1.2] ease-[cubic-bezier(0.47,2.02,.31,-.36)] duration-500 transition-all"
            >
              <FaFacebookF color="white" />
            </Link>
            <Link
              href="/"
              className="bg-[#2B64F8] w-8 h-8 flex items-center justify-center rounded-sm hover:bg-[#0494FC] hover:scale-[1.2] ease-[cubic-bezier(0.47,2.02,.31,-.36)] duration-500 transition-all"
            >
              <FaInstagram color="white" />
            </Link>
            <Link
              href="/"
              className="bg-[#2B64F8] w-8 h-8 flex items-center justify-center rounded-sm hover:bg-[#0494FC] hover:scale-[1.2] ease-[cubic-bezier(0.47,2.02,.31,-.36)] duration-500 transition-all"
            >
              <FaTwitter color="white" />
            </Link>
            <Link
              href="/"
              className="bg-[#2B64F8] w-8 h-8 flex items-center justify-center rounded-sm hover:bg-[#0494FC] hover:scale-[1.2] ease-[cubic-bezier(0.47,2.02,.31,-.36)] duration-500 transition-all"
            >
              <FaYoutube color="white" />
            </Link>
          </div>
        </div>
        <div className="flex justify-between md:gap-8 max-md:flex-wrap max-lg:gap-4 xl:gap-28 mt-6 lg:mt-0">
          <div className="max-md:w-2/5 md:mr-5 lg:p-4">
            <p className="text-lg font-medium xl:text-xl">Services</p>

            <div className="mt-5">
              {services.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-xs block mb-2 lg:text-sm hover:text-[#0494FC]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="max-md:w-2/5 md:mr-5 lg:p-4">
            <p className="text-lg font-medium xl:text-xl">Support</p>

            <div className="mt-5">
              {support.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-xs block mb-2 lg:text-sm hover:text-[#0494FC]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="max-md:w-2/5 md:mr-5 lg:p-4">
            <p className="text-lg font-medium xl:text-xl">Company</p>

            <div className="mt-5">
              {company.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-xs block mb-2 lg:text-sm hover:text-[#0494FC]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#253950] px-6 py-8 md:flex md:justify-between md:items-center xl:px-12 lg:py-6 min-[1440px]:px-[7%]">
        <p className="text-xs max-lg:text-center lg:text-sm">
          Copyright © {currentYear} techbiz, All rights reserved. Powered by
          MoxCreative.
        </p>
        <div className="flex gap-5 max-md:mt-5 max-md:justify-center">
          {links.map((item, index) => (
            <Link key={index} href={item.href} className="text-xs lg:text-sm">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
