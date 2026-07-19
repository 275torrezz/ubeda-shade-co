import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="rounded-[40px] bg-[#111111] p-8 text-white shadow-[0_45px_110px_-40px_rgba(0,0,0,0.7)] sm:p-12 lg:p-16">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8be28f]">
              Ready to get started?
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Discover how much cooler and more comfortable your home can feel.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Schedule your free estimate and let’s create a custom shading solution that improves comfort, lowers heat, and elevates your home.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2">
                <Phone className="h-4 w-4 text-[#8be28f]" />
                (469) 321-9413
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2">
                <Mail className="h-4 w-4 text-[#8be28f]" />
                ubedashadeco@gmail.com
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2">
                <MapPin className="h-4 w-4 text-[#8be28f]" />
                Dallas-Fort Worth
              </div>
            </div>
          </div>

          <div className="rounded-[30px] bg-white/10 p-8 backdrop-blur">
            <form className="space-y-4" action="mailto:ubedashadeco@gmail.com" method="post" encType="text/plain">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50" placeholder="Name" aria-label="Name" />
                <input className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50" placeholder="Phone" aria-label="Phone" />
              </div>
              <input className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50" placeholder="Email" aria-label="Email" />
              <textarea className="min-h-[140px] w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50" placeholder="Tell us about your project" aria-label="Project details" />
              <button className="premium-button inline-flex items-center justify-center gap-2 rounded-full bg-[#2E7D32] px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-[#256b28]" type="submit">
                Request Your Free Estimate
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
