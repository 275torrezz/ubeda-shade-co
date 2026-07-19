"use client";

import { motion } from "framer-motion";
import { Flame, BadgeDollarSign, ShieldCheck, Eye } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const benefits = [
  {
    title: "Reduce Heat",
    description: "Block harsh sunlight and keep interiors noticeably cooler during peak summer months.",
    icon: Flame,
  },
  {
    title: "Lower Energy Bills",
    description: "Minimize heat gain to reduce air conditioning demand and improve efficiency.",
    icon: BadgeDollarSign,
  },
  {
    title: "UV Protection",
    description: "Protect furnishings and flooring from fading while preserving comfort indoors.",
    icon: ShieldCheck,
  },
  {
    title: "Increase Privacy",
    description: "Enjoy a more private home while maintaining clear views from inside.",
    icon: Eye,
  },
];

export function Benefits() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 sm:py-32 lg:px-8">
      <SectionHeading
        eyebrow="Benefits"
        title="Comfort designed around modern living"
        description="Every installation is tailored to your home, climate, and style so the result feels effortless from day one and built to last."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <motion.article
              key={benefit.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="premium-card rounded-[28px] p-8 transition-all duration-300"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111111] text-[#8be28f]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111111]">{benefit.title}</h3>
              <p className="mt-3 text-base leading-7 text-[#565656]">{benefit.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
