import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";

type EmployeeCardProps = {
  name: string;
  role: string;
  linkedin?: string;
  instagram?: string;
  email?: string;
  animationDelay?: number;
  profilePicture: string;
};

export default function EmployeeCard({ name, role, animationDelay, email = "#", instagram = "#", linkedin = "#", profilePicture }: EmployeeCardProps) {
  return (
    <div className="w-full lg:max-w-xs rounded-2xl overflow-hidden bg-slate-800 pb-5" data-aos="fade-right" data-aos-delay={animationDelay}>
      <div className="w-full aspect-square relative">
        <Image src={profilePicture} alt={name} fill className="object-cover" />
      </div>

      <div className="flex justify-center py-5 gap-1">
        <a href={linkedin} target="_blank">
          <FaLinkedin className="size-8 bg-blue-600 p-2 rounded-sm grid place-content-center hover:bg-blue-500 duration-300" />
        </a>

        <a href={instagram} target="_blank">
          <AiFillInstagram className="size-8 bg-blue-600 p-2 rounded-sm grid place-content-center hover:bg-blue-500 duration-300" />
        </a>

        <a href={`mailto:${email}`} target="_blank">
          <IoMdMail className="size-8 bg-blue-600 p-2 rounded-sm grid place-content-center hover:bg-blue-500 duration-300" />
        </a>
      </div>

      <div className="text-center">
        <div className="text-base font-bold">{name}</div>
        <div className="text-xs font-semibold uppercase text-blue-400">{role}</div>
      </div>
    </div>
  );
}
