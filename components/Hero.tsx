"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, PhoneCall, ShieldCheck, Sparkles, SunMedium } from "lucide-react";
import { motion } from "framer-motion";

const trustBadges = [
  "Free estimates in 24 hours",
  "Professional installation",
  "Custom built for your home",
  "Serving Dallas-Fort Worth",
];

const highlights = [
  "Precision-fit solar screens for patios and large openings",
  "Premium materials chosen for durability and refined finish",
  "A smooth experience from consult to installation",
];

const stats = [
  { value: "500+", label: "homes protected" },
  { value: "4.9/5", label: "client satisfaction" },
  { value: "1 day", label: "average quote turn-around" },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#111111] text-white">
      <Image
        src="/company-images/hero-solar-screen.jpg"
        alt="Modern Texas home exterior with premium solar screens installed on large windows"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 100vw"
        className="absolute inset-0 object-cover scale-105"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(46,125,50,0.35),_transparent_45%),linear-gradient(90deg,rgba(17,17,17,0.92),rgba(17,17,17,0.64))]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

      <div className="relative mx-auto flex min-h-[94vh] max-w-7xl flex-col justify-center px-6 py-24 sm:px-8 sm:py-28 lg:px-8 lg:py-32 xl:py-36">
        <div className="grid items-end gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-[#dff6de] backdrop-blur">
              <ShieldCheck className="h-4 w-4" />
              Trusted solar screen installation for Texas homes
            </div>
            <h1 className="mt-6 text-5xl font-semibold leading-[0.92] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl xl:text-[4.35rem]">
              Premium shade solutions that make your home cooler, quieter, and more beautiful.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              Custom solar screens reduce heat, protect interiors, and elevate curb appeal with a refined finish built for Texas living.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="premium-button inline-flex items-center justify-center gap-2 rounded-full bg-[#2E7D32] px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#256b28] sm:px-8 sm:py-4.5"
              >
                Get Free Estimate
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:(469)321-9413"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 sm:px-8 sm:py-4.5"
              >
                <PhoneCall className="h-4 w-4" />
                Call Now
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur">
                  <CheckCircle2 className="h-4 w-4 text-[#8be28f]" />
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="rounded-[32px] border border-white/15 bg-white/10 p-5 shadow-[0_30px_80px_-35px_rgba(0,0,0,0.7)] backdrop-blur-xl"
          >
            <div className="rounded-[24px] border border-white/10 bg-black/20 p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#dff6de]">
                    Why homeowners choose us
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">
                    Crafted to cool, protect, and elevate.
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2E7D32]/80 text-white">
                  <SunMedium className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-8 grid gap-3">
                {highlights.map((item) => (
                  <div key={item} className="rounded-[18px] border border-white/10 bg-white/10 px-4 py-3 text-sm leading-6 text-white/80">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3 rounded-[20px] border border-white/10 bg-white/10 p-4 text-sm leading-7 text-white/70">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2E7D32]/80 text-white">
                  <Sparkles className="h-5 w-5" />
                </div>
                <span>Free estimate and design guidance with every consultation.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
