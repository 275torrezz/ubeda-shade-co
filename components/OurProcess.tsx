"use client";

import { motion } from "framer-motion";
import { ClipboardList, Ruler, Boxes, Wrench } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    title: "Free Estimate",
    description: "We begin with a consultation to understand your goals, home layout, and comfort priorities.",
    icon: ClipboardList,
  },
  {
    title: "Measure",
    description: "Our team precisely measures each opening so your solar screens fit beautifully and perform perfectly.",
    icon: Ruler,
  },
  {
    title: "Build",
    description: "Every screen is custom-built with premium materials selected for durability, clarity, and style.",
    icon: Boxes,
  },
  {
    title: "Install",
    description: "We install every system cleanly and efficiently, leaving your home looking refined and protected.",
    icon: Wrench,
  },
];

export function OurProcess() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Our Process"
        title="A refined process designed for confidence from day one"
        description="From your first conversation to the final install, we make the experience streamlined, transparent, and tailored to your home."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="premium-card rounded-[30px] p-8"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2E7D32]/10 text-[#2E7D32]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111111]">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-[#565656]">{step.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
