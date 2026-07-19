import Link from "next/link";
import { Globe2, MessageCircle, Send, Phone, Mail } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#111111] py-16 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.7fr_0.7fr] lg:px-8">

        <div>
          <Link
            href="#home"
            className="flex items-center gap-4"
            aria-label="Ubeda Shade Co. home"
          >
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full">
              <img
                src="/company-images/footer-icon.png"
                alt="Ubeda Shade Co."
                className="h-full w-full object-contain"
              />
            </div>

            <div className="leading-none">
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white">
                UBEDA
              </h2>

              <p className="mt-1 text-sm font-bold uppercase tracking-[0.25em] text-yellow-500">
                SHADE CO.
              </p>
            </div>
          </Link>

          <p className="mt-6 max-w-md text-base leading-7 text-white/70">
            Custom solar screen solutions that improve comfort, lower heat, and elevate the look of your property.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
            Quick Links
          </h3>

          <ul className="mt-6 space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
            Contact
          </h3>

          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#8be28f]" />
              <a href="tel:(469)321-9413" className="transition hover:text-white">
                (469) 321-9413
              </a>
            </li>

            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#8be28f]" />
              <a
                href="mailto:ubedashadeco@gmail.com"
                className="transition hover:text-white"
              >
                ubedashadeco@gmail.com
              </a>
            </li>
          </ul>

          <div className="mt-8 flex gap-3">
            <a
              href="#"
              aria-label="Website"
              className="rounded-full border border-white/10 p-2 transition hover:border-[#2E7D32] hover:text-white"
            >
              <Globe2 className="h-4 w-4" />
            </a>

            <a
              href="#"
              aria-label="Message"
              className="rounded-full border border-white/10 p-2 transition hover:border-[#2E7D32] hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
            </a>

            <a
              href="#"
              aria-label="Send message"
              className="rounded-full border border-white/10 p-2 transition hover:border-[#2E7D32] hover:text-white"
            >
              <Send className="h-4 w-4" />
            </a>
          </div>
        </div>

      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-6 pt-6 text-sm text-white/50 lg:px-8">
        © 2026 Ubeda Shade Co. All rights reserved.
      </div>
    </footer>
  );
}
