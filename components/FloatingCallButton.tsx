import Link from "next/link";
import { Phone } from "lucide-react";

export function FloatingCallButton() {
  return (
    <Link
      href="tel:(469)321-9413"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-[#2E7D32] px-4 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_-15px_rgba(46,125,50,0.75)] transition-all duration-300 hover:scale-[1.03] sm:bottom-6 sm:right-6 sm:px-5 sm:py-3.5 md:flex"
      aria-label="Call Ubeda Shade Co. now"
    >
      <Phone className="h-4 w-4" />
      <span className="hidden sm:inline">Call Now</span>
      <span className="sm:hidden">Get Estimate</span>
    </Link>
  );
}
