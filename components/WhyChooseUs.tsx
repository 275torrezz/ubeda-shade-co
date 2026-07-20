"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Precision Fit",
    description: "Custom-built for every window, patio, and oversized opening.",
  },
  {
    title: "Premium Materials",
    description: "Built to withstand Texas heat while maintaining a refined appearance.",
  },
  {
    title: "Honest Pricing",
    description: "Clear estimates with no pressure and no hidden fees.",
  },
  {
    title: "Fast Installation",
    description: "From consultation to installation, we keep the process simple and efficient.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 sm:py-32 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="rounded-[40px] border border-black/5 bg-[#f7f7f2] p-8 shadow-[0_28px_80px_-42px_rgba(0,0,0,0.24)] sm:p-12 lg:p-16"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
            Why Homeowners Choose Ubeda Shade Co.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[24px] border border-black/5 bg-white p-6 shadow-[0_16px_44px_-28px_rgba(0,0,0,0.2)]"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2E7D32]/10 text-[#2E7D32]">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#111111]">{feature.title}</h3>
                  <p className="mt-2 text-base leading-7 text-[#565656]">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
