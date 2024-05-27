import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import ContactCard from "../components/ContactCard";
import { MdMarkEmailRead, MdMessage } from "react-icons/md";
import Link from "next/link";

type ContactInfoSectionProps = {
  title: string;
  text: string;
  description: string;
  image?: string;
  email: string;
  address: string;
  phone: string;
  linkedin: string;
  instagram: string;
  fax: string;
};

export default function ContactInfoSection({ title, description, image, text, address, email, phone, fax, instagram, linkedin }: ContactInfoSectionProps) {
  const contacts = [
    {
      title: "Head Office",
      description: address,
      iconElement: <FaLocationDot />,
    },
    {
      title: "Call Us",
      description: `Phone : ${phone}`,
      secondDescription: `Fax: ${fax}`,
      iconElement: <FaPhoneVolume />,
    },
    {
      title: "Email Us",
      description: email,
      iconElement: <MdMarkEmailRead />,
    },
    {
      title: "Free Consultation",
      description: `Whatsapp: ${phone}`,
      iconElement: <MdMessage />,
    },
  ];

  return (
    <div className="container py-20 flex flex-col lg:flex-row justify-between gap-8">
      <div className="lg:basis-5/12 space-y-5 pr-16">
        <div className="space-y-5" data-aos="fade-right">
          <h6>{title}</h6>
          <h2>{text}</h2>
          <p className="text-sm text-slate-400">{description}</p>
        </div>

        <div className="w-full border-b border-slate-700 py-2"></div>

        <div className="space-y-5" data-aos="fade-right" data-aos-delay="100">
          <h3 className="text-xl md:text-2xl font-semibold">Follow our social network</h3>
          <p className="text-sm text-slate-400">Stay connected with us! Follow our social media channels for the latest updates, exclusive content, and behind-the-scenes insights.</p>

          {/* <div className="flex gap-2">
            <Link href={linkedin} target="_blank">
              <FaLinkedin className="size-10 bg-blue-600 p-2 rounded-sm grid place-content-center hover:bg-blue-500 duration-300" />
            </Link>

            <Link href={instagram} target="_blank">
              <AiFillInstagram className="size-10 bg-blue-600 p-2 rounded-sm grid place-content-center hover:bg-blue-500 duration-300" />
            </Link>

            <Link href={`mailto:${email}`} target="_blank">
              <IoMdMail className="size-10 bg-blue-600 p-2 rounded-sm grid place-content-center hover:bg-blue-500 duration-300" />
            </Link>
          </div> */}
        </div>
      </div>

      <div className="lg:basis-7/12 grid md:grid-cols-2 gap-4">
        {contacts.map((contact, index) => (
          <ContactCard
            key={contact.title}
            iconElement={contact.iconElement}
            title={contact.title}
            description={contact.description}
            secondDescription={contact.secondDescription}
            variant={index === 0 ? "primary" : "secondary"}
            animationDelay={index * 100}
          />
        ))}
      </div>
    </div>
  );
}
