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
      <div className="mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
          aria-label="Ubeda Shade Co. home"
        >
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full">
            <img
              src="/company-images/icon.png"
              alt="Ubeda Shade Co. icon"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="leading-none">
            <h1 className="text-3xl font-extrabold uppercase tracking-tight text-[#111111]">
              UBEDA
            </h1>

            <p className="mt-1 text-sm font-bold uppercase tracking-[0.25em] text-yellow-500">
              SHADE CO.
            </p>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-8 text-sm font-medium text-[#3f3f3f] lg:flex"
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[#111111]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:(469)321-9413"
            className="hidden items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-[#111111] transition hover:border-[#2E7D32] hover:text-[#2E7D32] xl:flex"
          >
            <Phone className="h-4 w-4" />
            (469) 321-9413
          </a>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-[#111111] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2E7D32] sm:inline-flex"
          >
            Get Free Estimate
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
