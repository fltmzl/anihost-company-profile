import Image from "next/image";
import React from "react";

type TestimonialCardProps = {
  name: string;
  role: string;
  text: string;
  profileImageSrc?: string;
};

export default function TestimonialCard({ name, role, text, profileImageSrc = "/images/testimonial-ava.jpg" }: TestimonialCardProps) {
  return (
    <div className="p-5 rounded-2xl space-y-5 bg-slate-600 text-center w-full max-w-md flex-shrink-0">
      <div>
        <Image src={profileImageSrc} alt="testimonial" width={50} height={50} className="object-cover rounded-full mx-auto" />
      </div>
      <div>
        <blockquote className="text-sm">&quot; {text} &quot;</blockquote>
      </div>
      <div>
        <div className="font-semibold italic text-blue-400 text-sm">{name}</div>
        <div className="text-xs italic text-slate-400">{role}</div>
      </div>
    </div>
  );
}
