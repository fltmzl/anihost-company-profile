import React from "react";

type SmallServiceCardProps = {
  title: string;
  description: string;
  iconElement: React.ReactNode;
};

export default function SmallServiceCard({ title, description, iconElement }: SmallServiceCardProps) {
  return (
    <div className="flex gap-5 items-center">
      <div>
        <div className="size-[70px] grid place-content-center bg-blue-500 rounded-full text-4xl">{iconElement}</div>
      </div>
      <div>
        <span className="text-lg font-bold mb-2 inline-block">{title}</span>
        <p className="text-sm text-slate-400">{description}</p>
      </div>
    </div>
  );
}
