"use client";

import { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

export function CTA() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    <section className="mx-auto max-w-7xl px-6 py-28 sm:py-32 lg:px-8">
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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="b2306c86-d29e-4325-bc9a-3fd2b4729c2c" />
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50"
                  placeholder="Name"
                  aria-label="Name"
                  required
                />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50"
                  placeholder="Phone"
                  aria-label="Phone"
                  required
                />
              </div>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50"
                placeholder="Email"
                aria-label="Email"
                required
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="min-h-[140px] w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/50"
                placeholder="Tell us about your project"
                aria-label="Project details"
                required
              />
              <button
                className="premium-button inline-flex items-center justify-center gap-2 rounded-full bg-[#2E7D32] px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#256b28]"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Request Your Free Estimate"}
                <ArrowRight className="h-4 w-4" />
              </button>
              {status === "success" && (
                <p className="text-sm text-[#8be28f]">Thanks! Your request has been received. We’ll be in touch soon.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-300">Something went wrong. Please call us directly at (469) 321-9413.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
