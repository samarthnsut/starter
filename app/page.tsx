import Carousel from "@/components/Carousel";
import TypewriterText from "@/components/TypewriterText";
import { homeQuestions, homeStats } from "@/lib/data";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-slate-50 py-16 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:py-24">
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl dark:bg-brand-900/20" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-brand-100/50 blur-3xl dark:bg-brand-950/30" />

        <div className="section-container relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-in-up">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-500">
                Techlist Solutions
              </p>
              <h1 className="text-3xl font-bold leading-tight text-slate-900 dark:text-slate-50 sm:text-4xl lg:text-5xl">
                A platform that takes you from
                <br />
                <span className="text-brand-500">
                  <TypewriterText text=' being "sort-of-ready" to being "Recruitment Ready"' />
                </span>
              </h1>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Image
                src="/assets/images/b1.png"
                alt="Career readiness illustration"
                width={560}
                height={480}
                className="w-full max-w-lg object-contain drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <div className="section-container">
        <hr className="border-brand-200 dark:border-slate-800" />
      </div>

      <Carousel
        items={homeStats}
        variant="stats"
        quote={`"Training alone can improve performance by 22%, while training accompanied by coaching can improve performance by 88%." – Harvard Business Review`}
      />

      <div className="section-container">
        <hr className="border-brand-200 dark:border-slate-800" />
      </div>

      <Carousel
        items={homeQuestions}
        variant="questions"
        footerText="We are sure that these thoughts must have crossed your mind one time or the other. If yes, you need a clarity on different career options and a hand holding for landing on to your dream job"
      />
    </>
  );
}
