"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

let isAOSInitialized = false;

export default function AosProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!isAOSInitialized) {
      AOS.init();
    }

    isAOSInitialized = true;
  }, []);

  return <div>{children}</div>;
}
