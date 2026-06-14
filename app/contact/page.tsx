import { siteConfig } from "@/lib/data";
import { HelpCircle, Laptop, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-slate-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:py-28">
        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-brand-200/30 blur-3xl dark:bg-brand-900/20" />
        <div className="absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-brand-100/40 blur-3xl dark:bg-brand-950/20" />
        <div className="section-container relative">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-500">Contact</p>
            <h1 className="text-4xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-5xl">Get In Touch</h1>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-slate-950">
        <div className="section-container">
          <div className="mx-auto max-w-2xl">
            <div className="card-surface p-8 sm:p-10">
              <h2 className="mb-6 text-xl font-semibold text-slate-900 dark:text-white">
                Send us a message
              </h2>
              <form
                action={siteConfig.contactFormAction}
                method="POST"
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:ring-brand-900"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:ring-brand-900"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:ring-brand-900"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:ring-brand-900"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-slate-900 sm:py-20">
        <div className="section-container">
          <h2 className="section-heading mb-12 text-center">Help & Support</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Laptop,
                title: "Online Support",
                text: "Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.",
                action: "Call Now",
                href: "#call",
              },
              {
                icon: MessageCircle,
                title: "Live Chat 24/7",
                text: "Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.",
                action: "Let's Chat",
                href: "#chat",
              },
              {
                icon: HelpCircle,
                title: "Any Questions",
                text: "Ut enim ad minima veniam, quis nostrum ullam corporis suscipit laboriosam.",
                action: "Ask Now",
                href: "#ask",
              },
            ].map(({ icon: Icon, title, text, action, href }) => (
              <div
                key={title}
                className="card-surface p-8 text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-500 dark:bg-brand-950/40">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold uppercase tracking-wide text-slate-900 dark:text-white">
                  {title}
                </h3>
                <p className="mt-3 text-slate-600 dark:text-slate-300">{text}</p>
                <a href={href} className="btn-outline mt-6 inline-flex">
                  {action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
