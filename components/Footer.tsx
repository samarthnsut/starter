import { navLinks, siteConfig } from "@/lib/data";
import {
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const quickLinks = navLinks.filter((link) => link.href !== "/media");

  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="section-container py-16">
        <div className="card-surface mb-12 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 p-8 text-center text-white shadow-xl sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Do you want to our best popular online courses
          </h2>
          <Link href="/about" className="btn-primary mt-6 bg-white text-brand-600 hover:bg-brand-50">
            Get Started
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              About
            </h3>
            <p className="leading-relaxed text-slate-600 dark:text-slate-300">
              Techlist Solutions LLP is dedicated to improving agriculture, rural
              development, and food processing through expertise and industry
              connections. We are also using AI and machine learning to revolutionize
              the food quality testing industry. Our team of experts is leading the
              way in bringing needed intervention to these vital areas.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Facebook, href: "#facebook", label: "Facebook" },
                { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
                { icon: Twitter, href: "#twitter", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Youtube, href: "#github", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="rounded-full border border-slate-200 p-2.5 text-slate-600 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-500 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-brand-950"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              Quick links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-slate-600 transition hover:text-brand-500 dark:text-slate-300"
                  >
                    <ChevronRight className="h-4 w-4 text-brand-500" />
                    {link.label.replace(" Us", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              Contact
            </h3>
            <ul className="space-y-4 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-brand-500" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition hover:text-brand-500"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-brand-500" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="transition hover:text-brand-500"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-500" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <p>
          @2020 Online Study. All rights reserved. Design by{" "}
          <a
            href="https://w3layouts.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-500 hover:underline"
          >
            W3Layouts
          </a>
        </p>
      </div>
    </footer>
  );
}
