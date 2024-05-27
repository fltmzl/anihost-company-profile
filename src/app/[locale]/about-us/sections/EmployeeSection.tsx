import React from "react";
import EmployeeCard from "../components/EmployeeCard";

const employees = [
  {
    name: "John Doe",
    role: "Fullstack Developer",
  },
  {
    name: "Kayden",
    role: "Fullstack Developer",
  },
  {
    name: "Shelton",
    role: "Fullstack Developer",
  },
  {
    name: "Shelton",
    role: "Fullstack Developer",
  },
];

type EmployeeSectionProps = {
  items: Employee[];
};

export default function EmployeeSection({ items }: EmployeeSectionProps) {
  return (
    <section className="container py-20">
      <div className="text-center">
        <h2 className="mb-5">Awesome people behind us</h2>
        <p className="text-slate-400 text-sm max-w-3xl mx-auto">
          Our success is driven by the passion and expertise of the amazing people behind us. Meet the dedicated team that brings our vision to life and ensures we deliver the best for you.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {items.map((item, index) => (
          <>
            <EmployeeCard key={item.id} name={item.name} role={item.role} animationDelay={index * 150} email={item.email} linkedin={item.linkedin} profilePicture={item.profile_picture} />
          </>
        ))}
      </div>
    </section>
  );
}
