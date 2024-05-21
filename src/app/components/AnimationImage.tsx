"use client";

import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

type AnimationImageProps = {
  jsonUrl: string;
};

export default function AnimationImage({ jsonUrl }: AnimationImageProps) {
  return <Player autoplay loop src={jsonUrl} className="aspect-square w-full max-w-xl"></Player>;
}
