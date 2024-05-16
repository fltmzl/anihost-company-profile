import React from "react";
import PagesTitleHeader from "../components/PagesTitleHeader";
import ContactInfoSection from "./sections/ContactInfoSection";
import SendMessageSection from "./sections/SendMessageSection";

export default function ContactUs() {
  return (
    <main>
      <PagesTitleHeader title="Contact Us" description="We would love to hear from you." />

      <ContactInfoSection />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.882160765912!2d110.41864051145015!3d-7.023135292949276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2f4ce5bc6c2e1e6f%3A0x5760a933ed864c7c!2sANIHOST.COM!5e0!3m2!1sid!2sid!4v1715763466994!5m2!1sid!2sid"
        className="h-80 md:h-[400px] lg:h-[500px]"
        style={{ aspectRatio: "16/9", width: "100%", border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <SendMessageSection />
    </main>
  );
}
