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

export default function EmployeeSection() {
  return (
    <section className="container pb-20">
      <div className="text-center">
        <h2 className="mb-5">Awesome people behind us</h2>
        <p className="text-slate-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {employees.map((employee) => (
          <EmployeeCard key={employee.name} name={employee.name} role={employee.role} />
        ))}
      </div>
    </section>
  );
}
