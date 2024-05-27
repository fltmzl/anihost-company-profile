import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

type DiscoverMoreSectionProps = {
  title: string;
  description: string;
  buttonHrefLink?: string;
};

export default function DiscoverMoreSection({ description, title, buttonHrefLink = "#" }: DiscoverMoreSectionProps) {
  const t = useTranslations("DiscoverSection");

  return (
    <section className="min-h-[510px] grid relative place-content-center after:bg-[url('/images/bg-jumbotron-1.jpg')] after:bg-center after:bg-cover after:content-[''] after:absolute after:inset-0 after:-z-10 after:brightness-[0.3]">
      <div className="space-y-7 text-center py-28 px-5 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl" data-aos="zoom-in-up">
          {title}
        </h2>
        <p className="max-w-2xl mx-auto" data-aos="zoom-in-down">
          {description}
        </p>

        <Link href={buttonHrefLink} className="block">
          <Button className="text-sm w-fit px-6 py-3" data-aos="fade-up">
            {t("button")}
          </Button>
        </Link>
      </div>
    </section>
  );
}
