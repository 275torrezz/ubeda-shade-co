"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    question: "How much do solar screens cost?",
    answer:
      "Pricing depends on the size of your home, the number of openings, fabric type, and project complexity. We provide clear estimates tailored to your property and goals.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Most residential installations are completed efficiently within a single visit, though exact timing depends on project scope and site conditions.",
  },
  {
    question: "Do they reduce heat?",
    answer:
      "Yes. Solar screens are designed to block solar heat gain and reduce glare while keeping your home more comfortable during the hottest months.",
  },
  {
    question: "What colors are available?",
    answer:
      "We offer a range of screen fabric and frame options to complement your home’s exterior and performance preferences.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Absolutely. We provide free, no-pressure estimates to help homeowners understand the right solution for their home.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="FAQ"
        title="Questions homeowners ask before upgrading"
        description="We’ve answered the most common concerns so you can feel confident before moving forward."
      />

      <div className="mt-14 space-y-4">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question} className="rounded-[24px] border border-black/5 bg-[#f7f7f2] px-6 py-5 shadow-[0_16px_44px_-28px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-0.5">
              <button
                className="flex w-full items-center justify-between gap-4 text-left"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <span className="text-lg font-semibold text-[#111111]">{item.question}</span>
                {isOpen ? <Minus className="h-5 w-5 text-[#2E7D32]" /> : <Plus className="h-5 w-5 text-[#2E7D32]" />}
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-base leading-7 text-[#565656]">{item.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
