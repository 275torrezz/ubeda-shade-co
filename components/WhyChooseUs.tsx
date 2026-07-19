"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  "Professional Craftsmanship",
  "Premium Materials",
  "Honest Pricing",
  "Customer Satisfaction",
  "Fast Turnaround",
];

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-[36px] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]"
        >
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80"
            alt="Modern Texas home exterior with custom solar screens improving comfort and energy efficiency"
            width={1200}
            height={900}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-full min-h-[420px] w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#2E7D32]">
            Why choose us
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
            Built for comfort, quality, and lasting value.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#565656]">
            We believe premium home comfort should feel elevated, transparent, and effortless from the first conversation through installation.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-3 rounded-2xl border border-black/5 bg-[#f7f7f2] p-4 transition-transform duration-300 hover:-translate-y-0.5">
                <CheckCircle2 className="h-5 w-5 flex-none text-[#2E7D32]" />
                <span className="text-base font-medium text-[#111111]">{point}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
