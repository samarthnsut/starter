"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type CarouselItem = {
  image?: string;
  value?: string;
  text: string;
};

type CarouselProps = {
  items: CarouselItem[];
  variant?: "stats" | "questions";
  quote?: string;
  footerText?: string;
};

export default function Carousel({
  items,
  variant = "stats",
  quote,
  footerText,
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [items.length, isPaused]);

  const goTo = (index: number) => {
    setActiveIndex((index + items.length) % items.length);
  };

  return (
    <section
      className="py-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="section-container">
        {quote && (
          <blockquote className="mx-auto mb-10 max-w-4xl text-center text-lg italic leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
            {quote}
          </blockquote>
        )}

        <div className="relative mx-auto max-w-3xl">
          <div className="card-surface overflow-hidden px-6 py-10 sm:px-10">
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center transition-all duration-500 ${
                  index === activeIndex
                    ? "relative opacity-100"
                    : "pointer-events-none absolute inset-0 opacity-0"
                }`}
                aria-hidden={index !== activeIndex}
              >
                {item.image && (
                  <div
                    className={`mb-6 flex items-center justify-center ${
                      variant === "questions" ? "h-28 w-28" : "h-24 w-24"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt=""
                      width={variant === "questions" ? 112 : 96}
                      height={variant === "questions" ? 112 : 96}
                      className={`object-contain ${
                        variant === "questions" ? "rounded-full" : ""
                      }`}
                    />
                  </div>
                )}

                {item.value && (
                  <p className="mb-4 text-5xl font-bold text-brand-500">
                    {item.value}
                  </p>
                )}

                <p className="max-w-xl text-lg leading-relaxed text-slate-700 dark:text-slate-200">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            className="absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2 shadow-md transition hover:border-brand-300 hover:text-brand-500 dark:border-slate-700 dark:bg-slate-900 sm:-translate-x-5"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 rounded-full border border-slate-200 bg-white p-2 shadow-md transition hover:border-brand-300 hover:text-brand-500 dark:border-slate-700 dark:bg-slate-900 sm:translate-x-5"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-brand-500"
                    : "w-2.5 bg-slate-300 dark:bg-slate-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {footerText && (
          <p className="mx-auto mt-10 max-w-4xl text-center text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {footerText}
          </p>
        )}
      </div>
    </section>
  );
}
