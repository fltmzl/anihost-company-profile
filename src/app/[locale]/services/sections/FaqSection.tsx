import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React from "react";

type FaqSectionProps = {
  items: Faq[];
};

export default function FaqSection({ items }: FaqSectionProps) {
  return (
    <section className="bg-slate-800 py-16">
      <div className="container flex flex-col md:flex-row gap-10">
        <div className="md:basis-5/12 space-y-5" data-aos="fade-right">
          <h6>FAQ</h6>
          <h2>Frequently Ask Question</h2>
          <p className="text-sm lg:text-base text-slate-400">Find answers to common questions about our services, policies, and more. Our FAQ section provides the information you need to make informed decisions.</p>
        </div>

        <div className="basis-7/12">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {items.map((item, index) => (
              <AccordionItem key={item.id} value={item.question} data-aos="fade-up" data-aos-delay={index * 100}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
