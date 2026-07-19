"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const images = [
  {
    src: "/company-images/gallery-1.jpg",
    alt: "Premium patio shade screen installation on a modern home exterior",
    className: "md:col-span-2 md:row-span-2",
    label: "Patio Shade Screens",
  },
  {
    src: "/company-images/gallery-2.jpg",
    alt: "Exterior residential project with solar screens covering large windows",
    className: "",
    label: "Window Coverage",
  },
  {
    src: "/company-images/gallery-3.jpg",
    alt: "Contemporary home exterior with solar screens for heat reduction",
    className: "",
    label: "Energy Efficiency",
  },
  {
    src: "/company-images/gallery-4.jpg",
    alt: "Professional installation crew fitting solar screens on a residential property",
    className: "md:col-span-2",
    label: "Professional Installation",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-[#F5F5F5] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="A refined look that performs beautifully"
          description="Our installations balance comfort, architecture, and long-term durability in every detail."
        />

        <div className="mt-14 columns-1 gap-4 sm:columns-2 xl:columns-3">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className={`group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-[30px] border border-black/5 shadow-[0_24px_70px_-36px_rgba(0,0,0,0.35)] ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={900}
                height={700}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-full min-h-[260px] w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur">
                {image.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
