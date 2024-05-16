import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import ContactCard from "../components/ContactCard";
import { MdMarkEmailRead, MdMessage } from "react-icons/md";

export default function ContactInfoSection() {
  return (
    <div className="container py-20 flex flex-col lg:flex-row justify-between gap-8">
      <div className="lg:basis-5/12 space-y-5 pr-16">
        <div className="space-y-5">
          <h6>GET IN TOUCH</h6>
          <h2>Don&apos;t hesitate to contact us for more information.</h2>
          <p className="text-sm text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>

        <div className="w-full border-b border-slate-700 py-2"></div>

        <div className="space-y-5">
          <h3 className="text-xl md:text-2xl font-semibold">Follow our social network</h3>
          <p className="text-sm text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

          <div className="flex gap-2">
            <a href="#">
              <FaLinkedin className="size-10 bg-blue-600 p-2 rounded-sm grid place-content-center hover:bg-blue-500 duration-300" />
            </a>

            <a href="#">
              <AiFillInstagram className="size-10 bg-blue-600 p-2 rounded-sm grid place-content-center hover:bg-blue-500 duration-300" />
            </a>

            <a href="#">
              <IoMdMail className="size-10 bg-blue-600 p-2 rounded-sm grid place-content-center hover:bg-blue-500 duration-300" />
            </a>
          </div>
        </div>
      </div>

      <div className="lg:basis-7/12 grid md:grid-cols-2 gap-4">
        <ContactCard iconElement={<FaLocationDot />} title="Head Office" description="Jl. Dr. Wahidin No.213K, Kaliwiru" secondDescription="Semarang - Indonesia" variant="primary" />

        <ContactCard iconElement={<MdMarkEmailRead />} title="Email Us" description="support@yourdomain.tld" secondDescription="hello@yourdomain.tld" variant="secondary" />

        <ContactCard iconElement={<FaPhoneVolume />} title="Call Us" description="Phone : +6221.2002.2012" secondDescription="Fax : +6221.2002.2013" variant="secondary" />

        <ContactCard iconElement={<MdMessage />} title="Free Consultation" description="Phone: +6221.2002.2012" secondDescription="Fax : +6221.2002.2013" variant="secondary" />
      </div>
    </div>
  );
}
