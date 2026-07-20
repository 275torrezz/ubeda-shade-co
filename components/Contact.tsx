"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  address: "",
  windows: "",
  preferredMaterial: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b2306c86-d29e-4325-bc9a-3fd2b4729c2c",
          ...form,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setForm(INITIAL_FORM);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="rounded-[40px] border border-black/5 bg-[#f7f7f2] p-8 shadow-[0_28px_80px_-42px_rgba(0,0,0,0.24)] sm:p-12 lg:p-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2E7D32]">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
              Let’s create a more comfortable, energy-efficient home.
            </h2>
          </div>

          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E7D32]"
          >
            Back to top
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[24px] border border-black/5 bg-white p-6 shadow-[0_16px_44px_-28px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-1">
            <Phone className="h-5 w-5 text-[#2E7D32]" />
            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[#8c8c8c]">
              Phone
            </p>
            <a
              href="tel:(469)321-9413"
              className="mt-2 block text-lg font-semibold text-[#111111]"
            >
              (469) 321-9413
            </a>
          </div>

          <div className="rounded-[24px] border border-black/5 bg-white p-6 shadow-[0_16px_44px_-28px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-1">
            <Mail className="h-5 w-5 text-[#2E7D32]" />
            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[#8c8c8c]">
              Email
            </p>
            <p className="mt-2 text-lg font-semibold text-[#111111]">
              ubedashadeco@gmail.com
            </p>
          </div>

          <div className="rounded-[24px] border border-black/5 bg-white p-6 shadow-[0_16px_44px_-28px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-1">
            <MapPin className="h-5 w-5 text-[#2E7D32]" />
            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[#8c8c8c]">
              Service Area
            </p>
            <p className="mt-2 text-lg font-semibold text-[#111111]">
              Dallas-Fort Worth & surrounding communities
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-[32px] border border-black/5 bg-white p-6 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.2)] sm:p-8 lg:p-10">
          <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="access_key"
              value="b2306c86-d29e-4325-bc9a-3fd2b4729c2c"
            />

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#111111]">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-4 py-3 text-[#111111] outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#111111]">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-4 py-3 text-[#111111] outline-none"
                placeholder="(469) 555-0123"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#111111]">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-4 py-3 text-[#111111] outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#111111]">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-4 py-3 text-[#111111] outline-none"
                placeholder="Your property address"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#111111]">
                How many windows?
              </label>
              <input
                type="number"
                name="windows"
                value={form.windows}
                onChange={handleChange}
                className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-4 py-3 text-[#111111] outline-none"
                placeholder="e.g. 8"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#111111]">
                Preferred Screen Material
              </label>
              <select
                name="preferredMaterial"
                value={form.preferredMaterial}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-4 py-3 text-[#111111] outline-none"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="SunTex 80">SunTex 80</option>
                <option value="SunTex 90">SunTex 90</option>
                <option value="Not Sure (Recommend the best option)">
                  Not Sure (Recommend the best option)
                </option>
              </select>
              <p className="mt-2 text-sm leading-6 text-[#6b6b6b]">
                SunTex 80 offers more natural light with excellent heat reduction. SunTex 90 provides maximum heat blocking and additional daytime privacy.
              </p>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-[#111111]">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="min-h-[140px] w-full rounded-2xl border border-black/10 bg-[#f7f7f2] px-4 py-3 text-[#111111] outline-none"
                placeholder="Tell us about your project, goals, and preferred timeline."
              />
            </div>

            <div className="md:col-span-2">
              <button
                className="premium-button inline-flex items-center justify-center gap-2 rounded-full bg-[#2E7D32] px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-[#256b28]"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Request My Free Estimate"}
                <ArrowRight className="h-4 w-4" />
              </button>
              {status === "success" && (
                <p className="text-sm text-[#2E7D32]">Thanks! Your request has been received. We’ll be in touch soon.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600">Something went wrong. Please call us directly at (469) 321-9413.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

