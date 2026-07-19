"use client";

import { motion } from "framer-motion";
import {
  Home,
  Building2,
  PanelsTopLeft,
  Hammer,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    title: "Residential Solar Screens",
    description: "Elegant protection for patios, living spaces, and sun-drenched rooms across the DFW area.",
    icon: Home,
  },
  {
    title: "Commercial Solar Screens",
    description: "High-performance shading solutions for offices, storefronts, and hospitality spaces.",
    icon: Building2,
  },
  {
    title: "Custom Screens",
    description: "Tailored measurements and finishes to match architecture, budgets, and performance goals.",
    icon: PanelsTopLeft,
  },
  {
    title: "Screen Repair",
    description: "Refresh worn or damaged screens with dependable workmanship and quick turnaround.",
    icon: Hammer,
  },
  {
    title: "Professional Installation",
    description: "Our team delivers precise, clean, and efficient installations with lasting results.",
    icon: Sparkles,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-[#F5F5F5] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Premium shading solutions for every property"
          description="From homes to commercial spaces, our team delivers custom solar screen systems with exceptional fit, finish, and performance."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="premium-card rounded-[30px] p-8 transition-all duration-300"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2E7D32]/10 text-[#2E7D32]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#111111]">{service.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#565656]">{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
