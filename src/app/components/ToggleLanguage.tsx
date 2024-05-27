"use client";

import { Switch } from "@/components/ui/switch";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ToggleLanguage() {
  const params = useParams<{ locale: Locale }>();
  const router = useRouter();
  const pathname = usePathname();

  const [language, setLanguage] = useState<Locale>(params.locale);

  const toggleLanguage = () => {
    const currentPath = pathname.replace(/(^\/(en|id)\/?)?/, "/");

    if (language === "id") {
      router.push(`/en${currentPath}`);
    } else {
      router.push(`/id${currentPath}`);
    }

    setLanguage((prev) => {
      return prev === "id" ? "en" : "id";
    });
  };

  return (
    <>
      <Switch checked={language === "id"} onCheckedChange={toggleLanguage} />
    </>
  );
}
