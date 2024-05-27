"use client";

import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import useScrollY from "../hooks/useScrollY";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import Image from "next/image";
import logoBlue from "../../../public/logo/logo-blue.svg";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaServer, FaLaptopCode, FaChevronDown } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ToggleLanguage from "./ToggleLanguage";
import { useParams } from "next/navigation";

export default function Navbar() {
  const scrollY = useScrollY();
  const params = useParams<{ locale: string }>();
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navbar");

  const navbarItems = [
    {
      title: t("Homepage.title"),
      href: "/",
    },
    {
      title: t("AboutUs.title"),
      href: "/about-us",
    },
    {
      title: t("Services.title"),
      href: "#",
      subNav: [
        {
          title: t("Services.Software.title"),
          href: "/services/software",
          description: t("Services.Software.description"),
          iconElement: <MdOutlineMiscellaneousServices />,
        },
        {
          title: t("Services.Hosting.title"),
          href: "/services/hosting",
          description: t("Services.Hosting.description"),
          iconElement: <FaServer />,
        },
        {
          title: t("Services.AllServices.title"),
          href: "/services",
          description: t("Services.AllServices.description"),
          iconElement: <FaLaptopCode />,
        },
      ],
    },
    {
      title: t("ContactUs.title"),
      href: "/contact-us",
    },
  ];

  const toggleHamburgerButton = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    // <nav className={twMerge("flex items-center px-5 justify-between fixed w-full z-20 duration-500", scrollY > 200 && "bg-slate-900 shadow-xl")}>
    <nav className={twMerge("flex items-center px-5 justify-between fixed w-full z-20 duration-500", scrollY > 200 && "bg-slate-900 shadow-xl")}>
      <div className="flex gap-5 items-center">
        <Link locale={params.locale} href="/" className="font-bold text-xl">
          <Image src={logoBlue} alt="anihost logo" width={130} height={50} className="object-contain" />
        </Link>
        <div>
          <ToggleLanguage />
        </div>
      </div>

      {/* Hamburger Button */}
      <div className="py-5 md:hidden">
        <button onClick={toggleHamburgerButton}>{isOpen ? <RxCross2 size={25} /> : <RxHamburgerMenu size={25} />}</button>
      </div>

      {/* Navbar Mobile */}
      <div className={twMerge("absolute z-50 bg-slate-900 rounded-2xl top-16 left-0 right-0 transition-all duration-100 overflow-hidden origin-top shadow-2xl", isOpen ? "h-fit scale-y-100" : "scale-y-0")}>
        <ul className="flex flex-col py-3">
          {navbarItems.map((navbar) => (
            <li key={navbar.href} className="group">
              <Link locale={params.locale} href={navbar.href} className="flex items-center justify-between font-medium text-xs uppercase py-3 px-5 duration-300 hover:text-blue-500">
                <span>{navbar.title}</span>
                {navbar.subNav && <FaChevronDown />}
              </Link>

              {navbar.subNav && (
                <div className="w-full py-3 flex-col bg-slate-800 text-white shadow-2xl hidden group-focus-within:flex">
                  {navbar.subNav.map((nav) => (
                    <Link locale={params.locale} href={nav.href} key={nav.href} className="text-xs py-3 px-6 flex gap-3 transition-all duration-300 group hover:bg-blue-600">
                      <span className="basis-7 text-xl">{nav.iconElement}</span>
                      <span>
                        <span className="font-medium block uppercase tracking-wide mb-1">{nav.title}</span>
                        <span className="text-xs text-slate-400 duration-300 group-hover:text-slate-200">{nav.description}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Dekstop Navbar */}
      <div className="hidden md:flex gap-10 items-center">
        <ul className="flex items-center">
          {navbarItems.map((navbar) => (
            <li key={navbar.href} className="relative group">
              <Link locale={params.locale} href={navbar.href} className="flex items-center gap-2 font-medium text-xs uppercase py-5 px-4">
                <span>{navbar.title}</span>
                {navbar.subNav && <FaChevronDown />}
              </Link>

              {navbar.subNav && (
                <div className="w-80 py-3 rounded-2xl absolute -left-12 flex-col bg-slate-800 text-white shadow-2xl hidden group-hover:flex group-focus-within:flex">
                  {navbar.subNav.map((nav) => (
                    <Link locale={params.locale} href={nav.href} key={nav.href} className="text-xs py-3 px-6 flex gap-3 transition-all duration-300 group hover:bg-blue-600">
                      <span className="basis-7 text-xl">{nav.iconElement}</span>
                      <span>
                        <span className="font-medium block uppercase tracking-wide mb-1">{nav.title}</span>
                        <span className="text-xs text-slate-300 duration-300">{nav.description}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div>
          <Button className="px-6 py-2 w-fit text-xs font-normal uppercase">{t("Support.title")}</Button>
        </div>
      </div>
    </nav>
  );
}
