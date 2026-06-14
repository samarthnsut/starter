"use client";

import { navLinks } from "@/lib/data";
import { Menu, Moon, Search, Sun, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored === "dark" || (!stored && prefersDark);
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90"
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex h-20 items-center justify-between gap-4">
            <Link href="/" className="flex shrink-0 items-center">
              <Image
                src="/assets/images/Logo.jpg"
                alt="Techlist Solutions"
                width={180}
                height={50}
                className="h-10 w-auto object-contain sm:h-12"
                priority
              />
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      active
                        ? "bg-brand-500 text-white"
                        : "text-slate-700 hover:bg-slate-100 hover:text-brand-600 dark:text-slate-200 dark:hover:bg-slate-800"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="btn-primary ml-2 !px-4 !py-2"
                aria-label="Open search"
              >
                <Search className="h-4 w-4" />
                Search
              </button>

              <button
                type="button"
                onClick={toggleTheme}
                className="ml-2 rounded-full border border-slate-200 p-2.5 text-slate-600 transition hover:border-brand-300 hover:text-brand-500 dark:border-slate-700 dark:text-slate-300"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            </nav>

            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={toggleTheme}
                className="rounded-full border border-slate-200 p-2 text-slate-600 dark:border-slate-700 dark:text-slate-300"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                className="rounded-full border border-slate-200 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-200"
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-medium ${
                      active
                        ? "bg-brand-500 text-white"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  setSearchOpen(true);
                }}
                className="btn-primary mt-2 justify-center"
              >
                <Search className="h-4 w-4" />
                Search
              </button>
            </div>
          </div>
        )}
      </header>

      {searchOpen && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center bg-slate-950/70 px-4 pt-24 backdrop-blur-sm">
          <div className="relative w-full max-w-xl rounded-2xl bg-slate-900 p-8 shadow-2xl">
            <h2 className="mb-6 text-center text-xl font-semibold text-white">
              Search Here Your Online Course
            </h2>
            <form
              action="#"
              className="space-y-4"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3">
                <Search className="h-5 w-5 text-slate-400" />
                <input
                  type="search"
                  placeholder="Enter Keyword"
                  className="w-full bg-transparent text-white outline-none placeholder:text-slate-400"
                  autoFocus
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                Search
              </button>
            </form>
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="absolute right-6 top-6 rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white"
              aria-label="Close search"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
