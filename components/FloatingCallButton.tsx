import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function FloatingCallButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href="tel:(469)321-9413"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2E7D32] px-4 py-3.5 text-sm font-semibold text-white shadow-[0_20px_45px_-15px_rgba(46,125,50,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] sm:px-5 sm:py-4"
        aria-label="Call Ubeda Shade Co. now"
      >
        <Phone className="h-4 w-4" />
        Call Now
      </a>
      <Link
        href="#contact"
        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#2E7D32]/20 bg-white px-4 py-3.5 text-sm font-semibold text-[#2E7D32] shadow-[0_20px_45px_-18px_rgba(17,17,17,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] sm:px-5 sm:py-4"
        aria-label="Get a free quote"
      >
        Get Free Quote
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
