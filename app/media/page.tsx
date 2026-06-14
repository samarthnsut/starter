import { mediaStories } from "@/lib/data";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media",
};

export default function MediaPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-slate-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:py-28">
        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-brand-200/30 blur-3xl dark:bg-brand-900/20" />
        <div className="absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-brand-100/40 blur-3xl dark:bg-brand-950/20" />
        <div className="section-container relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-500">Our Stories</p>
            <h1 className="text-4xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-5xl">Media & Resources</h1>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-slate-950">
        <div className="section-container">
          <div className="space-y-20">
            {mediaStories.map((story, index) => (
              <div
                key={index}
                className={`grid items-start gap-10 lg:grid-cols-12 ${
                  story.reverse ? "" : ""
                }`}
              >
                <div
                  className={`space-y-4 lg:col-span-5 ${
                    story.reverse ? "lg:order-2" : ""
                  }`}
                >
                  {story.images.map((image) => (
                    <Image
                      key={image.src}
                      src={image.src}
                      alt=""
                      width={600}
                      height={400}
                      className={image.className}
                    />
                  ))}
                </div>

                <div
                  className={`lg:col-span-7 ${
                    story.reverse ? "lg:order-1" : ""
                  }`}
                >
                  {story.content.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="mb-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {story.inlineImage && (
                    <Image
                      src={story.inlineImage.src}
                      alt=""
                      width={600}
                      height={400}
                      className={story.inlineImage.className}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
