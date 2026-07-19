"use client";

import { motion } from "framer-motion";
import { CalendarDays, Ruler, Factory, Wrench } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { title: "Request Free Estimate", description: "Tell us about your home, window areas, and goals for shade and comfort.", icon: CalendarDays },
  { title: "Window Measurement", description: "We measure precisely and review the right screen type for your property.", icon: Ruler },
  { title: "Custom Manufacturing", description: "Each system is carefully built to fit your home with premium materials.", icon: Factory },
  { title: "Professional Installation", description: "Our team installs everything cleanly and efficiently for lasting performance.", icon: Wrench },
];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 sm:py-32 lg:px-8">
      <SectionHeading
        eyebrow="How it works"
        title="A seamless process from first call to final install"
        description="We make the experience simple, transparent, and tailored to your timeline so you can feel confident at every step."
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="premium-card relative rounded-[28px] p-8 transition-all duration-300"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#2E7D32]/10 text-[#2E7D32]">
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2E7D32]">
                Step {index + 1}
              </div>
              <h3 className="mt-3 text-xl font-semibold text-[#111111]">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-[#575757]">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
