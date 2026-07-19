import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="rounded-[40px] border border-black/5 bg-[#f7f7f2] p-8 shadow-[0_28px_80px_-42px_rgba(0,0,0,0.24)] sm:p-12 lg:p-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2E7D32]">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
              Let’s create a more comfortable, energy-efficient home.
            </h2>
          </div>
          <a href="#home" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E7D32]">
            Back to top
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[24px] border border-black/5 bg-white p-6 shadow-[0_16px_44px_-28px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-1">
            <Phone className="h-5 w-5 text-[#2E7D32]" />
            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[#8c8c8c]">Phone</p>
            <a href="tel:(469)321-9413" className="mt-2 block text-lg font-semibold text-[#111111]">(469) 321-9413</a>
          </div>
          <div className="rounded-[24px] border border-black/5 bg-white p-6 shadow-[0_16px_44px_-28px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-1">
            <Mail className="h-5 w-5 text-[#2E7D32]" />
            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[#8c8c8c]">Email</p>
            <a href="mailto:ubedashadeco@gmail.com" className="mt-2 block text-lg font-semibold text-[#111111]">ubedashadeco@gmail.com</a>
          </div>
          <div className="rounded-[24px] border border-black/5 bg-white p-6 shadow-[0_16px_44px_-28px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-1">
            <MapPin className="h-5 w-5 text-[#2E7D32]" />
            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[#8c8c8c]">Service Area</p>
            <p className="mt-2 text-lg font-semibold text-[#111111]">Dallas-Fort Worth & surrounding communities</p>
          </div>
        </div>

        <div className="mt-10 rounded-[32px] border border-black/5 bg-white p-6 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.2)] sm:p-8 lg:p-10">
          <form className="grid gap-4 md:grid-cols-2" action="mailto:ubedashadeco@gmail.com" method="post" encType="text/plain">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#111111]">Name</label>
              <input className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-4 py-3 text-[#111111] outline-none ring-0" placeholder="Your name" aria-label="Name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#111111]">Phone Number</label>
              <input className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-4 py-3 text-[#111111] outline-none ring-0" placeholder="(469) 555-0123" aria-label="Phone Number" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#111111]">Email</label>
              <input className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-4 py-3 text-[#111111] outline-none ring-0" placeholder="you@example.com" aria-label="Email" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#111111]">Address</label>
              <input className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-4 py-3 text-[#111111] outline-none ring-0" placeholder="Your property address" aria-label="Address" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#111111]">Number of Windows</label>
              <input className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-4 py-3 text-[#111111] outline-none ring-0" placeholder="e.g. 8" aria-label="Number of Windows" />
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-[#111111]">Message</label>
              <textarea className="min-h-[140px] w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-4 py-3 text-[#111111] outline-none ring-0" placeholder="Tell us about your project, goals, and preferred timeline." aria-label="Message" />
            </div>
            <div className="md:col-span-2">
              <button className="premium-button inline-flex items-center justify-center gap-2 rounded-full bg-[#2E7D32] px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-[#256b28]" type="submit">
                Request My Free Estimate
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
