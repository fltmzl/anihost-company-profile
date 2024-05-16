import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";

type EmployeeCardProps = {
  name: string;
  role: string;
};

export default function EmployeeCard({ name, role }: EmployeeCardProps) {
  return (
    <div className="w-full lg:max-w-xs rounded-2xl overflow-hidden bg-slate-800 pb-5">
      <div className="w-full aspect-square relative">
        <Image src="/images/developer-image1.jpg" alt="employee image" fill className="object-cover" />
      </div>

      <div className="flex justify-center py-5 gap-1">
        <a href="#">
          <FaLinkedin className="size-8 bg-blue-600 p-2 rounded-sm grid place-content-center hover:bg-blue-500 duration-300" />
        </a>

        <a href="#">
          <AiFillInstagram className="size-8 bg-blue-600 p-2 rounded-sm grid place-content-center hover:bg-blue-500 duration-300" />
        </a>

        <a href="#">
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
