"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  {
    quote:
      "The team made the whole process feel effortless. Our home is dramatically cooler and the install looked flawless.",
    name: "Megan D.",
    role: "Plano Homeowner",
  },
  {
    quote:
      "Excellent communication, fair pricing, and beautiful craftsmanship. It’s one of the best home upgrades we’ve made.",
    name: "Carlos R.",
    role: "Frisco Property Owner",
  },
  {
    quote:
      "We were impressed with the attention to detail and the quality of the finished product. Highly recommend.",
    name: "Alicia B.",
    role: "Southlake Client",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[#111111] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by homeowners across North Texas"
          description="Our customers value precision, honesty, and a finished experience that feels as premium as the product itself."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="premium-card-strong rounded-[30px] p-8"
            >
              <div className="flex gap-1 text-[#8be28f]">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 text-lg leading-8 text-white/80">“{item.quote}”</p>
              <div className="mt-8">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-white/60">{item.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
