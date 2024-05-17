import React from "react";

type FrameworkCardProps = {
  title: string;
  iconElement: React.ReactElement;
};

export default function FrameworkCard({ title, iconElement }: FrameworkCardProps) {
  return (
    <div className="space-y-2 text-center">
      <div className="text-4xl bg-slate-700 p-4 rounded-full w-fit mx-auto">{iconElement}</div>
      <div className="uppercase font-semibold">{title}</div>
    </div>
  );
}
