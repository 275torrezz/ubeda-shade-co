"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const areas = [
  "Dallas",
  "Irving",
  "Garland",
  "Mesquite",
  "Plano",
  "Richardson",
  "Rockwall",
  "Forney",
  "Sunnyvale",
  "Highland Park",
  "University Park",
];

export function ServiceAreas() {
  return (
    <section id="service-areas" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Service Areas"
        title="Trusted shade solutions across the Dallas-Fort Worth metroplex"
        description="Our team serves homeowners and business owners throughout the region with responsive scheduling, careful workmanship, and premium results."
      />

      <div className="mt-14 rounded-[36px] border border-black/5 bg-[#f7f7f2] p-8 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.22)] sm:p-10 lg:p-12">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {areas.map((area, index) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="flex items-center gap-3 rounded-[22px] border border-black/5 bg-white/80 px-4 py-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E7D32]/10 text-[#2E7D32]">
                <MapPin className="h-4 w-4" />
              </div>
              <span className="text-base font-semibold text-[#111111]">{area}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
