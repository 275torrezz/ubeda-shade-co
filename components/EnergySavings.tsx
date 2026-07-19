"use client";

import { motion } from "framer-motion";
import { Zap, ThermometerSun, House, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const benefits = [
  {
    title: "Reduce Heat Gain",
    description: "Solar screens intercept harsh sunlight before it enters your home, keeping interiors cooler and more comfortable.",
    icon: ThermometerSun,
  },
  {
    title: "Lower Cooling Costs",
    description: "Less heat entering through your windows means your HVAC system works less during the hottest months.",
    icon: Zap,
  },
  {
    title: "Protect Your Home",
    description: "Enjoy UV protection for interiors while preserving your view and adding a polished exterior finish.",
    icon: ShieldCheck,
  },
  {
    title: "Improved Daily Comfort",
    description: "Create a more livable indoor environment with reduced glare and a more balanced indoor climate.",
    icon: House,
  },
];

export function EnergySavings() {
  return (
    <section className="bg-[#111111] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Energy Savings"
          title="Why solar screens are one of the smartest upgrades for Texas homes"
          description="High-performance shade solutions help homeowners cut heat, reduce cooling demand, and enjoy more comfort without sacrificing style."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="rounded-[28px] border border-white/10 bg-white/8 p-8 backdrop-blur"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2E7D32]/20 text-[#8be28f]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-white/70">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
