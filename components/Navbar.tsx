import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-3" aria-label="Ubeda Shade Co. home">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-[#111111]">
            <img
              src="/company-images/icon.png"
              alt="Ubeda Shade Co. icon"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-base font-semibold text-[#111111]">Ubeda Shade Co.</p>
            <p className="text-xs uppercase tracking-[0.3em] text-[#5f5f5f]">SOLAR SCREENS</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#3f3f3f] md:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[#111111]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:(469)321-9413"
            className="hidden items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-[#111111] transition hover:border-[#2E7D32] hover:text-[#2E7D32] lg:flex"
          >
            <Phone className="h-4 w-4" />
            (469) 321-9413
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2E7D32]"
          >
            Get Free Estimate
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
