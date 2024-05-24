import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function SendMessageSection() {
  return (
    <section className="container pt-5 pb-24 md:relative md:-top-32" data-aos="fade-up">
      <div className="w-full max-w-4xl mx-auto bg-slate-800 rounded-2xl p-7 md:p-16">
        <div className="text-center">
          <h2 className="mb-3">Send us a message</h2>
          <p className="mb-5 text-slate-400 text-xs md:text-sm">We&apos;d love to hear from you! Whether you have a question, a suggestion, or just want to say hi, send us a message. Let&apos;s stay connected!</p>
        </div>

        <form className="grid gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="input-group">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" name="name" placeholder="Name" className="bg-slate-700 border-slate-600" />
            </div>

            <div className="input-group">
              <Label htmlFor="company">Company</Label>
              <Input type="text" id="company" name="company" placeholder="Company" className="bg-slate-700 border-slate-600" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="input-group">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" placeholder="Email" className="bg-slate-700 border-slate-600" />
            </div>

            <div className="input-group">
              <Label htmlFor="phone">Phone</Label>
              <Input type="text" id="phone" name="phone" placeholder="Phone" className="bg-slate-700 border-slate-600" />
            </div>
          </div>

          <div className="input-group">
            <Label htmlFor="subject">Subject</Label>
            <Input type="text" id="subject" name="subject" placeholder="Subject" className="bg-slate-700 border-slate-600" />
          </div>

          <div className="input-group">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Message" className="bg-slate-700 border-slate-600" />
          </div>

          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </section>
  );
}
