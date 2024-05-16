import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React from "react";

const faqs = [
  {
    title: "Sem dolor ac facilisi semper efficitur nascetur vulputate?",
    description: "Tristique nisl conubia elementum tempor erat montes. Odio sapien adipiscing ex lacinia taciti quisque. Odio ultrices nullam vulputate primis semper quisque rhoncus.",
  },
  {
    title: "Parturient sit risus letius vel scelerisque metus venenatis?",
    description: "Tristique nisl conubia elementum tempor erat montes. Odio sapien adipiscing ex lacinia taciti quisque. Odio ultrices nullam vulputate primis semper quisque rhoncus.",
  },
  {
    title: "Aenean letius quam euismod felis volutpat ligula?",
    description: "Tristique nisl conubia elementum tempor erat montes. Odio sapien adipiscing ex lacinia taciti quisque. Odio ultrices nullam vulputate primis semper quisque rhoncus.",
  },
  {
    title: "Per nisl sem dui feugiat mattis magna?",
    description: "Tristique nisl conubia elementum tempor erat montes. Odio sapien adipiscing ex lacinia taciti quisque. Odio ultrices nullam vulputate primis semper quisque rhoncus.",
  },
  {
    title: "Vitae iaculis fames ante nam lorem ornare?",
    description: "Tristique nisl conubia elementum tempor erat montes. Odio sapien adipiscing ex lacinia taciti quisque. Odio ultrices nullam vulputate primis semper quisque rhoncus.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-slate-800 py-16">
      <div className="container flex flex-col md:flex-row gap-10">
        <div className="md:basis-5/12 space-y-5">
          <h6>FAQ</h6>
          <h2>Frequently Ask Question</h2>
          <p className="text-sm lg:text-base text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>

        <div className="basis-7/12">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq) => (
              <AccordionItem key={faq.title} value={faq.title}>
                <AccordionTrigger>{faq.title}</AccordionTrigger>
                <AccordionContent>{faq.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
